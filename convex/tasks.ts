import { getAuthUserId } from '@convex-dev/auth/server'
import { v } from 'convex/values'
import { getDuration } from '../lib/utils'
import { mutation, query } from './_generated/server'

export const collect = query({
  args: {
    includeActiveSessionTasks: v.boolean(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      throw new Error('Unauthenticated call to mutation')
    }

    const tasks = await ctx.db.query('tasks')
      .filter(q => q.eq(q.field('userId'), userId))
      .filter(q => q.eq(q.field('isActive'), false))
      .collect()

    if (args.includeActiveSessionTasks) {
      const activeTask = await ctx.db.query('tasks')
        .filter(q => q.eq(q.field('userId'), userId))
        .filter(q => q.eq(q.field('isActive'), true))
        .first()

      if (activeTask) {
        tasks.push(activeTask)
      }
    }

    return tasks
  },
})

export const startTask = mutation({
  args: {
    aet: v.number(),
    description: v.string(),
    id: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      throw new Error('Unauthenticated call to mutation')
    }

    const currentSession = await ctx.db.query('sessions')
      .filter(q => q.eq(q.field('userId'), userId))
      .filter(q => q.eq(q.field('isActive'), true))
      .first()

    if (!currentSession) {
      throw new Error('No active session')
    }

    const task = await ctx.db.insert('tasks', {
      aet: args.aet,
      description: args.description,
      id: args.id,
      isActive: true,
      start: Date.now(),
      userId,
      sessionId: currentSession._id,
    })

    return task
  },
})

export const endTask = mutation({
  args: {
  },
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      throw new Error('Unauthenticated call to mutation')
    }

    const currentTask = await ctx.db.query('tasks')
      .filter(q => q.eq(q.field('userId'), userId))
      .filter(q => q.eq(q.field('isActive'), true))
      .first()

    if (!currentTask) {
      throw new Error('No active task')
    }

    const task = await ctx.db.patch(currentTask._id, {
      isActive: false,
      end: Date.now(),
      duration: getDuration(currentTask.start, Date.now()),
    })

    return task
  },
})

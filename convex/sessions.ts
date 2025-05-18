import { getAuthUserId } from '@convex-dev/auth/server'
import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const collect = query({
  args: {
    includeSessionTasks: v.boolean(),
    includeActiveSession: v.boolean(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      throw new Error('Unauthenticated call to mutation')
    }

    const allSessions = await ctx.db.query('sessions')
      .filter(q => q.eq(q.field('userId'), userId))
      .filter(q => q.eq(q.field('isActive'), false))
      .collect()

    return allSessions
  },
})

export const pickCurrentSession = query({
  args: {
    includeSessionTasks: v.boolean(),
  },
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      throw new Error('Unauthenticated call to mutation')
    }

    const currentSession = await ctx.db.query('sessions')
      .filter(q => q.eq(q.field('userId'), userId))
      .filter(q => q.eq(q.field('isActive'), true))
      .first()

    return currentSession
  },
})

export const startSession = mutation({
  args: {
  },
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      throw new Error('Unauthenticated call to mutation')
    }

    const session = await ctx.db.insert('sessions', {
      userId,
      isActive: true,
      id: crypto.randomUUID(),
      start: Date.now(),
    })

    return session
  },
})

export const endSession = mutation({
  args: {
  },
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      throw new Error('Unauthenticated call to mutation')
    }

    const session = await ctx.db.query('sessions')
      .filter(q => q.eq(q.field('userId'), userId))
      .filter(q => q.eq(q.field('isActive'), true))
      .first()

    if (session === null) {
      throw new Error('No active session found')
    }

    await ctx.db.patch(session._id, {
      end: Date.now(),
      isActive: false,
    })

    return session
  },
})

import { authTables } from '@convex-dev/auth/server'
import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

const sessionSchema = defineTable({
  id: v.string(),
  userId: v.id('users'),
  isActive: v.boolean(),
  start: v.number(),
  end: v.optional(v.number()),
})

const taskSchema = defineTable({
  id: v.string(),
  userId: v.id('users'),
  sessionId: v.id('sessions'),
  isActive: v.boolean(),
  start: v.number(),
  end: v.optional(v.number()),
  duration: v.optional(v.number()),
  aet: v.number(),
  description: v.string(),
})

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
// The schema provides more precise TypeScript types.
export default defineSchema({
  ...authTables,
  sessions: sessionSchema,
  tasks: taskSchema,
})

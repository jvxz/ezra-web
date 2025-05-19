'use client'
import type { Id } from '@/convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'

function DevTools() {
  const currentSession = useQuery(api.sessions.pickCurrentSession, {
    includeSessionTasks: false,
  })

  const handleStartSession = useMutation(api.sessions.startSession).withOptimisticUpdate((local) => {
    const allSessions = local.getQuery(api.sessions.collect, {
      includeActiveSession: true,
    })

    if (!allSessions) return

    local.setQuery(api.sessions.collect, {
      includeActiveSession: true,
    }, [
      ...allSessions,
      {
        _creationTime: Date.now(),
        _id: 'new' as Id<'sessions'>,
        id: 'new',
        userId: 'new' as Id<'users'>,
        isActive: true,
        start: Date.now(),
      },
    ])
  })

  const handleEndSession = useMutation(api.sessions.endSession).withOptimisticUpdate((local) => {
    const allSessions = local.getQuery(api.sessions.collect, {
      includeActiveSession: true,
    })

    if (!allSessions) return

    const activeSession = allSessions.find(session => session.isActive)
    if (!activeSession) return

    local.setQuery(api.sessions.collect, {
      includeActiveSession: true,
    }, [
      ...allSessions.filter(s => s._id !== activeSession._id),
      {
        ...activeSession,
        isActive: false,
        // end: Date.now(),
      },
    ])
  })

  return (
    <div className="fixed right-12 bottom-12">
      <div className="flex items-center gap-2">
        <Button
          disabled={currentSession?.isActive}
          variant="outline"
          onClick={() => handleStartSession()}
        >start session
        </Button>
        <Button
          disabled={!currentSession?.isActive}
          variant="outline"
          onClick={() => handleEndSession()}
        >end session
        </Button>
      </div>
    </div>
  )
}

export { DevTools }

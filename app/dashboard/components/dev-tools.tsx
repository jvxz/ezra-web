import { convexAuthNextjsToken } from '@convex-dev/auth/nextjs/server'
import { fetchMutation } from 'convex/nextjs'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'

async function DevTools() {
  const token = await convexAuthNextjsToken()
  return (
    <div className="fixed right-12 bottom-12">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={async () => {
            'use server'
            void fetchMutation(api.sessions.startSession, {
            }, {
              token,
            })
          }}
        >start session
        </Button>
      </div>
    </div>
  )
}

export { DevTools }

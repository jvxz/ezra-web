'use client'
import { useQuery } from 'convex/react'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { api } from '@/convex/_generated/api'

function SessionTable() {
  const sessions = useQuery(api.sessions.collect, {
    includeActiveSession: true,
  })

  return (
    <Card className="h-full p-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Session</TableHead>
            <TableHead>Start</TableHead>
            <TableHead>End</TableHead>
            <TableHead>Total Duration</TableHead>
            <TableHead>Total AET</TableHead>
            <TableHead>Total Efficiency</TableHead>
            <TableHead className="text-right">Total Earnings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions?.map(session => (
            <TableRow
              className="data-[active=true]:bg-green-500"
              data-active={session.isActive}
              key={session._id}
            >
              <TableCell>{new Date(session.start).toLocaleString()}</TableCell>
              <TableCell>description</TableCell>
              <TableCell>{new Date(session.start).toLocaleString()}</TableCell>
              <TableCell>{new Date(session.end ?? 0).toLocaleString()}</TableCell>
              <TableCell>tbd</TableCell>
              <TableCell>tbd</TableCell>
              <TableCell>tbd</TableCell>
              <TableCell className="text-right">tbd</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export { SessionTable }

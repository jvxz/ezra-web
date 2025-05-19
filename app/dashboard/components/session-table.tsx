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
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions?.map(session => (
            <TableRow
              className="data-[active=true]:bg-green-500"
              data-active={session.isActive}
              key={session._id}
            >
              <TableCell>{session.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export { SessionTable }

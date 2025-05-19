'use client'
import { useQuery } from 'convex/react'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { api } from '@/convex/_generated/api'

function TaskTable() {
  const tasks = useQuery(api.tasks.collect, {
    includeActiveSessionTasks: true,
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
          {tasks?.map(task => (
            <TableRow
              className="data-[active=true]:bg-green-500"
              data-active={task.isActive}
              key={task._id}
            >
              <TableCell>{task.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export { TaskTable }

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
            <TableHead className="w-[100px]">Task</TableHead>
            <TableHead>Start</TableHead>
            <TableHead>End</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>AET</TableHead>
            <TableHead>Efficiency</TableHead>
            <TableHead className="text-right">Earnings</TableHead>
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
              <TableCell>{task.start}</TableCell>
              <TableCell>{task.end}</TableCell>
              <TableCell>{task.duration}</TableCell>
              <TableCell>{task.aet}</TableCell>
              <TableCell>tbd</TableCell>
              <TableCell className="text-right">tbd</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export { TaskTable }

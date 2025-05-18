import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

function DashboardContent() {
  return (
    <div className="flex w-full flex-1 gap-8">
      <section className="flex flex-1 gap-4 *:grow">
        <DashboardTable />
        <DashboardTable />
      </section>
      <section className="w-1/4 space-y-4">
        <DashboardInfoCard />
        <DashboardInfoCard />
        <DashboardInfoCard />
      </section>
    </div>
  )
}

function DashboardInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

function DashboardTable() {
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
          {Array.from({
            length: 100,
          }).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={i}>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export { DashboardContent }

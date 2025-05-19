import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DashboardTable } from './table'

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

export { DashboardContent }

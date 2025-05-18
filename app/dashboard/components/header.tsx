import { Button } from '@/components/ui/button'

function DashboardHeader() {
  return (
    <header className="flex w-full justify-between">
      <h1 className="text-3xl font-medium">Dashboard</h1>
      <div className="flex gap-4">
        <Button size="lg">
          Start session
        </Button>
      </div>
    </header>
  )
}

export { DashboardHeader }

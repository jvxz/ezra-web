import { DashboardContent } from './components/content'
import { DashboardHeader } from './components/header'

export default function Page() {
  return (
    <section className="flex flex-1 flex-col gap-8 p-8">
      <DashboardHeader />
      <DashboardContent />
    </section>
  )
}

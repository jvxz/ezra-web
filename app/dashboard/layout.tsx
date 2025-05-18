import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen">

      <aside className="bg-card h-full w-16 border-r">
        <div className="flex h-full flex-col gap-4 p-4">
          <Button
            variant="ghost"
            size="icon"
          >
            <svg className="iconify icon-[mingcute--home-7-line]"></svg>
          </Button>
          <Separator />
          <Button
            variant="ghost"
            size="icon"
          >
            <svg className="iconify icon-[mingcute--layout-11-line]"></svg>
          </Button>
        </div>
      </aside>
      {children}
    </main>
  )
}

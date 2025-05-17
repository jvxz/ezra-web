'use client'
import { useAuthActions } from '@convex-dev/auth/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function Page() {
  return (
    <div className="grid h-screen place-items-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center text-xl">Welcome back!</CardTitle>
        </CardHeader>
        <CardContent>
          <AuthForm />
        </CardContent>
      </Card>
    </div>
  )
}

function AuthForm() {
  const { signIn } = useAuthActions()

  const handleSignIn = async () => {
    void signIn('google')
  }

  return (
    <form className="space-y-5">
      <Button
        type="button"
        className="w-full"
        onClick={handleSignIn}
      >
        Sign in with Google
        <svg className="iconify icon-[logos--google-icon] size-4 shadow-lg" />
      </Button>
      <div className="flex items-center gap-4 select-none *:shrink-0">
        <Separator className="flex-1" />
        <p className="text-muted-foreground text-sm">or</p>
        <Separator className="flex-1" />
      </div>
      <div className="space-y-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="alice@example.com"
        />
      </div>
      <div className="space-y-3">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="********"
        />
      </div>
      <div className="flex gap-2 *:grow">
        <Button
          type="button"
          variant="outline"
        >Sign up
        </Button>
        <Button type="submit">Login</Button>
      </div>
    </form>
  )
}

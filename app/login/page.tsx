"use client"

import { useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Building2 } from "lucide-react"

function LoginForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const role = searchParams.get("role") || "buyer"
  const [activeTab, setActiveTab] = useState(role)

  const handleLogin = (userRole: string) => {
    if (userRole === "buyer") {
      router.push("/buyer/dashboard")
    } else {
      router.push("/supplier/dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <FileText className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to ProcureAI</CardTitle>
          <CardDescription>
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="buyer">
                <Building2 className="h-4 w-4 mr-2" />
                Buyer/Admin
              </TabsTrigger>
              <TabsTrigger value="supplier">
                <FileText className="h-4 w-4 mr-2" />
                Supplier
              </TabsTrigger>
            </TabsList>
            <TabsContent value="buyer" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="buyer-email">Email</Label>
                <Input id="buyer-email" type="email" placeholder="buyer@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyer-password">Password</Label>
                <Input id="buyer-password" type="password" placeholder="••••••••" />
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleLogin("buyer")}
              >
                Login as Buyer
              </Button>
            </TabsContent>
            <TabsContent value="supplier" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="supplier-email">Email</Label>
                <Input id="supplier-email" type="email" placeholder="supplier@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplier-password">Password</Label>
                <Input id="supplier-password" type="password" placeholder="••••••••" />
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleLogin("supplier")}
              >
                Login as Supplier
              </Button>
            </TabsContent>
          </Tabs>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <Link href="/" className="underline">
              Back to home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginForm />
    </Suspense>
  )
}


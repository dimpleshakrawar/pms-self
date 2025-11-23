import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, TrendingUp, MessageSquare, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">ProcureAI</span>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            AI-Powered Procurement & Bidding System
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Streamline your procurement process with intelligent document analysis, 
            automated bid comparison, and AI-powered insights.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/login?role=buyer">
              <Button size="lg" className="text-lg px-8">
                I'm a Buyer
              </Button>
            </Link>
            <Link href="/login?role=supplier">
              <Button size="lg" variant="outline" className="text-lg px-8">
                I'm a Supplier
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <FileText className="h-10 w-10 text-primary mb-2" />
              <CardTitle>AI Document Summarizer</CardTitle>
              <CardDescription>
                Automatically summarize tender documents and extract key information
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary mb-2" />
              <CardTitle>AI Comparison Engine</CardTitle>
              <CardDescription>
                Intelligent bid comparison with L1 identification and risk analysis
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-primary mb-2" />
              <CardTitle>AI Q&A Chatbot</CardTitle>
              <CardDescription>
                Get instant answers about tenders using AI-powered chatbot
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Auto Field Extraction</CardTitle>
              <CardDescription>
                Automatically extract dates, EMD, eligibility criteria from documents
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Risk Detection</CardTitle>
              <CardDescription>
                Identify abnormal pricing and missing compliance documents
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Workflow Management</CardTitle>
              <CardDescription>
                Complete audit logs and workflow history tracking
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2024 ProcureAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

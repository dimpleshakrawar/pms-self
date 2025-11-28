import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, TrendingUp, MessageSquare, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">ProcureAI</span>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm">Home</Link>
            <Link href="/buyer/tenders" className="text-gray-700 hover:text-gray-900 text-sm">Features</Link>
            <Link href="/buyer/comparisons" className="text-gray-700 hover:text-gray-900 text-sm">Pricing</Link>
            <Link href="/login" className="text-gray-700 hover:text-gray-900 text-sm">Support</Link>
            <Link href="/login">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact us</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm text-gray-600 mb-2">AI-Powered Procurement System</h2>
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                Unsurpassed efficiency. Infinite possibilities.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Streamline your procurement process with intelligent document analysis, automated bid comparison, and AI-powered insights.
              </p>
              <div className="flex gap-4">
                <Link href="/login?role=buyer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Buy Now
                  </Button>
                </Link>
                <Link href="/login?role=supplier">
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                    Customize
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-8">
                <div className="bg-white rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Active Tenders</span>
                      <span className="text-2xl font-bold text-gray-900">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Total Bids</span>
                      <span className="text-2xl font-bold text-gray-900">48</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Success Rate</span>
                      <span className="text-2xl font-bold text-primary">94%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">DOCUMENT ANALYSIS</h3>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">BATTERY LIFE UP TO 18 MONTHS</h3>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI ANALYZED</h3>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">SECURE UP TO 50M</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-gray-900">AI Document Summarizer</CardTitle>
                <CardDescription className="text-gray-600">
                  Automatically summarize tender documents and extract key information
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                  <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-gray-900">AI Comparison Engine</CardTitle>
                <CardDescription className="text-gray-600">
                  Intelligent bid comparison with L1 identification and risk analysis
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                  <MessageSquare className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-gray-900">AI Q&A Chatbot</CardTitle>
                <CardDescription className="text-gray-600">
                  Get instant answers about tenders using AI-powered chatbot
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-gray-900">Auto Field Extraction</CardTitle>
                <CardDescription className="text-gray-600">
                  Automatically extract dates, EMD, eligibility criteria from documents
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-gray-900">Risk Detection</CardTitle>
                <CardDescription className="text-gray-600">
                  Identify abnormal pricing and missing compliance documents
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-gray-900">Workflow Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Complete audit logs and workflow history tracking
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Buy the products</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Store</li>
                <li>Delivery info</li>
                <li>Resellers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Partners</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Partner apps</li>
                <li>Affiliate Program</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Order status</li>
                <li>Customer support</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm">
            <p>© 2024 ProcureAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

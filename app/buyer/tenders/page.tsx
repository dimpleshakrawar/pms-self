"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Eye, BarChart3 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function TendersPage() {
  const router = useRouter()

  const tenders = [
    {
      id: "T001",
      title: "IT Infrastructure Upgrade",
      status: "active",
      bids: 8,
      deadline: "2024-02-15",
      created: "2024-01-15",
      l1Bidder: "TechCorp Solutions",
      amount: "₹2,500,000"
    },
    {
      id: "T002",
      title: "Office Supplies Procurement",
      status: "active",
      bids: 5,
      deadline: "2024-02-20",
      created: "2024-01-20",
      l1Bidder: "SupplyCo Ltd",
      amount: "₹450,000"
    },
    {
      id: "T003",
      title: "Security Services",
      status: "review",
      bids: 12,
      deadline: "2024-02-10",
      created: "2024-01-10",
      l1Bidder: "SecureGuard Inc",
      amount: "₹1,200,000"
    },
    {
      id: "T004",
      title: "Building Maintenance",
      status: "completed",
      bids: 6,
      deadline: "2024-01-30",
      created: "2024-01-01",
      l1Bidder: "MaintainPro Services",
      amount: "₹800,000"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/buyer/dashboard">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">All Tenders</CardTitle>
                <CardDescription>Manage and track all your tenders</CardDescription>
              </div>
              <Link href="/buyer/tenders/create">
                <Button>Create New Tender</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tenders..."
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-4">
              {tenders.map((tender) => (
                <div
                  key={tender.id}
                  className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-colors bg-white"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{tender.title}</h3>
                        <Badge 
                          variant={
                            tender.status === "active" ? "default" : 
                            tender.status === "review" ? "warning" : 
                            "secondary"
                          }
                        >
                          {tender.status}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                        <div>
                          <span className="font-medium">Tender ID:</span> {tender.id}
                        </div>
                        <div>
                          <span className="font-medium">Created:</span> {tender.created}
                        </div>
                        <div>
                          <span className="font-medium">Deadline:</span> {tender.deadline}
                        </div>
                        <div>
                          <span className="font-medium">Total Bids:</span> {tender.bids}
                        </div>
                        <div>
                          <span className="font-medium">L1 Bidder:</span>{" "}
                          <span className="text-green-600">{tender.l1Bidder}</span>
                        </div>
                        <div>
                          <span className="font-medium">L1 Amount:</span> {tender.amount}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/buyer/tenders/${tender.id}`)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/buyer/comparisons?tender=${tender.id}`)}
                      >
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Compare
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


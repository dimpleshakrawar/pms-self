"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  Search,
  LogOut,
  Upload
} from "lucide-react"

export default function SupplierDashboard() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const availableTenders = [
    {
      id: "T001",
      title: "IT Infrastructure Upgrade",
      category: "IT Services",
      deadline: "2024-02-15",
      emd: "₹50,000",
      bids: 8,
      status: "open"
    },
    {
      id: "T002",
      title: "Office Supplies Procurement",
      category: "Supplies",
      deadline: "2024-02-20",
      emd: "₹10,000",
      bids: 5,
      status: "open"
    },
    {
      id: "T003",
      title: "Security Services",
      category: "Services",
      deadline: "2024-02-10",
      emd: "₹25,000",
      bids: 12,
      status: "open"
    }
  ]

  const myBids = [
    {
      id: "B001",
      tenderId: "T001",
      tenderTitle: "IT Infrastructure Upgrade",
      amount: "₹2,450,000",
      status: "submitted",
      submittedDate: "2024-02-06"
    },
    {
      id: "B002",
      tenderId: "T002",
      tenderTitle: "Office Supplies Procurement",
      amount: "₹420,000",
      status: "draft",
      submittedDate: null
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ProcureAI - Supplier Dashboard</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="available" className="w-full">
          <TabsList>
            <TabsTrigger value="available">Available Tenders</TabsTrigger>
            <TabsTrigger value="my-bids">My Bids</TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Tenders</CardTitle>
                <CardDescription>
                  Browse and submit bids for open tenders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search tenders..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {availableTenders.map((tender) => (
                    <Card key={tender.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-lg">{tender.title}</CardTitle>
                              <Badge variant="default">{tender.status}</Badge>
                            </div>
                            <CardDescription>
                              <div className="flex flex-wrap gap-4 mt-2">
                                <span>Tender ID: {tender.id}</span>
                                <span>Category: {tender.category}</span>
                                <span>EMD: {tender.emd}</span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  Deadline: {tender.deadline}
                                </span>
                                <span>Bids: {tender.bids}</span>
                              </div>
                            </CardDescription>
                          </div>
                          <Button
                            onClick={() => router.push(`/supplier/tenders/${tender.id}/bid`)}
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Submit Bid
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-bids" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>My Bids</CardTitle>
                <CardDescription>
                  Track all your submitted and draft bids
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myBids.map((bid) => (
                    <div
                      key={bid.id}
                      className="border rounded-lg p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{bid.tenderTitle}</h3>
                            <Badge
                              variant={bid.status === "submitted" ? "default" : "secondary"}
                            >
                              {bid.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div>Tender ID: {bid.tenderId}</div>
                            <div>Bid Amount: <span className="font-semibold">{bid.amount}</span></div>
                            {bid.submittedDate && (
                              <div>Submitted: {bid.submittedDate}</div>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {bid.status === "draft" ? (
                            <Button
                              variant="outline"
                              onClick={() => router.push(`/supplier/tenders/${bid.tenderId}/bid`)}
                            >
                              Continue Editing
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


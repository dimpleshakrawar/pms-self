"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus,
  FileText,
  MessageSquare,
  LogOut,
  BarChart3
} from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function BuyerDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const stats = [
    {
      key: 1,
      label: "Active Tenders",
      value: 5,
    }, {
      key: 2,
      label: "Total Bids",
      value: 42,
    }, {
      key: 3,
      label: "Pending Reviews",
      value: 8,
    }, {
      key: 4,
      label: "Completed",
      value: 15,
    }]

  const recentTenders = [
    {
      id: "T001",
      title: "IT Infrastructure Upgrade",
      status: "active",
      bids: 8,
      deadline: "2024-02-15",
      l1Bidder: "TechCorp Solutions"
    },
    {
      id: "T002",
      title: "Office Supplies Procurement",
      status: "active",
      bids: 5,
      deadline: "2024-02-20",
      l1Bidder: "SupplyCo Ltd"
    },
    {
      id: "T003",
      title: "Security Services",
      status: "review",
      bids: 12,
      deadline: "2024-02-10",
      l1Bidder: "SecureGuard Inc"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">ProcureAI</span>
            <span className="text-lg text-gray-600 ml-4">Buyer Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100">
              <MessageSquare className="h-4 w-4 mr-2" />
              Chatbot
            </Button>
            <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="text-gray-700 hover:bg-gray-100">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {stats?.map((stats) => (
            <Card className="bg-[var(--light-blue-brand)]  border-0 rounded-xl">
              {/* <Card className="bg-linear-to-r from-[var(--purple-brand)] to-[var(--blue-brand)] border-0 rounded-xl"> */}
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-black">{stats.label}</CardTitle>
                <FileText className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[var(--purple-text-brand)]">{stats.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-between items-center">
            <TabsList className="rounded-full">
              <TabsTrigger value="overview" className={` ${activeTab == "overview" && "bg-linear-to-r from-[var(--purple-brand)] to-[var(--blue-brand)] !text-white rounded-full"} `}>Overview</TabsTrigger>
              <TabsTrigger value="tenders" className={` ${activeTab == "tenders" && "bg-linear-to-r from-[var(--purple-brand)] to-[var(--blue-brand)] !text-white rounded-full"} `}>My Tenders</TabsTrigger>
              <TabsTrigger value="comparisons" className={` ${activeTab == "comparisons" && "bg-linear-to-r from-[var(--purple-brand)] to-[var(--blue-brand)] !text-white rounded-full"} `} >AI Comparisons</TabsTrigger>
              <TabsTrigger value="audit" className={` ${activeTab == "audit" && "bg-linear-to-r from-[var(--purple-brand)] to-[var(--blue-brand)] !text-white rounded-full"} `}>Audit Logs</TabsTrigger>
            </TabsList>

            <Button onClick={() => router.push('/buyer/tenders/create')} size="lg" className="px-4 rounded-lg w-full md:w-auto bg-linear-to-r from-[var(--purple-brand)] to-[var(--blue-brand)] text-white">
              <Plus className="h-5 w-5" />
              Create New Tender
            </Button>
          </div>

          <TabsContent value="overview" className="mt-6">

            <h2 className="text-gray-900">Recent Tenders</h2>
            <h5 className="text-gray-600 mb-3">Your latest tender activities</h5>

            <div className="flex gap-6 justify-between">
              {recentTenders.map((tender) => (
                <div
                  key={tender.id}
                  className="w-1/3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer bg-white"
                  onClick={() => router.push(`/buyer/tenders/${tender.id}`)}
                >
                  <div className="flex-1 mb-10">
                    <Badge className="mb-2" variant={tender.status === "active" ? "default" : "secondary"}>
                      {tender.status}
                    </Badge>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{tender.title}</h3>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>ID: {tender.id}</p> <span>{tender.bids} bids</span>
                      <p> Deadline: {tender.deadline}</p>
                    </div>
                    {tender.l1Bidder && (
                      <div className="text-sm text-primary font-medium mt-1">
                        L1: {tender.l1Bidder}
                      </div>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tenders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All Tenders</CardTitle>
                <CardDescription>Manage all your tenders</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/buyer/tenders">
                  <Button variant="outline" className="w-full">
                    View All Tenders
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparisons" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Bid Comparisons</CardTitle>
                <CardDescription>AI-powered bid analysis and recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/buyer/comparisons">
                  <Button variant="outline" className="w-full">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View AI Comparisons
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audit" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Audit Logs</CardTitle>
                <CardDescription>Complete workflow history</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/buyer/audit">
                  <Button variant="outline" className="w-full">
                    View Audit Logs
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


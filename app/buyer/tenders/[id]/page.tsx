"use client"

import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, FileText, Calendar, DollarSign, Users, BarChart3 } from "lucide-react"

export default function TenderDetailPage() {
  const params = useParams()
  const router = useRouter()
  const tenderId = params.id as string

  // Mock data
  const tender = {
    id: tenderId,
    title: "IT Infrastructure Upgrade",
    description: "Comprehensive upgrade of IT infrastructure including servers, networking equipment, and security systems.",
    status: "active",
    category: "IT Services",
    deadline: "2024-02-15",
    created: "2024-01-15",
    emd: "₹50,000",
    totalBids: 8,
    aiSummary: "This tender requires upgrading existing IT infrastructure with modern servers, network switches, and security appliances. Key requirements include 24/7 support, 3-year warranty, and compliance with ISO 27001 standards.",
    extractedData: {
      submissionDeadline: "2024-02-15",
      emdAmount: "₹50,000",
      requiredDocuments: [
        "Company Registration Certificate",
        "GST Certificate",
        "Financial Statements (Last 3 years)",
        "ISO 27001 Certification",
        "Technical Proposal",
        "Commercial Proposal"
      ],
      eligibilityCriteria: [
        "Minimum 5 years of experience in IT infrastructure",
        "Annual turnover of at least ₹10 crores",
        "Valid ISO 27001 certification"
      ]
    },
    bids: [
      { supplier: "TechCorp Solutions", amount: "₹2,450,000", status: "submitted", rank: 1 },
      { supplier: "InfraTech Ltd", amount: "₹2,680,000", status: "submitted", rank: 2 },
      { supplier: "Digital Systems Inc", amount: "₹2,750,000", status: "submitted", rank: 3 }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/buyer/tenders">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tenders
          </Button>
        </Link>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">{tender.title}</h1>
            <Badge variant={tender.status === "active" ? "default" : "secondary"}>
              {tender.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">Tender ID: {tender.id}</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="ai-summary">AI Summary</TabsTrigger>
            <TabsTrigger value="bids">Bids ({tender.totalBids})</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-medium">{tender.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Created Date</p>
                    <p className="font-medium">{tender.created}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Submission Deadline</p>
                    <p className="font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {tender.deadline}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">EMD Amount</p>
                    <p className="font-medium flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      {tender.emd}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Bids Received</p>
                    <p className="text-2xl font-bold flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      {tender.totalBids}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge variant="default">{tender.status}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tender.description}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-summary" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Generated Summary</CardTitle>
                <CardDescription>
                  Automatically extracted and summarized from tender document
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Summary</h3>
                  <p className="text-muted-foreground">{tender.aiSummary}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Extracted Data</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Submission Deadline</p>
                      <p className="text-muted-foreground">{tender.extractedData.submissionDeadline}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">EMD Amount</p>
                      <p className="text-muted-foreground">{tender.extractedData.emdAmount}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Required Documents</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {tender.extractedData.requiredDocuments.map((doc, index) => (
                          <li key={index}>{doc}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Eligibility Criteria</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {tender.extractedData.eligibilityCriteria.map((criteria, index) => (
                          <li key={index}>{criteria}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bids" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Bids Received</CardTitle>
                    <CardDescription>{tender.totalBids} bids submitted</CardDescription>
                  </div>
                  <Button onClick={() => router.push(`/buyer/comparisons?tender=${tenderId}`)}>
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View AI Comparison
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rank</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tender.bids.map((bid) => (
                      <TableRow key={bid.supplier}>
                        <TableCell>
                          <Badge variant={bid.rank === 1 ? "default" : "outline"}>
                            #{bid.rank}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">{bid.supplier}</TableCell>
                        <TableCell>{bid.amount}</TableCell>
                        <TableCell>
                          <Badge variant="success">{bid.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tender Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Tender Document.pdf</p>
                        <p className="text-sm text-muted-foreground">2.5 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


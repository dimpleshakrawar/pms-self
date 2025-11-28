"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, TrendingUp, AlertTriangle, CheckCircle2, XCircle, MessageSquare } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export default function ComparisonsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tenderId = searchParams.get("tender") || "T001"

  // Mock comparison data
  const comparisonData = {
    tender: {
      id: tenderId,
      title: "IT Infrastructure Upgrade",
      totalBids: 8
    },
    l1Bidder: {
      name: "TechCorp Solutions",
      amount: "₹2,450,000",
      risk: "low",
      compliance: 100,
      missingDocs: []
    },
    bids: [
      {
        rank: 1,
        supplier: "TechCorp Solutions",
        amount: "₹2,450,000",
        risk: "low",
        compliance: 100,
        status: "complete",
        missingDocs: []
      },
      {
        rank: 2,
        supplier: "InfraTech Ltd",
        amount: "₹2,680,000",
        risk: "medium",
        compliance: 85,
        status: "incomplete",
        missingDocs: ["GST Certificate", "Company Registration"]
      },
      {
        rank: 3,
        supplier: "Digital Systems Inc",
        amount: "₹2,750,000",
        risk: "low",
        compliance: 95,
        status: "complete",
        missingDocs: []
      },
      {
        rank: 4,
        supplier: "Cloud Solutions Co",
        amount: "₹2,900,000",
        risk: "high",
        compliance: 70,
        status: "incomplete",
        missingDocs: ["Financial Statement", "Tax Clearance"]
      }
    ],
    aiInsights: {
      recommendation: "TechCorp Solutions is recommended as L1 bidder with lowest price, complete documentation, and low risk profile.",
      riskAnalysis: "Most bids show normal pricing patterns. Cloud Solutions Co shows abnormal pricing that requires review.",
      costSavings: "L1 bidder offers 15% savings compared to average bid price."
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/buyer/dashboard">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>

        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">AI Bid Comparison</h1>
          <p className="text-muted-foreground">
            Tender: {comparisonData.tender.title} ({comparisonData.tender.id})
          </p>
        </div>

        {/* L1 Bidder Highlight */}
        <Card className="mb-6 border-green-200 bg-green-50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  L1 Bidder Identified
                </CardTitle>
                <CardDescription className="mt-2">
                  {comparisonData.l1Bidder.name} - {comparisonData.l1Bidder.amount}
                </CardDescription>
              </div>
              <Badge variant="success" className="text-lg px-4 py-2">
                Recommended
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Risk Level</p>
                <p className="text-lg font-semibold capitalize">{comparisonData.l1Bidder.risk}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Compliance</p>
                <p className="text-lg font-semibold">{comparisonData.l1Bidder.compliance}%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Documentation</p>
                <p className="text-lg font-semibold text-green-600">Complete</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>AI Analysis & Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Recommendation</h4>
              <p className="text-sm text-muted-foreground">
                {comparisonData.aiInsights.recommendation}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Risk Analysis</h4>
              <p className="text-sm text-muted-foreground">
                {comparisonData.aiInsights.riskAnalysis}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cost Analysis</h4>
              <p className="text-sm text-muted-foreground">
                {comparisonData.aiInsights.costSavings}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Bid Comparison</CardTitle>
            <CardDescription>
              All {comparisonData.tender.totalBids} bids ranked by price and analyzed by AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Risk</TableHead>
                  <TableHead>Compliance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Missing Docs</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.bids.map((bid) => (
                  <TableRow key={bid.rank}>
                    <TableCell>
                      <Badge variant={bid.rank === 1 ? "default" : "outline"}>
                        #{bid.rank}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{bid.supplier}</TableCell>
                    <TableCell>{bid.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          bid.risk === "low" ? "success" :
                          bid.risk === "medium" ? "warning" : "destructive"
                        }
                      >
                        {bid.risk}
                      </Badge>
                    </TableCell>
                    <TableCell>{bid.compliance}%</TableCell>
                    <TableCell>
                      {bid.status === "complete" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </TableCell>
                    <TableCell>
                      {bid.missingDocs.length > 0 ? (
                        <div className="flex items-center gap-1">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                          <span className="text-xs">{bid.missingDocs.length} missing</span>
                        </div>
                      ) : (
                        <span className="text-green-600 text-xs">Complete</span>
                      )}
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

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <Button size="lg">
            <MessageSquare className="h-4 w-4 mr-2" />
            Chat with Tender Bot
          </Button>
          <Button size="lg" variant="outline">
            Award Contract
          </Button>
        </div>
      </div>
    </div>
  )
}


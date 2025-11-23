"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, User, Clock } from "lucide-react"

export default function AuditLogsPage() {
  const auditLogs = [
    {
      id: "A001",
      timestamp: "2024-02-05 10:30:00",
      action: "Tender Created",
      user: "Admin User",
      tenderId: "T001",
      details: "IT Infrastructure Upgrade tender created",
      status: "success"
    },
    {
      id: "A002",
      timestamp: "2024-02-05 11:15:00",
      action: "Document Uploaded",
      user: "Admin User",
      tenderId: "T001",
      details: "Tender PDF uploaded and processed by AI",
      status: "success"
    },
    {
      id: "A003",
      timestamp: "2024-02-05 12:00:00",
      action: "Tender Published",
      user: "Admin User",
      tenderId: "T001",
      details: "Tender published and made visible to suppliers",
      status: "success"
    },
    {
      id: "A004",
      timestamp: "2024-02-06 09:20:00",
      action: "Bid Submitted",
      user: "TechCorp Solutions",
      tenderId: "T001",
      details: "Bid submitted: ₹2,450,000",
      status: "success"
    },
    {
      id: "A005",
      timestamp: "2024-02-06 14:45:00",
      action: "AI Comparison Generated",
      user: "System",
      tenderId: "T001",
      details: "AI comparison analysis completed",
      status: "success"
    },
    {
      id: "A006",
      timestamp: "2024-02-07 10:00:00",
      action: "Contract Awarded",
      user: "Admin User",
      tenderId: "T001",
      details: "Contract awarded to TechCorp Solutions",
      status: "success"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/buyer/dashboard">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Audit Logs</CardTitle>
            <CardDescription>
              Complete workflow history and activity tracking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Tender ID</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        {log.timestamp}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        {log.action}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        {log.user}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{log.tenderId}</Badge>
                    </TableCell>
                    <TableCell className="max-w-md">{log.details}</TableCell>
                    <TableCell>
                      <Badge variant="success">{log.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


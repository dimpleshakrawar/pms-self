"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Upload, FileText, Save } from "lucide-react"

export default function SubmitBidPage() {
  const router = useRouter()
  const params = useParams()
  const tenderId = params.id as string

  const [formData, setFormData] = useState({
    amount: "",
    validity: "",
    deliveryTime: "",
    notes: ""
  })
  const [documents, setDocuments] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDocuments(Array.from(e.target.files))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle bid submission
    router.push("/supplier/dashboard")
  }

  const handleSaveDraft = () => {
    // Handle save draft
    router.push("/supplier/dashboard")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/supplier/dashboard">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Tender Info */}
          <Card>
            <CardHeader>
              <CardTitle>Tender Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">Tender ID:</span> {tenderId}
                </div>
                <div>
                  <span className="font-medium">Title:</span> IT Infrastructure Upgrade
                </div>
                <div>
                  <span className="font-medium">Deadline:</span> 2024-02-15
                </div>
                <div>
                  <span className="font-medium">EMD Required:</span> ₹50,000
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bid Form */}
          <Card>
            <CardHeader>
              <CardTitle>Submit Your Bid</CardTitle>
              <CardDescription>
                Fill in your bid details and upload required documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Bid Amount (₹) *</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    placeholder="0.00"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="validity">Bid Validity (Days) *</Label>
                    <Input
                      id="validity"
                      type="number"
                      value={formData.validity}
                      onChange={(e) => setFormData({ ...formData, validity: e.target.value })}
                      placeholder="90"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deliveryTime">Delivery Time (Days) *</Label>
                    <Input
                      id="deliveryTime"
                      type="number"
                      value={formData.deliveryTime}
                      onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                      placeholder="30"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any additional information or clarifications..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Required Documents *</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload required documents (GST, Registration, Financial Statements, etc.)
                    </p>
                    <Input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="documents"
                    />
                    <Label htmlFor="documents">
                      <Button type="button" variant="outline" asChild>
                        <span>Choose Files</span>
                      </Button>
                    </Label>
                  </div>
                  {documents.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {documents.map((doc, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-green-600">
                          <FileText className="h-4 w-4" />
                          {doc.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Please ensure all required documents are uploaded. 
                    Incomplete submissions may be flagged by the AI system.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Submit Bid
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSaveDraft}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save as Draft
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


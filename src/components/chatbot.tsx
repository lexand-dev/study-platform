import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Chatbot() {
  return (
    <Card className="fixed bottom-4 right-4">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageCircle className="mr-2" />
          AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">How can I help you today?</p>
        <Button className="w-full">Start Chat</Button>
      </CardContent>
    </Card>
  )
}


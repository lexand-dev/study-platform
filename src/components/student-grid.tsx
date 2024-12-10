import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare } from 'lucide-react'

interface Student {
  name: string
  avatar: string
  online: boolean
}

const students: Student[] = Array(9).fill({
  name: "Alexander Flores",
  avatar: "/placeholder.svg",
  online: true,
})

export function StudentGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {students.map((student, i) => (
        <Card key={i}>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar>
                  <AvatarImage src={student.avatar} />
                  <AvatarFallback>{student.name[0]}</AvatarFallback>
                </Avatar>
                {student.online && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
                )}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{student.name}</div>
                <div className="text-xs text-muted-foreground">Online</div>
              </div>
              <button className="rounded-full p-2 hover:bg-muted">
                <MessageSquare className="h-4 w-4" />
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


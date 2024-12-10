import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Course {
  id: number
  name: string
  progress: number
}

const courses: Course[] = [
  { id: 1, name: "Curso 1", progress: 75 },
  { id: 2, name: "Curso 2", progress: 60 },
  { id: 3, name: "Curso 3", progress: 85 },
  { id: 4, name: "Curso 4", progress: 30 },
  { id: 5, name: "Curso 5", progress: 45 },
  { id: 6, name: "Curso 6", progress: 40 },
  { id: 7, name: "Curso 7", progress: 15 },
  { id: 8, name: "Curso 8", progress: 10 },
]

export function CourseProgress() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <CardTitle className="text-sm font-medium">{course.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={course.progress} className="h-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


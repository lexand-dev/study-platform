import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export function CalendarView() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar mode="multiple" className="rounded-md border" />
      </CardContent>
    </Card>
  )
}


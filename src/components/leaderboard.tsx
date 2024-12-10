import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LeaderboardEntry {
  name: string
  score: number
  avatar: string
}

const leaderboardData: LeaderboardEntry[] = [
  { name: "Alexander Flores", score: 156, avatar: "/placeholder.svg" },
  { name: "Marcelo Saez", score: 142, avatar: "/placeholder.svg" },
  { name: "Diana Urrutia", score: 138, avatar: "/placeholder.svg" },
  // Add more entries as needed
]

export function Leaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboardData.map((entry, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-sm font-medium opacity-70">#{i + 1}</div>
              <Avatar>
                <AvatarImage src={entry.avatar} />
                <AvatarFallback>{entry.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-sm font-medium">{entry.name}</div>
              <div className="text-sm font-medium">{entry.score}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


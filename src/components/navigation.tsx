import Link from "next/link"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Community", href: "#" },
  { name: "Classroom", href: "#" },
  { name: "Calendars", href: "#" },
  { name: "Leaderboard", href: "#" },
  { name: "Alumnos", href: "#" },
]

export function Navigation({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center space-x-4", className)}>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}


import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  { name: "Taller de Resolución de Problemas", date: "2023-12-15" },
  { name: "Seminario Web de Colaboración en Equipo", date: "2023-12-20" }
];

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="mr-2" />
          Próximos Eventos y Talleres
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {events.map((event, index) => (
            <li key={index} className="flex justify-between">
              <span>{event.name}</span>
              <span>{event.date}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full">Ver Todos los Eventos</Button>
      </CardContent>
    </Card>
  );
}

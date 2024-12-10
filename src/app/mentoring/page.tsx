import { Calendar, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const forums = [
  {
    name: "Foro de Desarrollo de Software",
    description:
      "Preguntas, proyectos y consejos sobre programación y desarrollo."
  },
  {
    name: "Foro de Marketing Digital",
    description: "Intercambia ideas sobre estrategias de marketing, SEO, y más."
  },
  {
    name: "Foro de Diseño Gráfico",
    description: "Comparte proyectos y técnicas de diseño visual."
  }
];

const events = [
  {
    name: "Webinar: Introducción a React",
    date: "2023-12-15",
    time: "4:00 PM",
    description: "Un seminario sobre los fundamentos de React.js."
  },
  {
    name: "Tutoría: Mejora tu CV",
    date: "2023-12-17",
    time: "11:00 AM",
    description:
      "Aprende cómo crear un CV que te destaque en el mercado laboral."
  }
];

export default function MentoringPage() {
  return (
    <div className="space-y-4 container px-4 py-6 mx-auto">
      <h1 className="text-2xl font-semibold">Mentoría</h1>
      <p className="mb-4">
        Conéctate con mentores experimentados, participa en foros y mantente
        informado sobre eventos de desarrollo profesional.
      </p>

      {/* Foros de Discusión */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2" />
            Foros de Discusión por Carrera
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {forums.map((forum, index) => (
              <li key={index}>
                <strong>{forum.name}</strong>
                <p>{forum.description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Calendario de Webinars y Tutorías */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2" />
            Calendario de Webinars y Tutorías
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {events.map((event, index) => (
              <li key={index} className="flex justify-between">
                <span>{event.name}</span>
                <span>
                  {event.date} - {event.time}
                </span>
              </li>
            ))}
          </ul>
          <Button className="w-full mt-4">Ver Todos los Eventos</Button>
        </CardContent>
      </Card>

      {/* Chat con Mentores */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="mr-2" />
            Chat con Mentores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Conversa con mentores en tiempo real y recibe orientación sobre tu
            carrera.
          </p>
          <Button className="w-full mt-4">Iniciar Chat</Button>
        </CardContent>
      </Card>
    </div>
  );
}

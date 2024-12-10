import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const resources = [
  { name: "Guía para el Pensamiento Crítico", url: "#" },
  { name: "Técnicas de Resolución de Problemas", url: "#" },
  { name: "Colaboración Eficaz en Equipo", url: "#" }
];

export function RecommendedResources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BookOpen className="mr-2" />
          Recursos Recomendados
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">
          Recursos seleccionados para mejorar tus habilidades:
        </p>
        <ul className="space-y-2">
          {resources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} className="text-blue-500 hover:underline">
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

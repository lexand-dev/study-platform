import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const assessments = [
  { name: "Proyecto Final", grade: "A", status: "Completado" },
  { name: "Examen Parcial", grade: "B+", status: "Completado" },
  { name: "Presentación Grupal", grade: "-", status: "Pendiente" }
];

export function RecentAssessments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evaluaciones y Actividades Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {assessments.map((assessment, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{assessment.name}</span>
              <span>{assessment.grade}</span>
              <span
                className={
                  assessment.status === "Completado"
                    ? "text-green-500"
                    : "text-yellow-500"
                }
              >
                {assessment.status}
              </span>
            </li>
          ))}
        </ul>
        <Button className="w-full mt-4">Ver Todas las Evaluaciones</Button>
      </CardContent>
    </Card>
  );
}

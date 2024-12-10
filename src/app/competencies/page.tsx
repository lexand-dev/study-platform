import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const competencies = [
  {
    name: "Pensamiento Crítico",
    description:
      "Desarrollar habilidades para analizar, evaluar y generar ideas de manera lógica.",
    objectives: [
      "Desarrollar habilidades analíticas.",
      "Mejorar la capacidad de argumentación.",
      "Evaluar información de manera crítica."
    ],
    progress: 60,
    recommendations:
      "Trabaja más en los ejercicios de análisis de textos complejos y busca más debates en grupo."
  },
  {
    name: "Resolución de Problemas",
    description:
      "Capacitarse para encontrar soluciones eficientes a problemas complejos.",
    objectives: [
      "Identificar problemas rápidamente.",
      "Desarrollar soluciones creativas.",
      "Aplicar soluciones a situaciones reales."
    ],
    progress: 45,
    recommendations:
      "Realiza más simulaciones prácticas y busca ejercicios sobre resolución de casos."
  },
  {
    name: "Colaboración en Equipo",
    description:
      "Fomentar el trabajo en conjunto para lograr objetivos comunes.",
    objectives: [
      "Desarrollar habilidades de comunicación efectiva.",
      "Fomentar la cooperación entre miembros del equipo.",
      "Gestionar dinámicas de trabajo grupales."
    ],
    progress: 80,
    recommendations:
      "Participa en más proyectos grupales y trabaja en la mejora de tu comunicación interpersonal."
  }
];

export default function CompetenciesPage() {
  return (
    <div className="space-y-4 container px-4 py-6 mx-auto">
      <h1 className="text-2xl font-semibold">Competencias</h1>
      <p className="mb-4">
        Aquí puedes ver el progreso de tus competencias, los objetivos de cada
        una y recibir recomendaciones personalizadas.
      </p>
      {competencies.map((competency, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{competency.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Descripción:</strong> {competency.description}
            </p>
            <p>
              <strong>Objetivos:</strong>
            </p>
            <ul className="list-disc pl-6">
              {competency.objectives.map((objective, idx) => (
                <li key={idx}>{objective}</li>
              ))}
            </ul>
            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span>Progreso</span>
                <span>{competency.progress}%</span>
              </div>
              <Progress value={competency.progress} />
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Recomendaciones:</h4>
              <p>{competency.recommendations}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

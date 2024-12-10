import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const evaluations = [
  {
    name: "Examen Final",
    date: "2023-12-01",
    grade: "A",
    feedback: "Excelente trabajo, buena capacidad de análisis.",
    expectedOutcome: "Demostrar comprensión total del curso."
  },
  {
    name: "Presentación de Proyecto",
    date: "2023-11-20",
    grade: "B+",
    feedback:
      "Buen trabajo, pero necesita mejorar la claridad en la exposición.",
    expectedOutcome: "Presentación clara y detallada del proyecto."
  },
  {
    name: "Examen Parcial",
    date: "2023-10-10",
    grade: "B",
    feedback:
      "Satisfactorio, aunque hay áreas para mejorar en la resolución de problemas.",
    expectedOutcome: "Resolver problemas aplicando los conceptos del curso."
  }
];

export default function EvaluationsPage() {
  return (
    <div className="space-y-4 container px-4 py-6 mx-auto">
      <h1 className="text-2xl font-semibold">Evaluaciones</h1>
      <p className="mb-4">
        Consulta el historial de tus evaluaciones, revisa tus resultados, y
        observa cómo has evolucionado en tu aprendizaje.
      </p>
      {evaluations.map((evaluation, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{evaluation.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Fecha:</strong> {evaluation.date}
            </p>
            <p>
              <strong>Resultado:</strong> {evaluation.grade}
            </p>
            <p>
              <strong>Comentarios:</strong> {evaluation.feedback}
            </p>
            <p>
              <strong>Logro esperado:</strong> {evaluation.expectedOutcome}
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Evolución:</h4>
              {/* Aquí puedes incluir una visualización de la evolución, como una gráfica o una barra de progreso */}
              <p>
                Comparación con evaluaciones anteriores:{" "}
                {index > 0 ? "Mejorado" : "Primera evaluación"}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

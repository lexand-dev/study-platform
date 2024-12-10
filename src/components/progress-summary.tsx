import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function ProgressSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen del Progreso Académico</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span>Competencias desarrolladas</span>
              <span>65%</span>
            </div>
            <Progress value={65} />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Logros Recientes</h4>
            <ul className="list-disc list-inside">
              <li>Pensamiento Crítico - Avanzado</li>
              <li>Colaboración en Equipo - Intermedio</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Áreas de Mejora</h4>
            <p>
              Dedicar más tiempo a la competencia de 'Resolución de Problemas'.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

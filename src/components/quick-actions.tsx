import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <Button>Registrar Progreso en Competencias</Button>
        <Button>Cargar Evaluación</Button>
        <Button>Solicitar Ayuda Personalizada</Button>
      </CardContent>
    </Card>
  );
}

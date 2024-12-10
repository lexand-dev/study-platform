import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MentoringCommunity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="mr-2" />
          Comunidad de Mentoría
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          <li>¿Cómo mejorar las habilidades para resolver problemas?</li>
          <li>Consejos para una colaboración efectiva en equipo</li>
        </ul>
        <Button className="w-full">Conectar con un Mentor</Button>
      </CardContent>
    </Card>
  );
}

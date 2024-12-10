import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WelcomeSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          Bienvenido, Alexander Flores !
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder-avatar.jpg" alt="@johndoe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium">
              ¡Abrace el viaje del aprendizaje continuo!
            </p>
            <Button variant="outline" className="mt-2">
              Ver Perfil
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

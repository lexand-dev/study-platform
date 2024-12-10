import { Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const notifications = [
  { message: "Nuevo comentario sobre tu proyecto", type: "feedback" },
  { message: "Próximo taller: Resolución de Problemas", type: "event" },
  { message: "Syllabus del curso actualizado", type: "update" }
];

export function Notifications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="mr-2" />
          Notificaciones Relevantes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {notifications.map((notification, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              {notification.message}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

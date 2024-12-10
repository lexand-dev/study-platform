import { Video, FileText, Clipboard, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const trainings = [
  {
    name: "Taller: Introducción al Desarrollo Web",
    description:
      "Aprende los fundamentos del desarrollo web, desde HTML hasta JavaScript.",
    duration: "2 horas",
    status: "Available"
  },
  {
    name: "Módulo: Estrategias de Marketing Digital",
    description:
      "Dominio de las estrategias más efectivas en marketing digital.",
    duration: "1.5 horas",
    status: "Available"
  },
  {
    name: "Taller: Resolución de Problemas Complejos",
    description:
      "Mejora tus habilidades en la resolución de problemas técnicos.",
    duration: "3 horas",
    status: "Upcoming"
  }
];

const videos = [
  { title: "Cómo empezar con React", url: "#", duration: "20 min" },
  {
    title: "Fundamentos de Python para Principiantes",
    url: "#",
    duration: "30 min"
  },
  {
    title: "Mejores prácticas en trabajo en equipo",
    url: "#",
    duration: "25 min"
  }
];

const downloadableMaterials = [
  { name: "Guía de Estrategias de Marketing Digital", url: "#" },
  { name: "Plantilla de Proyecto de Desarrollo Web", url: "#" },
  { name: "Checklist para Resolución de Problemas Técnicos", url: "#" }
];

export default function TrainingPage() {
  return (
    <div className="space-y-4 container px-4 py-6 mx-auto">
      <h1 className="text-2xl font-semibold">Capacitaciones</h1>
      <p className="mb-4">
        Accede a talleres, módulos de orientación, videos y materiales que
        potenciarán tus habilidades profesionales.
      </p>

      {/* Talleres y Módulos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clipboard className="mr-2" />
            Talleres y Módulos de Orientación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {trainings.map((training, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{training.name}</span>
                <span>{training.status}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full mt-4">Ver Todos los Talleres</Button>
        </CardContent>
      </Card>

      {/* Videos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Video className="mr-2" />
            Videos Educativos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {videos.map((video, index) => (
              <li key={index} className="flex justify-between">
                <a href={video.url} className="text-blue-500 hover:underline">
                  {video.title}
                </a>
                <span>{video.duration}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full mt-4">Ver Todos los Videos</Button>
        </CardContent>
      </Card>

      {/* Materiales Descargables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2" />
            Materiales Descargables
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {downloadableMaterials.map((material, index) => (
              <li key={index}>
                <a
                  href={material.url}
                  className="text-blue-500 hover:underline"
                >
                  {material.name}
                </a>
              </li>
            ))}
          </ul>
          <Button className="w-full mt-4">Ver Todos los Materiales</Button>
        </CardContent>
      </Card>

      {/* Progreso del Estudiante */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="mr-2" />
            Progreso del Estudiante
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <p className="font-semibold">Talleres Completados</p>
              <Progress className="w-full" value={70} max={100}></Progress>
              <span>70% Completado</span>
            </div>
            <div>
              <p className="font-semibold">Módulos Completados</p>
              <Progress className="w-full" value={50} max={100}></Progress>
              <span>50% Completado</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

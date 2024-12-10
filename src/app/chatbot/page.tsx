"use client";
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?"
    }
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages([
        ...messages,
        { sender: "user", text: userInput },
        {
          sender: "bot",
          text: "Gracias por tu pregunta, estoy buscando la información..."
        }
      ]);
      setUserInput(""); // Limpiar el campo de texto
    }
  };

  return (
    <div className="flex flex-col items-center py-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2" />
            Asistencia 24/7
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-72 overflow-y-scroll border p-4 rounded-md">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`my-2 ${
                    message.sender === "bot" ? "text-blue-500" : "text-gray-700"
                  }`}
                >
                  <span>{message.sender === "bot" ? "Chatbot: " : "Tú: "}</span>
                  {message.text}
                </div>
              ))}
            </div>

            <div className="flex items-center mt-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full border p-2 rounded-md"
                placeholder="Escribe tu mensaje..."
              />
              <Button onClick={handleSendMessage} className="ml-2">
                Enviar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Icono flotante de chat */}
      <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer">
        <MessageSquare size={24} />
      </div>
    </div>
  );
}

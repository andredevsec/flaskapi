import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export default function App() {
  return (
    <div className="w-full h-full p-4">
      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4 bg-gray-100 rounded">
            <div className="mb-4">
              <Tooltip>
                <TooltipTrigger>
                  <p className="bg-blue-500 text-white p-2 rounded mb-2 inline-block">Mensagem 1</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Enviado às 12:00</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div>
              <Tooltip>
                <TooltipTrigger>
                  <p className="bg-gray-300 p-2 rounded inline-block">Resposta 1</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Enviado às 12:01</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <Input className="flex-1" placeholder="Digite sua mensagem..." />
            <Button className="ml-2">Enviar</Button>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <p>Configurações do chat aqui</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

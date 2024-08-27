import { Compass, Info, MapPin, School } from "lucide-react";
import { CardComponent } from "./CardComponent";
import { useState } from "react";
import { Footer } from "./Footer";

export function Painel() {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSentApi();
    }
  };

  const onSentApi = async () => {
    // Lógica para fazer a requisição para a API
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen p-4 bg-gray-100">
      <header className="flex justify-end  mb-6 items-end">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[url('https://dragonball-api.com/characters/goku_normal.webp')] bg-cover bg-top border-primary border-2 box-content">
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {!showResult ? (
          <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <CardComponent
              title="Quem foi o primeiro vilão que Goku enfrentou?"
              icon={<Compass className="w-8 h-8 text-[#F58220]" />} // Laranja de Goku para representar a busca.
              onClick={() => setShowResult(true)}
            />
            <CardComponent
              title="Qual é a técnica de fusão usada por Goten e Trunks?"
              icon={<Info className="w-8 h-8 text-[#2E86AB]" />} // Azul do uniforme de Goku, para representar conhecimento técnico.
              onClick={() => setShowResult(true)}
            />
            <CardComponent
              title="Quantas Esferas do Dragão existem?"
              icon={<MapPin className="w-8 h-8 text-[#F5C518]" />} // Amarelo das Esferas do Dragão para representar a localização.
              onClick={() => setShowResult(true)}
            />
            <CardComponent
              title="Qual é o verdadeiro nome do Mestre Kame?"
              icon={<School className="w-8 h-8 text-[#27AE60]" />} // Verde de Piccolo, representando a sabedoria e o aprendizado.
              onClick={() => setShowResult(true)}
            />


          </section>
        ) : (
          <div className="flex flex-1 flex-col items-start space-y-4 mt-6">
            <h2 className="text-lg font-semibold">{recentPrompt}</h2>
            {loading ? (
              <div className="animate-pulse text-gray-400">Carregando...</div>
            ) : (
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: resultData }} />
            )}
          </div>
        )}
      </main>

      <Footer></Footer>
    </div>
  );
}

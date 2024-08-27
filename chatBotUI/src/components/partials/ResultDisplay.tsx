import { IMessage } from "@/interfaces/message";
import { cn } from "@/lib/utils";

export function ResultDisplay({ resultData }: { resultData: IMessage }) {
    const { character, prompt, result } = resultData;
    console.log(character);
    const isUser = prompt ? true : false;
    const message = String(result ? result : prompt);
  return (
    <div className={cn("flex flex-1 flex-col items-start space-y-4 mt-6", isUser ? 'items-end' : 'items-start')}>
        <div className="flex items-center gap-2 p-4 bg-white rounded-lg border-2 max-w-[90%]">
            {!isUser && character?.image && <div className="w-14 h-14 rounded-full border-primary border-2 overflow-hidden">
                <img src={character.image} alt={character.name} />
            </div>}
            <p className="text-xl" dangerouslySetInnerHTML={{ __html: message }} />
        </div>
    </div>
  );
}
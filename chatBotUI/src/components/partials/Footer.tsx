import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronDown } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Star } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

export function Footer() {
  const [input, setInput] = useState('');
  const [characters, setCharacters] = useState<{name: string}[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<any>();

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://dragonball-api.com/api/characters');
      setCharacters(response.data.items);
    } catch (error) {
      console.error('Erro ao buscar personagens:', error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSentApi();
    }
  };

  const onSentApi = async () => {
    console.log('Pergunta:', input);
    console.log('Personagem:', selectedCharacter);
    // Lógica para enviar a pergunta ou realizar outra ação
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectCharacter = (character: any) => {
    setSelectedCharacter(character);
  };

  return (
    <footer className="bg-white shadow-lg p-4">
      <div className="flex gap-4 items-center">
      <Input
          placeholder="Digite sua pergunta..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 text-base"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center bg-secondary hover:bg-secondary/90">
              {selectedCharacter?.name ?? 'Selecione um personagem'}
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {characters.map((character) => (
              <DropdownMenuItem 
                key={character.name} 
                className="cursor-pointer hover:bg-secondary/90 hover:text-white px-3 py-2"
                onClick={() => handleSelectCharacter(character)}
              >
                {character.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="text-base" onClick={onSentApi}>
          Enviar <Star className="w-4 h-4 ml-2 text-white" />
        </Button>
      </div>
    </footer>
  );
}

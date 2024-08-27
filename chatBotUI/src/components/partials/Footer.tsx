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
    // Lógica para enviar a pergunta ou realizar outra ação
  };

  return (
    <footer className="bg-white shadow-lg p-4">
      <div className="flex gap-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center">
              Selecione um personagem
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {characters.map((character) => {
                console.log(character);
                return (
              <DropdownMenuItem key={character.name} className="cursor-pointer">
                {character.name}
              </DropdownMenuItem>
            )
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <Input
          placeholder="Digite sua pergunta..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 text-base"
        />
        <Button className="text-base" onClick={onSentApi}>
          Enviar <Star className="w-4 h-4 ml-2 text-white" />
        </Button>
      </div>
    </footer>
  );
}

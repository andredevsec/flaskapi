// useApi.ts (novo arquivo para lógica da API)
import { useState, useEffect } from 'react';
import axios from 'axios';

export function useCharacters() {
    const [characters, setCharacters] = useState<{ name: string }[]>([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://dragonball-api.com/api/characters');
                setCharacters(response.data.items);
            } catch (error) {
                console.error('Erro ao buscar personagens:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    return { characters, loading };
}
export async function apiBot({ prompt }: {prompt: string}) {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
        const response = await axios.post('https://flaskia2-acfeb9eygrh2hvbm.eastus-01.azurewebsites.net/',{ consulta: prompt }, {
            headers: {
                'Authorization': apiKey,
            }
        });
        return (response.data.mensagem);
    } catch (error) {
        console.error('Erro ao acessar API:', error);
    }
}

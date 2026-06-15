'use client';

import { useState } from 'react';

interface NovaTarefaProps {
    onAddTarefa: (texto: string) => void;
}

export default function NovaTarefa({ onAddTarefa }: NovaTarefaProps) {
    const [texto, setTexto] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!texto.trim()) return;

        onAddTarefa(texto);
        setTexto('');
    };

    return (
        <form onSubmit={handleSubmit} data-testid="form-nova-tarefa">
            <input
                type="text"
                placeholder="Digite uma nova tarefa"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

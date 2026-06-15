'use client';

import { useState } from 'react';
import NovaTarefa from './NovaTarefa';
import { useContadorDeTarefas } from '../hooks/useContadorDeTarefas';

interface Tarefa {
    id: number;
    texto: string;
}

export default function ListaTarefas({
    tarefasIniciais,
}: {
    tarefasIniciais: Tarefa[];
}) {
    const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
    const totalTarefas = useContadorDeTarefas(tarefas);

    const handleAddTarefa = (texto: string) => {
        const nova = { id: Date.now(), texto };
        setTarefas((prev) => [...prev, nova]);
    };

    return (
        <div>
            <p data-testid="contador">Total de tarefas: {totalTarefas}</p>

            <NovaTarefa onAddTarefa={handleAddTarefa} />

            <ul data-testid="lista-tarefas">
                {tarefas.map((t) => (
                    <li key={t.id}>{t.texto}</li>
                ))}
            </ul>
        </div>
    );
}

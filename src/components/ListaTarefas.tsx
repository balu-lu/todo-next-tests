'use client';
import { useState } from 'react';
import NovaTarefa from './NovaTarefa';
import { useContadorDeTarefas } from '../hooks/useContadorDeTarefas';
import styles from './ListaTarefas.module.css';

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
        setTarefas([...tarefas, { id: Date.now(), texto }]);
    };

    return (
        <div>
            {/* Alinhado com o teste que espera "Total de tarefas:" */}
            <p className={styles.contador} data-testid="contador">
                Total de tarefas: {totalTarefas}
            </p>

            <NovaTarefa onAddTarefa={handleAddTarefa} />

            <ul className={styles.lista} data-testid="lista-tarefas">
                {tarefas.map((t) => (
                    <li key={t.id} className={styles.item}>
                        {t.texto}
                    </li>
                ))}
            </ul>
        </div>
    );
}

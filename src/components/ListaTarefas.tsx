'use client';
import { useState } from 'react';
import NovaTarefa from './NovaTarefa';
import { useContadorDeTarefas } from '../hooks/useContadorDeTarefas';
import styles from './ListaTarefas.module.css';

export default function ListaTarefas({
    tarefasIniciais,
}: {
    tarefasIniciais: any[];
}) {
    const [tarefas, setTarefas] = useState(tarefasIniciais);
    const total = useContadorDeTarefas(tarefas);

    return (
        <div>
            <p className={styles.contador}>Total: {total}</p>
            <NovaTarefa
                onAddTarefa={(texto) =>
                    setTarefas([...tarefas, { id: Date.now(), texto }])
                }
            />
            <ul className={styles.lista}>
                {tarefas.map((t) => (
                    <li key={t.id} className={styles.item}>
                        {t.texto}
                    </li>
                ))}
            </ul>
        </div>
    );
}

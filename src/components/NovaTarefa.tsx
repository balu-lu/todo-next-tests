'use client';
import { useState } from 'react';
import styles from './NovaTarefa.module.css';

interface NovaTarefaProps {
    onAddTarefa: (texto: string) => void;
}

export default function NovaTarefa({ onAddTarefa }: NovaTarefaProps) {
    const [texto, setTexto] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validação: só submete se o texto não for apenas espaços
        if (!texto.trim()) return;

        onAddTarefa(texto);
        setTexto('');
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
            data-testid="form-nova-tarefa"
        >
            <input
                className={styles.input}
                type="text"
                placeholder="Digite uma nova tarefa"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <button className={styles.button} type="submit">
                Adicionar
            </button>
        </form>
    );
}

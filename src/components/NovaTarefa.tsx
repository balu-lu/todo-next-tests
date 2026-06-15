'use client';
import { useState } from 'react';
import styles from './NovaTarefa.module.css';

export default function NovaTarefa({
    onAddTarefa,
}: {
    onAddTarefa: (t: string) => void;
}) {
    const [texto, setTexto] = useState('');
    return (
        <form
            className={styles.form}
            onSubmit={(e) => {
                e.preventDefault();
                onAddTarefa(texto);
                setTexto('');
            }}
        >
            <input
                className={styles.input}
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Nova tarefa"
            />
            <button className={styles.button} type="submit">
                Adicionar
            </button>
        </form>
    );
}

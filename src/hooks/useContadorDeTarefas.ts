export function useContadorDeTarefas(tarefas: { id: number; texto: string }[]) {
    return tarefas.length;
}

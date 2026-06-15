import ListaTarefas from '../components/ListaTarefas';

export default async function Page() {
    // Simula um fetch (Server-side)
    const tarefasIniciais = await Promise.resolve([
        { id: 1, texto: 'Configurar Jest no Next.js' },
        { id: 2, texto: 'Escrever testes unitários' },
    ]);

    return (
        <main>
            <h1>Gerenciador de Tarefas</h1>
            <ListaTarefas tarefasIniciais={tarefasIniciais} />
        </main>
    );
}

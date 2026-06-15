import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Página Principal (Server Component)', () => {
    it('deve renderizar o título e as tarefas iniciais', async () => {
        // Resolve o Server Component assíncrono
        const ui = await Page();
        render(ui);

        expect(screen.getByText('Gerenciador de Tarefas')).toBeInTheDocument();
        expect(
            screen.getByText('Configurar Jest no Next.js')
        ).toBeInTheDocument();
        expect(screen.getByText('Total de tarefas: 2')).toBeInTheDocument();
    });
});

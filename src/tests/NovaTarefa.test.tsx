import { render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '../components/NovaTarefa';

describe('Componente <NovaTarefa />', () => {
    it('deve chamar onAddTarefa com o texto preenchido e limpar o input', () => {
        const mockOnAdd = jest.fn();
        render(<NovaTarefa onAddTarefa={mockOnAdd} />);

        const input = screen.getByPlaceholderText('Digite uma nova tarefa');
        const button = screen.getByRole('button', { name: /adicionar/i });

        // Simula a digitação e o clique
        fireEvent.change(input, { target: { value: 'Estudar React' } });
        fireEvent.click(button);

        expect(mockOnAdd).toHaveBeenCalledWith('Estudar React');
        expect(mockOnAdd).toHaveBeenCalledTimes(1);
        expect(input).toHaveValue(''); // Verifica se o input foi limpo
    });

    it('não deve chamar onAddTarefa se o input estiver vazio', () => {
        const mockOnAdd = jest.fn();
        render(<NovaTarefa onAddTarefa={mockOnAdd} />);

        const button = screen.getByRole('button', { name: /adicionar/i });
        fireEvent.click(button);

        expect(mockOnAdd).not.toHaveBeenCalled();
    });
});

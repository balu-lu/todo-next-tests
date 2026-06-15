import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas } from '../hooks/useContadorDeTarefas';

describe('useContadorDeTarefas', () => {
    it('deve retornar 0 quando a lista estiver vazia', () => {
        const { result } = renderHook(() => useContadorDeTarefas([]));
        expect(result.current).toBe(0);
    });

    it('deve retornar a quantidade correta de tarefas', () => {
        const mockTarefas = [
            { id: 1, texto: 'A' },
            { id: 2, texto: 'B' },
        ];
        const { result } = renderHook(() => useContadorDeTarefas(mockTarefas));
        expect(result.current).toBe(2);
    });
});

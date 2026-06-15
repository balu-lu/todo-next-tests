# To-Do List com Testes Unitários (Next.js 15)

Este projeto aplica conceitos avançados de testes unitários em uma aplicação Next.js 15 (App Router), utilizando Jest e React Testing Library.

## Tecnologias
- Next.js 15 (App Router)
- TypeScript
- Jest & React Testing Library

## Como Instalar e Executar

1. Clone o repositório:
   ```bash
   git clone <seu-link-do-github>
   ```
# Instale as dependências:

    ```bash
    npm install
    ```
# Execute o projeto no navegador:

    ```bash
    npm run dev
    ```
# Execute a suíte de testes:

    ```bash
    npm test
    ```

## Cobertura de Testes
    - Componentes: Validação de renderização e eventos de formulário (<NovaTarefa />).

    - Hooks: Teste de isolamento lógico utilizando renderHook (useContadorDeTarefas).

    - Páginas: Teste de renderização de componentes de servidor (Server Components).


### Validação
Rode `npm test` no seu terminal. Se você seguiu esta estrutura, verá todos os testes passando com "verde", comprovando que o fluxo de carregamento, contagem, validação de inputs e submissão está blindado.
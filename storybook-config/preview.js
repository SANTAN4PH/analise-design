// Single Source of Truth: todos os componentes consomem os tokens deste arquivo.
import '../src/tokens/variables.css';
import '../src/styles/base.css';

/** @type {import('@storybook/html-vite').Preview} */
const preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    // "todo": violações de acessibilidade aparecem como aviso no painel A11y,
    // sem reprovar a story. Ver seção "Acessibilidade" do README.
    a11y: { test: 'todo' },
    docs: { toc: true },
    options: {
      storySort: {
        order: [
          'Introdução',
          'Fase 1 - Auditoria',
          'Fase 2 - Design Tokens',
          'Fase 2 - Átomos',
          'Fase 3 - Moléculas',
          'Fase 4 - Organismos',
          'Fase 5 - Templates e Páginas',
          'Governança',
        ],
      },
    },
  },
};

export default preview;

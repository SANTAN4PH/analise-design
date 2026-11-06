import { Icon, nomesDeIcones } from './Icon.js';

export default {
  title: 'Fase 2 - Átomos/Ícone',
  parameters: {
    docs: {
      description: {
        component:
          'Ícone SVG decorativo, herda a cor do texto (`currentColor`). Sempre acompanhado de um texto acessível no componente que o usa.',
      },
    },
  },
  argTypes: {
    nome: {
      control: 'select',
      options: nomesDeIcones,
      description: 'Nome do ícone.',
      table: { type: { summary: nomesDeIcones.join(' | ') } },
    },
    tamanho: {
      control: { type: 'number', min: 12, max: 48 },
      description: 'Largura e altura em px.',
      table: { defaultValue: { summary: '20' } },
    },
  },
  render: (args) => Icon(args),
};

export const Padrao = { args: { nome: 'lupa', tamanho: 24 } };

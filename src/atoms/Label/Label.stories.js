import { Label } from './Label.js';

export default {
  title: 'Fase 2 - Átomos/Label',
  parameters: {
    docs: {
      description: {
        component: 'Rótulo de campo em azul-marinho, 16px / 600. Use `para` com o `id` do input.',
      },
    },
  },
  argTypes: {
    texto: { control: 'text', description: 'Texto do rótulo.' },
    para: { control: 'text', description: 'Id do campo associado (`for`).' },
    obrigatorio: { control: 'boolean', description: 'Mostra o asterisco de campo obrigatório.' },
    ocultoVisualmente: {
      control: 'boolean',
      description: 'Esconde o rótulo da tela mas o mantém para leitores de tela.',
    },
  },
  render: (args) => Label(args),
};

export const Padrao = { args: { texto: 'Nome completo', para: 'nome' } };
export const Obrigatorio = { args: { texto: 'Nome completo', para: 'nome', obrigatorio: true } };

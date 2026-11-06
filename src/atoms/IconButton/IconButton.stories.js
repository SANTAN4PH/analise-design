import { IconButton } from './IconButton.js';
import { nomesDeIcones } from '../Icon/Icon.js';

export default {
  title: 'Fase 2 - Átomos/Botão de Ícone',
  parameters: {
    docs: {
      description: {
        component:
          'Botão compacto só com ícone. **Estados:** normal (azul secundário), `:hover` (laranja), `:focus-visible` (anel azul-destaque) e `:disabled`.',
      },
    },
  },
  argTypes: {
    icone: { control: 'select', options: nomesDeIcones, description: 'Ícone exibido.' },
    rotulo: { control: 'text', description: 'Nome acessível (aria-label). Obrigatório.' },
    desabilitado: { control: 'boolean', description: 'Desativa o botão.' },
    tamanho: { control: { type: 'number', min: 12, max: 32 }, description: 'Tamanho do ícone em px.' },
  },
  render: (args) => IconButton(args),
};

export const Padrao = { args: { icone: 'lupa', rotulo: 'Pesquisar' } };
export const Desabilitado = { args: { icone: 'lupa', rotulo: 'Pesquisar', desabilitado: true } };

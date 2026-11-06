import { Button } from './Button.js';
import { h } from '../../utils/dom.js';

export default {
  title: 'Fase 2 - Átomos/Botão',
  parameters: {
    docs: {
      description: {
        component:
          'Átomo de ação. Resolve a dívida de design da Fase 1: **2 variantes** (principal laranja, secundário azul-marinho) ' +
          'e **1 regra de hover** (os dois tons trocam de lugar), no lugar das dezenas de variações de hover encontradas no site.\n\n' +
          '**Estados:** normal, `:hover`, `:focus-visible`, `:disabled`.',
      },
    },
  },
  argTypes: {
    rotulo: { control: 'text', description: 'Texto do botão.' },
    variante: {
      control: 'inline-radio',
      options: ['primario', 'secundario'],
      description: 'Principal (laranja) ou secundário (azul-marinho).',
      table: { defaultValue: { summary: 'primario' } },
    },
    tamanho: {
      control: 'inline-radio',
      options: ['sm', 'md'],
      description: 'sm = 14px / 36px de altura; md = 16px / 44px de altura.',
      table: { defaultValue: { summary: 'md' } },
    },
    larguraTotal: { control: 'boolean', description: 'Ocupa 100% da largura do container.' },
    desabilitado: { control: 'boolean', description: 'Desativa o botão (sem hover, sem clique).' },
    href: { control: 'text', description: 'Se informado, renderiza `<a>` com aparência de botão.' },
    tipo: {
      control: 'inline-radio',
      options: ['button', 'submit', 'reset'],
      description: 'Atributo `type` quando for `<button>`.',
    },
  },
  render: (args) => Button(args),
};

export const Primario = { args: { rotulo: 'Conheça Nossos Segmentos', variante: 'primario' } };

export const Secundario = { args: { rotulo: 'SAIBA MAIS', variante: 'secundario' } };

export const Desabilitado = {
  args: { rotulo: 'Indisponível', variante: 'primario', desabilitado: true },
};

export const ComoLink = {
  args: { rotulo: 'Ir para a página', variante: 'secundario', href: '#' },
};

export const TodosOsEstados = {
  name: 'Todos os estados',
  parameters: {
    docs: {
      description: {
        story:
          'Passe o mouse e use <kbd>Tab</kbd> para ver `:hover` e `:focus-visible`. Os dois botões desabilitados não reagem.',
      },
    },
  },
  render: () =>
    h(
      'div',
      { style: 'display:flex;flex-wrap:wrap;gap:16px;align-items:center' },
      Button({ rotulo: 'Principal', variante: 'primario' }),
      Button({ rotulo: 'Secundário', variante: 'secundario' }),
      Button({ rotulo: 'Principal pequeno', variante: 'primario', tamanho: 'sm' }),
      Button({ rotulo: 'Secundário pequeno', variante: 'secundario', tamanho: 'sm' }),
      Button({ rotulo: 'Principal desabilitado', variante: 'primario', desabilitado: true }),
      Button({ rotulo: 'Secundário desabilitado', variante: 'secundario', desabilitado: true }),
    ),
};

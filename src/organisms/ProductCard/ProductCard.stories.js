import { ProductCard, ProductCardGrid } from './ProductCard.js';
import { h } from '../../utils/dom.js';
import { segmentos } from '../../data/educarte.js';

export default {
  title: 'Fase 4 - Organismos/Card de Segmento',
  parameters: {
    docs: {
      description: {
        component:
          'Exibe de forma padronizada os segmentos de ensino (Fundamental I, Ensino Médio, Educação Infantil), ' +
          'unificando a hierarquia visual e **eliminando as 3 variações de hover** dos cards auditadas na Fase 1.\n\n' +
          '### Propriedades (props)\n' +
          '| Prop | Tipo | Descrição |\n|---|---|---|\n' +
          '| `titulo` | `string` | Identificador do segmento, na faixa superior em `--cor-principal`. |\n' +
          '| `descricao` | `string` | Texto informativo em `--tamanho-pequeno`, justificado. |\n' +
          '| `botao` | `{ rotulo, href }` | Ação (SAIBA MAIS): normal em `--cor-secundaria`, hover unificado em `--cor-principal`. |\n\n' +
          '### Comportamento responsivo\n' +
          '- **Desktop (> 992px):** grid de 3 colunas lado a lado.\n' +
          '- **Mobile (≤ 992px):** coluna única em 100% da largura, rolagem vertical natural e botão de 100% de largura (área de toque acessível).',
      },
    },
  },
  argTypes: {
    titulo: { control: 'text', description: 'Título do segmento.' },
    descricao: { control: 'text', description: 'Texto descritivo.' },
    botao: { control: 'object', description: 'Botão de ação: `{ rotulo, href }`.' },
  },
  args: { ...segmentos[0] },
  render: (args) => h('div', { style: 'max-width:360px' }, ProductCard(args)),
};

export const Padrao = {};

export const TextoCurto = {
  name: 'Texto curto (edge case)',
  args: {
    titulo: 'Maternal',
    descricao: 'Turmas pequenas e acolhimento individual.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Com pouco texto o botão continua alinhado na base do card (veja a story do grid).',
      },
    },
  },
};

export const GridDesktop = {
  name: 'Grid (3 colunas)',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Três cards com descrições de tamanhos diferentes: altura igualada e botões alinhados na base.',
      },
    },
  },
  render: () => ProductCardGrid({ cards: segmentos }),
};

export const GridMobile = {
  name: 'Grid (mobile)',
  parameters: {
    docs: { description: { story: 'Contêiner de 390px: os cards empilham em coluna única.' } },
  },
  render: () =>
    h('div', { style: 'max-width:390px' }, ProductCardGrid({ cards: segmentos })),
};

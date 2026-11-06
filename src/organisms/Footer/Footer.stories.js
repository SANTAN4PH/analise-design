import { Footer } from './Footer.js';
import { h } from '../../utils/dom.js';
import { rodape } from '../../data/educarte.js';

export default {
  title: 'Fase 4 - Organismos/Rodapé',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Rodapé institucional em `--cor-secundaria` com texto branco. **Um único hover** (sublinhado) para todos os links, ' +
          'no lugar das 3 variações auditadas na Fase 1 (deslocar, ficar laranja, ficar azulado).\n\n' +
          '- **Desktop (> 992px):** marca à esquerda, grupos de links à direita.\n' +
          '- **Mobile (≤ 992px):** tudo empilhado em uma coluna.',
      },
    },
  },
  argTypes: {
    marca: { control: 'text', description: 'Nome da instituição.' },
    descricao: { control: 'text', description: 'Frase institucional curta.' },
    links: { control: 'object', description: 'Links institucionais: `{ rotulo, href }[]`.' },
    contato: { control: 'object', description: 'Itens de contato: `{ rotulo, href }[]`.' },
    copyright: { control: 'text', description: 'Linha de direitos.' },
  },
  args: { ...rodape },
  render: (args) => Footer(args),
};

export const Desktop = {};

export const Mobile = {
  render: (args) => h('div', { style: 'max-width:390px' }, Footer(args)),
};

import { PageTemplate } from './PageTemplate.js';
import { montarBlueprint } from './blueprint.js';
import { h } from '../../utils/dom.js';
// O blueprint reaproveita as classes do grid de cards
import '../../organisms/ProductCard/ProductCard.css';

export default {
  title: 'Fase 5 - Templates e Páginas/Template (Blueprint)',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Esqueleto estrutural da página: define **grade, colunas e slots** para os organismos, sem conteúdo real. ' +
          'Serve para testar espaçamentos e quebras de viewport **antes** de injetar dados de produção.\n\n' +
          '### Slots\n' +
          '| Slot | Recebe |\n|---|---|\n' +
          '| `cabecalho` | Organismo Barra de Navegação |\n' +
          '| `destaque` | Organismo Hero (H1, subtítulo, botão primário) |\n' +
          '| `tituloSecao` + `secao` | Título H2 e o Grid de Cards de Segmento (3 colunas, 1 coluna ≤ 992px) |\n' +
          '| `rodape` | Organismo Rodapé Institucional |\n\n' +
          'Cada slot aceita **qualquer nó DOM**, o que garante a independência e a reutilização dos organismos.',
      },
    },
  },
  argTypes: {
    esqueleto: { control: 'boolean', description: 'Mostra o contorno tracejado dos slots (modo blueprint).' },
    tituloSecao: { control: 'text', description: 'Texto do H2 da seção.' },
    cabecalho: { control: false, description: 'Nó DOM do slot de cabeçalho.' },
    destaque: { control: false, description: 'Nó DOM do slot de destaque (hero).' },
    secao: { control: false, description: 'Nó DOM do slot da seção de cards.' },
    rodape: { control: false, description: 'Nó DOM do slot de rodapé.' },
  },
  args: { esqueleto: true },
  render: (args) => PageTemplate({ ...montarBlueprint(), ...args }),
};

export const Desktop = {};

export const Mobile = {
  parameters: {
    docs: { description: { story: 'Contêiner de 390px: o grid vira coluna única e os espaçamentos reduzem.' } },
  },
  render: (args) =>
    h('div', { style: 'max-width:390px;margin:16px' }, PageTemplate({ ...montarBlueprint(), ...args })),
};

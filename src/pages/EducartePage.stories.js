import { EducartePage } from './EducartePage.js';
import { h } from '../utils/dom.js';
import { segmentos } from '../data/educarte.js';

export default {
  title: 'Fase 5 - Templates e Páginas/Página Educarte',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Instância concreta do template com o conteúdo real da Escola Educarte: Barra de Navegação, Hero, ' +
          'Grid de Cards de Segmento e Rodapé. Valida o sistema de ponta a ponta.\n\n' +
          '### Validação do sistema\n' +
          '- **Consistência:** um único azul de texto/ação (`--cor-secundaria`), 2 variantes de botão e 1 regra de hover.\n' +
          '- **Edge cases:** descrições de tamanhos diferentes mantêm cards de mesma altura e botões alinhados.\n' +
          '- **Single Source of Truth:** use os controles da story **Tokens ao vivo** para trocar `--cor-principal` ' +
          'e `--cor-secundaria` e veja a página inteira acompanhar.',
      },
    },
  },
  argTypes: {
    tituloSecao: { control: 'text', description: 'Título H2 da seção de segmentos.' },
    cards: { control: 'object', description: 'Lista de segmentos: `{ titulo, descricao, botao }[]`.' },
  },
  render: (args) => EducartePage(args),
};

export const Desktop = {};

export const Mobile = {
  parameters: {
    docs: { description: { story: 'Contêiner de 390px: menu em gaveta, cards em coluna única, rodapé empilhado.' } },
  },
  render: (args) => h('div', { style: 'max-width:390px;margin:16px;border:1px dashed #486C8E' }, EducartePage(args)),
};

export const TextosDeTamanhosDiferentes = {
  name: 'Edge case: textos de tamanhos diferentes',
  args: {
    cards: [
      segmentos[0],
      { ...segmentos[1], descricao: 'Preparação para os principais vestibulares do país.' },
      {
        ...segmentos[2],
        descricao: `${segmentos[2].descricao} ${segmentos[2].descricao}`,
      },
    ],
  },
};

export const TokensAoVivo = {
  name: 'Tokens ao vivo (Single Source of Truth)',
  argTypes: {
    corPrincipal: { control: 'color', description: 'Sobrescreve `--cor-principal` só nesta story.' },
    corSecundaria: { control: 'color', description: 'Sobrescreve `--cor-secundaria` só nesta story.' },
  },
  args: { corPrincipal: '#F05B29', corSecundaria: '#013668' },
  render: ({ corPrincipal, corSecundaria, ...args }) => {
    const raiz = h('div', {}, EducartePage(args));
    raiz.style.setProperty('--cor-principal', corPrincipal);
    raiz.style.setProperty('--cor-secundaria', corSecundaria);
    return raiz;
  },
};

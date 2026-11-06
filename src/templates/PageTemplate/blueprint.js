import { h } from '../../utils/dom.js';
import { Button } from '../../atoms/Button/Button.js';

const caixa = (rotulo, extra = '') => h('div', { class: `ed-esboco ${extra}`.trim() }, rotulo);

const cardEsqueleto = () =>
  h(
    'div',
    { class: 'ed-esboco-card' },
    h('div', { class: 'ed-esboco-card__topo' }, 'Topo do Card (Faixa)'),
    h(
      'div',
      { class: 'ed-esboco-card__corpo' },
      h('div', { class: 'ed-esboco-linha-texto' }),
      h('div', { class: 'ed-esboco-linha-texto' }),
      h('div', { class: 'ed-esboco-linha-texto ed-esboco-linha-texto--curta' }),
    ),
    h(
      'div',
      { class: 'ed-esboco-card__acao' },
      Button({ rotulo: 'Átomo: Botão (SAIBA MAIS)', variante: 'secundario', tamanho: 'sm', larguraTotal: true }),
    ),
  );

/** Monta os slots do template com blocos neutros (sem conteúdo real). */
export function montarBlueprint() {
  return {
    cabecalho: h(
      'div',
      { class: 'ed-esboco ed-esboco--linha' },
      caixa('Organismo: Barra de Navegação [Logotipo]', 'ed-esboco--principal'),
      caixa('Itens de Menu [Navegação Principal]'),
      caixa('Molécula: Barra de Pesquisa'),
    ),
    destaque: h(
      'div',
      { class: 'ed-esboco ed-esboco--coluna' },
      h('h1', { class: 'ed-esboco' }, 'Área de Título Principal (H1)'),
      caixa('Área de Subtítulo / Descrição Institucional (Body)'),
      Button({ rotulo: 'Átomo: Botão de Ação Primária', variante: 'primario' }),
    ),
    tituloSecao: 'Título da Seção: Nossos Segmentos (H2)',
    secao: h(
      'div',
      { class: 'ed-card-grid-host' },
      h('div', { class: 'ed-card-grid' }, cardEsqueleto(), cardEsqueleto(), cardEsqueleto()),
    ),
    rodape: h(
      'div',
      { class: 'ed-esboco ed-esboco--linha' },
      caixa('Organismo: Rodapé Institucional'),
      caixa('Links Institucionais e Contato'),
    ),
  };
}

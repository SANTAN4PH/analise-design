import { h } from '../../utils/dom.js';
import './PageTemplate.css';

/**
 * Template: esqueleto da página. Define grade, colunas e SLOTS para os organismos;
 * não conhece conteúdo. Cada slot recebe qualquer nó DOM, o que mantém os organismos
 * independentes e reutilizáveis.
 *
 * Slots: cabecalho (Barra de Navegação), destaque (Hero), tituloSecao + secao (Grid de Cards), rodape.
 * Com `esqueleto: true` os slots ganham contorno tracejado (modo blueprint).
 */
export function PageTemplate({
  cabecalho,
  destaque,
  tituloSecao = 'Título da Seção',
  secao,
  rodape,
  esqueleto = false,
} = {}) {
  const slot = (nome, conteudo) =>
    h('div', { class: 'ed-template__slot', 'data-slot': nome }, conteudo);

  return h(
    'div',
    { class: 'ed-template-host' },
    h(
      'div',
      { class: esqueleto ? 'ed-template ed-template--esqueleto' : 'ed-template' },
      slot('cabecalho', cabecalho),
      h(
        'main',
        { class: 'ed-template__principal' },
        slot('destaque', destaque),
        h(
          'section',
          { class: 'ed-template__secao' },
          h('h2', { class: 'ed-template__secao-titulo' }, tituloSecao),
          slot('secao', secao),
        ),
      ),
      slot('rodape', rodape),
    ),
  );
}

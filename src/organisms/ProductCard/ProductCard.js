import { h } from '../../utils/dom.js';
import { Button } from '../../atoms/Button/Button.js';
import './ProductCard.css';

/**
 * Organismo: Card de Produto / Segmento.
 * Hierarquia única: faixa laranja com título, descrição em texto pequeno justificado
 * e botão secundário (azul-marinho) que vira laranja no hover.
 * Substitui as 3 variações de hover dos cards auditadas na Fase 1.
 *
 * Props: titulo, descricao, botao { rotulo, href }.
 */
export function ProductCard({
  titulo = 'Fundamental I',
  descricao = '',
  botao = { rotulo: 'SAIBA MAIS', href: '#' },
} = {}) {
  return h(
    'article',
    { class: 'ed-card' },
    h('header', { class: 'ed-card__topo' }, h('h3', { class: 'ed-card__titulo' }, titulo)),
    h(
      'div',
      { class: 'ed-card__corpo' },
      h('p', { class: 'ed-card__texto' }, descricao),
      Button({
        rotulo: botao.rotulo ?? 'SAIBA MAIS',
        href: botao.href ?? '#',
        variante: 'secundario',
        tamanho: 'sm',
        larguraTotal: true,
      }),
    ),
  );
}

/**
 * Grid responsivo de cards: 3 colunas lado a lado acima de 992px,
 * coluna única (100% da largura) até 992px.
 */
export function ProductCardGrid({ cards = [] } = {}) {
  return h(
    'div',
    { class: 'ed-card-grid-host' },
    h('div', { class: 'ed-card-grid' }, ...cards.map((c) => ProductCard(c))),
  );
}

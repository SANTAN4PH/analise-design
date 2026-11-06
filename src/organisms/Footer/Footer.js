import { h } from '../../utils/dom.js';
import './Footer.css';

const lista = (titulo, itens) =>
  h(
    'div',
    { class: 'ed-rodape__grupo' },
    h('h2', { class: 'ed-rodape__titulo' }, titulo),
    h(
      'ul',
      { class: 'ed-rodape__lista' },
      ...itens.map((i) =>
        h('li', {}, h('a', { class: 'ed-rodape__link', href: i.href ?? '#' }, i.rotulo)),
      ),
    ),
  );

/**
 * Organismo: Rodapé Institucional.
 * Um único comportamento de hover para todos os links (sublinhado), no lugar
 * das 3 variações encontradas no rodapé do site (deslocar, laranja, azulado).
 *
 * Props: marca, descricao, links[], contato[], copyright.
 */
export function Footer({
  marca = 'Educarte',
  descricao = '',
  links = [],
  contato = [],
  copyright = '',
} = {}) {
  return h(
    'div',
    { class: 'ed-rodape-host' },
    h(
      'footer',
      { class: 'ed-rodape' },
      h(
        'div',
        { class: 'ed-rodape__marca' },
        h('strong', { class: 'ed-rodape__nome' }, marca),
        descricao && h('p', { class: 'ed-rodape__descricao' }, descricao),
        copyright && h('small', { class: 'ed-rodape__copyright' }, copyright),
      ),
      h(
        'div',
        { class: 'ed-rodape__grupos' },
        links.length > 0 && lista('Links institucionais', links),
        contato.length > 0 && lista('Contato', contato),
      ),
    ),
  );
}

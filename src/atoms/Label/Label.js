import { h } from '../../utils/dom.js';
import './Label.css';

/** Átomo: Label. Sempre ligada a um campo via `para` (atributo `for`). */
export function Label({ texto = 'Rótulo', para, obrigatorio = false, ocultoVisualmente = false } = {}) {
  return h(
    'label',
    { class: ocultoVisualmente ? 'ed-label ed-sr-only' : 'ed-label', for: para },
    texto,
    obrigatorio && h('span', { class: 'ed-label__obrigatorio', 'aria-hidden': 'true' }, ' *'),
  );
}

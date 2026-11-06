import { h } from '../../utils/dom.js';
import './Button.css';

/**
 * Átomo: Botão. Uma única regra de hover para todo o sistema:
 * os dois tons da marca trocam de lugar (principal laranja <-> secundário azul-marinho).
 * Se `href` for informado, renderiza um link com aparência de botão.
 */
export function Button({
  rotulo = 'Botão',
  variante = 'primario',
  tamanho = 'md',
  larguraTotal = false,
  desabilitado = false,
  href,
  tipo = 'button',
} = {}) {
  const classes = [
    'ed-btn',
    `ed-btn--${variante}`,
    `ed-btn--${tamanho}`,
    larguraTotal && 'ed-btn--bloco',
  ]
    .filter(Boolean)
    .join(' ');

  if (href !== undefined && href !== null && href !== '') {
    return h(
      'a',
      {
        class: classes,
        href: desabilitado ? undefined : href,
        role: desabilitado ? 'link' : undefined,
        'aria-disabled': desabilitado ? 'true' : undefined,
        tabindex: desabilitado ? '-1' : undefined,
      },
      rotulo,
    );
  }

  return h('button', { class: classes, type: tipo, disabled: desabilitado }, rotulo);
}

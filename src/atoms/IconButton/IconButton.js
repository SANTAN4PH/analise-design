import { h } from '../../utils/dom.js';
import { Icon } from '../Icon/Icon.js';
import './IconButton.css';

/**
 * Átomo: Botão de ícone (olho da senha, lupa, limpar, hambúrguer).
 * `rotulo` é obrigatório: é o nome acessível do botão.
 */
export function IconButton({ icone = 'lupa', rotulo, tipo = 'button', desabilitado = false, tamanho = 20 } = {}) {
  return h(
    'button',
    {
      class: 'ed-icon-btn',
      type: tipo,
      'aria-label': rotulo,
      disabled: desabilitado,
    },
    Icon({ nome: icone, tamanho }),
  );
}

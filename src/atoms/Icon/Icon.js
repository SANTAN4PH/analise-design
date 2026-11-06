import { h } from '../../utils/dom.js';
import './Icon.css';

// Ícones de traço (24x24, estilo Feather, licença MIT).
const caminhos = {
  olho:
    '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  'olho-fechado':
    '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',
  lupa: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  fechar: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
};

export const nomesDeIcones = Object.keys(caminhos);

/**
 * Átomo: Ícone. Decorativo (aria-hidden); quem usa o ícone fornece o texto acessível.
 * @param {{ nome: keyof typeof caminhos, tamanho?: number }} props
 */
export function Icon({ nome = 'lupa', tamanho = 20 } = {}) {
  const span = h('span', { class: 'ed-icon', 'aria-hidden': 'true' });
  span.innerHTML =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${tamanho}" height="${tamanho}" viewBox="0 0 24 24" ` +
    `fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">` +
    `${caminhos[nome] ?? ''}</svg>`;
  return span;
}

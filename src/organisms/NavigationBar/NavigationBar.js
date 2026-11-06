import { h, uid } from '../../utils/dom.js';
import { IconButton } from '../../atoms/IconButton/IconButton.js';
import { Icon } from '../../atoms/Icon/Icon.js';
import { SearchBar } from '../../molecules/SearchBar/SearchBar.js';
import './NavigationBar.css';

const MENU_PADRAO = [
  { rotulo: 'Início', href: '#', ativo: true },
  { rotulo: 'Nossa Escola', href: '#' },
  { rotulo: 'Segmentos', href: '#' },
  { rotulo: 'Estrutura', href: '#' },
  { rotulo: 'Contato', href: '#' },
];

/**
 * Organismo: Barra de Navegação.
 *
 * Props:
 *  - logo:      { texto, href }  identidade textual com link para a home
 *  - itensMenu: [{ rotulo, href, ativo? }]  links da navegação principal
 *  - pesquisa:  props da molécula SearchBar, ou `false` para ocultá-la
 *
 * Responsivo por container query: ≤ 992px de largura do próprio componente o menu
 * vira uma gaveta aberta pelo botão hambúrguer; acima disso fica em uma única linha.
 */
export function NavigationBar({
  logo = { texto: 'Educarte', href: '#' },
  itensMenu = MENU_PADRAO,
  pesquisa = { placeholder: 'Pesquisar...' },
} = {}) {
  const idGaveta = uid('gaveta');

  const toggle = IconButton({ icone: 'menu', rotulo: 'Abrir menu', tamanho: 22 });
  toggle.classList.add('ed-navbar__toggle');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', idGaveta);

  const menu = h(
    'ul',
    { class: 'ed-navbar__menu' },
    ...itensMenu.map((item) =>
      h(
        'li',
        {},
        h(
          'a',
          {
            class: 'ed-navbar__link',
            href: item.href ?? '#',
            'aria-current': item.ativo ? 'page' : undefined,
          },
          item.rotulo,
        ),
      ),
    ),
  );

  const gaveta = h(
    'div',
    { class: 'ed-navbar__gaveta', id: idGaveta },
    h('nav', { class: 'ed-navbar__nav', 'aria-label': 'Principal' }, menu),
    pesquisa && h('div', { class: 'ed-navbar__busca' }, SearchBar(pesquisa)),
  );

  const barra = h(
    'header',
    { class: 'ed-navbar' },
    h('a', { class: 'ed-navbar__logo', href: logo.href ?? '#' }, logo.texto),
    toggle,
    gaveta,
  );

  const definirAberto = (aberto) => {
    barra.classList.toggle('is-aberto', aberto);
    toggle.setAttribute('aria-expanded', String(aberto));
    toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    toggle.replaceChildren(Icon({ nome: aberto ? 'fechar' : 'menu', tamanho: 22 }));
  };

  toggle.addEventListener('click', () => definirAberto(!barra.classList.contains('is-aberto')));
  barra.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && barra.classList.contains('is-aberto')) {
      definirAberto(false);
      toggle.focus();
    }
  });

  return h('div', { class: 'ed-navbar-host' }, barra);
}

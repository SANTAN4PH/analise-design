import { h, uid } from '../../utils/dom.js';
import { Label } from '../../atoms/Label/Label.js';
import { Input } from '../../atoms/Input/Input.js';
import { IconButton } from '../../atoms/IconButton/IconButton.js';
import './SearchBar.css';

/**
 * Molécula: Barra de Busca (Label + Input + Botões de limpar e pesquisar).
 * Responsabilidade única: capturar um termo e anunciar a pesquisa.
 * Ao enviar, dispara o evento `ed-pesquisar` (bubbles) com `detail.termo`
 * e chama `aoPesquisar(termo)` se fornecido. Quem pesquisa de verdade é o consumidor.
 */
export function SearchBar({
  rotulo = 'Pesquisar no site',
  placeholder = 'Pesquisar...',
  valor = '',
  desabilitado = false,
  aoPesquisar,
  id = uid('busca'),
} = {}) {
  const limpar = IconButton({ icone: 'fechar', rotulo: 'Limpar pesquisa', tamanho: 16, desabilitado });
  limpar.classList.add('ed-busca__limpar');

  const enviar = IconButton({ icone: 'lupa', rotulo: 'Pesquisar', tipo: 'submit', desabilitado });

  const { el, campo } = Input({
    id,
    nome: 'q',
    tipo: 'search',
    placeholder,
    valor,
    desabilitado,
    classe: 'ed-input--busca',
    acessorios: [limpar, enviar],
    atributos: { autocomplete: 'off', enterkeyhint: 'search' },
  });

  const sincronizar = () => {
    const preenchido = campo.value.trim() !== '';
    el.classList.toggle('is-preenchido', preenchido);
    limpar.hidden = !preenchido;
  };

  campo.addEventListener('input', sincronizar);
  campo.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && campo.value !== '') {
      e.preventDefault();
      campo.value = '';
      sincronizar();
    }
  });

  limpar.addEventListener('click', () => {
    campo.value = '';
    sincronizar();
    campo.focus();
  });

  const form = h(
    'form',
    { class: 'ed-busca', role: 'search' },
    Label({ texto: rotulo, para: id, ocultoVisualmente: true }),
    el,
  );

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const termo = campo.value.trim();
    form.dispatchEvent(new CustomEvent('ed-pesquisar', { bubbles: true, detail: { termo } }));
    if (typeof aoPesquisar === 'function') aoPesquisar(termo);
  });

  sincronizar();
  return form;
}

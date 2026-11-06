import { h, uid } from '../../utils/dom.js';
import { Label } from '../../atoms/Label/Label.js';
import { Input } from '../../atoms/Input/Input.js';
import { IconButton } from '../../atoms/IconButton/IconButton.js';
import { Icon } from '../../atoms/Icon/Icon.js';
import '../FormField/FormField.css';

/**
 * Molécula: Campo de Senha (Label + Input + Botão de visibilidade).
 * Responsabilidade única: coletar uma senha e permitir mostrar/ocultar o que foi digitado.
 */
export function PasswordField({
  rotulo = 'Senha',
  placeholder = '',
  valor = '',
  erro = '',
  desabilitado = false,
  id = uid('senha'),
} = {}) {
  const botao = IconButton({ icone: 'olho', rotulo: 'Mostrar senha', desabilitado });
  botao.setAttribute('aria-pressed', 'false');

  const idMensagem = `${id}-msg`;
  const { el, campo } = Input({
    id,
    nome: id,
    tipo: 'password',
    placeholder,
    valor,
    desabilitado,
    estado: erro ? 'erro' : 'padrao',
    acessorios: [botao],
    atributos: {
      autocomplete: 'current-password',
      'aria-describedby': erro ? idMensagem : undefined,
    },
  });

  botao.addEventListener('click', () => {
    const visivel = campo.type === 'password';
    campo.type = visivel ? 'text' : 'password';
    botao.setAttribute('aria-pressed', String(visivel));
    botao.setAttribute('aria-label', visivel ? 'Ocultar senha' : 'Mostrar senha');
    botao.replaceChildren(Icon({ nome: visivel ? 'olho-fechado' : 'olho' }));
    campo.focus();
  });

  return h(
    'div',
    { class: 'ed-campo' },
    Label({ texto: rotulo, para: id }),
    el,
    erro && h('p', { class: 'ed-campo__mensagem is-erro', id: idMensagem }, erro),
  );
}

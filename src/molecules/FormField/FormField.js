import { h, uid } from '../../utils/dom.js';
import { Label } from '../../atoms/Label/Label.js';
import { Input } from '../../atoms/Input/Input.js';
import './FormField.css';

/**
 * Molécula: Campo de Formulário (Label + Input + mensagem).
 * Responsabilidade única: coletar um valor de texto e comunicar ajuda ou erro.
 */
export function FormField({
  rotulo = 'Nome completo',
  placeholder = 'Digite seu nome',
  valor = '',
  tipo = 'text',
  ajuda = '',
  erro = '',
  desabilitado = false,
  obrigatorio = false,
  id = uid('campo'),
} = {}) {
  const idMensagem = `${id}-msg`;
  const mensagem = erro || ajuda;

  const { el, campo } = Input({
    id,
    nome: id,
    tipo,
    placeholder,
    valor,
    desabilitado,
    estado: erro ? 'erro' : 'padrao',
    atributos: {
      required: obrigatorio || undefined,
      'aria-describedby': mensagem ? idMensagem : undefined,
    },
  });

  return h(
    'div',
    { class: 'ed-campo' },
    Label({ texto: rotulo, para: id, obrigatorio }),
    el,
    mensagem &&
      h(
        'p',
        { class: erro ? 'ed-campo__mensagem is-erro' : 'ed-campo__mensagem', id: idMensagem },
        mensagem,
      ),
  );
}

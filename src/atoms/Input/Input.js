import { h } from '../../utils/dom.js';
import './Input.css';

/**
 * Átomo: Input. O contêiner desenha a borda, então botões (olho, lupa, limpar)
 * podem ficar "dentro" do campo via `acessorios` sem quebrar foco/hover/erro.
 *
 * Retorna `{ el, campo }`: `el` é o contêiner; `campo` é o <input> nativo.
 */
export function Input({
  id,
  nome,
  tipo = 'text',
  placeholder = '',
  valor = '',
  desabilitado = false,
  estado = 'padrao',
  classe = '',
  acessorios = [],
  atributos = {},
} = {}) {
  const campo = h('input', {
    class: 'ed-input__campo',
    id,
    name: nome,
    type: tipo,
    placeholder,
    value: valor,
    disabled: desabilitado,
    'aria-invalid': estado === 'erro' ? 'true' : undefined,
    ...atributos,
  });

  const classes = [
    'ed-input',
    estado === 'erro' && 'is-erro',
    desabilitado && 'is-desabilitado',
    classe,
  ]
    .filter(Boolean)
    .join(' ');

  const el = h('div', { class: classes }, campo, ...acessorios);
  return { el, campo };
}

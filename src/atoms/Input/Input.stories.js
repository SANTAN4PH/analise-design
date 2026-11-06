import { Input } from './Input.js';
import { h } from '../../utils/dom.js';

export default {
  title: 'Fase 2 - Átomos/Input',
  parameters: {
    docs: {
      description: {
        component:
          'Campo de texto base. O contêiner `.ed-input` desenha a borda (2px, `--azul-secundario`) para poder abrigar ícones/botões dentro do campo.\n\n' +
          '**Estados:** normal, `:hover` (borda azul-marinho), `:focus` (borda `--azul-destaque` + anel), `:disabled` e erro (`--cor-erro`).',
      },
    },
  },
  argTypes: {
    id: { control: 'text', description: 'Id do input (ligado ao `for` da Label).' },
    nome: { control: 'text', description: 'Atributo `name`.' },
    tipo: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'tel', 'number'],
      description: 'Atributo `type`.',
    },
    placeholder: { control: 'text', description: 'Texto de ajuda dentro do campo.' },
    valor: { control: 'text', description: 'Valor inicial.' },
    desabilitado: { control: 'boolean', description: 'Desativa o campo.' },
    estado: {
      control: 'inline-radio',
      options: ['padrao', 'erro'],
      description: 'Estado visual de validação.',
    },
    classe: { control: 'text', description: 'Classes extras no contêiner (modificadores).' },
    acessorios: { control: false, description: 'Elementos DOM exibidos à direita, dentro da borda.' },
    atributos: { control: false, description: 'Atributos extras repassados ao `<input>`.' },
  },
  render: (args) => Input({ id: 'input-demo', ...args }).el,
};

export const Padrao = { args: { placeholder: 'Digite seu nome' } };
export const Preenchido = { args: { valor: 'Samuel' } };
export const Desabilitado = { args: { valor: 'Campo bloqueado', desabilitado: true } };
export const Erro = { args: { valor: 'abc', estado: 'erro' } };

export const TodosOsEstados = {
  name: 'Todos os estados',
  render: () =>
    h(
      'div',
      { style: 'display:grid;gap:16px;max-width:420px' },
      Input({ id: 'e1', placeholder: 'Normal' }).el,
      Input({ id: 'e2', valor: 'Preenchido' }).el,
      Input({ id: 'e3', valor: 'Desabilitado', desabilitado: true }).el,
      Input({ id: 'e4', valor: 'Com erro', estado: 'erro' }).el,
    ),
  parameters: {
    docs: { description: { story: 'Clique em um campo para ver o foco e passe o mouse para ver o hover.' } },
  },
};

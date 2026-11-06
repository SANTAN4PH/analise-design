import { FormField } from './FormField.js';
import { h } from '../../utils/dom.js';

export default {
  title: 'Fase 3 - Moléculas/Campo de Formulário',
  parameters: {
    docs: {
      description: {
        component:
          '**Combinação:** Label + Input (+ mensagem de ajuda/erro).\n\n' +
          '**Responsabilidade (SOLID):** coletar um valor de texto. Não valida regras de negócio; quem usa decide quando passar `erro`.\n\n' +
          '**Estados:** normal, `:hover`, `:focus`, preenchido, `:disabled` e erro.',
      },
    },
  },
  argTypes: {
    rotulo: { control: 'text', description: 'Texto da Label.' },
    placeholder: { control: 'text', description: 'Texto de ajuda dentro do campo.' },
    valor: { control: 'text', description: 'Valor inicial.' },
    tipo: {
      control: 'select',
      options: ['text', 'email', 'tel', 'number'],
      description: 'Atributo `type` do input.',
    },
    ajuda: { control: 'text', description: 'Texto de apoio abaixo do campo.' },
    erro: { control: 'text', description: 'Mensagem de erro. Quando preenchida, o campo entra em estado de erro.' },
    desabilitado: { control: 'boolean', description: 'Desativa o campo.' },
    obrigatorio: { control: 'boolean', description: 'Marca o campo como obrigatório.' },
    id: { control: 'text', description: 'Id do input. Gerado automaticamente se omitido.' },
  },
  render: (args) => FormField(args),
};

export const Padrao = { args: { rotulo: 'Nome completo', placeholder: 'Digite seu nome' } };
export const Preenchido = { args: { rotulo: 'Nome completo', valor: 'Samuel' } };
export const ComAjuda = {
  args: { rotulo: 'E-mail', tipo: 'email', placeholder: 'nome@exemplo.com', ajuda: 'Usaremos para responder seu contato.' },
};
export const ComErro = {
  args: { rotulo: 'E-mail', tipo: 'email', valor: 'samuel@', erro: 'Informe um e-mail válido.', obrigatorio: true },
};
export const Desabilitado = {
  args: { rotulo: 'Matrícula', valor: '2026-0042', desabilitado: true },
};

export const TodosOsEstados = {
  name: 'Todos os estados',
  render: () =>
    h(
      'div',
      { style: 'display:grid;gap:24px' },
      FormField({ rotulo: 'Normal', placeholder: 'Digite seu nome' }),
      FormField({ rotulo: 'Preenchido', valor: 'Samuel' }),
      FormField({ rotulo: 'Desabilitado', valor: 'Campo bloqueado', desabilitado: true }),
      FormField({ rotulo: 'Com erro', valor: 'abc', erro: 'Campo inválido.' }),
    ),
};

import { expect, userEvent, within } from 'storybook/test';
import { PasswordField } from './PasswordField.js';
import { h } from '../../utils/dom.js';

export default {
  title: 'Fase 3 - Moléculas/Campo de Senha',
  parameters: {
    docs: {
      description: {
        component:
          '**Combinação:** Label + Input + Botão de olho (átomos).\n\n' +
          '**Responsabilidade (SOLID):** coletar uma senha e alternar sua visibilidade. Nada além disso.\n\n' +
          '**Estados:** normal, `:hover`, `:focus`, `:disabled`, erro, senha oculta e senha visível. ' +
          'O botão informa seu estado para leitores de tela via `aria-pressed` e `aria-label`.',
      },
    },
  },
  argTypes: {
    rotulo: { control: 'text', description: 'Texto da Label.' },
    placeholder: { control: 'text', description: 'Texto de ajuda dentro do campo.' },
    valor: { control: 'text', description: 'Valor inicial.' },
    erro: { control: 'text', description: 'Mensagem de erro. Quando preenchida, o campo entra em estado de erro.' },
    desabilitado: { control: 'boolean', description: 'Desativa o campo e o botão.' },
    id: { control: 'text', description: 'Id do input. Gerado automaticamente se omitido.' },
  },
  render: (args) => PasswordField(args),
};

export const Padrao = { args: { rotulo: 'Senha', valor: 'senha123' } };

export const ComErro = {
  args: { rotulo: 'Senha', valor: '123', erro: 'A senha deve ter pelo menos 8 caracteres.' },
};

export const Desabilitado = { args: { rotulo: 'Senha', valor: 'senha123', desabilitado: true } };

export const AlternarVisibilidade = {
  name: 'Teste: alternar visibilidade',
  args: { rotulo: 'Senha', valor: 'senha123' },
  parameters: {
    docs: {
      description: {
        story: 'Teste de interação: clica no olho e verifica que o campo troca entre `password` e `text`.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const campo = canvas.getByLabelText('Senha');
    const botao = canvas.getByRole('button', { name: 'Mostrar senha' });

    await expect(campo).toHaveAttribute('type', 'password');
    await userEvent.click(botao);
    await expect(campo).toHaveAttribute('type', 'text');
    await expect(botao).toHaveAttribute('aria-label', 'Ocultar senha');
    await userEvent.click(botao);
    await expect(campo).toHaveAttribute('type', 'password');
  },
};

export const TodosOsEstados = {
  name: 'Todos os estados',
  render: () =>
    h(
      'div',
      { style: 'display:grid;gap:24px' },
      PasswordField({ rotulo: 'Normal', placeholder: 'Digite sua senha' }),
      PasswordField({ rotulo: 'Preenchido', valor: 'senha123' }),
      PasswordField({ rotulo: 'Desabilitado', valor: 'senha123', desabilitado: true }),
      PasswordField({ rotulo: 'Com erro', valor: '123', erro: 'Senha muito curta.' }),
    ),
};

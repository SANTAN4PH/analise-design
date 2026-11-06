import { expect, userEvent, within } from 'storybook/test';
import { SearchBar } from './SearchBar.js';
import { h } from '../../utils/dom.js';

export default {
  title: 'Fase 3 - Moléculas/Barra de Busca',
  parameters: {
    docs: {
      description: {
        component:
          '**Combinação:** Label (oculta visualmente) + Input + Botão de limpar + Botão de lupa.\n\n' +
          '**Responsabilidade (SOLID):** capturar um termo e anunciar a pesquisa por meio do evento `ed-pesquisar` ' +
          '(ou do callback `aoPesquisar`). Ela **não** sabe pesquisar: isso fica com quem a usa.\n\n' +
          '**Estados:** normal, `:hover`, `:focus` (borda azul-destaque), preenchido (borda laranja + botão limpar), `:disabled`. ' +
          '`Esc` limpa o campo.',
      },
    },
  },
  argTypes: {
    rotulo: { control: 'text', description: 'Texto da Label (oculta visualmente, lida por leitores de tela).' },
    placeholder: { control: 'text', description: 'Texto de ajuda dentro do campo.' },
    valor: { control: 'text', description: 'Termo inicial.' },
    desabilitado: { control: 'boolean', description: 'Desativa o campo e os botões.' },
    aoPesquisar: { control: false, description: 'Callback `(termo: string) => void` chamado no envio.' },
    id: { control: 'text', description: 'Id do input. Gerado automaticamente se omitido.' },
  },
  render: (args) => h('div', { style: 'max-width:520px' }, SearchBar(args)),
};

export const Padrao = { args: { placeholder: 'Pesquisar...' } };
export const Preenchida = { args: { valor: 'Ensino Médio' } };
export const Desabilitada = { args: { valor: 'Ensino Médio', desabilitado: true } };

export const DigitarELimpar = {
  name: 'Teste: digitar e limpar',
  parameters: {
    docs: {
      description: {
        story: 'Teste de interação: digita um termo, confere o botão de limpar e depois limpa o campo.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const campo = canvas.getByRole('searchbox');
    const limpar = canvas.getByRole('button', { name: 'Limpar pesquisa', hidden: true });

    await expect(limpar).not.toBeVisible();
    await userEvent.type(campo, 'Ensino Médio');
    await expect(campo).toHaveValue('Ensino Médio');
    await expect(limpar).toBeVisible();
    await userEvent.click(limpar);
    await expect(campo).toHaveValue('');
    await expect(limpar).not.toBeVisible();
  },
};

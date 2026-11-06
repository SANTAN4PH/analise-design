import { expect, userEvent, within } from 'storybook/test';
import { NavigationBar } from './NavigationBar.js';
import { h } from '../../utils/dom.js';
import { itensMenu, logo } from '../../data/educarte.js';

export default {
  title: 'Fase 4 - Organismos/Barra de Navegação',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Organismo que combina **Logo + Itens de menu + molécula Barra de Busca (+ botão hambúrguer no mobile)**. ' +
          'Resolve o problema da Fase 1 (botões em 3 linhas e 3 tons de azul): linha única, **um** azul (`--cor-secundaria`) e **um** hover.\n\n' +
          '### Propriedades (props)\n' +
          '| Prop | Tipo | Descrição |\n|---|---|---|\n' +
          '| `logo` | `{ texto, href }` | Identidade textual da instituição, com link para a home. |\n' +
          '| `itensMenu` | `{ rotulo, href, ativo? }[]` | Links da navegação principal. O item `ativo` recebe `aria-current="page"`. |\n' +
          '| `pesquisa` | props de `SearchBar` ou `false` | Molécula de busca da Fase 3. `false` a oculta. |\n\n' +
          '### Comportamento responsivo\n' +
          '- **Desktop (> 992px):** tudo alinhado em uma linha horizontal.\n' +
          '- **Mobile (≤ 992px):** o menu colapsa em uma gaveta vertical aberta pelo botão hambúrguer, com links e busca em 100% da largura. `Esc` fecha a gaveta.\n\n' +
          'A largura é medida no **próprio componente** (container query), por isso as duas variações aparecem lado a lado nesta documentação.',
      },
    },
  },
  argTypes: {
    logo: { control: 'object', description: 'Logo textual: `{ texto, href }`.' },
    itensMenu: { control: 'object', description: 'Lista de links: `{ rotulo, href, ativo? }[]`.' },
    pesquisa: { control: 'object', description: 'Props da `SearchBar` ou `false` para ocultar.' },
  },
  args: { logo, itensMenu, pesquisa: { placeholder: 'Pesquisar...' } },
  render: (args) => NavigationBar(args),
};

export const Desktop = {
  parameters: {
    docs: { description: { story: 'Largura acima de 992px: linha única horizontal.' } },
  },
};

export const Mobile = {
  parameters: {
    docs: {
      description: {
        story:
          'Largura até 992px (aqui, 390px): menu recolhido. Clique no hambúrguer para abrir a gaveta.',
      },
    },
  },
  render: (args) =>
    h(
      'div',
      { style: 'max-width:390px;border:1px dashed #486C8E;margin:16px' },
      NavigationBar(args),
    ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const abrir = canvas.getByRole('button', { name: 'Abrir menu' });
    const link = canvas.getByRole('link', { name: 'Nossa Escola', hidden: true });

    await expect(abrir).toHaveAttribute('aria-expanded', 'false');
    await expect(link).not.toBeVisible();

    await userEvent.click(abrir);

    await expect(canvas.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    await expect(link).toBeVisible();
  },
};

export const SemPesquisa = {
  name: 'Sem pesquisa',
  args: { pesquisa: false },
};

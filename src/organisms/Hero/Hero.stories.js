import { Hero } from './Hero.js';
import { hero } from '../../data/educarte.js';

export default {
  title: 'Fase 4 - Organismos/Destaque (Hero)',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Seção de destaque da página: **H1 + subtítulo + botão de ação primária** (laranja). ' +
          'Usado no slot `hero` do template da Fase 5.',
      },
    },
  },
  argTypes: {
    titulo: { control: 'text', description: 'Título principal (H1).' },
    subtitulo: { control: 'text', description: 'Descrição institucional.' },
    botao: { control: 'object', description: 'Botão de ação primária: `{ rotulo, href }`. `null` oculta.' },
  },
  args: { ...hero },
  render: (args) => Hero(args),
};

export const Padrao = {};
export const SemBotao = { name: 'Sem botão', args: { botao: null } };

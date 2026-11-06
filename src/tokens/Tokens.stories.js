import { h } from '../utils/dom.js';
import { contraste, tokensDoGrupo } from './parseTokens.js';
import './tokens-docs.css';

export default {
  title: 'Fase 2 - Design Tokens/Visão geral',
  parameters: {
    docs: {
      description: {
        component:
          'Os tokens abaixo são lidos diretamente de `src/tokens/variables.css`, a **Single Source of Truth** do sistema. ' +
          'Alterar um valor nesse arquivo atualiza esta documentação e todos os componentes.',
      },
    },
  },
};

const linhaCor = ({ nome, valor }) => {
  const ehHex = /^#[0-9a-f]{6}$/i.test(valor);
  const sobreBranco = ehHex ? contraste(valor, '#FFFFFF') : null;
  const sobreEscuro = ehHex ? contraste(valor, '#013668') : null;

  return h(
    'li',
    { class: 'tk-cor' },
    h('span', { class: 'tk-cor__amostra', style: `background: var(${nome})` }),
    h(
      'div',
      { class: 'tk-cor__info' },
      h('code', {}, nome),
      h('span', {}, valor),
      ehHex &&
        h(
          'small',
          {},
          `Contraste com branco ${sobreBranco.toFixed(1)}:1 · com azul-marinho ${sobreEscuro.toFixed(1)}:1`,
        ),
    ),
  );
};

export const Cores = {
  name: 'Cores',
  render: () =>
    h('ul', { class: 'tk-lista' }, ...tokensDoGrupo('CORES', 'CORES DE APOIO').map(linhaCor)),
  parameters: {
    docs: {
      description: {
        story:
          'Paleta primária (laranja), secundária (azul-marinho), neutros e azuis de apoio. ' +
          'Regra herdada da auditoria: **ação principal = laranja; ação secundária = azul-marinho**; ' +
          'os dois outros azuis têm uso restrito (`--azul-secundario` em bordas/ícones, `--azul-destaque` em foco e links).',
      },
    },
  },
};

export const Tipografia = {
  name: 'Tipografia',
  render: () => {
    const tamanhos = tokensDoGrupo('ESCALA TIPOGRÁFICA');
    const pesos = {
      h1: 'negrito',
      h2: 'negrito',
      h3: 'semi-negrito',
      h4: 'semi-negrito',
      corpo: 'regular',
      pequeno: 'regular',
    };

    return h(
      'ul',
      { class: 'tk-lista' },
      ...tamanhos.map(({ nome, valor }) => {
        const chave = nome.replace('--tamanho-', '');
        return h(
          'li',
          { class: 'tk-tipo' },
          h('code', {}, `${nome}: ${valor}`),
          h(
            'span',
            {
              class: 'tk-tipo__amostra',
              style: `font-size: var(${nome}); font-weight: var(--peso-${pesos[chave]});`,
            },
            'Educação com Excelência e Valores Humanos',
          ),
        );
      }),
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Família **Montserrat**. H1 e H2 usam peso 700; H3 e H4 peso 600; corpo e small peso 400.',
      },
    },
  },
};

export const Espacamento = {
  name: 'Espaçamento',
  render: () =>
    h(
      'ul',
      { class: 'tk-lista' },
      ...tokensDoGrupo('ESCALA DE ESPAÇAMENTO').map(({ nome, valor }) =>
        h(
          'li',
          { class: 'tk-espaco' },
          h('code', {}, `${nome}: ${valor}`),
          h('span', { class: 'tk-espaco__barra', style: `width: var(${nome})` }),
        ),
      ),
    ),
  parameters: {
    docs: {
      description: {
        story: 'Escala de 8px usada em margens, paddings e gaps de todos os componentes.',
      },
    },
  },
};

export const RaiosEEfeitos = {
  name: 'Raios e efeitos',
  render: () =>
    h(
      'ul',
      { class: 'tk-lista' },
      ...tokensDoGrupo('RAIOS E EFEITOS').map(({ nome, valor }) =>
        h('li', { class: 'tk-tipo' }, h('code', {}, nome), h('span', {}, valor)),
      ),
    ),
  parameters: {
    docs: {
      description: {
        story: 'Tokens de apoio criados nas Fases 3 a 5 (raios, transição e anel de foco).',
      },
    },
  },
};

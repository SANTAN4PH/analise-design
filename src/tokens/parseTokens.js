// Lê o próprio variables.css (?raw) para que a documentação nunca fique
// fora de sincronia com os tokens: quem muda o CSS muda o Storybook.
import css from './variables.css?raw';

/**
 * @returns {{ grupo: string, tokens: { nome: string, valor: string }[] }[]}
 */
export function parseTokens(source = css) {
  const grupos = [];
  let atual = null;

  for (const linha of source.split('\n')) {
    const comentario = linha.match(/^\s*\/\*\s*(.+?)\s*\*\/\s*$/);
    if (comentario && /^[A-ZÀ-Ú\s]+$/.test(comentario[1])) {
      atual = { grupo: comentario[1], tokens: [] };
      grupos.push(atual);
      continue;
    }

    const token = linha.match(/^\s*(--[\w-]+)\s*:\s*([^;]+);/);
    if (token && atual) {
      atual.tokens.push({ nome: token[1], valor: token[2].trim() });
    }
  }

  return grupos;
}

export function tokensDoGrupo(...nomes) {
  return parseTokens()
    .filter((g) => nomes.includes(g.grupo))
    .flatMap((g) => g.tokens);
}

/** Razão de contraste WCAG entre duas cores hexadecimais (#RRGGBB). */
export function contraste(hexA, hexB) {
  const lum = (hex) => {
    const [r, g, b] = [1, 3, 5]
      .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const [maior, menor] = [lum(hexA), lum(hexB)].sort((a, b) => b - a);
  return (maior + 0.05) / (menor + 0.05);
}

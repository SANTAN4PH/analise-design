/**
 * Helper mínimo para criar elementos DOM (HTML + JS puro, como nas Fases 3 e 4).
 * Atributos `false`, `null` e `undefined` são ignorados; `true` vira atributo vazio.
 */
export function h(tag, props = {}, ...children) {
  const el = document.createElement(tag);

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null || value === false) continue;

    if (key === 'class') {
      el.className = value;
    } else if (key.startsWith('on') && typeof value === 'function') {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (value === true) {
      el.setAttribute(key, '');
    } else {
      el.setAttribute(key, String(value));
    }
  }

  el.append(
    ...children.flat().filter((c) => c !== null && c !== undefined && c !== false),
  );
  return el;
}

let counter = 0;

/** Gera ids únicos para ligar label/input/mensagens (aria-describedby). */
export function uid(prefix = 'ed') {
  counter += 1;
  return `${prefix}-${counter}`;
}

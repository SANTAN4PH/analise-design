import { h } from '../../utils/dom.js';
import { Button } from '../../atoms/Button/Button.js';
import './Hero.css';

/**
 * Organismo: Destaque (Hero). Título H1, subtítulo e botão de ação primária.
 * Props: titulo, subtitulo, botao { rotulo, href }.
 */
export function Hero({
  titulo = 'Educação com Excelência e Valores Humanos',
  subtitulo = '',
  botao = { rotulo: 'Conheça Nossos Segmentos', href: '#' },
} = {}) {
  return h(
    'section',
    { class: 'ed-hero' },
    h(
      'div',
      { class: 'ed-hero__conteudo' },
      h('h1', { class: 'ed-hero__titulo' }, titulo),
      subtitulo && h('p', { class: 'ed-hero__subtitulo' }, subtitulo),
      botao && Button({ rotulo: botao.rotulo, href: botao.href ?? '#', variante: 'primario' }),
    ),
  );
}

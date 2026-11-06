import { PageTemplate } from '../templates/PageTemplate/PageTemplate.js';
import { NavigationBar } from '../organisms/NavigationBar/NavigationBar.js';
import { Hero } from '../organisms/Hero/Hero.js';
import { ProductCardGrid } from '../organisms/ProductCard/ProductCard.js';
import { Footer } from '../organisms/Footer/Footer.js';
import { hero, itensMenu, logo, rodape, segmentos } from '../data/educarte.js';

/**
 * Página: instância do PageTemplate preenchida com o conteúdo real da Escola Educarte.
 * Nenhum estilo novo aqui. Tudo vem dos organismos e de variables.css.
 */
export function EducartePage({
  tituloSecao = 'Nossos Segmentos de Ensino',
  cards = segmentos,
} = {}) {
  return PageTemplate({
    cabecalho: NavigationBar({ logo, itensMenu, pesquisa: { placeholder: 'Pesquisar...' } }),
    destaque: Hero(hero),
    tituloSecao,
    secao: ProductCardGrid({ cards }),
    rodape: Footer(rodape),
  });
}

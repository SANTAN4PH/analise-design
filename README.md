# Educarte Design System

Design System da **Escola Educarte**, documentado no **Storybook**. O projeto nasceu da auditoria de interface do site [escolaeducarte.com.br](https://escolaeducarte.com.br) e segue o **Atomic Design**: tokens, átomos, moléculas, organismos, template e página.

O Storybook é a ponte Dev-Designer: cada componente aparece isolado, com controles, estados, props e comportamento responsivo.

- **Repositório:** https://github.com/SANTAN4PH/analise-design
- **Storybook publicado:** [_cole aqui o link do GitHub Pages (veja "Publicar" abaixo)_](https://santan4ph.github.io/analise-design/?path=/docs/introdu%C3%A7%C3%A3o-bem-vindo--docs)

---

## Como executar

### Requisitos

- [Node.js](https://nodejs.org) **20.19 ou superior** (recomendado: 22 LTS)
- npm (já vem com o Node)

### Passo a passo

```bash
# 1. Clone o repositório e entre na pasta
git clone <link-do-repositorio>
cd educarte-design-system

# 2. Instale as dependências
npm install

# 3. Inicie o Storybook
npm run storybook
```

O Storybook abre em **http://localhost:6006**.

### Gerar o site estático

```bash
npm run build-storybook     # gera a pasta storybook-static/
npm run serve-static        # opcional: serve a pasta em http://localhost:6006
```

`storybook-static/` é um site completo (HTML, CSS e JS) que pode ser hospedado em qualquer lugar.

---

## O que tem em cada fase

| Fase | Entrega | Onde ver no Storybook |
|---|---|---|
| 1. Auditoria e Caos | Inconsistências, cálculo da dívida (5 componentes) e inventário visual | **Fase 1 - Auditoria** |
| 2. Átomos e Design Tokens | `variables.css`, paleta, escala tipográfica, espaçamentos; Botão, Input, Label, Ícone, Botão de Ícone | **Fase 2 - Design Tokens** e **Fase 2 - Átomos** |
| 3. Moléculas Funcionais | Campo de Formulário, Campo de Senha, Barra de Busca, com `:hover`, `:focus`, `:disabled` e erro | **Fase 3 - Moléculas** |
| 4. Organismos e Reuso | Barra de Navegação, Card de Segmento, Hero e Rodapé, com props e responsividade | **Fase 4 - Organismos** |
| 5. Do Blueprint à Página | Template (esqueleto com slots) e Página Educarte com dados reais | **Fase 5 - Templates e Páginas** |

Os PDFs originais de cada fase estão em [`docs/fases/`](docs/fases).

---

## Estrutura do projeto

```
educarte-design-system/
├── storybook-config/       # configuração do Storybook (main, preview, fonte Montserrat)
├── .github/workflows/      # publicação automática no GitHub Pages
├── docs/fases/             # PDFs das 5 fases
├── public/fase1/           # capturas da auditoria usadas na documentação
└── src/
    ├── tokens/             # variables.css (Single Source of Truth) + docs dos tokens
    ├── styles/             # reset e tipografia base
    ├── atoms/              # Button, Input, Label, Icon, IconButton
    ├── molecules/          # FormField, PasswordField, SearchBar
    ├── organisms/          # NavigationBar, ProductCard, Hero, Footer
    ├── templates/          # PageTemplate (+ modo blueprint)
    ├── pages/              # EducartePage (template com dados reais)
    ├── data/               # conteúdo real da escola usado nas stories
    └── docs/               # páginas MDX: Introdução, Fase 1, Governança
```

Cada componente tem uma pasta com `Componente.js`, `Componente.css` e `Componente.stories.js`.

---

## Design Tokens (Single Source of Truth)

Todos os valores visuais estão em [`src/tokens/variables.css`](src/tokens/variables.css). Os componentes **nunca** usam cores ou medidas fixas.

| Grupo | Tokens |
|---|---|
| Cores | `--cor-principal` (#F05B29), `--cor-secundaria` (#013668), `--azul-secundario` (#486C8E), `--azul-destaque` (#1D67CD), `--branco` |
| Tipografia | Montserrat; H1 40px/700, H2 32px/700, H3 24px/600, H4 20px/600, corpo 16px/400, pequeno 14px/400 |
| Espaçamento | 8, 16, 24 e 32px |

Tokens adicionados nas Fases 3 a 5, porque a paleta original não cobria esses casos: `--cor-erro`, `--cor-superficie`, `--raio-pequeno`, `--raio-medio`, `--transicao-rapida` e `--foco-anel`.

Para ver o efeito da fonte única, abra **Fase 5 / Página Educarte / Tokens ao vivo** e troque as cores pelo painel Controls.

---

## Decisões de design

- **Regra de cor das ações:** principal = laranja, secundária = azul-marinho.
- **Um hover por tipo de componente:** botões trocam entre os dois tons da marca; links da barra de navegação ficam laranja com sublinhado; links do rodapé ganham sublinhado. Isso substitui as várias variações auditadas na Fase 1.
- **Responsividade pelo componente:** o ponto de quebra de **992px** é medido com _container queries_ na largura do próprio componente. Em uma página de largura total isso equivale à largura da janela, e no Storybook permite mostrar desktop e mobile lado a lado.
- **Moléculas com responsabilidade única (SOLID):** o Campo de Senha só alterna visibilidade; a Barra de Busca só captura o termo e dispara o evento `ed-pesquisar`.

---

## Testes e acessibilidade

- Stories marcadas com **Teste** (Campo de Senha, Barra de Busca, Barra de Navegação no mobile) têm interações automáticas visíveis no painel **Interactions**.
- O painel **Accessibility** está ativo. O texto branco sobre o laranja da marca tem contraste de ~3,4:1, abaixo dos 4,5:1 exigidos para texto pequeno no nível AA, então ele aparece como aviso. Se a marca puder escurecer o laranja, basta mudar `--cor-principal`.

---

## Publicar o Storybook (GitHub Pages)

O workflow [`.github/workflows/storybook.yml`](.github/workflows/storybook.yml) gera o site a cada push na branch `main`.

1. Envie o projeto para um repositório no GitHub.
2. No repositório, abra **Settings → Pages** e em **Source** escolha **GitHub Actions**.
3. Faça um push na `main`. Quando o workflow terminar, o site fica em `https://<seu-usuario>.github.io/<nome-do-repositorio>/`.

---

## Governança

As regras para criar ou alterar componentes estão na página **Governança / Guia de Contribuição** do Storybook.

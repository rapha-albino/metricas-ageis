# Brief de design e implementação — site de *Métricas Ágeis*

## Decisão de produto

O MVP será um site editorial estático, de página única, com uma página própria para o artigo já publicado sobre métricas de fluxo. A experiência começa pela dor de tentar fazer coisas demais ao mesmo tempo, torna visível o sistema de trabalho e apresenta o livro como repertório fundamental. O curso é o próximo passo para quem quer levar esse repertório à prática.

Não é uma página de produtividade, de controle de desempenho individual ou uma vitrine genérica de cursos. É uma casa para uma ideia que atravessa o livro e o trabalho posterior de Raphael: **medir para enxergar o sistema, não para cobrar pessoas**.

A compra do livro permanece acessível em toda a experiência, mas a conversão prioritária é a ida à página do curso na Software Zen.

## Referências

Três sites de autor examinados, com uma lição prática cada.

**Shape Up, de Ryan Singer, na Basecamp.** Serifada grande, tinta escura sobre branco, nenhuma cor decorativa e desenhos de linha como identidade visual. A hierarquia mais interessante está nos dois botões de mesmo peso, comprar a edição impressa e começar a ler. A lição: oferecer leitura ao lado da compra aumenta a confiança em vez de canibalizar a venda.

**Team Topologies, de Matthew Skelton e Manuel Pais.** Cabeçalho azul-noite, corpo branco, sans grande, capa como herói, e o site funcionando como porta de entrada para treinamento e certificação. É o caso mais próximo do nosso. A lição: a passagem do livro para o programa pago precisa estar declarada como continuidade, não como anúncio no rodapé. O que recusamos é a quantidade de caminhos simultâneos deles, que dilui a leitura.

**Atomic Habits, de James Clear.** Já examinado no benchmark de *Antes de Mim*: a promessa fica legível antes de qualquer detalhe. Aqui isso significa que, em uma tela de celular, a pessoa precisa entender que o livro ensina a medir fluxo sem transformar número em cobrança.

## Direção visual

### Sensação

Clara, técnica, humana e sóbria. O site deve fazer números parecerem legíveis e discutíveis — não frios, opressivos ou excessivamente corporativos.

A referência é uma boa visualização de dados: estrutura nítida, hierarquia, espaço em branco e informação que ajuda a decidir. A capa, os gráficos originais e o texto sustentam a identidade. Não usar ilustrações decorativas de pessoas em reunião, dashboards fictícios ou ícones de produtividade.

### Princípios

- **Sistema antes de indivíduo:** evitar qualquer imagem, texto ou microinteração que remeta a ranking, vigilância ou competição entre pessoas.
- **Evidência antes de promessa:** gráficos reais do livro e afirmações verificáveis têm precedência sobre slogans comerciais.
- **Leitura antes de densidade:** uma pessoa precisa entender a tese, o livro e os caminhos seguintes em celular, sem encontrar um painel de controle.
- **Dados como linguagem editorial:** linhas, faixas, pontos e grades discretas podem organizar o layout, sem simular um dashboard.
- **Acessibilidade como qualidade da informação:** contraste, foco visível, conteúdo textual para gráficos e respeito a preferências de movimento são requisitos do produto.

### Paleta

Extraída da capa publicada, que é branca com círculo azul-claro, cunha turquesa na lateral, título em azul quase preto e cartões ilustrados em verde, laranja e vermelho. As amostras foram medidas na imagem da capa, não estimadas.

| Token | Hex | Papel |
| --- | --- | --- |
| `--tinta` | `#14212B` | texto corrido e títulos |
| `--tinta-suave` | `#46586A` | legendas, metadados, texto secundário |
| `--papel` | `#F8FAFB` | fundo geral, branco levemente frio |
| `--nevoa` | `#E7F3F5` | blocos destacados, citações, fundo de gráfico |
| `--turquesa` | `#2F8FA8` | cor de marca, traços de gráfico, bordas e ícones |
| `--turquesa-profundo` | `#1C5C70` | links, botões sólidos e texto sobre névoa |
| `--limao` | `#7FA828` | detalhe de dado, marcador de percentil, sublinhado fino |

Contrastes calculados: tinta sobre papel, cerca de 15:1; turquesa profundo sobre papel, 7,1:1, aprovado inclusive em AAA para texto corrido; branco sobre turquesa profundo, 7,4:1. O turquesa puro dá 3,6:1, então serve para traço, borda e ícone, nunca para texto pequeno. O limão dá 2,7:1 e é proibido em texto, só grafismo.

**Laranja fica de fora, de propósito.** A capa tem cartões laranja, mas laranja é a cor da Casa do Código e do cabeçalho da loja. Usar laranja como ênfase faria o site parecer uma página da editora, e não do livro. A cor de ação é o turquesa profundo.

Mantida a regra anterior: não usar vermelho e verde como única forma de comunicar estado, nem depender de cor para explicar gráfico. Os gráficos do livro já acertam nisso ao distinguir séries por tom de cinza e rótulo direto, nunca por matiz; qualquer redesenho deve preservar essa escolha, não substituí-la pela paleta de marca. Sem tema escuro no MVP, com os tokens já nascendo como variáveis CSS.

### Tipografia

- **Interface e texto corrido:** sans-serif de alta legibilidade, como Inter, Source Sans 3 ou IBM Plex Sans.
- **Títulos e números de destaque:** a mesma família, com pesos e escala bem definidos; evitar uma serifada apenas como ornamento.
- **Dados e fórmulas, quando necessário:** uma monoespaçada pontual, como IBM Plex Mono, apenas para rótulos, valores ou exemplos técnicos.

Usar fontes abertas, hospedadas localmente ou via fonte confiável. O texto corrido não deve ultrapassar uma largura confortável de leitura.

**Proposta a decidir, mono como assinatura.** Em vez de usar a monoespaçada apenas em rótulos técnicos, adotá-la para todo número exibido na página: percentis, prazos, preço, ano de publicação, número de páginas e a média do Goodreads. Custa quase nada implementar, nenhum site de livro brasileiro faz isso, e dá identidade coerente a um site sobre medição. Se a resposta for não, mantém-se o uso pontual descrito acima.

## Arquitetura de informação

### Rotas

```text
/                              página inicial
/artigos/metricas-de-fluxo     artigo: medir para enxergar o sistema
/privacidade/                  política de privacidade, se houver analytics
/404                           página de ausência
```

A página inicial contém âncoras para `#problema`, `#livro`, `#atualizacao`, `#leitores`, `#curso` e `#adquirir`.

Os outros dois artigos previstos no mapa editorial não ganham rota ou card público antes de existirem. Quando publicados, entram em `/artigos/` com uma listagem editorial mínima, sem transformar o MVP em blog.

### Página inicial

| Seção | Responsabilidade |
| --- | --- |
| `Header` | Marca do livro, âncoras e CTA persistente para aquisição; menu mobile expansível. |
| `Hero` | A pergunta sobre excesso de trabalho em andamento, tese curta, capa e CTAs para livro e curso. |
| `ProblemSection` | Nomeia os sintomas de um sistema invisível: urgências concorrentes, trocas de contexto, ocupação sem término. |
| `BookSection` | Situa o livro, seus temas e para quem ele foi escrito; mostra os gráficos reais selecionados. |
| `PrincipleCallout` | Afirma de modo inequívoco que métricas servem ao processo, não à cobrança de pessoas. |
| `WhatChangedSection` | Conecta os fundamentos de 2017 a métricas de entrega de engenharia, indicadores de negócio e Dynamic Flow; direciona ao artigo existente. |
| `ReaderVoices` | Quatro leituras curadas, atribuídas e verificadas, com uma ressalva crítica incluída. |
| `CourseSection` | Mostra a progressão do livro ao curso e seus quatro movimentos, com CTA prioritário. |
| `PurchaseSection` | Reúne formatos de compra do livro sem competir visualmente com o curso. |
| `Footer` | Créditos, links externos, privacidade e contato/identidade autoral, se definidos. |
| `ArticleLayout` | Leitura longa, volta ao livro e CTA contextual ao curso. |

### Comportamento de navegação

- O cabeçalho é fixo; ao navegar por âncoras, o título da seção não pode ficar encoberto.
- Em telas pequenas, a navegação se torna um botão expansível acessível, sem uma faixa horizontal cortada.
- CTAs externos informam seu destino e abrem em nova guia apenas quando isso preservar a leitura no site.
- Não haverá carrossel automático. As vozes de leitura podem ser uma lista ou um carrossel manual com controles, dependendo da quantidade e extensão dos relatos aprovados.

## Conteúdo e fontes editoriais

### Livro

A fonte editorial primária é a pasta deste projeto: capítulos, introdução, prefácio e imagens. O site não deve publicar um capítulo completo como amostra. O artigo de fluxo cumpre a função de apresentar a escrita e atualizar a conversa.

Os blocos de conteúdo do livro devem apresentar, sem virar sumário detalhado:

- WIP e o custo de iniciar mais do que se consegue terminar;
- lead time e percentis para discutir prazo com histórico;
- throughput e cadência real de entrega;
- CFD para visualizar a saúde do fluxo;
- burnup e Monte Carlo para comunicar cenários, não datas falsas;
- métricas de processo como instrumento de melhoria, não de comparação entre pessoas.

Usar a indicação bibliográfica verificada: Casa do Código, 2017, 262 páginas. A bio presente em `intro/02-sobre-o-autor.md` está desatualizada e não deve ser reutilizada sem revisão autoral.

### Gráficos

Selecionar inicialmente três imagens originais, com função distinta:

1. um CFD, para mostrar o fluxo e os estoques;
2. uma visualização de dispersão/histograma de lead time, para introduzir variabilidade e percentis;
3. um burnup com projeção, para explicar cenários de entrega.

Cada gráfico precisa de título, texto alternativo significativo, legenda e uma explicação curta no HTML. A imagem não pode ser a única portadora de informação essencial. A seleção final depende de revisão de legibilidade em tela pequena.

**Implementado: três gráficos redesenhados em SVG, preservando a escala de cinza — não a paleta de marca.** As imagens do livro são capturas de 2017 com resolução baixa para tela, mas sua escolha de cor está certa: cada gráfico distingue séries e valores por tom de cinza e por rótulo escrito diretamente sobre o dado, nunca por matiz. É o padrão indicado para leitura por pessoas com daltonismo, que dependem de contraste de valor e não de diferença de cor — trocar isso por turquesa, turquesa-profundo e limão seria uma regressão de acessibilidade disfarçada de modernização. Os SVGs usam tinta, tinta suave, névoa e tons de cinza, com rótulos diretos sobre o dado. O `--turquesa` fica reservado a um único destaque não essencial por gráfico, se fizer sentido, e nunca à diferenciação entre duas ou mais séries. As imagens originais permanecem como fonte de conferência, não como material publicado.

### Artigo inicial

Publicar, após revisão leve de adequação ao site, `../fluxo/metricas-de-fluxo.md` na rota `/artigos/metricas-de-fluxo`.

Título público sugerido: **Métricas de fluxo: medir para enxergar o sistema, não para cobrar pessoas**.

O artigo deve ter data de publicação, tempo estimado de leitura apenas se calculado automaticamente a partir do texto final, retorno claro à página inicial e CTA para o curso ao fim — sem interromper a leitura com chamadas comerciais.

### Vozes de leitura

Os quatro relatos indicados no mapa editorial só entram após confirmação do texto, autoria, origem e possibilidade de reprodução fora das plataformas. Incluir uma leitura que faça ressalva preserva a credibilidade da curadoria.

Não afirmar a média, o número de avaliações ou avaliações da Amazon sem reconferir a fonte no momento da publicação.

## Stack

### Escolha

- **Astro** com TypeScript;
- CSS próprio, baseado em variáveis de design, sem biblioteca de componentes;
- conteúdo em Markdown/MDX no repositório;
- imagens otimizadas pelo Astro;
- repositório Git público próprio;
- hospedagem na Vercel.

### Por que essa escolha

O site tem conteúdo editorial, poucas rotas e pouca interação. Astro entrega HTML estático, desempenho e uma estrutura simples para que os artigos futuros sejam acrescentados sem CMS, banco de dados ou aplicação cliente desnecessária.

O projeto de *Antes de Mim* é a referência de arquitetura, padrões de acessibilidade, testes e deploy — reutilizar decisões comprovadas, não copiar a estética ou o conteúdo.

### Dependências a evitar

- CMS e banco de dados;
- autenticação;
- comentários e formulários próprios no MVP;
- bibliotecas de animação;
- dashboards ou gráficos interativos que substituam a explicação editorial;
- carrossel com avanço automático;
- rastreamento sem finalidade explícita e consentimento adequado.

## Integrações e decisões abertas

### Curso

O CTA do curso aponta para a página do produto **Métricas para Agilidade Organizacional** na Software Zen:

<https://softwarezen.me/ecossistema/produto/metricas/>

O texto-base do CTA será **Conhecer o curso**. O preço aparece na seção: **R$ 197/mês**.

### Compra do livro

O CTA **Adquirir o livro** aponta para a página oficial da Casa do Código:

<https://www.casadocodigo.com.br/products/livro-metricas-ageis>

Confirmar, na revisão pré-publicação, os formatos efetivamente disponíveis nessa página. O livro e o curso são destinos distintos e nunca devem compartilhar o mesmo CTA.

### Domínio

Domínio público definido: <https://metricasageis.com.br>. O build já gera URL canônica, Open Graph absoluto e sitemap para esse domínio. Falta conectar o domínio à hospedagem na Vercel.

### Analytics e privacidade

Google Analytics `G-61LGNYRFLH` está instalado para entender visitas e interações agregadas que ajudem a melhorar a experiência de leitura. Ele só é carregado após consentimento explícito. A página `/privacidade/` explica a prática e permite reabrir as preferências.

## Estrutura de conteúdo no projeto

```text
site/
├── public/
│   ├── images/
│   │   ├── capa-livro.jpg
│   │   ├── cfd-fluxo.svg
│   │   ├── histograma-lead-time.svg
│   │   ├── burnup.svg
│   │   └── og-metricas-ageis.png
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap-index.xml             # gerado no build
├── src/
│   ├── components/
│   ├── content/
│   │   └── artigos/
│   ├── layouts/
│   ├── pages/
│   │   ├── artigos/
│   │   ├── index.astro
│   │   ├── privacidade.astro
│   │   └── 404.astro
│   └── styles/global.css
├── tests/
├── astro.config.mjs
├── package.json
└── README.md
```

Os arquivos do livro permanecem fora de `site/` como fonte editorial. Cópias adaptadas para publicação ficam no projeto e devem passar por revisão própria.

## Ordem de construção

1. Fazer leitura autoral em dispositivos reais e revisar a compactação do aviso de consentimento na primeira visita.
2. Inserir vozes de leitura somente depois de conferência editorial e de autorização de uso.
3. Configurar a prévia e produção na Vercel e conectar <https://metricasageis.com.br>.

O repositório, o projeto Astro, a identidade visual, o artigo, os SVGs, a imagem social 1200 × 630, o favicon, o consentimento, a privacidade, os testes e o workflow de CI estão implementados.

## Critérios de pronto para o MVP

- A tese do site é compreensível antes da primeira dobra terminar.
- A pessoa entende o que o livro oferece e como ele se conecta ao curso, sem confundir um com o outro.
- A aquisição do livro está sempre acessível e o CTA do curso leva ao destino confirmado.
- O artigo inicial é legível, tem autoria e contexto, e retorna ao livro/curso sem poluir a leitura.
- Os gráficos são reais, legíveis em celular e acompanhados de explicação textual.
- A navegação funciona por teclado, foco é visível, contraste atende WCAG AA e o menu mobile é utilizável.
- Imagens têm alternativas apropriadas; animações, se houver, respeitam `prefers-reduced-motion`.
- Todas as URLs externas, depoimentos, números e metadados foram conferidos antes da publicação.
- SEO, imagem social, sitemap, robots e páginas de ausência/privacidade estão configurados.
- Não há coleta de dados pessoais nem analytics não essencial sem transparência e consentimento.

## Decisões que precisam de resposta antes da implementação

1. As quatro resenhas do Goodreads estão liberadas para reprodução com atribuição? Quais são seus textos finais?
2. Os artigos sobre indicadores de negócio e Accelerate ficam no backlog, como proposto?

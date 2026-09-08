# Mapa editorial, site de *Métricas Ágeis*

## Propósito

O livro é a porta, o curso é o destino. O site apresenta *Métricas Ágeis* como a base conceitual de quem quer medir trabalho de conhecimento sem transformar número em vigilância, e conduz quem quer praticar para o curso Métricas para Agilidade Organizacional, na Software Zen.

A compra do livro fica sempre acessível e nunca some da tela, mas a conversão que importa é a matrícula. A sequência é: reconhecer o problema, confiar em quem escreveu, entender que a prática evoluiu desde 2017, e então seguir para o curso.

## Tese que organiza o site

Medir para enxergar o sistema, não para cobrar pessoas.

Essa frase amarra as três camadas do material: o capítulo 7 do livro (metrificar o processo e não as pessoas), o artigo de fluxo publicado agora e a promessa do curso de humanizar números. Ela também diferencia o site de qualquer página de produtividade.

## Escopo do MVP

Página única com seções navegáveis, mais páginas próprias para três artigos. Mesmo padrão e mesma stack do site de *Antes de Mim*, para reaproveitar decisão técnica e reduzir o tempo até publicar.

### Navegação

O problema, o livro, o que mudou desde 2017, quem leu, o curso, adquirir.

## Estrutura e conteúdo

### 1. Abertura

**Função:** nomear a dor antes de falar do livro.

**Título:**
> Quanta coisa sua organização está tentando fazer ao mesmo tempo?

**Texto:**
> Toda organização quer entregar mais rápido. A pergunta difícil é outra. No trabalho do conhecimento, o excesso de trabalho em andamento é invisível: aparece como reuniões demais, urgências concorrendo entre si, pessoas pulando de uma demanda para outra e a sensação permanente de que todo mundo está ocupado, mas pouca coisa termina.
>
> *Métricas Ágeis* foi escrito para tornar esse sistema visível.

**Ações:** conhecer o livro, ver o curso.

**Visual:** capa do livro, disponível em `cover.jpg` (709 × 1000 px). Resolve a web. Para a imagem social de 1200 × 630 será preciso compor arte própria.

---

### 2. O livro

**Função:** dizer o que a pessoa sai sabendo fazer, não resumir capítulos.

**Texto-base:**
> Publicado pela Casa do Código em 2017, *Métricas Ágeis* foi o primeiro livro brasileiro dedicado a métricas de fluxo para times de desenvolvimento. São 262 páginas que saem do conceito e chegam ao gráfico: como limitar e ler o trabalho em progresso, como medir o tempo de entrega e usar percentis em vez de chute, como acompanhar a cadência real do time, como diagnosticar um fluxo pelo gráfico de fluxo acumulado e como projetar prazos com burnup e simulação de Monte Carlo.

**Blocos curtos, um por ideia:**
- WIP, o custo invisível de começar demais;
- lead time, prazo com percentil em vez de promessa;
- throughput, ritmo real em vez de heroísmo;
- CFD, o diagnóstico visual do fluxo;
- burnup e Monte Carlo, cenários de entrega em vez de data única;
- e o capítulo que sustenta todos os outros: metrificar o processo, não as pessoas.

**Para quem é, nas palavras da introdução do próprio livro:** agile coaches que querem fugir de análise subjetiva, gerentes de produto e POs que precisam administrar expectativa de stakeholder com dado histórico em vez de achismo, CTOs e CIOs que querem melhorar processo por evidência, e quem acaba de chegar em uma área de software e não sabe o que medir.

**Voz externa:** o prefácio é de Rodrigo Yoshima e situa o livro como literatura base da corrente que concilia complexidade com medição objetiva. Um trecho curto dele, atribuído, vale mais que qualquer adjetivo nosso na página.

**Gráficos reais:** as 95 imagens originais do livro estão disponíveis. Usar dois ou três gráficos verdadeiros (CFD, histograma de lead time, burnup com projeção) prova que o livro chega ao gráfico, e não fica no conceito. Escolher os mais legíveis em tela pequena.

**Sem amostra de capítulo.** Decidido: o livro não terá capítulo publicado no site. Quem quiser experimentar a escrita antes de comprar tem o artigo de métricas de fluxo, que cumpre esse papel com material próprio e atual.

**Ação:** adquirir na Casa do Código, nos três formatos.

---

### 3. O que mudou desde 2017

**Função:** tratar a idade do livro como força, não como problema. Esta seção é o que diferencia o site de uma página de vendas e é onde a autoridade se renova.

**Texto:**
> O livro segue de pé no que é fundamento: fluxo, previsibilidade e a recusa em usar número como instrumento de cobrança. A prática, porém, andou. Hoje eu somo a essa base a leitura de métricas de entrega de engenharia, a conexão com indicadores de negócio e o trabalho de governança sistêmica que sistematizei depois, em *Dynamic Flow*.

**Três caminhos de leitura, com página própria:**

1. **Métricas de fluxo: medir para enxergar o sistema, não para cobrar pessoas.** Texto pronto em `author/fluxo/metricas-de-fluxo.md`, o mais forte do conjunto. Publica como está, com revisão leve.
2. **Do fluxo do time ao resultado do negócio.** A escrever, derivado do módulo 4 do curso: KPI, receita recorrente, evasão e funil. Fecha a distância entre medir entrega e medir efeito.
3. **Métricas de entrega de engenharia, o que o Accelerate acrescentou.** A escrever, derivado do módulo 3 do curso: frequência de deploy, lead time for changes, MTTR e change failure rate, e como convivem com WIP, lead time e throughput.

A primeira versão vai ao ar com o artigo 1, que já está pronto e é o texto mais forte do conjunto. Os outros dois ficam como backlog, sem anúncio na página: prometer conteúdo que ainda não existe enfraquece a seção. Quando o segundo texto ficar pronto, ele entra e a seção passa a ter plural de verdade.

---

### 4. Quem leu

**Função:** mostrar em que situações o livro serviu, não acumular elogio.

**Seleção sugerida, quatro entradas com origens diferentes:**

- **Edson Jesus** (5 estrelas, Goodreads), auditoria de TI: procurava referência para embasar as conclusões de uma auditoria de processo de desenvolvimento e destaca "não medir só por medir, mas medir o que realmente importa no contexto do projeto".
- **Gabriel Machado** (5 estrelas, Goodreads), primeira implementação de métricas: "implementar métricas costuma gerar ansiedade, porque dado tende a ser associado a controle. O ponto chave é centrar esse controle sobre o processo e não sobre indivíduos."
- **Jean Streleski** (5 estrelas, Goodreads): "o livro que me ajudou a recuperar a confiança de que métodos ágeis podem sair do empirismo".
- **Pablo Silva** (4 estrelas, Goodreads), leitura crítica: recomenda mesmo achando que o capítulo sobre métodos ágeis sobra. Incluir uma voz que faz ressalva aumenta a credibilidade do conjunto.

**Número de apoio:** 4,55 de média em 81 avaliações no Goodreads, com 22 resenhas.

**Depoimentos do curso:** ficam na seção do curso, não aqui, para não misturar prova de leitura com prova de aprendizado. Os mais úteis lá são os de Daniela Oliveira, Adriano Passamani e Gleica Reinert, que falam de aplicação no trabalho.

**Pendência:** as reviews da Amazon não foram acessadas por bloqueio automatizado. Se você colar o texto, entram nessa curadoria. Todo depoimento reproduzido precisa de atribuição e checagem de uso fora da plataforma de origem.

---

### 5. O curso

**Função:** ser o destino natural de quem leu e quer praticar. É a seção com maior peso visual da página depois da abertura.

**Texto:**
> O livro dá o repertório. O curso Métricas para Agilidade Organizacional é onde esse repertório vira prática guiada, com os quatro movimentos: a história por trás dos dados, a eficiência do fluxo, a saúde do fluxo e a eficácia para o negócio.

**Argumento de complementaridade, explícito:** o curso avança para onde o livro de 2017 não vai, com métricas de entrega de engenharia e indicadores de negócio.

**Para quem é:** gestores que querem melhorar desempenho de equipe por métricas e profissionais de tecnologia que querem entender o progresso real do trabalho.

**Ação:** ir para a página do curso na Software Zen.

**Decisão pendente:** o CTA aponta para o curso ou para o Full Pass mensal de R$ 197. Preço na página do site ou só no destino.

---

### 6. Fechamento

**Texto, do capítulo 7:**
> Métricas devem ser usadas para o bem, isto é, para evoluir o processo e não para gerar cobranças e comparações destrutivas. Números sem contexto são perigosos. Procure tendências e fuja da precisão.

**Ações:** adquirir o livro, conhecer o curso.

## Materiais disponíveis

| Material | Estado | Uso |
| --- | --- | --- |
| Fonte completa do livro em markdown, 7 capítulos | disponível nesta pasta | extração de trechos e checagem de fidelidade das citações |
| Introdução, prefácio, agradecimentos e sobre o autor | disponível em `intro/` | público-alvo, voz externa, bio |
| Capa | disponível, `cover.jpg`, 709 × 1000 | abertura e seção do livro |
| 95 imagens originais (CFD, histogramas, burnup, Monte Carlo) | disponíveis em `imagens/` | provas visuais na seção do livro |
| Sumário e dados editoriais (ISBN, 262 páginas, 06/2017) | disponível, Casa do Código | ficha do livro |
| Artigo métricas de fluxo | pronto, `author/fluxo/metricas-de-fluxo.md` | caminho de leitura 1 |
| Carrossel de métricas de fluxo | pronto, `author/fluxo` | material social do lançamento |
| Estrutura e depoimentos do curso | disponível, softwarezen.me | seção do curso |
| Resenhas do Goodreads | extraídas, 12 autores distintos | seção quem leu |
| Reviews da Amazon | não acessadas por bloqueio | pendente de você |
| Bio do autor | desatualizada na Casa do Código, ainda diz doutorando | reescrever com o perfil atual |

## Pendências antes de desenhar

1. Domínio e hospedagem.
2. Imagem social de 1200 × 630 composta a partir da capa.
3. Texto das reviews da Amazon, se forem usadas.
4. Definição do CTA do curso, curso avulso ou Full Pass.
5. Confirmar se a Software Zen também vende o livro, o que criaria um segundo caminho de compra.
6. Confirmar se os dois artigos derivados do curso entram no backlog ou saem de escopo.
7. Selecionar as imagens do livro que entram na página e conferir se alguma precisa ser refeita para leitura em tela.

## Próximo artefato

Brief de design e implementação, no mesmo formato usado em *Antes de Mim*: direção visual, arquitetura de informação, rotas, componentes e ordem de construção.

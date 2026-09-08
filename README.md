# Site de *Métricas Ágeis*

Site editorial do livro de Raphael Albino, publicado pela Casa do Código em 2017.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Verificação

```bash
npm run build
npm run test:e2e
```

O domínio público é <https://metricasageis.com.br>. URLs canônicas e sitemap são gerados no build.

As fontes do livro ficam em `../livro/`. Os artigos autorais vêm do submódulo Git `content/`, que aponta para [rapha-albino/insights](https://github.com/rapha-albino/insights), coleção `metricas/`.

Ao clonar o projeto manualmente:

```bash
git clone --recurse-submodules git@github.com:rapha-albino/metricas-ageis.git
```

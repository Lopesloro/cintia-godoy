# Site Cíntia Godoy Estética e Bem-Estar

Site estático, sem build e sem dependência. No ar em https://cintiagodoy.com.br

## Páginas
- `index.html` home, com o texto de apresentação dela, os cinco atendimentos e a galeria do espaço
- `servicos.html` os cinco atendimentos em detalhe
- `empresas.html` quick massage para empresas e eventos, com pedido de cotação
- `sobre.html` quem atende, texto dela e formação
- `catalogo.html` catálogo em três folhas A4, origem do PDF

## Arquivos para ela enviar
- `catalogo-cintia-godoy.pdf` catálogo de serviços
- `apresentacao-cintia-godoy.pdf` e `.pptx` apresentação comercial em oito páginas
- `apresentacao.html` a mesma apresentação, navegável no navegador

## Marca
`marca/` tem SVG e PNG: horizontal, clara para fundo escuro, empilhada, símbolo e avatar.

## Fotos
Todas as fotos publicadas são reais, tiradas no espaço dela. Os originais ficam em
`assets/img/_src-*.jpg`. As imagens geradas por IA da primeira versão estão guardadas em
`assets/img/_ia/` e não são usadas em nenhuma página.

Regra de dimensão: nenhuma imagem do site amplia mais de 1,3 vez num aparelho de
densidade 3. Toda foto de tela cheia tem um recorte em pé próprio, com sufixo `-p`.

## Ver no computador
```
cd /Users/lopes/sites/cintia-godoy && python3 -m http.server 4180
```

## Publicação
Static site no Render, a partir da branch `main`. Todo push republica sozinho.

## Falta ela confirmar
1. Preço de cada atendimento e o valor da quick massage. O catálogo já tem a coluna,
   hoje escrita como "sob consulta".
2. Horário de atendimento.
3. Uma foto de quick massage em empresa ou evento. É a única página sem foto de prova.

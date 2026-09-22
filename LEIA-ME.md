# Site — Cíntia Godoy Estética e Bem-Estar

Site estático (HTML + CSS + um arquivo de JS). Sem build, sem dependência.

- `index.html` — home
- `servicos.html` — os cinco atendimentos em detalhe
- `sobre.html` — quem atende e formação
- `assets/app.css` — estilo (Dialeto B, Hospitalidade)
- `assets/app.js` — header sólido no scroll, reveal das seções, faixa do Laser Day
- `assets/img/` — imagens

## Ver no computador

```
cd /Users/lopes/sites/cintia-godoy
python3 -m http.server 4180
```
Depois abrir http://localhost:4180

## Publicação

Site estático no Render, publicado a partir da branch `main` do repositório.
Qualquer `git push` para `main` republica sozinho.

## Contato usado no site

- WhatsApp: (19) 97410-8030 — `wa.me/5519974108030`
- Endereço: Avenida Santo Antônio, 127 — Centro, Mogi Mirim, SP
- Instagram: @cintiagodoyestetica

Cada botão de serviço abre o WhatsApp com a mensagem daquele serviço já escrita.

## Imagens

| Arquivo | Origem |
|---|---|
| `sala.jpg`, `headspa.jpg`, `repouso.jpg` | geradas por IA — só ambiente e textura, nenhuma prova de trabalho |
| `drenagem.jpg`, `massagem.jpg` | atendimentos reais, do Instagram dela |
| `cintia.jpg` | retrato dela, do Instagram (recortado) |
| `certificado.jpg` | certificação em lipedema e taping, Bioage Rio Claro |
| `laser-day.jpg` | peça de divulgação dela, com o equipamento Acrus |

As versões `-m` são as usadas no celular; as `.webp` são servidas por padrão,
com `.jpg` de reserva.

## O que ainda falta (e por que não foi inventado)

1. **Preços** — nenhum valor aparece no Instagram. Enquanto não vierem confirmados
   por ela, os serviços vão sem preço e o orçamento sai pelo WhatsApp.
2. **Horário de atendimento** — não publicado em nenhum lugar.
3. **Foto da fachada** — não existe no acervo. Por isso a seção de localização
   usa o mapa, e não a foto de fachada que o padrão pediria.
4. **Logotipo em vetor** — o logotipo dela só existe dentro de uma peça em 500px.
   O site usa a tipografia do dialeto no lugar. Com o arquivo original, troca em minutos.

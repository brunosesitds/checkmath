# 🎮 Catálogo de Jogos

Catálogo estático de jogos em HTML (grade de capas, busca e categorias).

## Como usar
```bash
git clone <seu-repo> && cd <seu-repo>
python -m http.server 8000   # abra http://localhost:8000
```

## Adicionar jogos
Edite `games.json`:

| tipo | exemplo |
|---|---|
| Jogo HTML | `{"id":"meu","title":"Meu Jogo","type":"html","path":"games/meu/index.html","tags":["Casual"],"cover":"games/meu/cover.png"}` |
| ROM (emulador) | `{"id":"x","title":"X","type":"rom","core":"gba","path":"roms/x.gba","tags":["Emulator"]}` |

Cores do emulador (EmulatorJS): `gba`, `nes`, `snes`, `n64`, `segaMD`, `nds`, entre outros.

## Sobre ROMs e direitos autorais
A pasta `roms/` está no `.gitignore` de propósito: **não suba ROMs nem jogos comerciais para o GitHub**
(risco de DMCA e de derrubarem o repositório). Cada pessoa coloca as suas ROMs em `roms/` localmente.
No repositório, use jogos que você criou, de código aberto ou com licença que permita redistribuir.

## Senha de acesso
`index.html` e `play.html` carregam o `auth.js`, que pede uma senha ao abrir (padrão: `0000`, pedida de novo a cada nova aba/sessão).
Para trocar: no console do navegador (F12) rode `gerarHash("nova senha")` e cole o número em `HASH` dentro do `auth.js`.

> É uma trava **cosmética**: como o site é estático, quem tem acesso aos arquivos consegue ver ou desativar a senha.
> Ela não protege conteúdo de ninguém e não substitui cuidar de direitos autorais: se o repositório for público, tudo que estiver nele é público.

# RC Locações

Catálogo estático e responsivo para apresentar equipamentos de construção e serviços gerais. Busca, filtros, detalhes, estimativa diária e preparação de pedido pelo WhatsApp funcionam no navegador.

## Publicar pelo GitHub Pages

1. Envie as alterações para a branch `main` do GitHub.
2. No repositório, abra **Settings → Pages** e selecione **GitHub Actions** como origem de publicação.
3. Acompanhe a execução em **Actions**. Ao terminar, o endereço público aparecerá no job de publicação e em **Settings → Pages**.

O endereço padrão será `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`. Depois da primeira publicação, qualquer novo push para `main` atualiza o site.

## Personalizar antes de divulgar

- Edite `site/config.js`: configure o WhatsApp em formato internacional, somente números (por exemplo `5511999999999`), telefone, área atendida e e-mail.
- Edite o texto institucional de exemplo em `site/index.html` com a história e os dados reais da empresa.
- Revise os equipamentos e preços demonstrativos no início de `site/app.js`. Os valores atuais são ilustrativos, cobrados por diária, e não vêm de um banco de dados.
- As fotografias ilustrativas são carregadas do Unsplash e precisam de conexão com a internet.

## Testar localmente

Abra `site/index.html` no navegador, ou inicie um servidor local na raiz do repositório:

```sh
python3 -m http.server 8000 --directory site
```

Em seguida, acesse `http://localhost:8000`.

## Limites da versão Pages

O GitHub Pages serve arquivos estáticos: não executa Next.js no servidor, API, PostgreSQL ou Prisma. Este catálogo não grava pedidos, não autentica administradores e não bloqueia reservas simultâneas. A estimativa é informativa; disponibilidade, preço final, caução, entrega e condições devem ser confirmados pela equipe no WhatsApp. Para CRUD persistente, controle de estoque e locações, será necessário conectar um backend e banco de dados hospedados separadamente.
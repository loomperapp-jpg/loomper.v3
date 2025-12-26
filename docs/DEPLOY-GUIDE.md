# 🚀 Guia de Deploy - Loomper Landing Page

Este guia detalha o processo completo de deploy da Landing Page Loomper no Netlify.

---

## 📋 Pré-requisitos

- [ ] Conta no [GitHub](https://github.com)
- [ ] Conta no [Netlify](https://netlify.com)
- [ ] Git instalado localmente
- [ ] Repositório criado no GitHub

---

## 🔧 Preparação do Código

### 1. Estrutura de Arquivos

Certifique-se de que a estrutura está correta:

```
loomper/
├── index.html
├── sucesso.html
├── assets/
│   ├── css/
│   │   └── loomper-optimized.css
│   └── js/
│       └── loomper-optimized.js
└── documentos/
    ├── README.md
    ├── CHANGELOG.md
    ├── DEPLOY-GUIDE.md
    └── TESTE-CHECKLIST.md
```

### 2. Verificação de Links

Confira se todos os links estão funcionando:
- ✅ Links internos (#seções)
- ✅ Links de imagens (CDN)
- ✅ Links de CSS/JS
- ✅ Links externos (WhatsApp, E-mail)

### 3. Teste Local

```bash
# Inicie um servidor local
python3 -m http.server 8000

# Ou use Live Server do VS Code
# Acesse: http://localhost:8000
```

Teste todas as funcionalidades antes de fazer deploy.

---

## 📤 Deploy via GitHub + Netlify (Recomendado)

### Passo 1: Preparar Repositório GitHub

```bash
# Clone ou acesse seu repositório
cd loomper

# Adicione todos os arquivos
git add .

# Faça commit
git commit -m "feat: landing page completa v1.0.0"

# Push para o GitHub
git push origin main
```

### Passo 2: Conectar ao Netlify

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Clique em **"Add new site"** > **"Import an existing project"**
3. Escolha **"Deploy with GitHub"**
4. Autorize o Netlify a acessar seu GitHub
5. Selecione o repositório `loomper`

### Passo 3: Configurar Build Settings

**Build Settings:**
```
Base directory: (deixe vazio ou /)
Build command: (deixe vazio)
Publish directory: /
```

Clique em **"Deploy site"**

### Passo 4: Aguardar Deploy

- ⏳ O Netlify irá processar e fazer o deploy
- 🎉 Em ~2 minutos seu site estará no ar!
- 🔗 URL temporária: `random-name-12345.netlify.app`

---

## 🎨 Personalizar Domínio

### Opção 1: Subdomínio Netlify

1. Vá em **Site settings** > **Site details**
2. Clique em **"Change site name"**
3. Digite: `loomper`
4. Novo URL: `loomper.netlify.app`

### Opção 2: Domínio Customizado

1. Compre o domínio `loomper.app` (Registro.br, GoDaddy, etc.)
2. Em **Site settings** > **Domain management**
3. Clique em **"Add custom domain"**
4. Digite: `loomper.app`
5. Siga as instruções para configurar DNS:

**Registros DNS necessários:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: loomper.netlify.app
```

6. Aguarde propagação (até 48h, geralmente 2-6h)
7. Netlify irá provisionar SSL automático (HTTPS)

---

## 📝 Configurar Netlify Forms

### Passo 1: Ativar Formulários

1. Vá em **Site settings** > **Forms**
2. O formulário `loomper_leads` deve aparecer automaticamente
3. Se não aparecer, faça um novo deploy

### Passo 2: Configurar Notificações

1. Em **Forms** > **Form notifications**
2. Clique em **"Add notification"**
3. Escolha **"Email notification"**
4. Configure:
   ```
   Event to notify: New form submission
   Email to notify: loomper.app@gmail.com
   ```

### Passo 3: Configurar Redirecionamento

Adicione no HTML (já incluído):
```html
<form name="loomper_leads" method="POST" data-netlify="true" action="/sucesso.html">
```

Ou crie arquivo `netlify.toml` na raiz:
```toml
[[redirects]]
  from = "/cadastro-sucesso"
  to = "/sucesso.html"
  status = 200
```

### Passo 4: Testar Formulário

1. Acesse o site publicado
2. Preencha o formulário de cadastro
3. Envie e verifique:
   - ✅ Redirecionamento para `/sucesso.html`
   - ✅ E-mail de notificação recebido
   - ✅ Submission apareceu no painel Netlify

---

## ⚙️ Configurações Adicionais

### Headers de Segurança

Crie `netlify.toml` na raiz:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Redirects e Rewrites

```toml
# 404 personalizado (crie 404.html)
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404

# Redirect www para não-www
[[redirects]]
  from = "https://www.loomper.app/*"
  to = "https://loomper.app/:splat"
  status = 301
  force = true
```

### Variables de Ambiente

Se precisar de variáveis:
1. Vá em **Site settings** > **Environment variables**
2. Adicione as variáveis necessárias
3. Exemplo: `FORM_EMAIL=loomper.app@gmail.com`

---

## 📊 Analytics e Monitoramento

### Google Analytics

Adicione no `<head>` do `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Netlify Analytics

1. Vá em **Analytics** no painel
2. Ative o Netlify Analytics (pago: $9/mês)
3. Visualize métricas de tráfego, performance e formulários

---

## 🔄 Deploy Contínuo

### Automatic Deploys

**Já configurado automaticamente!**
- Push para `main` → Deploy automático
- Pull Request → Deploy preview

### Manual Deploy

Para forçar novo deploy:
```bash
git commit --allow-empty -m "chore: trigger deploy"
git push origin main
```

Ou no painel Netlify:
1. **Deploys** > **Trigger deploy**
2. Escolha **"Clear cache and deploy site"**

---

## 🧪 Testes Pós-Deploy

### Checklist Essencial

- [ ] Site carrega sem erros
- [ ] Todas as imagens aparecem
- [ ] CSS e JS carregam corretamente
- [ ] Formulário funciona e redireciona
- [ ] Links externos abrem corretamente
- [ ] WhatsApp floating button funciona
- [ ] Modal abre e fecha
- [ ] Tabs do simulador funcionam
- [ ] Copiar PIX funciona
- [ ] Menu mobile funciona
- [ ] Site responsivo em mobile
- [ ] HTTPS ativo (cadeado verde)
- [ ] Favicon aparece

### Ferramentas de Teste

**Performance:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**SEO:**
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

**Responsividade:**
- Chrome DevTools (F12 > Toggle Device Toolbar)
- [Responsive Design Checker](https://responsivedesignchecker.com/)

**Acessibilidade:**
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

---

## 🐛 Troubleshooting

### Problema: Formulário não funciona

**Solução:**
- Verifique `data-netlify="true"` no form
- Confirme `name="loomper_leads"`
- Garanta que há input `<input type="hidden" name="form-name" value="loomper_leads">`
- Faça novo deploy

### Problema: CSS/JS não carregam

**Solução:**
- Verifique caminhos relativos (`assets/css/...`)
- Limpe cache do navegador (Ctrl+Shift+R)
- Clear cache and deploy no Netlify

### Problema: Imagens não aparecem

**Solução:**
- Confirme URLs das imagens CDN
- Verifique se imagens são públicas
- Use DevTools para ver erros 404

### Problema: HTTPS não ativa

**Solução:**
- Aguarde até 24h para provisionamento
- Force renovação em **Domain settings** > **HTTPS**
- Verifique configuração DNS

---

## 📞 Suporte

**Problemas com deploy?**
- 📧 E-mail: loomper.app@gmail.com
- 💬 WhatsApp: +55 11 96585-8142
- 📚 Docs Netlify: https://docs.netlify.com

---

## ✅ Checklist Final

Antes de considerar deploy concluído:

- [ ] Site acessível via HTTPS
- [ ] Domínio customizado configurado
- [ ] Formulário testado e funcionando
- [ ] Notificações de e-mail ativas
- [ ] Analytics instalado
- [ ] Performance Score > 90
- [ ] SEO verificado
- [ ] Mobile testado
- [ ] Links sociais funcionam
- [ ] README.md atualizado no repo

---

<div align="center">

**🎉 Deploy Concluído com Sucesso!**

Seu site Loomper está no ar revolucionando a logística! 🚛

</div>

---

*Última atualização: 26 de dezembro de 2024*

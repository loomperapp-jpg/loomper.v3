# 🚀 GUIA DE DEPLOY - LOOMPER v3.0

**IMPORTANTE:** Siga os passos na ordem exata!

---

## 📋 PRÉ-REQUISITOS

✅ Acesso ao GitHub (repositório do projeto)  
✅ Acesso ao Netlify (conta configurada)  
✅ Backup do projeto atual (por segurança)

---

## 🔄 PASSO 1 - BACKUP (SEGURANÇA)

### **No Netlify:**
1. Acesse: https://app.netlify.com
2. Selecione seu site
3. **Deploys** → Encontre o último deploy bem-sucedido
4. Anote o **Deploy ID** (ex: 694d224d33a...)
5. Se algo der errado, você pode reverter!

---

## 📦 PASSO 2 - BAIXAR ARQUIVOS v3.0

Você receberá um ZIP com esta estrutura:

```
loomper-v3-FINAL/
├── index.html (SUBSTITUI o atual)
├── sucesso.html (NOVO - adicionar)
├── assets/
│   ├── loomper-optimized.css (SUBSTITUI)
│   └── loomper-optimized.js (SUBSTITUI)
└── DOCS/
    ├── CHANGELOG.md
    ├── DEPLOY-GUIDE.md (este arquivo)
    └── TESTE-CHECKLIST.md
```

---

## 🔧 PASSO 3 - ATUALIZAR NO GITHUB

### **Opção A - Via GitHub Web (Mais Fácil):**

1. Acesse seu repositório no GitHub
2. **Para cada arquivo:**

   **index.html:**
   - Clique no arquivo
   - Clique no ícone de lápis (Edit)
   - Delete todo o conteúdo
   - Cole o conteúdo do novo `index.html`
   - Commit: `"feat: v3.0 - corrige mobile e validações"`

   **sucesso.html:**
   - Clique em **Add file** → **Create new file**
   - Nome: `sucesso.html`
   - Cole o conteúdo
   - Commit: `"feat: adiciona página de sucesso"`

   **assets/loomper-optimized.css:**
   - Navegue até `assets/`
   - Clique em `loomper-optimized.css`
   - Edit → Cole o novo conteúdo
   - Commit: `"feat: CSS v3.0 consolidado"`

   **assets/loomper-optimized.js:**
   - Mesma coisa
   - Commit: `"feat: JS v3.0 com API IBGE"`

### **Opção B - Via Terminal (Git Local):**

```bash
# 1. Navegue até a pasta do projeto
cd /caminho/do/seu/projeto

# 2. Crie branch de segurança (opcional mas recomendado)
git checkout -b v3.0-deploy

# 3. Substitua os arquivos
# (Cole os arquivos baixados nas pastas corretas)

# 4. Commit
git add .
git commit -m "feat: v3.0 - correção crítica mobile + API IBGE + validações"

# 5. Push
git push origin v3.0-deploy

# 6. No GitHub, crie Pull Request e merge para main
```

---

## ⏳ PASSO 4 - AGUARDAR DEPLOY NETLIFY

1. **O Netlify detecta automaticamente** o push no GitHub
2. Acesse: https://app.netlify.com → Seu site
3. Vá em **Deploys**
4. Aguarde o build terminar (~1-2 minutos)
5. Status esperado: **✅ Published**

---

## 🧪 PASSO 5 - TESTAR TUDO

### **Checklist de Teste:**

#### **1. Mobile (CRÍTICO):**
```
✅ Abra no celular: https://seu-site.netlify.app
✅ Header: letras legíveis, menu hambúrguer funciona
✅ Hero: imagem de fundo visível
✅ Formulário: campos grandes, fáceis de clicar
✅ Select UF: lista visível (fundo escuro)
```

#### **2. API IBGE:**
```
✅ Selecione UF: "SP"
✅ Campo Cidade deve listar apenas cidades de SP
✅ Tente "BA" → deve listar cidades da Bahia
```

#### **3. Validações:**
```
✅ WhatsApp: teste "11999998888" (✅ passa)
✅ WhatsApp: teste "1199999888" (❌ erro 9 dígitos)
✅ Email: teste "teste@email.com" (✅ passa)
✅ Email: teste "teste@email.co" (❌ erro)
```

#### **4. Envio do Formulário:**
```
✅ Preencha todos os campos
✅ Aceite os termos
✅ Clique "Entrar para o Beta"
✅ Deve redirecionar para: /sucesso.html
```

#### **5. Netlify Forms:**
```
✅ Acesse: https://app.netlify.com
✅ Vá em: Forms → waitlist
✅ Verifique se o envio apareceu
✅ Confira se todos os campos estão preenchidos:
   - name, whatsapp, email, uf, city
   - user_type, invite_phone, terms
   - user_id, referrer_id, user_journey
   - terms_accepted_at, credits_initial
```

---

## 🔍 PASSO 6 - MONITORAR

### **Primeiros 30min após deploy:**

1. **Console do navegador (F12):**
   ```
   Esperado:
   🚀 LOOMPER Optimized JS v2.0 Ativo
   🆔 User ID: LMP-XXXXXXXX
   ✅ Todas as funcionalidades carregadas
   
   SEM erros 404
   SEM erros de JavaScript
   ```

2. **Teste com usuário real:**
   - Peça para alguém testar no celular
   - Verifique se conseguiu preencher e enviar
   - Confirme que recebeu no Netlify Forms

3. **Analytics (se configurado):**
   - Taxa de abandono do formulário
   - Tempo médio na página
   - Dispositivos mais usados

---

## ⚠️ TROUBLESHOOTING

### **Problema: Deploy falhou no Netlify**
```
Causa: Erro de sintaxe em algum arquivo
Solução:
1. Veja o log de erro no Netlify
2. Corrija o arquivo indicado
3. Faça novo commit e push
```

### **Problema: API IBGE não funciona**
```
Causa: Bloqueio CORS ou URL incorreta
Solução:
1. Abra F12 → Console
2. Veja o erro exato
3. Se for CORS, API está OK (navegador bloqueia, mas funciona)
4. Teste em modo anônimo
```

### **Problema: Formulário não envia**
```
Causa: Netlify Forms não detectou o form no build
Solução:
1. Confirme que há form oculto antes do </body>:
   <form name="waitlist" netlify hidden>...</form>
2. Faça novo deploy (Clear cache and deploy)
3. Aguarde 5 minutos
```

### **Problema: Página de sucesso 404**
```
Causa: sucesso.html não foi adicionado
Solução:
1. Confirme que sucesso.html está na raiz do repo
2. Faça commit e push novamente
3. Aguarde novo deploy
```

### **Problema: Mobile ainda está ruim**
```
Causa: Cache do navegador
Solução:
1. No celular: Abrir modo anônimo
2. Ou: Limpar cache do site
3. Ou: Adicionar ?v=3.0 na URL
   Ex: https://seu-site.netlify.app/?v=3.0
```

---

## 🔙 REVERTER (SE NECESSÁRIO)

**Se algo der muito errado:**

### **No Netlify:**
1. Acesse **Deploys**
2. Encontre o deploy anterior (antes da v3.0)
3. Clique nos 3 pontinhos → **Publish deploy**
4. Confirme
5. Site volta para versão antiga em ~30 segundos

### **No GitHub:**
```bash
# Reverter último commit
git revert HEAD
git push origin main

# Ou restaurar para commit específico
git reset --hard COMMIT_ID_ANTERIOR
git push origin main --force
```

---

## ✅ CHECKLIST FINAL

Antes de considerar concluído:

- [ ] Deploy bem-sucedido no Netlify
- [ ] Testado em mobile (iPhone e Android)
- [ ] API IBGE funcionando
- [ ] Validações corretas
- [ ] Formulário enviando para Netlify Forms
- [ ] Página de sucesso acessível
- [ ] Sem erros no console (F12)
- [ ] Lead de teste recebido

---

## 📞 SUPORTE

**Se tiver dúvidas:**
- Anote o erro exato que aparece
- Tire print do console (F12)
- Copie o log de deploy do Netlify
- Me envie para análise

---

## 🎯 PRÓXIMOS PASSOS

Após deploy bem-sucedido:

1. **Monitorar conversão** (primeiros 48h)
2. **Coletar feedback** dos primeiros usuários
3. **Ajustar** se necessário
4. **Planejar FASE 2** (simuladores funcionais)

---

**Boa sorte com o deploy!** 🚀

Se seguir este guia passo a passo, tudo vai funcionar perfeitamente! 💪

---

**Versão:** 3.0  
**Data:** 25/12/2025  
**Status:** ✅ Pronto para produção

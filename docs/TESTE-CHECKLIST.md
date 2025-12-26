# ✅ LOOMPER V3.0 — CHECKLIST DE TESTES

**Versão:** 3.0  
**Data:** 26/12/2024  
**Objetivo:** Validar todas as correções críticas antes do deploy

---

## 📋 TESTES OBRIGATÓRIOS

### 1️⃣ VALIDAÇÕES DO FORMULÁRIO

#### 1.1 Validação de WhatsApp
- [ ] **Aceita**: `11999998888` (11 dígitos) ✅
- [ ] **Aceita**: `1199998888` (10 dígitos) ✅
- [ ] **Rejeita**: `119999888` (9 dígitos) ❌
- [ ] **Rejeita**: `119999988888` (12 dígitos) ❌
- [ ] **Feedback visual**: Mensagem de erro aparece em vermelho

#### 1.2 Validação de E-mail
- [ ] **Aceita**: `usuario@gmail.com` ✅
- [ ] **Aceita**: `nome.sobrenome@empresa.com.br` ✅
- [ ] **Rejeita**: `usuario@co` (domínio inválido) ❌
- [ ] **Rejeita**: `usuario@` (incompleto) ❌
- [ ] **Rejeita**: `usuario` (sem @) ❌
- [ ] **Feedback visual**: Mensagem de erro aparece em vermelho

#### 1.3 API IBGE (UF → Cidades)
- [ ] **Seleciona UF**: SP
- [ ] **Verifica cidades**: Apenas cidades de SP aparecem
- [ ] **Seleciona UF**: BA
- [ ] **Verifica cidades**: Apenas cidades de BA aparecem (Porto Alegre NÃO deve aparecer)
- [ ] **Seleciona UF**: RJ
- [ ] **Verifica cidades**: Rio de Janeiro, Niterói, etc. aparecem

#### 1.4 Campos Obrigatórios
- [ ] **Tipo de Usuário**: Obrigatório (Motorista, Chapa, Transportadora)
- [ ] **Nome**: Obrigatório (mínimo 3 caracteres)
- [ ] **WhatsApp**: Obrigatório (10-11 dígitos)
- [ ] **E-mail**: Obrigatório (formato válido)
- [ ] **UF**: Obrigatório
- [ ] **Cidade**: Obrigatório
- [ ] **Termos**: Checkbox obrigatório

#### 1.5 Timestamp dos Termos
- [ ] **Aceita termos**: Checkbox marcado
- [ ] **Verifica localStorage**: `loomper_terms_accepted_at` contém ISO timestamp
- [ ] **Exemplo**: `2024-12-26T00:30:00.000Z`

---

### 2️⃣ EXPERIÊNCIA DO USUÁRIO (UX)

#### 2.1 Campos Pré-Preenchidos
- [ ] **Fluxo**: Clica em "Sou Motorista" → Formulário abre
- [ ] **Verifica**: Campo "Tipo de Usuário" já está selecionado como "Motorista"
- [ ] **Verifica**: Botão "Entrar para o Beta" está **habilitado** (não cinza)
- [ ] **Preenche restante**: Nome, WhatsApp, Email, UF, Cidade, Termos
- [ ] **Botão ativo**: "Entrar para o Beta" continua azul/clicável

#### 2.2 Contraste Mobile (SELECT/OPTION)
- [ ] **Dispositivo**: Celular (ou DevTools mobile)
- [ ] **Abre**: Campo "UF"
- [ ] **Verifica**: Opções são legíveis (fundo escuro, texto branco)
- [ ] **Abre**: Campo "Cidade"
- [ ] **Verifica**: Opções são legíveis
- [ ] **Abre**: Campo "Tipo de Usuário"
- [ ] **Verifica**: Opções são legíveis

#### 2.3 Feedback Visual em Tempo Real
- [ ] **WhatsApp inválido**: Borda vermelha + mensagem de erro
- [ ] **E-mail inválido**: Borda vermelha + mensagem de erro
- [ ] **Campo obrigatório vazio**: Borda vermelha
- [ ] **Campo válido**: Borda verde (opcional)
- [ ] **Botão desabilitado**: Cor cinza + cursor not-allowed
- [ ] **Botão habilitado**: Cor laranja + cursor pointer

---

### 3️⃣ RESPONSIVIDADE

#### 3.1 Mobile (320px - 414px)
- [ ] **Hero**: Título legível, botões clicáveis
- [ ] **Formulário**: Campos não cortados, texto legível
- [ ] **Header**: Logo e menu visíveis
- [ ] **Footer**: Informações legíveis
- [ ] **Imagens**: Não distorcidas

#### 3.2 Tablet (768px - 1024px)
- [ ] **Layout**: Elementos bem distribuídos
- [ ] **Formulário**: Campos com largura adequada
- [ ] **Imagens**: Proporção mantida

#### 3.3 Desktop (1366px - 1920px)
- [ ] **Layout**: Conteúdo centralizado
- [ ] **Formulário**: Largura máxima respeitada
- [ ] **Hero background**: Imagem visível (hero-truck.png)

---

### 4️⃣ INTEGRAÇÃO NETLIFY FORMS

#### 4.1 Formulário Fantasma (HTML)
- [ ] **Abre**: Código-fonte do index.html (Ctrl+U)
- [ ] **Procura**: `<form name="waitlist" netlify netlify-honeypot="bot-field" hidden>`
- [ ] **Verifica**: Formulário fantasma existe antes de `</body>`
- [ ] **Verifica**: Todos os campos estão mapeados (user_type, name, whatsapp, email, etc.)

#### 4.2 Envio do Formulário
- [ ] **Preenche**: Todos os campos corretamente
- [ ] **Marca**: Checkbox dos termos
- [ ] **Clica**: "Entrar para o Beta"
- [ ] **Verifica**: Página redireciona para `/sucesso.html`
- [ ] **Console**: Sem erros 404

#### 4.3 Netlify Dashboard
- [ ] **Acessa**: https://app.netlify.com → Seu site → Forms
- [ ] **Verifica**: Form "waitlist" recebeu novo envio
- [ ] **Verifica campos recebidos**:
  - `user_type`: Motorista/Chapa/Transportadora
  - `name`: Nome completo
  - `whatsapp`: Telefone (10-11 dígitos)
  - `email`: E-mail válido
  - `uf`: Sigla do estado
  - `city`: Nome da cidade
  - `terms`: on
  - `user_id`: LMP-XXXXXXXX
  - `referrer_id`: LMP-XXXXXXXX (se veio de indicação)
  - `terms_accepted_at`: Timestamp ISO
  - `credits_initial`: 100 (Motorista) / 0 (Chapa) / 500 (Transportadora)
  - `user_journey`: JSON com eventos

---

### 5️⃣ PÁGINA DE SUCESSO

#### 5.1 Carregamento
- [ ] **URL**: `/sucesso.html` carrega corretamente
- [ ] **Layout**: Design alinhado com landing page
- [ ] **User ID**: Exibe ID correto (LMP-XXXXXXXX)
- [ ] **Link de indicação**: Exibe `https://seudominio.com/?ref=LMP-XXXXXXXX`

#### 5.2 Funcionalidades
- [ ] **Botão "Copiar"**: Link de indicação copiado para clipboard
- [ ] **Feedback**: Botão muda para "✓ Copiado!" por 2 segundos
- [ ] **Botão WhatsApp**: Link para grupo funciona
- [ ] **Botão "Voltar para Home"**: Redireciona para `/`

---

### 6️⃣ CONSOLE DO NAVEGADOR (DEVTOOLS)

#### 6.1 Mensagens de Inicialização
- [ ] **Mensagem**: `🚀 LOOMPER Optimized JS v3.0 Ativo`
- [ ] **Mensagem**: `🆔 User ID: LMP-XXXXXXXX`
- [ ] **Mensagem**: `✅ Todas as funcionalidades carregadas`
- [ ] **Sem erros**: Nenhum erro 404, 500 ou de console

#### 6.2 Tracking de Eventos
- [ ] **Evento**: `page_view` (ao carregar página)
- [ ] **Evento**: `profile_selected` (ao clicar em perfil)
- [ ] **Evento**: `form_submit_attempt` (ao enviar formulário)
- [ ] **Verificar**: `console.log` mostra eventos com timestamp

---

### 7️⃣ BROWSERS (CROSS-BROWSER)

- [ ] **Chrome**: Tudo funciona ✅
- [ ] **Firefox**: Tudo funciona ✅
- [ ] **Safari**: Tudo funciona ✅
- [ ] **Edge**: Tudo funciona ✅
- [ ] **Mobile Safari (iOS)**: Tudo funciona ✅
- [ ] **Mobile Chrome (Android)**: Tudo funciona ✅

---

## 🚨 PROBLEMAS ENCONTRADOS

Se algo não funcionar, anote aqui:

### Problema 1:
- **O que**: [Descreva o problema]
- **Onde**: [Desktop/Mobile, Browser, Página]
- **Como reproduzir**: [Passos]
- **Evidência**: [Screenshot, mensagem de erro]

### Problema 2:
- **O que**: 
- **Onde**: 
- **Como reproduzir**: 
- **Evidência**: 

---

## ✅ APROVAÇÃO FINAL

- [ ] **Todos os testes passaram**
- [ ] **Formulário envia para Netlify corretamente**
- [ ] **Página de sucesso funciona**
- [ ] **Validações impedem dados inválidos**
- [ ] **UX está boa em todos os dispositivos**
- [ ] **Console sem erros**

**Data do Teste**: ___/___/______  
**Testado por**: ________________  
**Status**: 🟢 APROVADO / 🟡 APROVADO COM RESSALVAS / 🔴 REPROVADO  

---

## 📞 SUPORTE

Se encontrar problemas:
1. Anote na seção "PROBLEMAS ENCONTRADOS"
2. Tire screenshots
3. Compartilhe:
   - URL do site
   - Console do navegador (F12)
   - Build log do Netlify
4. Entre em contato para ajustes

---

**Lembre-se**: Teste TUDO antes de considerar o deploy concluído! 🚀

/**
 * ============================================
 * LOOMPER - JAVASCRIPT FUNCTIONS
 * Optimized for Landing Page Interactions
 * ============================================
 */

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('active');
        
        // Toggle icon
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ============================================
// TAB SYSTEM (SIMULADOR)
// ============================================
function changeTab(tabName) {
    // Update tab buttons
    const allTabs = document.querySelectorAll('.tab-btn');
    allTabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active');
    
    // Update tab content
    const allContent = document.querySelectorAll('.tab-content');
    allContent.forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
    });
    
    const activeContent = document.getElementById('content-' + tabName);
    if (activeContent) {
        activeContent.classList.remove('hidden');
        activeContent.classList.add('active');
    }
}

// ============================================
// PIX COPY FUNCTION
// ============================================
function copiarPix() {
    const pixKey = 'loomper.app@gmail.com';
    
    // Create temporary textarea to copy
    const tempInput = document.createElement('textarea');
    tempInput.value = pixKey;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        
        // Show feedback
        const feedback = document.getElementById('pix-feedback');
        if (feedback) {
            feedback.style.opacity = '1';
            setTimeout(() => {
                feedback.style.opacity = '0';
            }, 3000);
        }
        
        // Visual feedback on the box
        const pixBox = document.getElementById('pix-box');
        if (pixBox) {
            pixBox.style.borderColor = '#10B981';
            pixBox.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
            setTimeout(() => {
                pixBox.style.borderColor = '';
                pixBox.style.backgroundColor = '';
            }, 2000);
        }
        
    } catch (err) {
        console.error('Erro ao copiar:', err);
        alert('Chave PIX: ' + pixKey);
    }
    
    document.body.removeChild(tempInput);
}

// ============================================
// MODAL FUNCTIONS
// ============================================
function openModal(type) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalTitle || !modalBody) return;
    
    let title = '';
    let content = '';
    
    switch(type) {
        case 'investidor':
            title = 'Investidor Anjo - Informações Estratégicas';
            content = `
                <div class="text-center py-6">
                    <i class="fas fa-lock text-6xl text-gray-600 mb-6"></i>
                    <h4 class="text-2xl font-bold mb-4 text-white">Acesso Restrito</h4>
                    <p class="mb-6 text-gray-400">
                        Informações estratégicas sobre o pitch deck, métricas e projeções 
                        estão disponíveis mediante solicitação formal.
                    </p>
                    <p class="text-sm text-gray-500 mb-8">
                        Para garantir a confidencialidade das informações, solicitamos 
                        que entre em contato conosco para assinatura de NDA.
                    </p>
                    <a href="mailto:loomper.app@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Acesso%20-%20Investidor%20Anjo&body=Ol%C3%A1%2C%20tenho%20interesse%20em%20conhecer%20mais%20sobre%20o%20Loomper%20para%20investimento."
                       class="inline-block bg-loomper hover:bg-loomper-hover text-black font-bold px-8 py-4 rounded-xl transition-all duration-300">
                        <i class="fas fa-envelope mr-2"></i>
                        Solicitar por E-mail
                    </a>
                </div>
            `;
            break;
            
        case 'governo':
            title = 'Governo - Dados e Políticas Públicas';
            content = `
                <div class="text-center py-6">
                    <i class="fas fa-lock text-6xl text-gray-600 mb-6"></i>
                    <h4 class="text-2xl font-bold mb-4 text-white">Acesso Restrito</h4>
                    <p class="mb-6 text-gray-400">
                        Dados estruturados sobre impacto social, formalização e 
                        indicadores regionais estão disponíveis para órgãos governamentais.
                    </p>
                    <a href="mailto:loomper.app@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Acesso%20-%20Governo&body=Ol%C3%A1%2C%20represento%20[org%C3%A3o/secretaria]%20e%20gostaria%20de%20conhecer%20os%20dados%20do%20Loomper."
                       class="inline-block bg-loomper hover:bg-loomper-hover text-black font-bold px-8 py-4 rounded-xl transition-all duration-300">
                        <i class="fas fa-envelope mr-2"></i>
                        Solicitar por E-mail
                    </a>
                </div>
            `;
            break;
            
        case 'montadoras':
            title = 'Montadoras - Solução Integrada';
            content = `
                <div class="text-center py-6">
                    <i class="fas fa-lock text-6xl text-gray-600 mb-6"></i>
                    <h4 class="text-2xl font-bold mb-4 text-white">Acesso Restrito</h4>
                    <p class="mb-6 text-gray-400">
                        Informações sobre rastreabilidade, administração de pátios e 
                        integração com sistemas ERP estão disponíveis mediante solicitação.
                    </p>
                    <a href="mailto:loomper.app@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Acesso%20-%20Montadoras&body=Ol%C3%A1%2C%20represento%20[montadora]%20e%20gostaria%20de%20conhecer%20a%20solu%C3%A7%C3%A3o%20Loomper."
                       class="inline-block bg-loomper hover:bg-loomper-hover text-black font-bold px-8 py-4 rounded-xl transition-all duration-300">
                        <i class="fas fa-envelope mr-2"></i>
                        Solicitar por E-mail
                    </a>
                </div>
            `;
            break;
            
        case 'seguradoras':
            title = 'Seguradoras - Mitigação de Riscos';
            content = `
                <div class="text-center py-6">
                    <i class="fas fa-lock text-6xl text-gray-600 mb-6"></i>
                    <h4 class="text-2xl font-bold mb-4 text-white">Acesso Restrito</h4>
                    <p class="mb-6 text-gray-400">
                        Dados sobre sinistros, rastreabilidade e análise preditiva 
                        estão disponíveis para seguradoras parceiras.
                    </p>
                    <a href="mailto:loomper.app@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Acesso%20-%20Seguradoras&body=Ol%C3%A1%2C%20represento%20[seguradora]%20e%20gostaria%20de%20conhecer%20os%20benef%C3%ADcios%20do%20Loomper."
                       class="inline-block bg-orange hover:bg-orange-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
                        <i class="fas fa-envelope mr-2"></i>
                        Solicitar por E-mail
                    </a>
                </div>
            `;
            break;
            
        case 'transportadoras':
            title = 'Transportadoras - Otimização Operacional';
            content = `
                <div class="text-center py-6">
                    <i class="fas fa-lock text-6xl text-gray-600 mb-6"></i>
                    <h4 class="text-2xl font-bold mb-4 text-white">Acesso Restrito</h4>
                    <p class="mb-6 text-gray-400">
                        Informações sobre gestão de frota, redução de custos e 
                        aumento de faturamento estão disponíveis mediante solicitação.
                    </p>
                    <a href="mailto:loomper.app@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Acesso%20-%20Transportadoras&body=Ol%C3%A1%2C%20sou%20de%20[transportadora]%20e%20gostaria%20de%20transformar%20minha%20opera%C3%A7%C3%A3o%20com%20o%20Loomper."
                       class="inline-block bg-orange hover:bg-orange-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
                        <i class="fas fa-envelope mr-2"></i>
                        Solicitar por E-mail
                    </a>
                </div>
            `;
            break;
            
        case 'termos':
            title = 'Termos de Uso';
            content = `
                <div class="space-y-4 text-sm">
                    <h4 class="text-lg font-bold text-white">1. Aceitação dos Termos</h4>
                    <p>Ao acessar e usar a plataforma Loomper, você concorda com estes Termos de Uso e com nossa Política de Privacidade.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">2. Descrição do Serviço</h4>
                    <p>O Loomper é uma plataforma digital que conecta motoristas cegonheiros, chapas/ajudantes e transportadoras no setor de logística automotiva.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">3. Cadastro e Conta</h4>
                    <p>Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">4. Uso Adequado</h4>
                    <p>Você concorda em usar a plataforma apenas para fins legais e de acordo com todas as leis aplicáveis.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">5. Propriedade Intelectual</h4>
                    <p>Todo o conteúdo da plataforma Loomper é protegido por direitos autorais e outras leis de propriedade intelectual.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">6. Limitação de Responsabilidade</h4>
                    <p>O Loomper atua como intermediário entre as partes e não se responsabiliza por danos diretos ou indiretos decorrentes do uso da plataforma.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">7. Modificações</h4>
                    <p>Reservamos o direito de modificar estes termos a qualquer momento. As mudanças entram em vigor imediatamente após a publicação.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">8. Contato</h4>
                    <p>Para dúvidas sobre estes termos, entre em contato: <a href="mailto:loomper.app@gmail.com" class="text-loomper hover:underline">loomper.app@gmail.com</a></p>
                    
                    <p class="text-gray-500 text-xs mt-8">Última atualização: Dezembro de 2024</p>
                </div>
            `;
            break;
            
        case 'privacidade':
            title = 'Política de Privacidade';
            content = `
                <div class="space-y-4 text-sm">
                    <h4 class="text-lg font-bold text-white">1. Informações que Coletamos</h4>
                    <p>Coletamos informações pessoais quando você se cadastra, como nome, e-mail, telefone e localização.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">2. Como Usamos Suas Informações</h4>
                    <p>Suas informações são usadas para fornecer e melhorar nossos serviços, processar transações e comunicar com você.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">3. Compartilhamento de Dados</h4>
                    <p>Não vendemos suas informações pessoais. Compartilhamos apenas o necessário para operação da plataforma entre usuários conectados.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">4. Segurança</h4>
                    <p>Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">5. Seus Direitos (LGPD)</h4>
                    <p>Você tem direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">6. Cookies</h4>
                    <p>Usamos cookies para melhorar sua experiência na plataforma. Você pode configurar seu navegador para recusá-los.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">7. Alterações</h4>
                    <p>Podemos atualizar esta política periodicamente. Recomendamos revisar regularmente.</p>
                    
                    <h4 class="text-lg font-bold text-white mt-6">8. Contato</h4>
                    <p>Para exercer seus direitos ou dúvidas: <a href="mailto:loomper.app@gmail.com" class="text-loomper hover:underline">loomper.app@gmail.com</a></p>
                    
                    <p class="text-gray-500 text-xs mt-8">Última atualização: Dezembro de 2024</p>
                </div>
            `;
            break;
    }
    
    modalTitle.innerHTML = title;
    modalBody.innerHTML = content;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (modal && event.target === modal) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// FORM VALIDATION ENHANCEMENTS
// ============================================
const form = document.querySelector('form[name="loomper_leads"]');
if (form) {
    form.addEventListener('submit', function(e) {
        const whatsappInput = this.querySelector('input[name="whatsapp"]');
        if (whatsappInput) {
            // Remove all non-digits
            let value = whatsappInput.value.replace(/\D/g, '');
            
            // Validate minimum length (DDD + 8 digits)
            if (value.length < 10) {
                e.preventDefault();
                alert('Por favor, insira um número de WhatsApp válido (DDD + número)');
                whatsappInput.focus();
                return false;
            }
        }
    });
}

// ============================================
// WHATSAPP INPUT MASK
// ============================================
const whatsappInput = document.querySelector('input[name="whatsapp"]');
if (whatsappInput) {
    whatsappInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            // Format: (11) 99999-9999
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        }
        
        e.target.value = value;
    });
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log('%c🚛 LOOMPER - Revolucionando a Logística Automotiva', 'color: #F1C40F; font-size: 20px; font-weight: bold;');
console.log('%cInteressado em trabalhar conosco? Envie um e-mail para: loomper.app@gmail.com', 'color: #FF8C00; font-size: 14px;');

// ============================================
// PAGE LOAD COMPLETE
// ============================================
window.addEventListener('load', function() {
    console.log('✅ Loomper Landing Page carregada com sucesso!');
});

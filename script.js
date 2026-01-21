const botaoAlterarModo = document.getElementById('btn-alterar-modo');
const body = document.body;
const imgAlterarModo = document.getElementById('alterar-img');
const logoTecboard = document.getElementById('logo');

// Verifica se há modo salvo no localStorage
const modoSalvo = localStorage.getItem('tema');
if (modoSalvo === 'light-mode') {
    body.classList.add('light-mode');
    imgAlterarModo.src = 'img/modo-escuro.png';
    imgAlterarModo.alt = 'Opção para mudar para o modo escuro';
    logoTecboard.src = 'img/logo-tecboard-preto.png';
    logoTecboard.alt = 'Logo Tecboard na cor preta';
}


// Adiciona listener para o botão
botaoAlterarModo.addEventListener('click', () => {
    body.classList.toggle('light-mode');
            
    // Salva a preferência no localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('tema', 'light-mode');
        imgAlterarModo.src = 'img/modo-escuro.png';
        imgAlterarModo.alt = 'Opção para mudar para o modo escuro';
        logoTecboard.src = 'img/logo-tecboard-preto.png';
        logoTecboard.alt = 'Logo Tecboard na cor preta';
    } else {
        localStorage.setItem('tema', 'dark-mode');
        imgAlterarModo.src = 'img/modo-claro.png';
        imgAlterarModo.alt = 'Opção para mudar para o modo claro';
        logoTecboard.src = 'img/logo-tecboard-branco.png';
        logoTecboard.alt = 'Logo Tecboard na cor branca';
    }
});

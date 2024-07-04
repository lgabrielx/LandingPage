const menu = document.querySelector('.menu')
const NavMenu = document.querySelector('.nav-menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    NavMenu.classList.toggle('ativo')
})

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;

    if (name && email && tel) {
        document.getElementById('message').textContent = 'Cadastro realizado com sucesso!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
    }
});

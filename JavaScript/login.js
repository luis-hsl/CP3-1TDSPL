window.addEventListener('DOMContentLoaded', (event) => {
    
  const form = document.querySelector('form');

  
  form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    const emailInput = document.getElementById('logemail');
    const passwordInput = document.getElementById('logpass');


    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


    if (email === '' || password === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    
    alert('Login bem-sucedido!');
    window.location.href = "../index.html";
    const storedEmail = localStorage.getItem('email');

  });
});

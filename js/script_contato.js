document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('textoarea').value.trim();

    // Validação básica
    if (nome === '' || email === '' || assunto === '' || mensagem === '') {
      alert('Todos os campos devem ser preenchidos!');
      return;
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido!');
      return;
    }
    // Validação do nome
    if (nome.length < 3) {
      alert('O nome deve ter pelo menos 3 caracteres!');
        return;
    }
      
    // Validação do assunto
    if (assunto.length < 5) {
      alert('O assunto deve ter pelo menos 5 caracteres!');
      return;
    }

     // Validação menssagem
     if (mensagem.length < 5) {
        alert('A mensagem deve ter pelo menos 5 caracteres!');
        return;
      }

    // Se tudo estiver correto, você pode enviar o formulário
    alert('Formulário enviado com sucesso!');

        // Limpa o formulário
        document.getElementById('formulario').reset();

  });
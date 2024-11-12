// Adiciona um evento de clique no botão com o ID 'button'
document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // captura e guarda o ID em variaveis
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('textoarea').value.trim();

    // Validação básica: Verifica se todos os campos foram preenchidos
    if (nome === '' || email === '' || assunto === '' || mensagem === '') {
      alert('Todos os campos devem ser preenchidos!');
      return;
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex validar o formato do e-mail
    if (!emailRegex.test(email)) {    // Se o e-mail não corresponder ao formato esperado
      alert('Por favor, insira um e-mail válido!');  // mensagem de email errado
      return;  // Interrompe a execução do código e não permite o envio do formulário
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

    // mensagem de formulário enviado
    alert('Formulário enviado com sucesso!');

    // para limpar o formulario após o envio
    document.getElementById('formulario').reset();

  });
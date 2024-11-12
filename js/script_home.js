     // Seleciona o item do menu e o sub-menu
     //***************************************//

     // Seleciona o segundo item (li) dentro do menu
     const transtornosItem = document.querySelector('.menu li:nth-child(2)');
      // Seleciona o sub-menu dentro desse item
     const submenu = transtornosItem.querySelector('.submenu');
 
     // Função para mostrar o sub-menu ao passar o mouse sobre o item do menu
     transtornosItem.addEventListener('mouseenter', () => {
         submenu.style.display = 'block';
     });
     // Função para esconder o sub-menu quando o mouse sai do item do menu
     transtornosItem.addEventListener('mouseleave', () => {
         submenu.style.display = 'none';
     });

     // carrocel do Banner

     const banner = document.getElementById('banner');  // Seleciona o elemento do banner
     const images = [   // Cria um array com os caminhos das imagens para o carrossel
         './imagens/banner_home_1.png',
         './imagens/banner_home_2.png',
         './imagens/banner_home_3.png'
     ];
     let currentIndex = 0;  // Índice da imagem atual no carrossel
 
     // Função para atualizar o banner com a imagem no índice atual
     function updateBanner() {
         banner.style.backgroundImage = `url('${images[currentIndex]}')`;
     }

     // Evento de clique no botão 'prev' (anterior)
     // Se estiver na primeira imagem, volta para a última, senão vai para a imagem anterior
     document.getElementById('prev').addEventListener('click', () => {
         currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
         updateBanner(); // atualiza o banner
     });

     // Evento de clique no botão 'next' (próxima)
     // Se estiver na última imagem, vai para a primeira, senão vai para a próxima imagem
     document.getElementById('next').addEventListener('click', () => {
         currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
         updateBanner();// atualiza o banner
     });

     // interação com os botões do cerebro
     document.querySelectorAll('.botao').forEach(button => {  // Para cada botão com a classe 'botao'
        button.addEventListener('mouseenter', () => { // Quando o mouse entra no botão
            button.style.transform = 'scale(1.1)';  // Aumenta o tamanho do botão
            button.style.transition = 'transform 0.3s'; // Adiciona uma transição suave
        });
    
        button.addEventListener('mouseleave', () => {  // Quando o mouse sai do botão
            button.style.transform = 'scale(1)';  // Restaura o tamanho original do botão
        });
    
        button.addEventListener('click', () => {  // Quando o botão é clicado
            button.style.transform = 'scale(0.9)';  // Diminui o tamanho do botão momentaneamente (efeito de "click")
            setTimeout(() => { // Após 100ms
                button.style.transform = 'scale(1)';  // restaura o tamanho normal
            }, 100);   // 100ms de delay antes de restaurar
        });
    });

    // animação de entrada dos botoes do cerebro
    window.onload = () => {    // Quando a janela for carregada
        const buttons = document.querySelectorAll('.botao');   // Seleciona todos os botões com a classe 'botao'
        buttons.forEach((button, index) => {   // Para cada botão, com seu respectivo índice
            setTimeout(() => {  // Define um tempo de atraso para cada botão
                button.classList.remove('hidden');  // Remove a classe 'hidden' (oculta o botão)
                button.classList.add('show'); // Adiciona a classe 'show' (torna o botão visível)
            }, index * 300); // Atraso de 300ms entre cada botão
        });
    };
    


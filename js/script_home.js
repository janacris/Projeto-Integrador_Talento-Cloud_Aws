     // Seleciona o item do menu e o sub-menu
     const transtornosItem = document.querySelector('.menu li:nth-child(2)');
     const submenu = transtornosItem.querySelector('.submenu');
 
     // Função para mostrar o sub-menu
     transtornosItem.addEventListener('mouseenter', () => {
         submenu.style.display = 'block';
     });
 
     transtornosItem.addEventListener('mouseleave', () => {
         submenu.style.display = 'none';
     });

     // carrocel do Banner

     const banner = document.getElementById('banner');
     const images = [
         './imagens/banner_home_1.png',
         './imagens/banner_home_2.png',
         './imagens/banner_home_3.png'
     ];
     let currentIndex = 0;
 
     function updateBanner() {
         banner.style.backgroundImage = `url('${images[currentIndex]}')`;
     }
  
     document.getElementById('prev').addEventListener('click', () => {
         currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
         updateBanner();
     });
 
     document.getElementById('next').addEventListener('click', () => {
         currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
         updateBanner();
     });

     // interação com os botões do cerebro

     document.querySelectorAll('.botao').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'transform 0.3s';
        });
    
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.9)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // animação de entrada dos botoes do cerebro

    window.onload = () => {
        const buttons = document.querySelectorAll('.botao');
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.classList.remove('hidden');
                button.classList.add('show');
            }, index * 300); // Atraso de 300ms entre cada botão
        });
    };
    


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


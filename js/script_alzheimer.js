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
    


document.addEventListener('DOMContentLoaded', function () {
    const filter = document.getElementById('filter');
  
    filter.addEventListener('change', function () {
      const mealOptions = document.querySelector('.meal-options');
      const mealCards = mealOptions.getElementsByClassName('meal-card');
  
      const selectedValue = filter.value;
  
      // Convertir HTMLCollection a un array para facilitar la manipulación
      const cardsArray = Array.from(mealCards);
  
      // Ordenar el array de tarjetas de comida según el filtro seleccionado
      if (selectedValue === 'az') {
        cardsArray.sort(function (a, b) {
          const mealA = a.querySelector('h4').innerText.toLowerCase();
          const mealB = b.querySelector('h4').innerText.toLowerCase();
          if (mealA < mealB) {
            return -1;
          } else if (mealA > mealB) {
            return 1;
          } else {
            return 0;
          }
        });
      } else if (selectedValue === 'za') {
        cardsArray.sort(function (a, b) {
          const mealA = a.querySelector('h4').innerText.toLowerCase();
          const mealB = b.querySelector('h4').innerText.toLowerCase();
          if (mealA > mealB) {
            return -1;
          } else if (mealA < mealB) {
            return 1;
          } else {
            return 0;
          }
        });
      }
  
      // Eliminar las tarjetas existentes del contenedor
      while (mealOptions.firstChild) {
        mealOptions.firstChild.remove();
      }
  
      // Agregar las tarjetas ordenadas al contenedor
      cardsArray.forEach(function (card) {
        mealOptions.appendChild(card);
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("search-input");
    var searchButton = document.getElementById("search-button");
    var mealCards = document.getElementsByClassName("meal-card");
  
    searchButton.addEventListener("click", function() {
      var searchTerm = searchInput.value.toLowerCase();
  
      for (var i = 0; i < mealCards.length; i++) {
        var mealCard = mealCards[i];
        var mealName = mealCard.getElementsByTagName("h4")[0].innerText.toLowerCase();
  
        if (mealName.includes(searchTerm)) {
          mealCard.style.display = "block";
        } else {
          mealCard.style.display = "none";
        }
      }
    });
  });
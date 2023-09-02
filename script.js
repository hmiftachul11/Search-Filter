// document.addEventListener("DOMContentLoaded", function () {
//   const searchInput = document.getElementById("search-input");
//   const cards = document.querySelectorAll(".cards");
//   const nothingfound = document.getElementById("nothing-alert");

//   searchInput.addEventListener("input", function () {
//     const searchQuery = searchInput.value.trim();
//     filterIcons(searchQuery);
//   });

//   function filterIcons(searchQuery) {
//     let number = 0;
//     cards.forEach(function (card) {
//       const name = card.querySelector("h2").textContent.toLowerCase();
//       if (name.includes(searchQuery.toLowerCase())) {
//         nothingfound.style.display = "none";
//         card.style.display = "flex";
//         number++;
//       } else {
//         card.style.display = "none";
//       }
//     });

//     if (number === 0) {
//       nothingfound.style.display = "block";
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const carContainer = document.getElementById("car-container");
  const nothingfound = document.getElementById("nothing-alert");
  const loadMoreButton = document.getElementById("load-more");

  // Dummy car data
  const carData = [
      "Audi", "BMW", "Chevrolet", "Dacia", "Dodge", "Ferrari", "Jaguar", "Kia",
      "Lamborghini", "Lotus", "Mercedes", "Mini", "Nissan", "Porsche", "Toyota", "Volkswagen",
      "Volvo", "Ford", "Honda", "Hyundai", "Mazda", "Tesla", "Subaru", "Jeep", "Lexus",
      "Mitsubishi", "Infiniti", "Buick", "Chrysler", "GMC", "Land Rover", "Lincoln",
      "Acura", "Cadillac", "Fiat", "Jaguar", "Maserati", "Aston Martin", "Bentley",
      "Fiat", "Jaguar", "Maserati", "Aston Martin", "Bentley", "Bugatti", "McLaren",
      "Rolls-Royce", "Fisker", "Koenigsegg", "Lancia", "Pagani"
  ];

  let currentIndex = 0;
  const itemsPerPage = 8;

  function loadMoreItems() {
    const end = currentIndex + itemsPerPage;
    for (let i = currentIndex; i < end; i++) {
      if (i >= carData.length) {
        loadMoreButton.style.display = "none";
        break;
      }
      const carName = carData[i];
      const card = document.createElement("div");
      card.classList.add("cards");
      const h2 = document.createElement("h2");
      h2.classList.add("icon-name");
      h2.textContent = carName;
      card.appendChild(h2);
      carContainer.appendChild(card);
    }
    currentIndex = end;
  }

  // Load the initial set of items
  loadMoreItems();

  searchInput.addEventListener("input", function () {
    const searchQuery = searchInput.value.trim().toLowerCase();
    filterIcons(searchQuery);
  });

  function filterIcons(searchQuery) {
    const cards = document.querySelectorAll(".cards");
    let number = 0;

    cards.forEach(function (card) {
      const name = card.querySelector(".icon-name").textContent.toLowerCase();
      if (name.includes(searchQuery)) {
        card.style.display = "flex";
        number++;
      } else {
        card.style.display = "none";
      }
    });

    if (number === 0) {
      nothingfound.style.display = "block";
    } else {
      nothingfound.style.display = "none";
    }
  }

  loadMoreButton.addEventListener("click", loadMoreItems);
});

document.addEventListener("DOMContentLoaded", () => {
    var swiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
    })
})

let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function(){
    menus.classList.add("active");
})

closeBtn.addEventListener("click", function(){
    menus.classList.remove("active");
})


//--------------- Swiper JS Code
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidePerGroup: 1,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

    // breakpoints:{
    //     0:{
    //         slidesPerView: 1,
    //     },
    //     768:{
    //         slidesPerView: 2,
    //     },

    //     968:{
    //         slidesPerView: 3,
    //     },
    // }
//   });

// document.addEventListener("DOMContentLoaded", () => {
//     var swiper = new Swiper(".swiper-container", {
//         spaceBetween: 30,
//         centeredSlides: true,
//         autoplay: {
//             delay: 2000,
//             disableOnInteraction: false,
//         },
//     })
// })

// Dynamic Images


const SectionCenter = document.querySelector('.menus_items_container');
const filterBtns = document.querySelectorAll('.btn-cat');

filterBtns.forEach(function(btn){
    btn.addEventListener("click" ,function(e){
        const Category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.Category==Category){
                return menuItem;
            }
        });
        if(Category== "all"){
            displayMenusItem(menu);
        }
        else{
            displayMenusItem(menuCategory);
        }

    })
});


const menu =[
    {
        id: 1,
      title: "Creamy Tuscan Chicken",
      Category: "Dinner",
      price: 25,
      img: "../imgs/food_lover_01.webp"
    },

    {
        id: 2,
      title: "Beef Cheeks with Polenta and Mushrooms",
      Category: "Lunch",
      price: 25,
      img: "../imgs/food_lover_02.jpg"
    },

    {
        id: 3,
      title: "Pizza Margarrita",
      Category: "Lunch",
      price: 25,
      img: "../imgs/food_lover_03.avif"
    },

    {
        id: 4,
      title: "Cream Cheese & Chargrilled Vegetable Bruschetta",
      Category: "Starters",
      price: 25,
      img: "../imgs/food_lover_04.jpg"
    },

    {
        id: 5,
      title: "Balsamic Bruschetta",
      Category: "Starters",
      price: 25,
      img: "../imgs/food_lover_05.jpg"
    },

    {
        id: 6,
      title: "Tagliatelle Pasta With Bolognese Sauce",
      Category: "Dinner",
      price: 25,
      img: "../imgs/food_lover_06.webp"
    },

    {
        id: 7,
      title: "Ratatouille",
      Category: "Dinner",
      price: 25,
      img: "../imgs/food_lover_07.jpg"
    },

    {
        id: 8,
      title: "Strawberry Champagne Mojito",
      Category: "Drinks",
      price: 25,
      img: "../imgs/food_lover_08.jpg"
    },

    {
        id: 9,
      title: "Alla Francese",
      Category: "Lunch",
      price: 25,
      img: "../imgs/food_lover_09.jpg"
    },
]


window.addEventListener("DOMContentLoaded",function() {
    displayMenusItem(menu);
});

function displayMenusItem(menuItem){
    let displayMenusItem = menuItem.map(function(item){
        return` <div class="img_cards">
        <img src=${item.img} alt="" />
        <p class="price">Only On ${item.price} Dollars</p>
        <p>${item.title}</p>
        </div>`;
    })
    displayMenusItem = displayMenusItem.join("");
    SectionCenter .innerHTML = displayMenusItem;
}

function myFunction() {
    alert('Thank you for booking with us!');
}
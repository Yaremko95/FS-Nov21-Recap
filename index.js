const data = [
  {
    asin: "1940026091",
    title: "Pandemic (The Extinction Files, Book 1)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
    price: 7.81,
    category: "scifi",
    condition: "new",
  },
  {
    asin: "0316438960",
    title: "The Last Wish: Introducing the Witcher",
    img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
    price: 9.59,
    category: "fantasy",
    condition: "collectible",
  },
  {
    asin: "0425264041",
    title: "Shards of Hope (Psy-Changeling Novel, A)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91ku%2B0LppPL.jpg",
    price: 7.59,
    category: "scifi",
    condition: "new",
  },
  {
    asin: "1509854525",
    title: "The Charmed Life of Alex Moore",
    img: "https://images-na.ssl-images-amazon.com/images/I/61PVMb6YCaL.jpg",
    price: 23.33,
    category: "scifi",
    condition: "used",
  },
  {
    asin: "0062059882",
    title: "American Gods: The Tenth Anniversary Edition: A Novel",
    img: "https://images-na.ssl-images-amazon.com/images/I/519mwdpzlmL.jpg",
    price: 14.94,
    category: "fantasy",
    condition: "new",
  },
  {
    asin: "0008120692",
    title: "The Ark (The Ark Trilogy, Book 1)",
    img: "https://images-na.ssl-images-amazon.com/images/I/51A8BmESq5L.jpg",
    price: 9.36,
    category: "scifi",
    condition: "used",
  },
  {
    asin: "1621579832",
    title:
      "Justice on Trial: The Kavanaugh Confirmation and the Future of the Supreme Court",
    img: "https://images-na.ssl-images-amazon.com/images/I/71WdFQNYSJL.jpg",
    price: 17.39,
    category: "history",
    condition: "collectible",
  },
  {
    asin: "1626493014",
    title: "Fall and Rising",
    img: "https://images-na.ssl-images-amazon.com/images/I/51e7A-DT9fL.jpg",
    price: 7.77,
    category: "scifi",
    condition: "new",
  },
  {
    asin: "0385349947",
    title: "Lean In: Women, Work, and the Will to Lead",
    img: "https://images-na.ssl-images-amazon.com/images/I/81coZ37EmxL.jpg",
    price: 14.3,
    category: "history",
    condition: "used",
  },
  {
    asin: "0743270754",
    title: "Team of Rivals: The Political Genius of Abraham Lincoln",
    img: "https://images-na.ssl-images-amazon.com/images/I/51bpOR8qigL.jpg",
    price: 13.14,
    category: "history",
    condition: "new",
  },
  {
    asin: "1623808928",
    title: "Children of Forever",
    img: "https://images-na.ssl-images-amazon.com/images/I/61hJ8Nc-KpL.jpg",
    price: 3.25,
    category: "scifi",
    condition: "collectible",
  },
  {
    asin: "0008288798",
    title: "A Reaper at the Gates (Ember Quartet, Book 3)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91vFU0KCm9L.jpg",
    price: 12.6,
    category: "romance",
    condition: "used",
  },
  {
    asin: "0553808044",
    title:
      "A Game of Thrones: The Illustrated Edition: A Song of Ice and Fire: Book One",
    img: "https://images-na.ssl-images-amazon.com/images/I/A12tbaSby%2BL.jpg",
    price: 28.06,
    category: "fantasy",
    condition: "new",
  },
  {
    asin: "1578562953",
    title: "Edge of Eternity",
    img: "https://images-na.ssl-images-amazon.com/images/I/91Ft%2BN5q0sL.jpg",
    price: 15.19,
    category: "romance",
    condition: "new",
  },
  {
    asin: "1629143715",
    title: "The Man from Battle Flat: A Western Trio",
    img: "https://images-na.ssl-images-amazon.com/images/I/71GCjmvwIjL.jpg",
    price: 11.91,
    category: "romance",
    condition: "new",
  },
  {
    asin: "156975599X",
    title: "Patriots: A Novel of Survival in the Coming Collapse",
    img: "https://images-na.ssl-images-amazon.com/images/I/51REczj2RJL.jpg",
    price: 14.0,
    category: "horror",
    condition: "new",
  },
  {
    asin: "0735215251",
    title: "The Pharaoh's Secret (The NUMA Files)",
    img: "https://images-na.ssl-images-amazon.com/images/I/71EOFkXiVxL.jpg",
    price: 6.79,
    category: "horror",
    condition: "new",
  },
  {
    asin: "0399177574",
    title: "Illidan: World of Warcraft: A Novel",
    img: "https://images-na.ssl-images-amazon.com/images/I/81khLUoMKaL.jpg",
    price: 6.12,
    category: "horror",
    condition: "used",
  },
];

const cart = [];

const filters = {
  search: "",
  price: {
    min: null,
    max: null,
  },
  condition: [],
  categories: [],
};

const totalIcon = document.getElementById("total-cart");
const modalBody = document.querySelector(".modal-body");

const generateBookCardOption1 = function (book) {
  const col = document.createElement("div");
  col.className = "col col-sm-12 col-md-4 col-lg-2";

  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  col.appendChild(bookCard);

  const img = document.createElement("img");
  img.src = book.img;
  bookCard.appendChild(img);

  const btn = document.createElement("div");
  btn.className =
    "add-to-cart p-1 d-flex justify-content-center align-items-center";
  bookCard.appendChild(btn);

  const icon = document.createElement("i");
  icon.className = "fas fa-cart-plus";
  btn.appendChild(icon);

  const btnText = document.createElement("span");
  btnText.classList.add("ml-2");
  btnText.innerText = "Add to cart";
  btn.appendChild(btnText);

  const bookInfo = document.createElement("div");
  bookInfo.className = "book-info d-flex flex-column justify-content-between";
  col.appendChild(bookInfo);

  const bookTitle = document.createElement("div");
  bookTitle.className = "book-title";
  bookInfo.appendChild(bookTitle);

  const booktitleSpan = document.createElement("span");
  booktitleSpan.innerText = book.title;
  bookTitle.appendChild(booktitleSpan);

  const bookBottomContainer = document.createElement("div");
  bookBottomContainer.className = "d-flex w-100 justify-content-between";
  bookInfo.appendChild(bookBottomContainer);

  const bookCategory = document.createElement("span");
  bookCategory.className = "book-category";
  bookCategory.innerText = book.category;
  bookBottomContainer.appendChild(bookCategory);

  const bookPrice = document.createElement("span");
  bookPrice.className = "book-price";
  bookPrice.innerText = book.price;
  bookBottomContainer.appendChild(bookPrice);

  return col;
};

const generateBookCardOption2 = function (book) {
  const card = `
     <div class="col col-sm-12 col-md-4 col-lg-2">
              <div class="book-card" id="${book.asin}">
                <img
                  src="${book.img}"
                />
                <div
                  class="
                    add-to-cart
                    p-1
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                 
                >
                  <i class="fas fa-cart-plus"></i>
                  <span class="ml-2">Add to cart</span>
                </div>
              </div>
              <div class="book-info d-flex flex-column justify-content-between">
                <div class="book-title">
                  <span> ${book.title}</span>
                </div>
                <div style="font-size:10px">${book.condition}</div>
                <div class="d-flex w-100 justify-content-between">
                  <span class="book-category">${book.category}</span>
                  <span class="book-price">${book.price}</span>
                </div>
              </div>
            </div>
    `;
  return card;
};

const generateBooks = function (books) {
  const booksContainer = document.getElementById("books");
  booksContainer.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    const cardAsTemplate = generateBookCardOption2(books[i]);
    booksContainer.innerHTML += cardAsTemplate;

    // const cardAsDom = generateBookCardOption1(books[i]);
    // booksContainer.appendChild(bookCard);
  }
};

const generateCategories = function (books) {
  const categories = [];
  const categoriesContainer = document.querySelector(".categories-filters");
  for (let i = 0; i < books.length; i++) {
    if (!categories.includes(books[i].category)) {
      const checkBox = `  <div class="form-check">
              <input class="form-check-input" type="checkbox" id="${books[i].category}" />
              <label class="form-check-label" for="${books[i].category}"> ${books[i].category} </label>
            </div>`;
      categoriesContainer.innerHTML += checkBox;
      categories.push(books[i].category);
    }
  }
};

const generateConditions = function (books) {
  const temp = [];
  const parent = document.querySelector(".conditions-filters");
  for (let i = 0; i < books.length; i++) {
    if (!temp.includes(books[i].condition)) {
      const checkBox = `
         <div class="form-check">
              <input class="form-check-input" type="checkbox" id="${books[i].condition}" />
              <label class="form-check-label" for="${books[i].conditio}"> ${books[i].condition} </label>
            </div>`;
      parent.innerHTML += checkBox;
      temp.push(books[i].condition);
    }
  }
};

const addToCart = function () {
  const carBtns = document.querySelectorAll(".add-to-cart");

  for (let i = 0; i < carBtns.length; i++) {
    carBtns[i].addEventListener("click", function (e) {
      const id = e.target.closest(".book-card").id;
      cart.push(id);

      totalIcon.innerText = cart.length;

      console.log(cart);
    });
  }
};

const generateCart = function () {
  modalBody.innerHTML = "";
  const totalSumDiv = document.getElementById("totalPrice");
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (cart.includes(data[i].asin)) {
      total += data[i].price;
      const bookCart = `
           <div class="book-cart d-flex justify-content-between mb-2" id="${data[i].asin}">
              <div class="d-flex">
                <img
                  src="${data[i].img}"
                />
                <div class="book-cart-info d-flex flex-column ml-2">
                  <span>${data[i].title}</span>
                  <span class="mt-2 " onclick="removeFromCart(event)">Remove</span>
                </div>
              </div>
              <div>
                <span>$${data[i].price}</span>
              </div>
            </div>
      `;
      modalBody.innerHTML += bookCart;
      totalSumDiv.innerText = `$${total}`;
    }
  }
};

const removeFromCart = function (e) {
  const id = e.target.closest(".book-cart").id;
  e.target.closest(".book-cart").remove();
  const index = cart.indexOf(id);
  cart.splice(index, 1);
  totalIcon.innerText = cart.length;
  console.log(cart);
};

const filterByCategory = function (arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (filters.categories.includes(arr[i].category)) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

const filterBycondition = function (arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (filters.condition.includes(arr[i].condition)) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

const filterByPrice = function (arr, min, max) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price >= parseInt(min) && arr[i].price <= parseInt(max)) {
      temp.push(arr[i]);
    }
  }

  return temp;
};

const priceListener = function () {
  document
    .getElementById("filter-price")
    .addEventListener("click", function (e) {
      filters.price.min = document.getElementById("minPrice").value;
      filters.price.max = document.getElementById("maxPrice").value;
      applyFilters();
    });
};

const categoriesListener = function () {
  const checkBoxes = document.querySelectorAll(".categories-filters input");
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener("click", function (e) {
      console.log(e.target.checked, e.target.id);
      const checked = e.target.checked;
      const id = e.target.id;
      if (checked) {
        filters.categories.push(id);
      } else {
        const index = filters.categories.indexOf(id);
        filters.categories.splice(index, 1);
      }
      applyFilters();
    });
  }
};

const conditionsListener = function () {
  const checkBoxes = document.querySelectorAll(".conditions-filters input");
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener("click", function (e) {
      const checked = e.target.checked;
      const id = e.target.id;
      if (checked) {
        filters.condition.push(id);
      } else {
        const index = filters.condition.indexOf(id);
        filters.condition.splice(index, 1);
      }
      applyFilters();
    });
  }
};

const applyFilters = function () {
  let filtered = data;
  if (filters.search.length > 0) {
    filtered = filterBySearch(filtered, filters.search);
  }
  if (filters.price.min && filters.price.max) {
    filtered = filterByPrice(filtered, filters.price.min, filters.price.max);
  }
  if (filters.condition.length > 0) {
    filtered = filterBycondition(filtered);
  }
  if (filters.categories.length > 0) {
    filtered = filterByCategory(filtered);
  }

  generateBooks(filtered);
  addToCart();
};

const filterBySearch = function (arr, value) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title.toLowerCase().includes(value.toLowerCase())) {
      temp.push(arr[i]);
    }
  }

  return temp;
};
const searchListener = function () {
  document.getElementById("search").addEventListener("change", function (e) {
    console.log(e.target.value);
    filters.search = e.target.value;
    applyFilters();
  });
};

window.onload = function () {
  generateBooks(data);
  generateCategories(data);
  generateConditions(data);
  applyFilters();
  searchListener();
  categoriesListener();
  conditionsListener();
  priceListener();
};

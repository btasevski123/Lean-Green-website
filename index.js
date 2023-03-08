// scrolling on click.
const button = document.getElementById("scroolToIngredients");
const button2 = document.getElementById("scroolToTransformation");

const scrollToIngredients = () => {
  const ingredients = document.getElementById("ingredients");
  ingredients.scrollIntoView({ behavior: "smooth" });
};
const scrollToTransformation = () => {
  const transformation = document.getElementById("transformation");
  transformation.scrollIntoView({ behavior: "smooth" });
};

button.addEventListener("click", scrollToIngredients);
button2.addEventListener("click", scrollToTransformation);

// dinamicly creating cards for expirience section from data expirience.js.

function createExperienceCard(expirience) {
  const card = document.createElement("div");
  card.classList.add("expirience__body-cards--card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card__body");

  const image = document.createElement("img");
  image.src = expirience.imageUrl;
  image.alt = "";

  const heading = document.createElement("h3");
  heading.textContent = expirience.title;

  const paragraph = document.createElement("p");
  paragraph.textContent = expirience.description;

  const span = document.createElement("span");
  span.textContent = expirience.information;

  cardBody.appendChild(image);
  cardBody.appendChild(heading);
  cardBody.appendChild(paragraph);
  cardBody.appendChild(span);

  card.appendChild(cardBody);

  return card;
}
function createExperienceCards() {
  const container = document.querySelector(".expirience__body-cards");

  expirienceData.forEach((expirience) => {
    const card = createExperienceCard(expirience);
    container.appendChild(card);
  });
}

createExperienceCards();

// dinamicly creating cards for ingredients section from data ingredients.js.

function createIngredientCard(ingredient) {
  const card = document.createElement("div");
  card.classList.add("ingredients__inner-card");

  const desc = document.createElement("div");
  desc.classList.add("ingredients__inner-card-desc", "item");

  const h4 = document.createElement("h4");
  h4.classList.add("text-green");
  h4.textContent = ingredient.name;

  const p = document.createElement("p");
  p.textContent = ingredient.description;

  const ul = document.createElement("ul");
  ingredient.benefits.forEach((benefit) => {
    const li = document.createElement("li");
    li.textContent = benefit;
    ul.appendChild(li);
  });

  desc.appendChild(h4);
  desc.appendChild(p);
  desc.appendChild(ul);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add(
    "ingredients__inner-card-img",
    "item",
    "text-center"
  );

  const img = document.createElement("img");
  img.src = ingredient.imageUrl;
  img.alt = "";

  imgContainer.appendChild(img);

  card.appendChild(desc);
  card.appendChild(imgContainer);

  return card;
}

function createIngredientsCards() {
  const container = document.querySelector(".ingredients__inner");

  ingredientsData.forEach((ingredient) => {
    const card = createIngredientCard(ingredient);
    container.appendChild(card);
  });
}

createIngredientsCards();

// dinamicly creating cards for safe and efective section from data efective.js.

function createEfectiveCard(efectiveData) {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("safe-and-efective__wrapper-flexbox--box");

  const img = document.createElement("img");
  img.src = efectiveData.imageSrc;
  img.alt = "";

  const h4 = document.createElement("h4");
  h4.textContent = efectiveData.title;

  const p = document.createElement("p");
  p.textContent = efectiveData.description;

  cardWrapper.appendChild(img);
  cardWrapper.appendChild(h4);
  cardWrapper.appendChild(p);

  return cardWrapper;
}

function createEfectiveCards() {
  const wrapper = document.querySelector(".safe-and-efective__wrapper-flexbox");

  efectiveData.forEach((card) => {
    const box = createEfectiveCard(card);

    wrapper.append(box);
  });
}

createEfectiveCards();

// dynamically creating cards that are repeated 4 times in the project

// I intentionally use function and arrow function to present both ways.

const createGLCardBelge = () => {
  //  container
  const card = document.createElement("div");
  card.classList.add("card-belge");

  // header
  const header = document.createElement("div");
  header.classList.add("card-belge__header", "bg-blade", "border");
  const title = document.createElement("h3");
  title.textContent = "one time purchase";
  header.appendChild(title);
  card.appendChild(header);

  //  body
  const body = document.createElement("div");
  body.classList.add("card-belge__body");
  const quantity = document.createElement("p");
  quantity.textContent = "3 Pounches";
  body.appendChild(quantity);
  const bodyImg = document.createElement("div");
  bodyImg.classList.add("card-belge__body-img");
  const img1 = document.createElement("img");
  img1.src = "./images/assets/Pouch Mockup_3 pieces.png";
  img1.alt = "";
  img1.classList.add("relative");
  const img2 = document.createElement("img");
  img2.src = "./images/assets/badge.png";
  img2.alt = "";
  img2.classList.add("badge");
  bodyImg.appendChild(img1);
  bodyImg.appendChild(img2);
  body.appendChild(bodyImg);
  const saving = document.createElement("p");
  saving.classList.add("saving");
  saving.textContent = "Save 37.50%";
  body.appendChild(saving);
  const price = document.createElement("h4");
  price.textContent = "$149.95";
  body.appendChild(price);
  const button = document.createElement("button");
  button.textContent = "BUY NOW\n$5 Ground shipping";
  body.appendChild(button);
  const regularPrice = document.createElement("p");
  regularPrice.classList.add("regular-price");
  const span = document.createElement("span");
  span.textContent = "$239.85";
  regularPrice.textContent = "Regular Price: ";
  regularPrice.appendChild(span);
  body.appendChild(regularPrice);
  card.appendChild(body);

  //  footer
  const footer = document.createElement("div");
  footer.classList.add("card-belge__footer");
  const footerFlex = document.createElement("div");
  footerFlex.classList.add("card-belge__footer-flex");
  const img3 = document.createElement("img");
  img3.src = "./images/assets/norton-antivirus-logo 1.png";
  img3.alt = "";
  const img4 = document.createElement("img");
  img4.src = "./images/assets/secure payments 1.png";
  img4.alt = "";
  footerFlex.appendChild(img3);
  footerFlex.appendChild(img4);
  footer.appendChild(footerFlex);
  const img5 = document.createElement("img");
  img5.src = "./images/assets/security-icons1 2.png";
  img5.alt = "";
  footer.appendChild(img5);
  card.appendChild(footer);

  return card;
};

const createGLCardGreen = () => {
  //  container
  const card = document.createElement("div");
  card.classList.add("card-green", "green");

  // header
  const header = document.createElement("div");
  header.classList.add("card-green__header", "bg-green", "text-white");
  const title = document.createElement("h3");
  title.textContent = "one time purchase";
  header.appendChild(title);
  card.appendChild(header);

  //  body
  const body = document.createElement("div");
  body.classList.add("card-green__body");
  const quantity = document.createElement("p");
  quantity.textContent = "3 Pounches";
  body.appendChild(quantity);
  const bodyImg = document.createElement("div");
  bodyImg.classList.add("card-green__body-img");
  const img1 = document.createElement("img");
  img1.src = "./images/assets/Pouch Mockup_3 pieces.png";
  img1.alt = "";
  img1.classList.add("relative");
  const img2 = document.createElement("img");
  img2.src = "./images/assets/badge.png";
  img2.alt = "";
  img2.classList.add("badge");
  bodyImg.appendChild(img1);
  bodyImg.appendChild(img2);
  body.appendChild(bodyImg);
  const saving = document.createElement("p");
  saving.classList.add("saving");
  saving.textContent = "Save 50%";
  body.appendChild(saving);
  const price = document.createElement("h4");
  price.textContent = "$199.95";
  body.appendChild(price);
  const button = document.createElement("button");
  button.textContent = "BUY NOW\n$5 Ground shipping";
  body.appendChild(button);
  const regularPrice = document.createElement("p");
  regularPrice.classList.add("regular-price");
  const span = document.createElement("span");
  span.textContent = "$399.75";
  regularPrice.textContent = "Regular Price: ";
  regularPrice.appendChild(span);
  body.appendChild(regularPrice);
  card.appendChild(body);

  //  footer
  const footer = document.createElement("div");
  footer.classList.add("card-green__footer");
  const footerFlex = document.createElement("div");
  footerFlex.classList.add("card-green__footer-flex");
  const img3 = document.createElement("img");
  img3.src = "./images/assets/norton-antivirus-logo 1.png";
  img3.alt = "";
  const img4 = document.createElement("img");
  img4.src = "./images/assets/secure payments 1.png";
  img4.alt = "";
  footerFlex.appendChild(img3);
  footerFlex.appendChild(img4);
  footer.appendChild(footerFlex);
  const img5 = document.createElement("img");
  img5.src = "./images/assets/security-icons1 2.png";
  img5.alt = "";
  footer.appendChild(img5);
  card.appendChild(footer);

  return card;
};

const advertisingInner = document.querySelector(".advertising__inner-cards");
advertisingInner.append(createGLCardBelge());
advertisingInner.append(createGLCardGreen());

const rediscoverInner = document.querySelector(".rediscover__body-cards");
rediscoverInner.append(createGLCardBelge());
rediscoverInner.append(createGLCardGreen());

const transformationInner = document.querySelector(
  ".transformation__wrapper-cards"
);
transformationInner.append(createGLCardBelge());
transformationInner.append(createGLCardGreen());

const transformationInner2 = document.querySelector(
  ".transformation__wrapper-cards2"
);
transformationInner2.append(createGLCardBelge());
transformationInner2.append(createGLCardGreen());

// accordion functionality

const accordionItems = document.querySelectorAll(".accordion-item");

// first item open
accordionItems[0].querySelector(".accordion-item__content").style.display =
  "block";
accordionItems[0].querySelector(".accordion-item__icon").innerHTML = "&#9650;";

// adding event listener to all accordion items
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-item__header");

  header.addEventListener("click", () => {
    // toggle the visibility of the accordion content
    const content = item.querySelector(".accordion-item__content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    // rotate icon
    const icon = item.querySelector(".accordion-item__icon");
    icon.innerHTML = content.style.display === "block" ? "&#9650;" : "&#9660;";

    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.querySelector(".accordion-item__content").style.display =
          "none";
        otherItem.querySelector(".accordion-item__icon").innerHTML = "&#9660;";
      }
    });
  });
});

// this is a second accordion solution option where an active class is used

// const accordionItems = document.querySelectorAll(".accordion-item");

// accordionItems.forEach(item => {
//   const header = item.querySelector(".accordion-item__header");

//   header.addEventListener("click", () => {
//     // Toggle active class on the accordion item
//     item.classList.toggle("active");

//     // Close all other accordion items
//     accordionItems.forEach(otherItem => {
//       if (otherItem !== item) {
//         otherItem.classList.remove("active");
//       }
//     });
//   });
// });

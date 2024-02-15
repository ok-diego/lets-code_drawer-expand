import "./style.css";

const $card_list = document.querySelectorAll("li.cards__each");
const $ctn_imgs_list = document.querySelectorAll("article.ctn-imgs__each");
const $ctn_imgs_holder = document.querySelector("section.ctn-imgs__holder");
const $btn_close = document.querySelector(".btn__close");
const $card_list_holder = document.querySelector("ul.cards__holder");

$card_list.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    $ctn_imgs_list[index].classList.add("is-hover");
  });

  card.addEventListener("mouseleave", () => {
    console.log();
    $ctn_imgs_list[index].classList.remove("is-hover");
  });

  card.addEventListener("click", () => {
    if ($ctn_imgs_list[index].classList.contains("is-open")) {
      $ctn_imgs_list[index].classList.remove("is-open");
    } else {
      $btn_close.style.display = "block";
      $btn_close.style.opacity = "1";
      card.classList.add("is-active");
      $card_list_holder.classList.add("is-col");
      $ctn_imgs_holder.classList.add("is-open");
      $ctn_imgs_list[index].classList.add("is-expand");
    }

    $btn_close.addEventListener("click", () => {
      $btn_close.style.display = "none";
      card.classList.remove("is-active");
      $card_list_holder.classList.remove("is-col");
      $ctn_imgs_holder.classList.remove("is-open");
      $ctn_imgs_list[index].classList.remove("is-expand");
    });
  });
});

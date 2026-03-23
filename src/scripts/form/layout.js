const form = document.querySelector("form");
const container = document.querySelector(".container");

export function adjustContainerHeight() {
  if (!form.classList.contains("form-closed")) {
    const formHeight = (form.offsetHeight / 16);
    const extraSpace = 6;

    const finalHeight = `${formHeight + extraSpace}rem`;

    container.style.height = finalHeight
  } else {
    container.style.height = ""
  }
}

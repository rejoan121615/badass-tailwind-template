const productBtn = document.querySelector("#product-btn");
const productItems = document.querySelector("#toggle-item");
let hide = false;

productBtn.onclick = function () {
    if (hide) {
        hide = false;
        productItems.style.display = "none";
    } else {
        hide = true;
        productItems.style.display = "flex";
    }
};

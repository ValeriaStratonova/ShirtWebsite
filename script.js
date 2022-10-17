const count= document.querySelector('.product__basket__count');
const previews = document.querySelectorAll('.picture');
previews.forEach((item) => {
    item.addEventListener('mouseenter', function () {
        const src = this.getAttribute("data-full");
        document.querySelector('.big__picture').src = src;
    })
})

document.querySelector('.button__blue').onclick=function(e) {
    toastr.success("В корзину добавлено " + count.value + " товаров");
}

document.querySelector('.lessen').onclick=function(e) {
    const count=document.querySelector('.product__basket__count');
    if (parseInt(count.textContent)>1) {
        count.textContent=parseInt(count.textContent)-1;
    }
}

const count=document.querySelector('.product__basket__count');
document.querySelector('.increase').onclick=function(e) {
    count.textContent=parseInt(count.textContent)+1;
}

const previews = document.querySelectorAll('.picture');
previews.forEach((item) => {
    item.addEventListener('mouseenter', function () {
        const src = this.getAttribute("data-full");
        document.querySelector('.big__picture').src = src;
    })
})

document.querySelector('.button__blue').onclick=function(e) {
    toastr.success("В корзину добавлено " + count.textContent + " товаров");
}

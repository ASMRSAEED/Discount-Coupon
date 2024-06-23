document.getElementById('btn-apply').addEventListener('click', function () {
    const discountField = document.getElementById('discount-field');
    const discountValue = discountField.value;
    discountField.value = '';

    if (discountValue != 'DISC30') {
        alert('Invalid Coupon Code')
        const productPrice = document.getElementById('product-price').innerText;
        const result = productPrice;
        const discountedPrice = document.getElementById('discounted-price');
        return discountedPrice.innerText = result;
    } else {
        alert('Coupon Applied')
        const productPrice = document.getElementById('product-price').innerText;
        const discount = (productPrice / 100) * 30;
        const result = productPrice - discount;
        const discountedPrice = document.getElementById('discounted-price');
        discountedPrice.innerText = result;
    }
})
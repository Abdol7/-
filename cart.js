// هذا الملف يحتوي على دوال إضافية متعلقة بسلة التسوق

// تحديث سلة التسوق عند تحميل الصفحة
updateCartCount();

// أحداث الكمية في نافذة المنتج
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('increment') || e.target.classList.contains('decrement')) {
        const input = e.target.parentElement.querySelector('input');
        let value = parseInt(input.value);
        
        if (e.target.classList.contains('increment')) {
            value++;
        } else if (value > 1) {
            value--;
        }
        
        input.value = value;
    }
});

// أحداث إضافة إلى السلة من نافذة المنتج
document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
    const quantity = parseInt(document.querySelector('.quantity-selector input').value);
    const productId = document.querySelector('.product-modal').getAttribute('data-id');
    
    addToCart(productId, quantity);
    showAlert('تمت إضافة المنتج إلى سلة التسوق بنجاح', 'success');
});

// أحداث الشراء الآن من نافذة المنتج
document.querySelector('.buy-now-btn').addEventListener('click', function() {
    const quantity = parseInt(document.querySelector('.quantity-selector input').value);
    const productId = document.querySelector('.product-modal').getAttribute('data-id');
    
    addToCart(productId, quantity);
    closeProductModal();
    setTimeout(() => {
        openCartModal();
    }, 300);
});

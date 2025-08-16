// DOM جاهز
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة الموقع
    initSite();
    
    // تحميل المنتجات
    loadProducts();
    
    // أحداث القائمة المتنقلة
    setupMobileMenu();
    
    // أحداث البانر المنزلق
    setupBannerSlider();
    
    // أحداث البحث
    setupSearch();
    
    // أحداث الفئات
    setupCategories();
    
    // أحداث النماذج
    setupModals();
    
    // أحداث إتمام الطلب
    setupCheckout();
});

// تهيئة الموقع
function initSite() {
    // إضافة سنة الحالية في الفوتر
    document.querySelector('.footer-bottom p').innerHTML = `&copy; ${new Date().getFullYear()} نون. جميع الحقوق محفوظة.`;
    
    // تغيير البانر حسب الموسم
    updateBannerBySeason();
}

// تحميل المنتجات
function loadProducts() {
    // في الواقع، هنا ستقوم بجلب البيانات من قاعدة بيانات أو API
    // لكن لأغراض العرض، سنستخدم بيانات وهمية
    
    const products = [
        {
            id: 1,
            title: "سلسال قلب وردي",
            category: "necklaces",
            price: 199,
            originalPrice: 249,
            image: "products/necklace-1.jpg",
            realImage: "products/necklace-1-real.jpg",
            model3d: "products/necklace-1-3d.glb",
            description: "سلسال أنيق على شكل قلب باللون الوردي، مصنوع من الفضة الإسترليني ومطلي بالذهب الوردي.",
            colors: ["#ff6b8b", "#ffb8c6", "#ffd166"],
            sizes: ["طويل", "قصير"],
            isFeatured: true
        },
        {
            id: 2,
            title: "سوار حجر القمر",
            category: "bracelets",
            price: 149,
            originalPrice: 199,
            image: "products/bracelet-1.jpg",
            realImage: "products/bracelet-1-real.jpg",
            model3d: "products/bracelet-1-3d.glb",
            description: "سوار أنثوي أنيق مزين بحجر القمر الطبيعي، مثالي للإطلالات اليومية والمناسبات الخاصة.",
            colors: ["#f8f9fa", "#e9ecef", "#dee2e6"],
            sizes: ["صغير", "وسط", "كبير"],
            isFeatured: true
        },
        {
            id: 3,
            title: "شنطة سهرة لامعة",
            category: "clutch",
            price: 349,
            originalPrice: 399,
            image: "products/clutch-1.jpg",
            realImage: "products/clutch-1-real.jpg",
            model3d: "products/clutch-1-3d.glb",
            description: "شنطة سهرة لامعة بتصميم عصري، تحتوي على جيب داخلي وتغلق بسحاب آمن.",
            colors: ["#000000", "#343a40", "#495057"],
            sizes: ["واحد"],
            isFeatured: true
        },
        {
            id: 4,
            title: "حلق ألماس صغير",
            category: "earrings",
            price: 179,
            originalPrice: 229,
            image: "products/earrings-1.jpg",
            realImage: "products/earrings-1-real.jpg",
            model3d: "products/earrings-1-3d.glb",
            description: "حلق ألماس صغير بتصميم كلاسيكي، مثالي للإطلالة اليومية البسيطة والأنيقة.",
            colors: ["#f8f9fa", "#e9ecef"],
            sizes: ["صغير"],
            isFeatured: true
        },
        {
            id: 5,
            title: "شنطة كتف جلدية",
            category: "shoulder",
            price: 499,
            originalPrice: 599,
            image: "products/shoulder-1.jpg",
            realImage: "products/shoulder-1-real.jpg",
            model3d: "products/shoulder-1-3d.glb",
            description: "شنطة كتف جلدية فاخرة بتصميم عملي وأنيق، تحتوي على عدة جيوب داخلية وخارجية.",
            colors: ["#6c757d", "#343a40", "#212529"],
            sizes: ["وسط", "كبير"],
            isFeatured: true
        },
        {
            id: 6,
            title: "طقم كامل وردي",
            category: "sets",
            price: 599,
            originalPrice: 749,
            image: "products/set-1.jpg",
            realImage: "products/set-1-real.jpg",
            model3d: "products/set-1-3d.glb",
            description: "طقم كامل يتضمن سلسال وسوار وحلق بتصميم متناسق باللون الوردي، مثالي للهدايا.",
            colors: ["#ff6b8b", "#ffb8c6"],
            sizes: ["كامل"],
            isFeatured: true
        }
    ];
    
    // عرض المنتجات المميزة
    displayFeaturedProducts(products);
    
    // عرض الشنط
    displayBags(products);
    
    // عرض العروض
    displayOffers(products);
}

// عرض المنتجات المميزة
function displayFeaturedProducts(products) {
    const featuredContainer = document.querySelector('.featured-products .products-grid');
    const featuredProducts = products.filter(product => product.isFeatured);
    
    featuredContainer.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        const productHTML = `
            <div class="product-card" data-id="${product.id}">
                ${product.originalPrice > product.price ? `<span class="product-badge">-${discount}%</span>` : ''}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        <span class="current-price">${product.price} ج.م</span>
                        ${product.originalPrice > product.price ? `<span class="original-price">${product.originalPrice} ج.م</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart">أضف إلى السلة</button>
                        <button class="quick-view">عرض سريع</button>
                    </div>
                </div>
            </div>
        `;
        
        featuredContainer.insertAdjacentHTML('beforeend', productHTML);
    });
    
    // إضافة أحداث للمنتجات المميزة
    setupProductEvents(featuredContainer);
}

// عرض الشنط
function displayBags(products) {
    const bagsContainer = document.querySelector('.bags-section .products-grid');
    const bags = products.filter(product => product.category === 'clutch' || product.category === 'shoulder');
    
    bagsContainer.innerHTML = '';
    
    bags.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        const productHTML = `
            <div class="product-card" data-id="${product.id}">
                ${product.originalPrice > product.price ? `<span class="product-badge">-${discount}%</span>` : ''}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        <span class="current-price">${product.price} ج.م</span>
                        ${product.originalPrice > product.price ? `<span class="original-price">${product.originalPrice} ج.م</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart">أضف إلى السلة</button>
                        <button class="quick-view">عرض سريع</button>
                    </div>
                </div>
            </div>
        `;
        
        bagsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
    
    // إضافة أحداث للشنط
    setupProductEvents(bagsContainer);
}

// عرض العروض
function displayOffers(products) {
    const offersContainer = document.querySelector('.offers-section .products-grid');
    const offers = products.filter(product => product.originalPrice > product.price);
    
    offersContainer.innerHTML = '';
    
    offers.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        const productHTML = `
            <div class="product-card" data-id="${product.id}">
                <span class="product-badge">-${discount}%</span>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        <span class="current-price">${product.price} ج.م</span>
                        <span class="original-price">${product.originalPrice} ج.م</span>
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart">أضف إلى السلة</button>
                        <button class="quick-view">عرض سريع</button>
                    </div>
                </div>
            </div>
        `;
        
        offersContainer.insertAdjacentHTML('beforeend', productHTML);
    });
    
    // إضافة أحداث للعروض
    setupProductEvents(offersContainer);
}

// إعداد أحداث المنتجات
function setupProductEvents(container) {
    // حدث عرض سريع
    container.querySelectorAll('.quick-view').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.closest('.product-card').getAttribute('data-id');
            openProductModal(productId);
        });
    });
    
    // حدث إضافة إلى السلة
    container.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.closest('.product-card').getAttribute('data-id');
            addToCart(productId);
        });
    });
}

// فتح نافذة المنتج
function openProductModal(productId) {
    // في الواقع، هنا ستقوم بجلب بيانات المنتج من قاعدة بيانات أو API
    // لكن لأغراض العرض، سنستخدم بيانات وهمية
    
    const product = {
        id: productId,
        title: "سلسال قلب وردي",
        category: "necklaces",
        price: 199,
        originalPrice: 249,
        images: [
            "products/necklace-1.jpg",
            "products/necklace-2.jpg",
            "products/necklace-3.jpg"
        ],
        realImage: "products/necklace-1-real.jpg",
        model3d: "products/necklace-1-3d.glb",
        description: "سلسال أنيق على شكل قلب باللون الوردي، مصنوع من الفضة الإسترليني ومطلي بالذهب الوردي. الطول قابل للتعديل مع سلسلة إضافية. يأتي مع علبة هدايا فاخرة.",
        colors: [
            { name: "وردي", code: "#ff6b8b" },
            { name: "وردي فاتح", code: "#ffb8c6" },
            { name: "ذهبي", code: "#ffd166" }
        ],
        sizes: ["طويل 50 سم", "قصير 40 سم"],
        rating: 4.5,
        reviews: 25,
        similarProducts: [
            { id: 6, title: "طقم كامل وردي", price: 599, image: "products/set-1.jpg" },
            { id: 2, title: "سوار حجر القمر", price: 149, image: "products/bracelet-1.jpg" },
            { id: 4, title: "حلق ألماس صغير", price: 179, image: "products/earrings-1.jpg" }
        ]
    };
    
    // تعبئة بيانات المنتج في النافذة
    const modal = document.querySelector('.product-modal');
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    // الصور الرئيسية
    document.querySelector('.main-image img').src = product.images[0];
    document.querySelector('.real-life-image img').src = product.realImage;
    
    // الثمبنيليز
    const thumbnailsContainer = document.querySelector('.image-thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    product.images.forEach((image, index) => {
        const thumbnailHTML = `
            <div class="thumbnail ${index === 0 ? 'active' : ''}">
                <img src="${image}" alt="صورة ${index + 1}">
            </div>
        `;
        thumbnailsContainer.insertAdjacentHTML('beforeend', thumbnailHTML);
    });
    
    // أحداث الثمبنيليز
    thumbnailsContainer.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            document.querySelector('.thumbnail.active').classList.remove('active');
            this.classList.add('active');
            document.querySelector('.main-image img').src = product.images[index];
        });
    });
    
    // تفاصيل المنتج
    document.querySelector('.product-title').textContent = product.title;
    document.querySelector('.product-rating .stars').innerHTML = getRatingStars(product.rating);
    document.querySelector('.review-count').textContent = `(${product.reviews} تقييم)`;
    
    document.querySelector('.current-price').textContent = `${product.price} ج.م`;
    document.querySelector('.original-price').textContent = `${product.originalPrice} ج.م`;
    document.querySelector('.discount-badge').textContent = `%${discount} خصم`;
    
    document.querySelector('.product-description p').textContent = product.description;
    
    // الألوان
    const colorsContainer = document.querySelector('.color-options');
    colorsContainer.innerHTML = '';
    
    product.colors.forEach((color, index) => {
        const colorHTML = `
            <div class="color-option ${index === 0 ? 'selected' : ''}" style="background-color: ${color.code};" title="${color.name}"></div>
        `;
        colorsContainer.insertAdjacentHTML('beforeend', colorHTML);
    });
    
    // أحداث الألوان
    colorsContainer.querySelectorAll('.color-option').forEach(color => {
        color.addEventListener('click', function() {
            document.querySelector('.color-option.selected').classList.remove('selected');
            this.classList.add('selected');
        });
    });
    
    // المقاسات
    const sizesContainer = document.querySelector('.size-options');
    sizesContainer.innerHTML = '';
    
    product.sizes.forEach((size, index) => {
        const sizeHTML = `
            <div class="size-option ${index === 0 ? 'selected' : ''}">${size}</div>
        `;
        sizesContainer.insertAdjacentHTML('beforeend', sizeHTML);
    });
    
    // أحداث المقاسات
    sizesContainer.querySelectorAll('.size-option').forEach(size => {
        size.addEventListener('click', function() {
            document.querySelector('.size-option.selected').classList.remove('selected');
            this.classList.add('selected');
        });
    });
    
    // المنتجات المشابهة
    const similarContainer = document.querySelector('.similar-grid');
    similarContainer.innerHTML = '';
    
    product.similarProducts.forEach(similar => {
        const similarHTML = `
            <div class="similar-product" data-id="${similar.id}">
                <img src="${similar.image}" alt="${similar.title}">
                <div class="similar-info">
                    <p>${similar.title}</p>
                    <span>${similar.price} ج.م</span>
                </div>
            </div>
        `;
        similarContainer.insertAdjacentHTML('beforeend', similarHTML);
    });
    
    // أحداث المنتجات المشابهة
    similarContainer.querySelectorAll('.similar-product').forEach(item => {
        item.addEventListener('click', function() {
            const similarId = this.getAttribute('data-id');
            closeProductModal();
            setTimeout(() => {
                openProductModal(similarId);
            }, 300);
        });
    });
    
    // أحداث الأزرار
    document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
        addToCart(product.id);
    });
    
    document.querySelector('.buy-now-btn').addEventListener('click', function() {
        addToCart(product.id);
        closeProductModal();
        setTimeout(() => {
            openCartModal();
        }, 300);
    });
    
    // عرض النافذة
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // تحميل نموذج 3D
    load3DModel(product.model3d);
}

// إغلاق نافذة المنتج
function closeProductModal() {
    const modal = document.querySelector('.product-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // إيقاف نموذج 3D
    stop3DModel();
}

// تحميل نموذج 3D
function load3DModel(modelUrl) {
    // هذه وظيفة وهمية، في الواقع ستقوم بتحميل النموذج باستخدام مكتبة مثل Three.js
    const spinner = document.querySelector('.product-3d-viewer .spinner');
    const canvas = document.getElementById('product-3d-canvas');
    
    spinner.style.display = 'flex';
    canvas.style.display = 'none';
    
    // محاكاة تحميل النموذج
    setTimeout(() => {
        spinner.style.display = 'none';
        canvas.style.display = 'block';
        
        // هنا ستقوم بتهيئة نموذج 3D
        init3DViewer(canvas, modelUrl);
    }, 1500);
}

// إيقاف نموذج 3D
function stop3DModel() {
    // هذه وظيفة وهمية، في الواقع ستقوم بإيقاف عرض النموذج
    const canvas = document.getElementById('product-3d-canvas');
    const spinner = document.querySelector('.product-3d-viewer .spinner');
    
    spinner.style.display = 'flex';
    canvas.style.display = 'none';
}

// الحصول على نجوم التقييم
function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// إعداد القائمة المتنقلة
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });
}

// إعداد البانر المنزلق
function setupBannerSlider() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // التبديل التلقائي كل 5 ثواني
    setInterval(nextSlide, 5000);
    
    // أحداث النقاط
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}

// تحديث البانر حسب الموسم
function updateBannerBySeason() {
    const now = new Date();
    const month = now.getMonth() + 1;
    let season = 'default';
    
    // تحديد الموسم حسب الشهر
    if (month >= 12 || month <= 2) {
        season = 'winter';
    } else if (month >= 3 && month <= 5) {
        season = 'spring';
    } else if (month >= 6 && month <= 8) {
        season = 'summer';
    } else {
        season = 'autumn';
    }
    
    // تحديد المناسبات الخاصة
    const valentine = (month === 2 && now.getDate() >= 1 && now.getDate() <= 14);
    const school = (month >= 8 && month <= 9);
    
    // عرض البانر المناسب
    if (valentine) {
        showBannerBySeason('valentine');
    } else if (school) {
        showBannerBySeason('school');
    } else {
        showBannerBySeason(season);
    }
}

// عرض البانر حسب الموسم
function showBannerBySeason(season) {
    const banners = document.querySelectorAll('.banner-slide');
    
    banners.forEach(banner => {
        if (banner.getAttribute('data-season') === season) {
            banner.classList.add('active');
        } else {
            banner.classList.remove('active');
        }
    });
}

// إعداد البحث
function setupSearch() {
    const searchBtn = document.querySelector('.search-box button');
    
    searchBtn.addEventListener('click', function() {
        const query = this.previousElementSibling.value.trim();
        
        if (query) {
            // في الواقع، هنا ستقوم بتنفيذ البحث
            alert(`سيتم البحث عن: ${query}`);
        }
    });
}

// إعداد الفئات
function setupCategories() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // في الواقع، هنا ستقوم بتصفية المنتجات حسب الفئة
            alert(`سيتم عرض منتجات الفئة: ${category}`);
        });
    });
}

// إعداد النماذج
function setupModals() {
    // نافذة المنتج
    document.querySelector('.close-modal').addEventListener('click', closeProductModal);
    document.querySelector('.modal-overlay').addEventListener('click', closeProductModal);
    
    // سلة التسوق
    document.querySelector('.cart-icon').addEventListener('click', openCartModal);
    document.querySelector('.close-cart').addEventListener('click', closeCartModal);
    document.querySelector('.cart-overlay').addEventListener('click', closeCartModal);
    
    // أحداث الكمية في سلة التسوق
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
            updateCart();
        }
    });
}

// فتح سلة التسوق
function openCartModal() {
    const modal = document.querySelector('.cart-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // تحديث محتويات السلة
    updateCart();
}

// إغلاق سلة التسوق
function closeCartModal() {
    const modal = document.querySelector('.cart-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// إضافة منتج إلى السلة
function addToCart(productId, quantity = 1) {
    // في الواقع، هنا ستقوم بإضافة المنتج إلى سلة التسوق في localStorage أو قاعدة بيانات
    // لكن لأغراض العرض، سنستخدم متغيراً مؤقتاً
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            quantity: quantity,
            // بيانات إضافية للمنتج
            title: "سلسال قلب وردي",
            price: 199,
            image: "products/necklace-1.jpg"
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // تحديث عداد السلة
    updateCartCount();
    
    // عرض تنبيه
    showAlert('تمت إضافة المنتج إلى سلة التسوق بنجاح', 'success');
}

// تحديث سلة التسوق
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSummary = document.querySelector('.cart-summary');
    
    // تحديث العناصر
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">سلة التسوق فارغة</p>';
        document.querySelector('.checkout-btn').disabled = true;
    } else {
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const itemHTML = `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.title}</h4>
                        <div class="cart-item-price">${item.price} ج.م</div>
                        <div class="cart-item-actions">
                            <div class="cart-item-quantity">
                                <button class="decrement">-</button>
                                <input type="number" value="${item.quantity}" min="1">
                                <button class="increment">+</button>
                            </div>
                            <span class="remove-item">إزالة</span>
                        </div>
                    </div>
                </div>
            `;
            
            cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
        });
        
        // أحداث إزالة العناصر
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = this.closest('.cart-item').getAttribute('data-id');
                removeFromCart(itemId);
            });
        });
        
        // تحديث الملخص
        const shipping = document.querySelector('input[name="delivery"]:checked').value === 'express' ? 50 : 25;
        const total = subtotal + shipping;
        
        document.querySelector('.subtotal').textContent = `${subtotal.toFixed(2)} ج.م`;
        document.querySelector('.shipping').textContent = `${shipping.toFixed(2)} ج.م`;
        document.querySelector('.grand-total').textContent = `${total.toFixed(2)} ج.م`;
        
        document.querySelector('.checkout-btn').disabled = false;
    }
    
    // تحديث أحداث الشحن
    document.querySelectorAll('input[name="delivery"]').forEach(radio => {
        radio.addEventListener('change', updateCart);
    });
}

// إزالة منتج من السلة
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // تحديث السلة والعداد
    updateCart();
    updateCartCount();
    
    // عرض تنبيه
    showAlert('تمت إزالة المنتج من سلة التسوق', 'warning');
}

// تحديث عداد السلة
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    document.querySelector('.cart-count').textContent = totalItems;
}

// إعداد إتمام الطلب
function setupCheckout() {
    // فتح نموذج إتمام الطلب
    document.querySelector('.checkout-btn').addEventListener('click', openCheckoutModal);
    
    // إغلاق نموذج إتمام الطلب
    document.querySelector('.close-checkout').addEventListener('click', closeCheckoutModal);
    document.querySelector('.checkout-overlay').addEventListener('click', closeCheckoutModal);
    
    // التنقل بين الخطوات
    document.querySelector('.next-step').addEventListener('click', goToNextStep);
    document.querySelector('.prev-step').addEventListener('click', goToPrevStep);
    
    // إلغاء الطلب
    document.querySelector('.cancel-checkout').addEventListener('click', function() {
        closeCheckoutModal();
        closeCartModal();
    });
    
    // إتمام الطلب
    document.querySelector('.complete-order').addEventListener('click', completeOrder);
}

// فتح نموذج إتمام الطلب
function openCheckoutModal() {
    const modal = document.querySelector('.checkout-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // عرض الخطوة الأولى
    document.querySelector('.step-1').classList.add('active');
    document.querySelector('.step[data-step="1"]').classList.add('active');
    
    // تعبئة ملخص الطلب
    updateOrderSummary();
}

// إغلاق نموذج إتمام الطلب
function closeCheckoutModal() {
    const modal = document.querySelector('.checkout-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// التالي إلى الخطوة التالية
function goToNextStep() {
    const currentStep = document.querySelector('.checkout-step.active');
    const currentStepNumber = parseInt(currentStep.classList.item(1).split('-')[1]);
    const nextStepNumber = currentStepNumber + 1;
    
    // التحقق من صحة البيانات قبل الانتقال
    if (currentStepNumber === 1 && !validateStep1()) {
        return;
    }
    
    if (currentStepNumber === 2 && !validateStep2()) {
        return;
    }
    
    // إخفاء الخطوة الحالية
    currentStep.classList.remove('active');
    document.querySelector(`.step[data-step="${currentStepNumber}"]`).classList.remove('active');
    
    // عرض الخطوة التالية
    document.querySelector(`.step-${nextStepNumber}`).classList.add('active');
    document.querySelector(`.step[data-step="${nextStepNumber}"]`).classList.add('active');
    
    // إذا كانت الخطوة الأخيرة، تحديث ملخص الطلب
    if (nextStepNumber === 3) {
        updateOrderConfirmation();
    }
}

// الرجوع إلى الخطوة السابقة
function goToPrevStep() {
    const currentStep = document.querySelector('.checkout-step.active');
    const currentStepNumber = parseInt(currentStep.classList.item(1).split('-')[1]);
    const prevStepNumber = currentStepNumber - 1;
    
    // إخفاء الخطوة الحالية
    currentStep.classList.remove('active');
    document.querySelector(`.step[data-step="${currentStepNumber}"]`).classList.remove('active');
    
    // عرض الخطوة السابقة
    document.querySelector(`.step-${prevStepNumber}`).classList.add('active');
    document.querySelector(`.step[data-step="${prevStepNumber}"]`).classList.add('active');
}

// التحقق من صحة الخطوة 1
function validateStep1() {
    const fullName = document.getElementById('full-name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const governorate = document.getElementById('governorate').value;
    const district = document.getElementById('district').value;
    const address = document.getElementById('address').value.trim();
    
    if (!fullName || !phone || !governorate || !district || !address) {
        showAlert('الرجاء تعبئة جميع الحقول المطلوبة', 'error');
        return false;
    }
    
    if (!/^01[0125][0-9]{8}$/.test(phone)) {
        showAlert('رقم الهاتف غير صحيح', 'error');
        return false;
    }
    
    return true;
}

// التحقق من صحة الخطوة 2
function validateStep2() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    
    if (!paymentMethod) {
        showAlert('الرجاء اختيار طريقة الدفع', 'error');
        return false;
    }
    
    return true;
}

// تحديث ملخص الطلب
function updateOrderSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const summaryContainer = document.querySelector('.summary-items');
    let subtotal = 0;
    
    summaryContainer.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const itemHTML = `
            <div class="summary-item">
                <span class="summary-item-name">${item.title} × ${item.quantity}</span>
                <span class="summary-item-price">${itemTotal.toFixed(2)} ج.م</span>
            </div>
        `;
        
        summaryContainer.insertAdjacentHTML('beforeend', itemHTML);
    });
    
    const shipping = document.querySelector('input[name="delivery"]:checked').value === 'express' ? 50 : 25;
    const total = subtotal + shipping;
    
    document.querySelector('.order-summary .subtotal').textContent = `${subtotal.toFixed(2)} ج.م`;
    document.querySelector('.order-summary .shipping').textContent = `${shipping.toFixed(2)} ج.م`;
    document.querySelector('.order-summary .grand-total').textContent = `${total.toFixed(2)} ج.م`;
}

// تحديث تأكيد الطلب
function updateOrderConfirmation() {
    const fullName = document.getElementById('full-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const governorate = document.getElementById('governorate').options[document.getElementById('governorate').selectedIndex].text;
    const district = document.getElementById('district').options[document.getElementById('district').selectedIndex].text;
    const address = document.getElementById('address').value;
    const notes = document.getElementById('notes').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').nextElementSibling.textContent;
    
    document.querySelector('.customer-name').textContent = fullName;
    document.querySelector('.customer-phone').textContent = phone;
    document.querySelector('.customer-email').textContent = email || 'غير متوفر';
    document.querySelector('.customer-address').textContent = `${address}، ${district}، ${governorate}`;
    document.querySelector('.payment-method').textContent = paymentMethod;
}

// إتمام الطلب
function completeOrder(e) {
    e.preventDefault();
    
    if (!document.getElementById('agree-terms').checked) {
        showAlert('الرجاء الموافقة على الشروط والأحكام', 'error');
        return;
    }
    
    // في الواقع، هنا ستقوم بإرسال الطلب إلى الخادم
    // لكن لأغراض العرض، سنقوم بمحاكاة العملية
    
    // إنشاء رقم طلب عشوائي
    const orderNumber = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    
    // عرض تأكيد الطلب
    showOrderConfirmation(orderNumber);
    
    // إرسال الطلب عبر واتساب (محاكاة)
    sendOrderViaWhatsApp(orderNumber);
    
    // تفريغ سلة التسوق
    localStorage.removeItem('cart');
    updateCartCount();
}

// عرض تأكيد الطلب
function showOrderConfirmation(orderNumber) {
    closeCheckoutModal();
    
    const confirmation = document.querySelector('.order-confirmation');
    confirmation.style.display = 'block';
    
    document.querySelector('.order-number span').textContent = orderNumber;
}

// إرسال الطلب عبر واتساب
function sendOrderViaWhatsApp(orderNumber) {
    // في الواقع، هنا ستقوم بإرسال رسالة واتساب تحتوي على تفاصيل الطلب
    // هذا مثال على الرابط الذي يمكن استخدامه
    const phone = "20123456789";
    const message = `مرحباً، لقد قمت بإتمام طلب جديد برقم ${orderNumber}. الرجاء مراجعة التفاصيل والتواصل معي لتأكيد الطلب. شكراً!`;
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    // في الواقع، يمكنك فتح الرابط في نافذة جديدة
    // window.open(whatsappUrl, '_blank');
    
    console.log('سيتم إرسال الطلب عبر واتساب:', whatsappUrl);
}

// إغلاق تأكيد الطلب
document.querySelector('.close-confirmation').addEventListener('click', function() {
    const confirmation = document.querySelector('.order-confirmation');
    confirmation.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// عرض التنبيهات
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        alert.classList.remove('show');
        
        setTimeout(() => {
            document.body.removeChild(alert);
        }, 300);
    }, 3000);
}

// تهيئة عرض 3D (وهمي)
function init3DViewer(canvas, modelUrl) {
    console.log('تهيئة عرض 3D للنموذج:', modelUrl);
    
    // في الواقع، هنا ستقوم بتهيئة Three.js أو أي مكتبة أخرى لعرض النموذج
    // هذا مثال وهمي فقط للعرض
    
    // أحداث أزرار التحكم
    let isRotating = false;
    let rotationInterval;
    
    document.querySelector('.rotate-btn').addEventListener('click', function() {
        if (isRotating) {
            clearInterval(rotationInterval);
            this.innerHTML = '<i class="fas fa-sync-alt"></i> أدر المنتج';
        } else {
            this.innerHTML = '<i class="fas fa-stop"></i> إيقاف';
            
            // محاكاة دوران المنتج
            rotationInterval = setInterval(() => {
                console.log('المنتج يدور...');
            }, 100);
        }
        
        isRotating = !isRotating;
    });
    
    document.querySelector('.reset-view-btn').addEventListener('click', function() {
        console.log('تم إعادة تعيين العرض');
    });
}

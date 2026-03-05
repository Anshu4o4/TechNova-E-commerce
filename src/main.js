// TechNova Global State & Logic

const PRODUCTS = [
    {
        id: 1,
        name: "NovaWatch Pro Gen 4",
        price: 299.00,
        rating: 5,
        category: "Smart Watches",
        image: "https://images.unsplash.com/photo-1546868841-75e12fc6892a?auto=format&fit=crop&w=800&q=80",
        description: "The peak of wearable tech. Stunning AMOLED display and expert health tracking.",
        specs: {
            "Display": "1.43\" AMOLED Glass",
            "Battery": "Up to 7 days",
            "Waterproof": "5ATM"
        }
    },
    {
        id: 2,
        name: "SonicBlast Wireless ANC",
        price: 199.00,
        rating: 4,
        category: "Headphones",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
        description: "Immersive sound with industry-leading active noise cancellation.",
        specs: {
            "Driver": "40mm Dynamic",
            "Battery": "30 Hours",
            "ANC": "Digital Hybrid"
        }
    },
    {
        id: 3,
        name: "VaporBook Pro 16",
        price: 1499.00,
        rating: 5,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        description: "Unleash your creativity with the power of the M3 Max equivalent chip.",
        specs: {
            "CPU": "12-Core Titan",
            "RAM": "32GB Unified",
            "Storage": "1TB SSD"
        }
    },
    {
        id: 4,
        name: "Nexus X5 Ultra",
        price: 899.00,
        rating: 5,
        category: "Smartphones",
        image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=800&q=80",
        description: "The most powerful smartphone in the Nexus lineup.",
        specs: {
            "Camera": "200MP Main",
            "Display": "6.8\" LTPO OLED",
            "Storage": "512GB"
        }
    },
    {
        id: 5,
        name: "GamerPro Keyboard G1",
        price: 129.00,
        rating: 4,
        category: "Gaming Accessories",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80",
        description: "Mechanical precision for competitive gaming.",
        specs: {
            "Switches": "Optical Blue",
            "RGB": "Per-key Chronic",
            "Latency": "0.1ms"
        }
    },
    {
        id: 6,
        name: "NovaSoothe Smart Lamp",
        price: 79.00,
        rating: 5,
        category: "Tech Accessories",
        image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=800&q=80",
        description: "Dynamic lighting that syncs with your circadian rhythm.",
        specs: {
            "Lumen": "800lm",
            "Colors": "16M RGB",
            "Smart": "HomeKit/Alexa"
        }
    },
    {
        id: 7,
        name: "TitanStream 4K Webcam",
        price: 159.00,
        rating: 4,
        category: "Tech Accessories",
        image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80",
        description: "Crystal clear 4K 60fps streaming with AI auto-framing.",
        specs: {
            "Resolution": "4K Ultra HD",
            "Framerate": "60 fps",
            "Mic": "Dual Beamforming"
        }
    },
    {
        id: 8,
        name: "QuantumPad Pro",
        price: 49.00,
        rating: 5,
        category: "Gaming Accessories",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
        description: "Hard-surface mousepad with integrated wireless charging.",
        specs: {
            "Surface": "Micro-textured",
            "Charging": "15W Qi",
            "Size": "400x350mm"
        }
    },
    {
        id: 9,
        name: "ZenEar Buds Gen 2",
        price: 149.00,
        rating: 4,
        category: "Headphones",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
        description: "Truly wireless earbuds with spatial audio and 24-bit sound.",
        specs: {
            "Drivers": "10mm Dual",
            "Battery": "8h + 24h Case",
            "Audio": "24-bit Hi-Fi"
        }
    },
    {
        id: 10,
        name: "OrbitDock Pro",
        price: 89.00,
        rating: 5,
        category: "Tech Accessories",
        image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=800&q=80",
        description: "10-in-1 USB-C docking station for ultimate productivity.",
        specs: {
            "Ports": "10 Ports",
            "Display": "Dual 4K Support",
            "Power": "100W PD"
        }
    },
    {
        id: 11,
        name: "Velox Gaming Mouse",
        price: 89.00,
        rating: 5,
        category: "Gaming Accessories",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
        description: "Ultra-lightweight wireless mouse with 26K DPI sensor.",
        specs: {
            "Weight": "63g",
            "Sensor": "Velox 26K",
            "Switches": "Optical Gen-3"
        }
    },
    {
        id: 12,
        name: "CipherKey 2FA Hardware",
        price: 55.00,
        rating: 5,
        category: "Tech Accessories",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
        description: "Secure your digital world with military-grade encryption.",
        specs: {
            "Type": "NFC + USB-C",
            "Security": "FIDO2/U2F",
            "Build": "Zinc Alloy"
        }
    }
];

class AuthManager {
    constructor() {
        this.user = JSON.parse(localStorage.getItem('user')) || null;
        this.updateAuthUI();
    }

    login(email, password) {
        // Mock login
        const user = { email, name: email.split('@')[0], avatar: null };
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        this.updateAuthUI();
        return true;
    }

    socialLogin(provider) {
        // Mock social login
        const user = { 
            email: `${provider.toLowerCase()}@example.com`, 
            name: `${provider} User`,
            avatar: null 
        };
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        this.updateAuthUI();
        return true;
    }

    logout() {
        this.user = null;
        localStorage.removeItem('user');
        this.updateAuthUI();
        window.location.href = '/';
    }

    isLoggedIn() {
        return !!this.user;
    }

    updateAuthUI() {
        const profileBtns = document.querySelectorAll('.profile-btn');
        profileBtns.forEach(btn => {
            if (this.isLoggedIn()) {
                btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary)" stroke="var(--primary)" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
                btn.title = `Logged in as ${this.user.name}`;
                btn.href = '#'; 
                btn.onclick = (e) => {
                    e.preventDefault();
                    if (confirm('Do you want to logout?')) {
                        this.logout();
                    }
                };
            } else {
                btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
                btn.href = '/auth.html';
                btn.onclick = null;
            }
        });
    }
}

class CartManager {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartUI();
    }

    addToCart(productId, quantity = 1) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.items.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ ...product, quantity });
        }

        this.saveCart();
    }

    removeFromCart(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }

    updateQuantity(productId, newQty) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, newQty);
            this.saveCart();
        }
    }

    getDetails() {
        const subtotal = this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const tax = subtotal * 0.08;
        const total = subtotal + tax;
        return { items: this.items, subtotal, tax, total };
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.updateCartUI();
        window.dispatchEvent(new Event('cartUpdated'));
    }

    updateCartUI() {
        const count = this.items.reduce((acc, item) => acc + item.quantity, 0);
        const badges = document.querySelectorAll('.cart-count');
        badges.forEach(badge => {
            badge.innerText = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    }
}

const CM = new CartManager();
const AM = new AuthManager();

// --- Auth Page Logic ---
function setupAuthPage() {
    const loginForm = document.getElementById('login-form');
    const googleBtn = document.getElementById('google-login');
    const githubBtn = document.getElementById('github-login');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            AM.login(email, 'password');
            alert('Successfully logged in!');
            window.location.href = '/';
        });
    }

    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            AM.socialLogin('Google');
            alert('Successfully logged in with Google!');
            window.location.href = '/';
        });
    }

    if (githubBtn) {
        githubBtn.addEventListener('click', () => {
            AM.socialLogin('GitHub');
            alert('Successfully logged in with GitHub!');
            window.location.href = '/';
        });
    }
}

// --- Page Specific Logic ---

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    // 1. Common Nav Effects
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.borderBottom = 'none';
        }
    });

    // 2. Page Routing (More robust)
    if (document.querySelector('.auth-container')) {
        setupAuthPage();
    }

    if (document.querySelector('.shop-content')) {
        renderShop();
    }

    if (document.getElementById('product-details-container')) {
        renderProductDetails();
    }

    if (document.querySelector('.cart-items')) {
        renderCartUI();
    }

    if (document.querySelector('.checkout-grid')) {
        renderCheckoutSummary();
    }

    // 6. Search Functionality
    const searchInputs = document.querySelectorAll('.search-bar input');
    const searchBtns = document.querySelectorAll('.search-bar button');

    const handleSearch = (input) => {
        const query = input.value.trim();
        if (query) {
            window.location.href = `/shop.html?q=${encodeURIComponent(query)}`;
        }
    };

    searchInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch(input);
        });
    });

    searchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.parentElement.querySelector('input');
            handleSearch(input);
        });
    });

    // 7. Newsletter Subscription feedback
    document.querySelectorAll('.newsletter-form button').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.parentElement.querySelector('input');
            if (input.value.includes('@')) {
                btn.innerText = 'Subscribed!';
                input.value = '';
                btn.style.background = 'var(--accent)';
            }
        });
    });

    // 7. Global Cart & Product Card Listeners
    document.addEventListener('click', (e) => {
        // Add to Cart Logic
        if (e.target.closest('.add-to-cart')) {
            const btn = e.target.closest('.add-to-cart');
            const id = parseInt(btn.dataset.id);
            const qtySpan = document.getElementById('qty-val');
            const qty = qtySpan ? parseInt(qtySpan.innerText) : 1;
            
            CM.addToCart(id, qty);
            
            // Visual feedback
            const originalText = btn.innerText;
            btn.innerText = 'Added!';
            btn.style.background = 'var(--accent)';
            setTimeout(() => { 
                btn.innerText = originalText; 
                btn.style.background = '';
            }, 1000);
        }

        // Buy Now Logic
        if (e.target.closest('.buy-now')) {
            const btn = e.target.closest('.buy-now');
            const id = parseInt(btn.dataset.id);
            const qtySpan = document.getElementById('qty-val');
            const qty = qtySpan ? parseInt(qtySpan.innerText) : 1;
            
            CM.addToCart(id, qty);
            window.location.href = '/checkout.html';
        }

        // Product Page Quantity Selector
        if (e.target.closest('.qty-btn-product')) {
            const btn = e.target.closest('.qty-btn-product');
            const span = document.getElementById('qty-val');
            let count = parseInt(span.innerText);
            
            if (btn.dataset.action === 'dec' && count > 1) count--;
            if (btn.dataset.action === 'inc') count++;
            
            span.innerText = count;
        }

        // Make whole card clickable (if not clicking a button)
        if (e.target.closest('.product-card') && !e.target.closest('button') && !e.target.closest('a')) {
            const card = e.target.closest('.product-card');
            const link = card.querySelector('.product-info a');
            if (link) link.click();
        }
    });

    // 8. Image Fallback
    document.querySelectorAll('img').forEach(img => {
        img.onerror = () => {
            img.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'; // High tech fallback
        };
    });
});

function renderCheckoutSummary() {
    const summaryContainer = document.querySelector('.checkout-grid aside.cart-summary');
    if (!summaryContainer) return;

    const { subtotal, total } = CM.getDetails();

    summaryContainer.innerHTML = `
        <h3>Your Order</h3>
        <div class="summary-row">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Shipping</span>
            <span>$0.00 (Free)</span>
        </div>
        <div class="summary-total" style="border-top: 1px solid var(--glass-border); padding-top: 1rem; margin-top: 1rem;">
            <span>Total</span>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;
}

function renderShop() {
    const grid = document.querySelector('.shop-content .product-grid');
    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const category = params.get('cat');
    const query = params.get('q');
    const isDealsPage = window.location.pathname.includes('deals.html');
    
    // Filter products
    let filteredProducts = PRODUCTS;
    
    if (category && category !== 'All Products') {
        filteredProducts = filteredProducts.filter(p => p.category === category || p.category.includes(category));
    }

    if (query) {
        const q = query.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.description.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
    }

    // On deals page, just show some products with badges
    if (isDealsPage) {
        filteredProducts = PRODUCTS.slice(0, 6); // Just as an example
    }

    if (filteredProducts.length === 0) {
        grid.innerHTML = `<div class="no-products" style="text-align: center; padding: 4rem; width: 100%; grid-column: 1 / -1;">
            <h3 style="margin-bottom: 1rem;">No products found for "${query || category || ''}"</h3>
            <a href="/shop.html" class="btn btn-primary">Browse All Products</a>
        </div>`;
        return;
    }

    grid.innerHTML = filteredProducts.map(p => `
        <div class="product-card glass">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" />
                ${isDealsPage ? '<div class="badge" style="position: absolute; top: 1rem; right: 1rem; background: var(--accent);">SPECIAL DEAL</div>' : ''}
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart" data-id="${p.id}">Add to Cart</button>
                </div>
            </div>
            <div class="product-info">
                <a href="/product.html?id=${p.id}"><h3>${p.name}</h3></a>
                <div class="rating">${'★'.repeat(p.rating)}${'☆'.repeat(5-p.rating)}</div>
                <p class="price">$${p.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');

    // Update Category Header if filtering
    const header = document.querySelector('.shop-header p') || document.querySelector('.section-header p');
    if (header && !isDealsPage) {
        if (query) {
            header.innerText = `Search results for: "${query}" (${filteredProducts.length} items)`;
        } else if (category) {
            header.innerText = `Category: ${category} (${filteredProducts.length} items)`;
        } else {
            header.innerText = `Showing all ${PRODUCTS.length} products`;
        }
    }
}

function renderProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const p = PRODUCTS.find(prod => prod.id === id);

    if (!p) return;

    // Update Meta
    document.title = `${p.name} | TechNova`;
    
    // Update UI Elements (if they exist)
    const imgElement = document.getElementById('current-img');
    if (imgElement) imgElement.src = p.image;

    const titleElement = document.querySelector('.product-info-detailed h1');
    if (titleElement) titleElement.innerText = p.name;

    const priceElement = document.querySelector('.product-info-detailed .price');
    if (priceElement) priceElement.innerText = `$${p.price.toFixed(2)}`;

    const descElement = document.querySelector('.product-info-detailed .description');
    if (descElement) descElement.innerText = p.description;

    const ratingElement = document.querySelector('.product-info-detailed .rating');
    if (ratingElement) ratingElement.innerText = `${'★'.repeat(p.rating)}${'☆'.repeat(5-p.rating)} (Verified Purchase)`;

    const specsTable = document.querySelector('.specs-table');
    if (specsTable) {
        specsTable.innerHTML = Object.entries(p.specs).map(([key, val]) => `
            <tr>
                <td>${key}</td>
                <td>${val}</td>
            </tr>
        `).join('');
    }

    // Set data-id on buttons
    const atcBtn = document.getElementById('add-to-cart-btn');
    if (atcBtn) atcBtn.dataset.id = p.id;

    const buyBtn = document.getElementById('buy-now-btn');
    if (buyBtn) buyBtn.dataset.id = p.id;
}

function renderCartUI() {
    const cartContainer = document.querySelector('.cart-items');
    const summaryContainer = document.querySelector('.cart-summary');
    if (!cartContainer) return;

    const { items, subtotal, tax, total } = CM.getDetails();

    if (items.length === 0) {
        cartContainer.innerHTML = '<h3>Your cart is empty</h3><a href="/shop.html" class="btn btn-primary">Start Shopping</a>';
        if (summaryContainer) summaryContainer.style.display = 'none';
        return;
    }

    cartContainer.innerHTML = '<h3>Your Cart (' + items.length + ' Items)</h3>' + items.map(item => `
        <div class="cart-item glass">
            <img src="${item.image}" alt="${item.name}" />
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="quantity-selector">
                <button class="qty-btn" onclick="updateQty(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQty(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="btn" style="color: #ef4444;" onclick="removeItem(${item.id})">Remove</button>
        </div>
    `).join('');

    // Update Summary
    if (summaryContainer) {
        summaryContainer.style.display = 'block';
        summaryContainer.innerHTML = `
            <h3>Order Summary</h3>
            <div class="summary-row">
                <span>Subtotal</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Tax (8%)</span>
                <span>$${tax.toFixed(2)}</span>
            </div>
            <div class="summary-total">
                <span>Total</span>
                <span>$${total.toFixed(2)}</span>
            </div>
            <a href="/checkout.html" class="btn btn-primary" style="width: 100%; margin-top: 2rem;">Proceed to Checkout</a>
        `;
    }
}

// Global exposure for onclick handlers
window.updateQty = (id, q) => CM.updateQuantity(id, q);
window.removeItem = (id) => CM.removeFromCart(id);
window.addEventListener('cartUpdated', () => {
    if (window.location.pathname.includes('cart.html')) renderCartUI();
});

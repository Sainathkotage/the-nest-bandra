/**
 * The Nest Bandra - Application Script
 * Strictly matching the design mockup image
 */

// Cart state
const cart = [];

// Tab switching
window.switchTab = function(category, btnElement) {
  document.querySelectorAll('.menu-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const cardCats = card.getAttribute('data-category') || '';
    if (category === 'All' || cardCats.includes(category)) {
      card.style.display = 'flex';
    } else {
      // If it's a category like Breakfast or Sandwiches, we keep Coffee or show feedback
      if (category === 'Coffee' && cardCats.includes('Coffee')) {
        card.style.display = 'flex';
      } else if (category === 'Desserts' && cardCats.includes('Desserts')) {
        card.style.display = 'flex';
      } else if (category === 'Beverages' && cardCats.includes('Beverages')) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    }
  });

  // If none visible in filter, show friendly toast
  const visibleCount = Array.from(cards).filter(c => c.style.display !== 'none').length;
  if (visibleCount === 0) {
    showToast(`${category} menu available for dine-in & takeaway!`);
    cards.forEach(c => c.style.display = 'flex');
    btnElement.classList.remove('active');
    document.querySelector('.menu-tab-btn').classList.add('active');
  }
};

// Add to Order
window.addToOrder = function(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCartUI();
  showToast(`Added ${name} to order!`);
};

window.changeItemQty = function(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    const idx = cart.indexOf(item);
    cart.splice(idx, 1);
  }
  updateCartUI();
};

function updateCartUI() {
  const badge = document.getElementById('cartCountBadge');
  const list = document.getElementById('cartDrawerItems');
  const totalText = document.getElementById('cartTotalText');

  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  if (badge) badge.textContent = totalCount;

  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div style="text-align:center; padding:40px 0; color:var(--text-muted);">
        <p style="font-size:1.05rem; font-weight:600; margin-bottom:4px;">Order tray is empty</p>
        <p style="font-size:0.85rem;">Click (+) on any drink to add to your order.</p>
      </div>
    `;
    if (totalText) totalText.textContent = '₹ 0';
    return;
  }

  list.innerHTML = cart.map(item => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid #EAE3D8;">
      <div>
        <h5 style="font-size:0.95rem; font-weight:700; color:var(--text-dark);">${item.name}</h5>
        <span style="font-size:0.8rem; color:var(--text-muted);">₹ ${item.price} each</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button onclick="changeItemQty('${item.name}', -1)" style="width:24px; height:24px; border-radius:50%; border:1px solid #CCC; background:#FFF; font-weight:700; cursor:pointer;">-</button>
        <span style="font-size:0.9rem; font-weight:700;">${item.qty}</span>
        <button onclick="changeItemQty('${item.name}', 1)" style="width:24px; height:24px; border-radius:50%; border:1px solid #CCC; background:#FFF; font-weight:700; cursor:pointer;">+</button>
      </div>
      <div style="font-weight:700; color:var(--text-dark); min-width:55px; text-align:right;">
        ₹ ${item.price * item.qty}
      </div>
    </div>
  `).join('');

  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  if (totalText) totalText.textContent = `₹ ${total}`;
}

// Cart Drawer Toggle
window.toggleCartDrawer = function() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.toggle('active');
    backdrop.classList.toggle('active');
  }
};

window.checkoutCart = function() {
  if (cart.length === 0) {
    showToast('Your order tray is empty.');
    return;
  }
  const total = document.getElementById('cartTotalText').textContent;
  toggleCartDrawer();
  showToast(`Order sent to barista! Total: ${total}`);
  cart.length = 0;
  updateCartUI();
};

// Reservation Modal
window.openReserveModal = function() {
  const modal = document.getElementById('reserveModal');
  if (modal) modal.classList.add('active');
};

window.closeReserveModal = function() {
  const modal = document.getElementById('reserveModal');
  if (modal) modal.classList.remove('active');
};

window.handleReserve = function(e) {
  e.preventDefault();
  closeReserveModal();
  showToast('Table reserved at The Nest Bandra! We look forward to seeing you.');
};

// Toast Notifications
window.showToast = function(msg) {
  const existing = document.querySelector('.toast-bubble');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-bubble';
  toast.textContent = msg;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
};

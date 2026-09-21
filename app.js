/**
 * The Nest Bandra - Interactive Application Script
 * Complete Menu Data, Cart Management, Table Reservations, and Ambient Sounds
 */

// ==========================================
// 1. COMPLETE MENU DATA (Website + Physical Menu)
// ==========================================
const MENU_ITEMS = [
  // COFFEE & BREWS (From Landing Page Mockup)
  {
    id: 'c1',
    name: 'Iced Latte',
    category: 'coffee',
    price: 220,
    desc: 'Smooth espresso with chilled milk poured over crystal ice.',
    image: 'assets/images/drink_iced_latte.png',
    diet: 'veg',
    tags: ['Bestseller', 'Coffee'],
    featured: true
  },
  {
    id: 'c2',
    name: 'Hazelnut Cold Brew',
    category: 'coffee',
    price: 240,
    desc: 'Bold, smooth, chilled! 18-hour cold steeped with roasted hazelnut notes.',
    image: 'assets/images/drink_cold_brew.png',
    diet: 'veg',
    tags: ['Specialty', 'Cold Brew'],
    featured: true
  },
  {
    id: 'c3',
    name: 'Caramel Macchiato',
    category: 'coffee',
    price: 250,
    desc: 'Freshly pulled espresso layered over silky milk with handcrafted caramel drizzle.',
    image: 'assets/images/drink_caramel_macchiato.png',
    diet: 'veg',
    tags: ['Sweet', 'Classic'],
    featured: true
  },
  {
    id: 'c4',
    name: 'Matcha Latte',
    category: 'coffee',
    price: 260,
    desc: 'Ceremonial grade Japanese Uji matcha whisked with warm or iced milk.',
    image: 'assets/images/drink_matcha.png',
    diet: 'veg',
    tags: ['Ceremonial', 'Healthy'],
    featured: true
  },
  {
    id: 'c5',
    name: 'Spanish Latte',
    category: 'coffee',
    price: 240,
    desc: 'Rich, sweet, and comforting espresso with velvety condensed milk.',
    image: 'assets/images/drink_spanish_latte.png',
    diet: 'veg',
    tags: ['Sweet Brew'],
    featured: true
  },
  {
    id: 'c6',
    name: 'Classic Cold Coffee',
    category: 'coffee',
    price: 220,
    desc: 'A timeless Bombay cafe favourite, thick, frothy, and comforting.',
    image: 'assets/images/drink_classic_cold_coffee.png',
    diet: 'veg',
    tags: ['Local Icon'],
    featured: true
  },
  {
    id: 'c7',
    name: 'Mocha',
    category: 'coffee',
    price: 260,
    desc: 'Single-origin artisanal chocolate meets bold double espresso and whipped cream.',
    image: 'assets/images/drink_mocha.png',
    diet: 'veg',
    tags: ['Chocolate Lovers'],
    featured: true
  },
  {
    id: 'c8',
    name: 'Affogato',
    category: 'coffee',
    price: 280,
    desc: 'Velvety artisanal vanilla bean gelato drowned in a shot of hot espresso.',
    image: 'assets/images/drink_affogato.png',
    diet: 'veg',
    tags: ['Dessert Coffee'],
    featured: true
  },
  {
    id: 'c9',
    name: 'Pistachio Iced Latte',
    category: 'coffee',
    price: 290,
    desc: 'A refreshing blend of espresso, cold milk and real pistachio — nutty, smooth, made for slow days.',
    image: 'assets/images/banner_pistachio.png',
    diet: 'veg',
    tags: ['Chef Signature', 'New'],
    featured: true
  },

  // ALL DAY BREAKFAST (From Menu Card)
  {
    id: 'b1',
    name: 'Turkish Eggs',
    category: 'breakfast',
    price: 380,
    desc: 'Poached eggs served over garlicky yogurt, topped with spicy paprika butter and fresh herbs.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80',
    diet: 'non-veg',
    tags: ['Signature Breakfast', 'Eggs'],
    featured: true
  },
  {
    id: 'b2',
    name: 'French Omelette / Scramble',
    category: 'breakfast',
    price: 300,
    desc: 'Served with crispy hashbrowns & choice of artisanal bread: Sourdough or Hokkaido brioche.',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&auto=format&fit=crop&q=80',
    diet: 'non-veg',
    tags: ['Classic', 'Eggs'],
    featured: false
  },
  {
    id: 'b3',
    name: 'Akuri Tofu',
    category: 'breakfast',
    price: 400,
    desc: 'Soft silken tofu cooked with onions, juicy tomatoes, green chillies, and warm Parsi spices. Served with sourdough toast.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Vegan', 'Jain Option'],
    featured: true
  },
  {
    id: 'b4',
    name: 'Buttermilk Pancakes',
    category: 'breakfast',
    price: 400,
    desc: 'Ultra-soft, fluffy stacked pancakes, served with genuine maple syrup and a generous pat of golden butter.',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Sweet Breakfast', 'Fluffy'],
    featured: true
  },

  // TOASTS & SANDWICHES (From Menu Card)
  {
    id: 's1',
    name: 'Avocado Toast',
    category: 'sandwiches',
    price: 530,
    desc: 'Toasted artisanal sourdough topped with freshly sliced Hass avocado, chili flakes, sea salt, and lemon zest.',
    image: 'assets/images/exp_breakfast.png',
    diet: 'veg',
    tags: ['Bandra Favorite', 'Jain Option'],
    featured: true
  },
  {
    id: 's2',
    name: 'Guacamole Toast',
    category: 'sandwiches',
    price: 540,
    desc: 'Crunchy toast layered with zesty house guacamole, heirloom cherry tomatoes, and a sprinkle of organic microgreens.',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Zesty', 'Jain Option'],
    featured: false
  },
  {
    id: 's3',
    name: 'Shroom on Toast',
    category: 'sandwiches',
    price: 420,
    desc: 'Sautéed wild forest mushrooms in rich garlic herb butter, piled on toasted sourdough with fresh thyme.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Earthy', 'Chef Choice'],
    featured: true
  },
  {
    id: 's4',
    name: 'Caprese Toast',
    category: 'sandwiches',
    price: 460,
    desc: 'Toasted sourdough topped with fresh bocconcini mozzarella, sweet tomatoes, Genovese basil, and balsamic reduction.',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Italian Flair', 'Jain Option'],
    featured: false
  },
  {
    id: 's5',
    name: 'Paneer Indie S\'wich',
    category: 'sandwiches',
    price: 440,
    desc: 'Grilled sandwich stuffed with spicy tandoori paneer tikka, crunchy bell peppers, and fresh tangy mint chutney.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Spicy Desi', 'Jain Option'],
    featured: false
  },
  {
    id: 's6',
    name: 'Crispy Chicken S\'wich',
    category: 'sandwiches',
    price: 480,
    desc: 'Golden crispy buttermilk fried chicken, iceberg lettuce, house dill pickles, and creamy garlic mayo in toasted brioche.',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop&q=80',
    diet: 'non-veg',
    tags: ['Crispy Feast'],
    featured: true
  },
  {
    id: 's7',
    name: 'Pesto Tomato S\'wich',
    category: 'sandwiches',
    price: 430,
    desc: 'Toasted sandwich with vine-ripened tomatoes, fresh mozzarella, and aromatic basil pesto pressed in Hokkaido brioche.',
    image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Pesto Love'],
    featured: false
  },
  {
    id: 's8',
    name: 'Grilled Cheese S\'wich',
    category: 'sandwiches',
    price: 440,
    desc: 'Golden toasted brioche layered with melted mature cheddar & mozzarella for a gooey, comforting bite. Served with hot tomato soup.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Comfort Food', 'Jain Option'],
    featured: true
  },

  // DIM SUMS (From Menu Card - 5 Pieces)
  {
    id: 'd1',
    name: 'Truffle Edamame Dim Sums',
    category: 'dimsums',
    price: 610,
    desc: '5 Pcs. Tender edamame-stuffed dim sums infused with white truffle oil, served with chili-soy vinaigrette.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Truffle Luxury', '5 Pieces'],
    featured: true
  },
  {
    id: 'd2',
    name: 'Burnt Garlic Dim Sums',
    category: 'dimsums',
    price: 560,
    desc: '5 Pcs. Dim sums stuffed with spiced Asian vegetables and tossed in aromatic smoky burnt garlic chili oil.',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Smoky Garlicky'],
    featured: false
  },
  {
    id: 'd3',
    name: 'Firecracker Dim Sums',
    category: 'dimsums',
    price: 570,
    desc: '5 Pcs. Spicy, flavor-packed dim sums with a fiery chili & bird’s eye stuffing, tossed in bold hot garlic sauce.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Spicy Kick!'],
    featured: true
  },
  {
    id: 'd4',
    name: 'Coriander Chicken Dim Sums',
    category: 'dimsums',
    price: 600,
    desc: '5 Pcs. Juicy chicken dim sums infused with fresh mountain coriander, steamed tender and served with zesty chili dip.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=80',
    diet: 'non-veg',
    tags: ['Juicy Steamed'],
    featured: true
  },
  {
    id: 'd5',
    name: 'Thai Basil Chicken Dim Sums',
    category: 'dimsums',
    price: 610,
    desc: '5 Pcs. Generously stuffed with minced chicken, fragrant Thai holy basil, kaffir lime, and lemongrass aromatics.',
    image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500&auto=format&fit=crop&q=80',
    diet: 'non-veg',
    tags: ['Aromatic Thai'],
    featured: false
  },

  // SHARES & SMALL PLATES (From Menu Card)
  {
    id: 'sh1',
    name: 'Loaded Nachos',
    category: 'shares',
    price: 430,
    desc: 'Crispy stone-ground tortilla chips loaded with melted Monterey cheese, jalapeños, black beans, salsa fresca, sour cream, and guacamole.',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Crowd Favorite', 'Cheesy'],
    featured: true
  },
  {
    id: 'sh2',
    name: 'Avocado Sevpuri',
    category: 'shares',
    price: 480,
    desc: 'Crisp handmade puris topped with diced avocado, tangy tamarind & mint chutneys, crunchy golden sev, and fresh coriander.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Bandra Fusion', 'Signature'],
    featured: true
  },
  {
    id: 'sh3',
    name: 'Jalapeño Cheese Poppers',
    category: 'shares',
    price: 470,
    desc: 'Crispy-fried jalapeños stuffed with creamy molten cheese blend, served with house tangy sweet chili dip.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Molten Cheese'],
    featured: false
  },
  {
    id: 'sh4',
    name: 'Fries Your Way',
    category: 'shares',
    price: 380,
    desc: 'Hand-cut golden skin-on fries. Seasoning choice: Classic Sea Salt / Spicy Peri Peri / South Indian Gunpowder / Truffle Parmesan.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Customizable', 'Jain Option'],
    featured: true
  },
  {
    id: 'sh5',
    name: 'Hummus & Warm Pita',
    category: 'shares',
    price: 450,
    desc: 'Ultra-creamy chickpea hummus with extra virgin olive oil and sumac, served with warm wood-fired pita bread and crisp lavash.',
    image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Middle Eastern'],
    featured: false
  },
  {
    id: 'sh6',
    name: 'Podi Chicken Popcorn',
    category: 'shares',
    price: 470,
    desc: 'Crispy bite-sized tender chicken tossed in South Indian fiery podi spices and fragrant curry leaf butter.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=80',
    diet: 'non-veg',
    tags: ['Crispy Podi Spice'],
    featured: true
  },
  {
    id: 'sh7',
    name: 'Fish & Chips',
    category: 'shares',
    price: 610,
    desc: 'Crispy golden beer-battered fresh catch served with thick-cut salted fries, caper tartar sauce, and a lemon wedge.',
    image: 'https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=500&auto=format&fit=crop&q=80',
    diet: 'non-veg',
    tags: ['British Classic'],
    featured: false
  },
  {
    id: 'sh8',
    name: 'Kerela Chicken',
    category: 'shares',
    price: 500,
    desc: 'Tender chicken morsels simmered in a rich, aromatic coconut cream gravy with ginger, shallots, and cracked black pepper.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=80',
    diet: 'non-veg',
    tags: ['Coastal Coconut'],
    featured: false
  },

  // SOUPS & SALADS (From Menu Card)
  {
    id: 'so1',
    name: 'Wild Mushroom Soup',
    category: 'soups-salads',
    price: 350,
    desc: 'Creamy slow-simmered wild mushroom soup, rich in earthy forest flavors and finished with a drizzle of white truffle oil.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Warm & Earthy'],
    featured: true
  },
  {
    id: 'so2',
    name: 'Cream of Tomato Soup',
    category: 'soups-salads',
    price: 310,
    desc: 'Velvety blend of ripe San Marzano tomatoes, organic fresh cream, and basil herbs. Served with sourdough croutons.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Comfort Soup', 'Jain Option'],
    featured: false
  },
  {
    id: 'sl1',
    name: 'Caesar Salad',
    category: 'soups-salads',
    price: 480,
    desc: 'Crisp romaine lettuce tossed in creamy house Caesar dressing, aged shaved parmesan, cracked pepper, and crunchy sourdough croutons.',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Classic Fresh'],
    featured: true
  },
  {
    id: 'sl2',
    name: 'French Country Salad',
    category: 'soups-salads',
    price: 490,
    desc: 'Rustic mix of organic greens, roasted ruby beets, sweet cherry tomatoes, candied walnuts, and creamy feta cheese in passionfruit dressing.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Beet & Walnut'],
    featured: false
  },
  {
    id: 'sl3',
    name: 'Grilled Protein Salad',
    category: 'soups-salads',
    price: 530,
    desc: 'Farm greens topped with warm grilled protein of your choice (Tofu / Paneer / Chicken), roasted seasonal veggies, and zesty citrus vinaigrette.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=80',
    diet: 'non-veg',
    tags: ['High Protein'],
    featured: false
  },

  // DESSERTS & BOWLS
  {
    id: 'de1',
    name: 'Tiramisu Jar',
    category: 'desserts',
    price: 340,
    desc: 'Espresso-soaked Savoiardi biscuits layered with fluffy mascarpone cream and dusted with single-origin cocoa.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Italian Dessert', 'Coffee Infused'],
    featured: true
  },
  {
    id: 'de2',
    name: 'San Sebastián Burnt Cheesecake',
    category: 'desserts',
    price: 360,
    desc: 'Basque burnt cheesecake with a beautifully caramelized exterior and an ultra-gooey, molten center. Served with berry coulis.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Molten Basque'],
    featured: true
  },
  {
    id: 'de3',
    name: 'Warm Fudge Brownie Skillet',
    category: 'desserts',
    price: 320,
    desc: 'Freshly baked dark chocolate skillet brownie topped with salted caramel drizzle and cold vanilla bean gelato.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Warm & Cold'],
    featured: false
  },
  {
    id: 'de4',
    name: 'Acai Berry Breakfast Bowl',
    category: 'desserts',
    price: 420,
    desc: 'Pure frozen organic acai smoothie base, layered with toasted coconut chips, chia seeds, fresh blueberries, and almond butter swirl.',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&auto=format&fit=crop&q=80',
    diet: 'veg',
    tags: ['Superfood', 'Vegan'],
    featured: true
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
const state = {
  activeCategory: 'all',
  activeDiet: 'all',
  searchQuery: '',
  cart: [],
  serviceChargeRate: 0.05, // 5% as per menu card footer
  gstRate: 0.05,           // 5% GST
  isSoundPlaying: false,
  audioContext: null,
  audioOscillators: []
};

// ==========================================
// 3. DOM ELEMENTS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderMenuGrid();
  renderFullMenuModalItems();
  initCart();
  initModals();
  initSoundToggle();
  initNewsletter();
});

// ==========================================
// 4. NAVIGATION & SCROLL
// ==========================================
function initNavigation() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  }

  // Hero indicator dots
  const indicators = document.querySelectorAll('.indicator-item');
  indicators.forEach(ind => {
    ind.addEventListener('click', () => {
      indicators.forEach(i => i.classList.remove('active'));
      ind.classList.add('active');
    });
  });
}

// ==========================================
// 5. MENU RENDERING & FILTERING
// ==========================================
function renderMenuGrid() {
  const gridContainer = document.getElementById('menuGrid');
  if (!gridContainer) return;

  const filteredItems = MENU_ITEMS.filter(item => {
    // Category match
    const categoryMatch = (state.activeCategory === 'all') || 
      (state.activeCategory === 'coffee' && item.category === 'coffee') ||
      (state.activeCategory === 'breakfast' && item.category === 'breakfast') ||
      (state.activeCategory === 'sandwiches' && item.category === 'sandwiches') ||
      (state.activeCategory === 'shares' && item.category === 'shares') ||
      (state.activeCategory === 'dimsums' && item.category === 'dimsums') ||
      (state.activeCategory === 'soups-salads' && item.category === 'soups-salads') ||
      (state.activeCategory === 'desserts' && item.category === 'desserts');

    // Diet match
    let dietMatch = true;
    if (state.activeDiet === 'veg') {
      dietMatch = (item.diet === 'veg');
    } else if (state.activeDiet === 'nonveg') {
      dietMatch = (item.diet === 'non-veg');
    } else if (state.activeDiet === 'jain') {
      dietMatch = item.tags.some(t => t.toLowerCase().includes('jain'));
    }

    // Search query match
    let searchMatch = true;
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      searchMatch = item.name.toLowerCase().includes(q) || 
                    item.desc.toLowerCase().includes(q) ||
                    item.tags.some(t => t.toLowerCase().includes(q));
    }

    return categoryMatch && dietMatch && searchMatch;
  });

  if (filteredItems.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
        <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 8px;">No dishes found matching your search.</p>
        <p style="font-size: 0.9rem;">Try switching categories or clearing your search filter.</p>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filteredItems.map(item => `
    <article class="menu-card" data-id="${item.id}">
      <div class="card-img-wrap ${item.category === 'coffee' ? 'drink-wrap' : ''}">
        <span class="card-badge-diet">
          <span class="dot-indicator ${item.diet === 'veg' ? 'dot-veg' : 'dot-nonveg'}"></span>
          ${item.diet === 'veg' ? 'Veg' : 'Non-Veg'}
        </span>
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='assets/images/drink_iced_latte.png'"/>
      </div>
      <div class="card-content">
        <h4 class="card-title">${item.name}</h4>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">₹ ${item.price}</span>
          <button class="card-add-btn" onclick="addToCart('${item.id}')" title="Add ${item.name} to order" aria-label="Add to cart">
            +
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Category Tabs Switch
window.filterCategory = function(cat, element) {
  state.activeCategory = cat;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  if (element) element.classList.add('active');
  renderMenuGrid();
};

// Dietary Filter Switch
window.filterDiet = function(diet, element) {
  state.activeDiet = diet;
  document.querySelectorAll('.dietary-btn').forEach(b => b.classList.remove('active'));
  if (element) element.classList.add('active');
  renderMenuGrid();
};

// Search Menu
window.handleSearch = function(event) {
  state.searchQuery = event.target.value;
  renderMenuGrid();
};

// ==========================================
// 6. CART MANAGEMENT
// ==========================================
window.addToCart = function(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existingIndex = state.cart.findIndex(i => i.id === itemId);
  if (existingIndex > -1) {
    state.cart[existingIndex].qty += 1;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1
    });
  }

  updateCartUI();
  showToast(`Added "${item.name}" to your order!`);
  
  // Animate badge
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 400);
  }
};

window.changeCartQty = function(itemId, delta) {
  const item = state.cart.find(i => i.id === itemId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== itemId);
  }
  updateCartUI();
};

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const cartList = document.getElementById('cartItemsList');
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  if (badge) {
    badge.textContent = totalCount;
  }

  if (!cartList) return;

  if (state.cart.length === 0) {
    cartList.innerHTML = `
      <div class="cart-empty-state">
        <div class="icon">☕</div>
        <p style="font-weight: 600; font-size: 1.1rem; margin-bottom: 4px;">Your order tray is empty</p>
        <p style="font-size: 0.88rem;">Explore our coffee and comforting dishes to start your order.</p>
      </div>
    `;
    document.getElementById('cartSubtotal').textContent = '₹ 0';
    document.getElementById('cartServiceCharge').textContent = '₹ 0';
    document.getElementById('cartGst').textContent = '₹ 0';
    document.getElementById('cartGrandTotal').textContent = '₹ 0';
    return;
  }

  cartList.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-details">
        <h5>${item.name}</h5>
        <span>₹ ${item.price} each</span>
      </div>
      <div class="cart-item-qty">
        <button onclick="changeCartQty('${item.id}', -1)">-</button>
        <span style="font-size: 0.9rem; font-weight: 700;">${item.qty}</span>
        <button onclick="changeCartQty('${item.id}', 1)">+</button>
      </div>
      <div style="font-weight: 700; color: var(--color-forest); min-width: 60px; text-align: right;">
        ₹ ${item.price * item.qty}
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const serviceCharge = Math.round(subtotal * state.serviceChargeRate);
  const gst = Math.round((subtotal + serviceCharge) * state.gstRate);
  const grandTotal = subtotal + serviceCharge + gst;

  document.getElementById('cartSubtotal').textContent = `₹ ${subtotal}`;
  document.getElementById('cartServiceCharge').textContent = `₹ ${serviceCharge}`;
  document.getElementById('cartGst').textContent = `₹ ${gst}`;
  document.getElementById('cartGrandTotal').textContent = `₹ ${grandTotal}`;
}

window.toggleCartDrawer = function() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
  }
};

window.checkoutOrder = function() {
  if (state.cart.length === 0) {
    showToast('Your order tray is empty.');
    return;
  }

  const grandTotal = document.getElementById('cartGrandTotal').textContent;
  toggleCartDrawer();
  
  // Show order confirmation modal
  showConfirmationModal({
    title: 'Order Received!',
    subtitle: 'Sent directly to the barista & kitchen team at The Nest Bandra.',
    details: `Total: ${grandTotal} (Includes 5% Service Charge & Taxes)`,
    note: 'If you are dining in, please tell your server your order token #NB-${Math.floor(100 + Math.random() * 900)}'
  });

  state.cart = [];
  updateCartUI();
};

// ==========================================
// 7. MODALS & RESERVATIONS
// ==========================================
function initModals() {
  // Table reservation form submission
  const reserveForm = document.getElementById('reserveForm');
  if (reserveForm) {
    reserveForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('resName').value;
      const guests = document.getElementById('resGuests').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const zone = document.getElementById('resZone').value;

      closeModal('reserveModal');

      showConfirmationModal({
        title: 'Table Reserved at The Nest',
        subtitle: `We cannot wait to welcome you, ${name}!`,
        details: `${guests} Guests • ${date} at ${time} • ${zone}`,
        note: 'Reservation ID: NEST-BND-' + Math.floor(1000 + Math.random() * 9000) + '. A confirmation has been sent to your WhatsApp.'
      });
    });
  }
}

window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

function showConfirmationModal({ title, subtitle, details, note }) {
  const modal = document.getElementById('confirmModal');
  if (!modal) return;

  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmSubtitle').textContent = subtitle;
  document.getElementById('confirmDetails').textContent = details;
  document.getElementById('confirmNote').textContent = note;

  openModal('confirmModal');
}

// Customizer modal for Pistachio Latte
window.openPistachioCustomizer = function() {
  openModal('customizerModal');
};

window.addCustomizedPistachio = function() {
  const milk = document.getElementById('customMilk').value;
  const sweet = document.getElementById('customSweet').value;
  const extraShot = document.getElementById('customShot').checked;
  
  let price = 290;
  if (milk === 'oat' || milk === 'almond') price += 40;
  if (extraShot) price += 60;

  const itemTitle = `Pistachio Iced Latte (${milk.toUpperCase()}, ${sweet}${extraShot ? ', +Shot' : ''})`;

  state.cart.push({
    id: 'p-custom-' + Date.now(),
    name: itemTitle,
    price: price,
    qty: 1
  });

  updateCartUI();
  closeModal('customizerModal');
  showToast(`Added custom Pistachio Iced Latte to tray!`);
  toggleCartDrawer();
};

// ==========================================
// 8. FULL PHYSICAL MENU MODAL (Retro Board)
// ==========================================
function renderFullMenuModalItems(activeCategory = 'all') {
  const container = document.getElementById('fullMenuItemsGrid');
  if (!container) return;

  let items = MENU_ITEMS;
  if (activeCategory !== 'all') {
    items = items.filter(i => i.category === activeCategory);
  }

  container.innerHTML = items.map(item => `
    <div class="full-menu-item-row">
      <div class="full-menu-item-info">
        <h5>${item.name}</h5>
        <p>${item.desc}</p>
      </div>
      <div class="full-menu-item-side">
        <span class="full-menu-price">₹ ${item.price}</span>
        <button class="full-menu-add-btn" onclick="addToCart('${item.id}')">+ Add</button>
      </div>
    </div>
  `).join('');
}

window.filterFullMenu = function(category, element) {
  document.querySelectorAll('.full-menu-tab').forEach(b => b.classList.remove('active'));
  if (element) element.classList.add('active');
  renderFullMenuModalItems(category);
};

// ==========================================
// 9. AMBIENT CAFE SOUND GENERATOR (Web Audio API)
// ==========================================
function initSoundToggle() {
  const soundBtn = document.getElementById('soundToggleBtn');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    if (!state.isSoundPlaying) {
      startAmbientAudio();
      soundBtn.classList.add('playing');
      soundBtn.innerHTML = '<span>🔊</span> Cafe Vibe: On';
      showToast('Playing warm ambient cafe acoustic tones');
    } else {
      stopAmbientAudio();
      soundBtn.classList.remove('playing');
      soundBtn.innerHTML = '<span>🎧</span> Cafe Vibe';
      showToast('Cafe audio paused');
    }
  });
}

function startAmbientAudio() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    state.audioContext = new AudioContext();
    
    // Create gentle warm chords (Fmaj9 chord in low frequency: F3, A3, C4, E4)
    const notes = [174.61, 220.00, 261.63, 329.63];
    state.audioOscillators = [];

    const masterGain = state.audioContext.createGain();
    masterGain.gain.setValueAtTime(0.04, state.audioContext.currentTime);
    masterGain.connect(state.audioContext.destination);

    notes.forEach(freq => {
      const osc = state.audioContext.createOscillator();
      const gain = state.audioContext.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, state.audioContext.currentTime);

      // Low pass filter for warm muffled acoustic room feel
      const filter = state.audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, state.audioContext.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start();
      state.audioOscillators.push(osc);
    });

    state.isSoundPlaying = true;
  } catch (err) {
    console.log('Web Audio could not start:', err);
  }
}

function stopAmbientAudio() {
  if (state.audioOscillators && state.audioOscillators.length > 0) {
    state.audioOscillators.forEach(osc => {
      try { osc.stop(); } catch(e){}
    });
    state.audioOscillators = [];
  }
  if (state.audioContext) {
    state.audioContext.close();
    state.audioContext = null;
  }
  state.isSoundPlaying = false;
}

// ==========================================
// 10. TOAST NOTIFICATIONS
// ==========================================
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 11. NEWSLETTER & CONTACT
// ==========================================
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input').value;
      if (email) {
        showToast('Welcome to The Nest Family! Check your inbox soon.');
        form.reset();
      }
    });
  }
}

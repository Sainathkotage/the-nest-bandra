# The Nest Bandra — Cafe Mockup Website

A modern, responsive, and interactive mockup website for **The Nest Bandra** (*"Feels Like Home"*), located on Hill Road, Bandra West, Mumbai.

This project combines:
1. **The Visual Website Concept Mockup** (warm cream/linen tones, editorial typography, artisanal iced brews grid, Pistachio Latte feature banner, and lifestyle experience cards).
2. **The Complete Physical Menu Card** (all-day breakfast, artisanal toasts & sandwiches, handcrafted dim sums, shares, soups, salads, and Jain/Veg/Non-Veg options with authentic INR pricing and 5% service charge).

---

## 🌟 Highlights & Key Features

- **Exact Visual Fidelity**: Recreates the coffee house aesthetic from the design mockup with Google Fonts (`Playfair Display`, `Plus Jakarta Sans`, and handwritten script `Caveat`).
- **40+ Item Dual Menu**:
  - **Signature Brews**: Iced Latte, Hazelnut Cold Brew, Caramel Macchiato, Ceremonial Matcha, Spanish Latte, Classic Cold Coffee, Mocha, Affogato, Pistachio Iced Latte.
  - **All-Day Breakfast**: Turkish Eggs, French Omelette / Scramble with Hokkaido Brioche, Akuri Tofu, Buttermilk Pancakes.
  - **Toasts & Sandwiches**: Avocado Toast, Guacamole Toast, Shroom on Toast, Caprese Toast, Paneer Indie S'wich, Crispy Chicken S'wich, Grilled Cheese with Tomato Soup.
  - **Dim Sums (5 Pcs)**: Truffle Edamame, Burnt Garlic, Firecracker, Coriander Chicken, Thai Basil Chicken.
  - **Shares**: Loaded Nachos, Avocado Sevpuri, Jalapeño Cheese Poppers, Fries Your Way, Hummus & Warm Pita, Podi Chicken Popcorn, Fish & Chips, Kerela Chicken.
  - **Soups & Salads**: Creamy Wild Mushroom Soup, Cream of Tomato, Caesar Salad, French Country Salad.
  - **Desserts**: Tiramisu Jar, Basque Burnt Cheesecake, Skillet Brownie, Acai Bowl.
- **Interactive Dietary Toggles**: Instant filtering for `Veg`, `Non-Veg`, and `Jain Available`.
- **Live Search**: Instant keyword search across dishes, coffees, and ingredients.
- **Order Tray & Slide-out Cart**: Real-time quantity adjustment, item addition notifications, with exact 5% Service Charge and 5% GST bill calculation.
- **Table Reservation System**: Pick dates, time slots, party size (1 to 8+), and seating zone (Sunlit Verandah, Cozy Library Corner, Coffee Bar Counter, Indoor AC).
- **Retro Chalkboard Menu Modal**: Digital recreation of the cafe's vintage green chalkboard board.
- **Pistachio Iced Latte Customizer**: Tailor milk choice (Oat, Almond, Whole), sweetness level, and extra shots.
- **Ambient Cafe Sound Generator**: Self-contained Web Audio API synthesizer generating relaxing warm acoustic chords.
- **Location & Google Map Integration**: Centered on Hill Road, Bandra West (Mumbai 400050) with opening hours (11:00 AM – 1:30 AM).

---

## 🚀 How to View the Website

Simply double-click `index.html` to open it in any web browser (Chrome, Edge, Safari, Firefox).

Or run a local static server:
```bash
# Using Python
python -m http.server 8000

# Using Node / npx
npx serve .
```
Then visit `http://localhost:8000` in your browser.

---

## 📁 File Structure

```
nest bandra/
├── index.html              # Main webpage markup
├── styles.css              # Custom styling, animations, responsive design
├── app.js                  # Menu data, cart, reservation, search, audio logic
├── README.md               # Documentation
├── assets/
│   └── images/             # Extracted and cropped high-resolution visuals
│       ├── hero_coffee.png
│       ├── banner_pistachio.png
│       ├── nest_wood_stamp.png
│       ├── drink_iced_latte.png
│       ├── drink_cold_brew.png
│       ├── drink_caramel_macchiato.png
│       ├── drink_matcha.png
│       ├── drink_spanish_latte.png
│       ├── drink_classic_cold_coffee.png
│       ├── drink_mocha.png
│       ├── drink_affogato.png
│       ├── exp_breakfast.png
│       ├── exp_workshops.png
│       └── exp_celebrations.png
```

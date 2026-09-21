import os
from PIL import Image

src_path = 'ChatGPT Image Sep 21, 2026, 07_49_55 PM.png'
if os.path.exists(src_path):
    img = Image.open(src_path)
    w, h = img.size
    print(f"Loaded image: {w}x{h}")
    
    os.makedirs('assets/extracted', exist_ok=True)
    
    # 1. Hero drink area (approx x: 450 to 850, y: 80 to 450)
    hero_drink = img.crop((440, 80, 850, 440))
    hero_drink.save('assets/extracted/hero_drink.png')
    
    # 2. Coffee items row 1 (y: 620 to 860)
    # 4 columns:
    col_w = w / 4
    # Card 1: Iced latte
    c1 = img.crop((40, 620, 220, 860))
    c1.save('assets/extracted/card_iced_latte.png')
    # Card 2: Hazelnut cold brew
    c2 = img.crop((240, 620, 420, 860))
    c2.save('assets/extracted/card_cold_brew.png')
    # Card 3: Caramel Macchiato
    c3 = img.crop((440, 620, 620, 860))
    c3.save('assets/extracted/card_caramel_macchiato.png')
    # Card 4: Matcha Latte
    c4 = img.crop((640, 620, 820, 860))
    c4.save('assets/extracted/card_matcha.png')
    
    # Row 2 (y: 880 to 1120)
    c5 = img.crop((40, 880, 220, 1120))
    c5.save('assets/extracted/card_spanish_latte.png')
    c6 = img.crop((240, 880, 420, 1120))
    c6.save('assets/extracted/card_classic_cold_coffee.png')
    c7 = img.crop((440, 880, 620, 1120))
    c7.save('assets/extracted/card_mocha.png')
    c8 = img.crop((640, 880, 820, 1120))
    c8.save('assets/extracted/card_affogato.png')
    
    # 3. Pistachio latte banner drink (y: 1180 to 1480, x: 480 to 850)
    pistachio = img.crop((470, 1180, 850, 1490))
    pistachio.save('assets/extracted/banner_pistachio.png')
    
    # 4. Experience cards (y: 1530 to 1750)
    # Card 1: Breakfast
    exp1 = img.crop((35, 1530, 285, 1750))
    exp1.save('assets/extracted/exp_breakfast.png')
    # Card 2: Workshops
    exp2 = img.crop((305, 1530, 555, 1750))
    exp2.save('assets/extracted/exp_workshops.png')
    # Card 3: Celebrations
    exp3 = img.crop((575, 1530, 825, 1750))
    exp3.save('assets/extracted/exp_celebrations.png')
    
    print("Extracted all mockups slices!")

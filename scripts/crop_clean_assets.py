import os
from PIL import Image

src_path = 'ChatGPT Image Sep 21, 2026, 07_49_55 PM.png'
img = Image.open(src_path)
w, h = img.size
print(f"Base image size: {w}x{h}")

os.makedirs('assets/images', exist_ok=True)

# 1. Hero drink with text "Good Coffee Brighter Days"
hero = img.crop((440, 80, 855, 435))
hero.save('assets/images/hero_coffee.png')

# 2. Coffee drinks from grid:
# In the original image:
# Row 1 drinks: y from 630 to 765
# Card 1: x: 45 to 215 -> center around 130
drink1 = img.crop((50, 625, 215, 765))
drink1.save('assets/images/drink_iced_latte.png')

# Card 2: x: 245 to 415
drink2 = img.crop((250, 625, 415, 765))
drink2.save('assets/images/drink_cold_brew.png')

# Card 3: x: 445 to 615
drink3 = img.crop((450, 625, 615, 765))
drink3.save('assets/images/drink_caramel_macchiato.png')

# Card 4: x: 645 to 815
drink4 = img.crop((650, 625, 815, 765))
drink4.save('assets/images/drink_matcha.png')

# Row 2 drinks: y from 885 to 1025
drink5 = img.crop((50, 885, 215, 1025))
drink5.save('assets/images/drink_spanish_latte.png')

drink6 = img.crop((250, 885, 415, 1025))
drink6.save('assets/images/drink_classic_cold_coffee.png')

drink7 = img.crop((450, 885, 615, 1025))
drink7.save('assets/images/drink_mocha.png')

drink8 = img.crop((650, 885, 815, 1025))
drink8.save('assets/images/drink_affogato.png')

# 3. Pistachio banner image: y from 1180 to 1485, x from 450 to 860
banner_p = img.crop((460, 1180, 860, 1490))
banner_p.save('assets/images/banner_pistachio.png')

# 4. Experience cards:
# Breakfast photo: y: 1535 to 1650, x: 38 to 280
exp_b = img.crop((38, 1535, 280, 1650))
exp_b.save('assets/images/exp_breakfast.png')

# Workshop photo: y: 1535 to 1650, x: 310 to 550
exp_w = img.crop((310, 1535, 550, 1650))
exp_w.save('assets/images/exp_workshops.png')

# Celebrations photo: y: 1535 to 1650, x: 580 to 822
exp_c = img.crop((580, 1535, 822, 1650))
exp_c.save('assets/images/exp_celebrations.png')

# 5. Logo from top left (x: 40 to 180, y: 15 to 70)
logo_crop = img.crop((45, 15, 160, 68))
logo_crop.save('assets/images/logo_nav.png')

print("Cropped all clean asset photos!")

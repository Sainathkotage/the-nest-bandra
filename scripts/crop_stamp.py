import os
from PIL import Image

menu_path = 'menu_card.png'
if os.path.exists(menu_path):
    img = Image.open(menu_path)
    w, h = img.size
    print(f"Menu card size: {w}x{h}")
    # In menu_card.png (1000x700 or similar approx):
    # Top right wooden seal:
    # Let's inspect coordinates
    # w: approx 1000, h: approx 700. Stamp is around x: 880 to 980, y: 15 to 140
    # Let's crop a box around the wooden stamp
    stamp = img.crop((int(w * 0.86), int(h * 0.015), int(w * 0.985), int(h * 0.16)))
    stamp.save('assets/images/nest_wood_stamp.png')
    print("Cropped wooden stamp logo successfully!")

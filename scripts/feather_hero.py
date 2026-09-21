from PIL import Image
import numpy as np

img = Image.open('assets/images/hero_drink_with_script.png').convert('RGBA')
w, h = img.size

# Feather the left edge (first 40 pixels)
fade_w = 45
data = np.array(img)

for x in range(fade_w):
    alpha_factor = x / fade_w
    data[:, x, 3] = (data[:, x, 3] * alpha_factor).astype(np.uint8)

feathered = Image.fromarray(data)
feathered.save('assets/images/hero_drink_feathered.png')
print('Created hero_drink_feathered.png successfully!')

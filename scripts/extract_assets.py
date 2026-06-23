"""Crop photographic sub-assets out of the reference mockups into img/extracted/.
Coordinates are fractions (left, top, right, bottom) of each reference image."""
import os
from PIL import Image

ASSETS = "assets"
OUT = "img/extracted"
os.makedirs(OUT, exist_ok=True)

REF = {
    "index":      "WhatsApp Image 2026-06-22 at 3.20.59 PM (2).jpeg",
    "products":   "WhatsApp Image 2026-06-22 at 3.21.00 PM.jpeg",
    "technology": "WhatsApp Image 2026-06-22 at 3.21.00 PM (2).jpeg",
    "investors":  "WhatsApp Image 2026-06-22 at 3.21.00 PM (3).jpeg",
    "careers":    "WhatsApp Image 2026-06-22 at 3.21.01 PM.jpeg",
    "ecosystem":  "WhatsApp Image 2026-06-22 at 3.21.01 PM (1).jpeg",
    "team":       "WhatsApp Image 2026-06-22 at 3.21.01 PM (2).jpeg",
}

# name -> (ref, left, top, right, bottom)
CROPS = {
    "index-platter":    ("index", 0.40, 0.040, 1.00, 0.162),
    "index-basket":     ("index", 0.70, 0.605, 1.00, 0.690),
    "index-warehouse":  ("index", 0.66, 0.832, 1.00, 0.908),

    "products-platter": ("products", 0.37, 0.022, 1.00, 0.140),
    "products-oils":    ("products", 0.41, 0.170, 0.81, 0.280),
    "products-rice":    ("products", 0.50, 0.920, 1.00, 1.000),

    "tech-hero":        ("technology", 0.44, 0.022, 0.98, 0.140),

    "inv-map":          ("investors", 0.45, 0.018, 1.00, 0.172),
    "inv-map2":         ("investors", 0.45, 0.388, 0.77, 0.482),

    "careers-hero":     ("careers", 0.45, 0.018, 0.89, 0.150),
    "careers-chair":    ("careers", 0.80, 0.812, 0.99, 0.892),

    "team-hero":        ("team", 0.45, 0.018, 0.91, 0.122),
    "team-founder1":    ("team", 0.115, 0.172, 0.275, 0.250),
    "team-founder2":    ("team", 0.520, 0.172, 0.680, 0.250),
}

# strips that get sliced into N equal columns
STRIPS = {
    "products-r1":   ("products", 0.050, 0.588, 0.960, 0.652, 5),
    "products-r2":   ("products", 0.050, 0.702, 0.960, 0.763, 5),
    "products-oils-pair": ("products", 0.45, 0.355, 1.00, 0.470, 1),
    "careers-life":  ("careers", 0.040, 0.648, 0.965, 0.712, 5),
    "team-lead":     ("team",    0.060, 0.318, 0.960, 0.388, 5),
    "team-adv":      ("team",    0.100, 0.455, 0.920, 0.520, 3),
}

def box(im, fr):
    W, H = im.size
    return (int(W*fr[0]), int(H*fr[1]), int(W*fr[2]), int(H*fr[3]))

ims = {k: Image.open(os.path.join(ASSETS, v)).convert("RGB") for k, v in REF.items()}

saved = []
for name, (ref, l, t, r, b) in CROPS.items():
    c = ims[ref].crop(box(ims[ref], (l, t, r, b)))
    p = os.path.join(OUT, name + ".png")
    c.save(p)
    saved.append((name, c.size))

for name, (ref, l, t, r, b, n) in STRIPS.items():
    strip = ims[ref].crop(box(ims[ref], (l, t, r, b)))
    sw, sh = strip.size
    cell = sw / n
    for i in range(n):
        c = strip.crop((int(i*cell), 0, int((i+1)*cell), sh))
        p = os.path.join(OUT, f"{name}-{i+1}.png")
        c.save(p)
        saved.append((f"{name}-{i+1}", c.size))

for n, s in saved:
    print(n, s)
print("TOTAL", len(saved))

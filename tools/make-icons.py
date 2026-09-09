# Generates the PWA icon set into images/.
# Run:  python tools/make-icons.py
from PIL import Image, ImageDraw, ImageFont
import os

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "images")
BLUE   = (21, 101, 192)
BLUE_D = (13, 71, 138)
WHITE  = (255, 255, 255)

def font(px):
    for name in ("seguibl.ttf", "segoeuib.ttf", "arialbd.ttf", "DejaVuSans-Bold.ttf"):
        try:
            return ImageFont.truetype(name, px)
        except Exception:
            pass
    return ImageFont.load_default()

def centered(d, box, text, f, fill):
    x0, y0, x1, y1 = box
    l, t, r, b = d.textbbox((0, 0), text, font=f)
    d.text((x0 + (x1 - x0 - (r - l)) / 2 - l,
            y0 + (y1 - y0 - (b - t)) / 2 - t), text, font=f, fill=fill)

def draw(size, pad_ratio=0.0, radius_ratio=0.22, bg=None, square=False):
    """pad_ratio: safe-zone inset for maskable icons."""
    S = size * 4                      # supersample, then downscale
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    pad = int(S * pad_ratio)
    box = (pad, pad, S - pad, S - pad)

    if bg is not None:                # maskable / apple: full-bleed plate
        d.rectangle((0, 0, S, S), fill=bg)

    r = 0 if square else int((S - 2 * pad) * radius_ratio)
    d.rounded_rectangle(box, radius=r, fill=BLUE)

    # a lighter top band, so the mark reads as a "slide" not a flat square
    inner = S * 0.06 + pad
    d.rounded_rectangle((inner, inner, S - inner, S - inner),
                        radius=max(0, r - int(inner * 0.5)), outline=WHITE,
                        width=max(2, int(S * 0.012)))

    w = S - 2 * pad
    centered(d, (pad, pad + int(w * 0.02), S - pad, S - pad - int(w * 0.16)),
             "VM", font(int(w * 0.44)), WHITE)
    centered(d, (pad, S - pad - int(w * 0.30), S - pad, S - pad - int(w * 0.06)),
             "MICRO", font(int(w * 0.115)), (200, 224, 250))
    return img.resize((size, size), Image.LANCZOS)

os.makedirs(OUT, exist_ok=True)

def save(img, name):
    p = os.path.join(OUT, name)
    img.save(p, "PNG", optimize=True)
    print("wrote", p, img.size)

for s in (192, 512):
    save(draw(s), "icon-%d.png" % s)
save(draw(512, pad_ratio=0.14, bg=BLUE_D), "icon-maskable-512.png")
save(draw(192, pad_ratio=0.14, bg=BLUE_D), "icon-maskable-192.png")
save(draw(180, square=True, bg=BLUE), "apple-touch-icon.png")
for s in (32, 16):
    save(draw(s, radius_ratio=0.18), "favicon-%d.png" % s)

# a real .ico for desktop browsers / Windows install
draw(256).save(os.path.join(OUT, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
print("wrote favicon.ico")

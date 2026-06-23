"""Full-page screenshot of local pages for visual QA. Usage: python scripts/shot.py index.html [width]"""
import sys, pathlib
from playwright.sync_api import sync_playwright

page_file = sys.argv[1] if len(sys.argv) > 1 else "index.html"
width = int(sys.argv[2]) if len(sys.argv) > 2 else 1280
url = pathlib.Path(page_file).resolve().as_uri()
out = "scripts/_shots/" + pathlib.Path(page_file).stem + ".png"
pathlib.Path("scripts/_shots").mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": width, "height": 900}, device_scale_factor=1)
    pg.goto(url)
    pg.wait_for_timeout(800)
    # force-reveal all animated blocks for static QA
    pg.evaluate("document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'))")
    pg.wait_for_timeout(400)
    pg.screenshot(path=out, full_page=True)
    b.close()
print(out)

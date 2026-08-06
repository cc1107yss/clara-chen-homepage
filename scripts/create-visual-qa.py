from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageChops, ImageEnhance, ImageStat


ROOT = Path(__file__).resolve().parents[1]
QA = ROOT / "artifacts" / "visual-qa"
REFERENCE = ROOT / "clara-homepage-handoff" / "reference-homepage.png"
PAPER = (246, 242, 240)


def normalize(source: Path, destination: Path, size: tuple[int, int]) -> Image.Image:
    image = Image.open(source).convert("RGB")
    canvas = Image.new("RGB", size, PAPER)
    crop = image.crop((0, 0, min(image.width, size[0]), min(image.height, size[1])))
    canvas.paste(crop, (0, 0))
    canvas.save(destination, format="PNG", optimize=True)
    return canvas


def main() -> None:
    QA.mkdir(parents=True, exist_ok=True)
    desktop = normalize(QA / "desktop-browser-final.jpg", QA / "desktop-1448x1086.png", (1448, 1086))
    normalize(QA / "tablet-browser.jpg", QA / "tablet-820x1180.png", (820, 1180))
    normalize(QA / "mobile-browser.jpg", QA / "mobile-390x844.png", (390, 844))

    reference = Image.open(REFERENCE).convert("RGB")
    overlay = Image.blend(reference, desktop, 0.5)
    overlay.save(QA / "desktop-overlay.png", format="PNG", optimize=True)

    raw_diff = ImageChops.difference(reference, desktop)
    amplified = ImageEnhance.Contrast(raw_diff).enhance(2.6)
    amplified.save(QA / "desktop-diff.png", format="PNG", optimize=True)

    mean = ImageStat.Stat(raw_diff).mean
    mae = sum(mean) / 3
    changed = sum(1 for pixel in raw_diff.convert("L").getdata() if pixel > 12)
    total = reference.width * reference.height
    (QA / "metrics.txt").write_text(
        f"mean_absolute_error={mae:.3f}\n"
        f"pixels_over_12={changed / total:.3%}\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()

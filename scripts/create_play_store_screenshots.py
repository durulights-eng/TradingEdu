from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path("D:/TradingEdu")
SOURCE_DIR = ROOT / "store_assets"
OUTPUT_DIR = SOURCE_DIR / "play_store_screenshots"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

W, H = 1080, 1920
FONT_REGULAR = "C:/Windows/Fonts/malgun.ttf"
FONT_BOLD = "C:/Windows/Fonts/malgunbd.ttf"


def font(size, bold=False):
    return ImageFont.truetype(FONT_BOLD if bold else FONT_REGULAR, size)


def vertical_gradient(size, top, bottom):
    width, height = size
    img = Image.new("RGB", size, top)
    px = img.load()
    for y in range(height):
        t = y / max(1, height - 1)
        r = int(top[0] * (1 - t) + bottom[0] * t)
        g = int(top[1] * (1 - t) + bottom[1] * t)
        b = int(top[2] * (1 - t) + bottom[2] * t)
        for x in range(width):
            px[x, y] = (r, g, b)
    return img.convert("RGBA")


def add_glow(base, center, radius, color, strength=0.7):
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    x, y = center
    d.ellipse((x - radius, y - radius, x + radius, y + radius), fill=color)
    layer = layer.filter(ImageFilter.GaussianBlur(radius // 2))
    base.alpha_composite(Image.blend(Image.new("RGBA", base.size, (0, 0, 0, 0)), layer, strength))


def draw_wrapped(draw, text, xy, max_width, fnt, fill, line_gap=10, anchor=None):
    if "\n" in text:
        lines = text.splitlines()
    else:
        words = text.split(" ")
        lines = []
        current = ""
        for word in words:
            trial = word if not current else f"{current} {word}"
            if draw.textbbox((0, 0), trial, font=fnt)[2] <= max_width:
                current = trial
            else:
                if current:
                    lines.append(current)
                current = word
        if current:
            lines.append(current)

    x, y = xy
    bbox = draw.textbbox((0, 0), "가나다", font=fnt)
    line_h = bbox[3] - bbox[1]
    total_h = len(lines) * line_h + (len(lines) - 1) * line_gap
    if anchor == "mm":
        y -= total_h // 2
    for line in lines:
        if anchor == "mm":
            tw = draw.textbbox((0, 0), line, font=fnt)[2]
            draw.text((x - tw // 2, y), line, font=fnt, fill=fill)
        else:
            draw.text((x, y), line, font=fnt, fill=fill)
        y += line_h + line_gap


def rounded_crop(img, radius):
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, img.width, img.height), radius=radius, fill=255)
    out = Image.new("RGBA", img.size, (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


def crop_to_aspect(img, aspect):
    current = img.width / img.height
    if current > aspect:
        new_w = int(img.height * aspect)
        left = (img.width - new_w) // 2
        return img.crop((left, 0, left + new_w, img.height))
    new_h = int(img.width / aspect)
    top = (img.height - new_h) // 2
    return img.crop((0, top, img.width, top + new_h))


def paste_phone(base, screenshot_path, x, y, screen_w, screen_h):
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    outer = (x - 24, y - 26, x + screen_w + 24, y + screen_h + 26)
    sd.rounded_rectangle(outer, radius=82, fill=(0, 0, 0, 165))
    shadow = shadow.filter(ImageFilter.GaussianBlur(28))
    base.alpha_composite(shadow)

    d = ImageDraw.Draw(base)
    d.rounded_rectangle(outer, radius=82, fill=(8, 12, 23, 255), outline=(76, 92, 118, 210), width=5)
    d.rounded_rectangle((x - 9, y - 10, x + screen_w + 9, y + screen_h + 10), radius=70, outline=(139, 116, 255, 95), width=2)

    img = Image.open(screenshot_path).convert("RGBA")
    img = crop_to_aspect(img, screen_w / screen_h).resize((screen_w, screen_h), Image.Resampling.LANCZOS)
    base.alpha_composite(rounded_crop(img, 52), (x, y))

    # Subtle speaker cutout.
    d.rounded_rectangle((x + screen_w // 2 - 76, y + 20, x + screen_w // 2 + 76, y + 34), radius=7, fill=(3, 6, 13, 235))


def draw_chart_motif(base, variant):
    d = ImageDraw.Draw(base)
    if variant % 2 == 0:
        points = [(84, 1420), (210, 1348), (324, 1380), (458, 1248), (604, 1308), (740, 1168), (948, 1218)]
    else:
        points = [(80, 1340), (220, 1280), (352, 1328), (510, 1196), (650, 1228), (815, 1096), (1002, 1122)]
    for i in range(len(points) - 1):
        d.line((points[i], points[i + 1]), fill=(35, 214, 180, 48), width=5)
    for x, y in points[1:-1]:
        d.ellipse((x - 7, y - 7, x + 7, y + 7), fill=(137, 116, 255, 92))


def create_card(index, src_name, eyebrow, headline, subhead, badge, accent):
    base = vertical_gradient((W, H), (6, 10, 20), (15, 26, 47))
    add_glow(base, (880, 260), 360, (*accent, 90), 0.45)
    add_glow(base, (185, 1060), 430, (45, 211, 179, 55), 0.35)
    draw_chart_motif(base, index)

    d = ImageDraw.Draw(base)
    badge_font = font(26, True)
    badge_w = d.textbbox((0, 0), badge, font=badge_font)[2] + 64
    d.rounded_rectangle((54, 46, 54 + badge_w, 100), radius=27, fill=(16, 24, 43, 230), outline=(*accent, 150), width=2)
    d.text((86, 53), badge, font=badge_font, fill=(*accent, 255))

    d.text((58, 126), eyebrow, font=font(31, True), fill=(143, 165, 194, 255))
    draw_wrapped(d, headline, (56, 174), 968, font(78, True), (246, 249, 255, 255), line_gap=8)
    draw_wrapped(d, subhead, (60, 350), 920, font(31), (185, 199, 221, 255), line_gap=2)

    screen_w, screen_h = 830, 1737
    paste_phone(base, SOURCE_DIR / src_name, (W - screen_w) // 2, 470, screen_w, screen_h)

    # Bottom fade so the framed screenshot sits cleanly in the ad crop.
    fade = Image.new("RGBA", (W, 270), (6, 10, 20, 0))
    fd = fade.load()
    for y in range(270):
        alpha = int(170 * (y / 269))
        for x in range(W):
            fd[x, y] = (6, 10, 20, alpha)
    base.alpha_composite(fade, (0, H - 270))

    out = OUTPUT_DIR / f"chartmon_play_store_{index:02d}.png"
    base.convert("RGB").save(out, quality=96)
    return out


CARDS = [
    (
        "Screenshot_Phone-1.png",
        "차트 앞에서 흔들리는 순간",
        "차트 함정,\n3초 안에 보이나요?",
        "매일 15분, 실제 차트 기반 문제로 매매 감각을 훈련하세요.",
        "AI 차트 트레이닝",
        (132, 116, 255),
    ),
    (
        "Screenshot_Phone-2.png",
        "감이 아니라 데이터로",
        "내 약점이 숫자로\n보이는 실력 진단",
        "레이팅, XP, 스킬 레이더로 오늘의 성장 포인트를 바로 확인합니다.",
        "실력 레이팅",
        (47, 178, 255),
    ),
    (
        "Screenshot_Phone-3.png",
        "필요한 부분만 반복",
        "약점만 골라\n집중 훈련",
        "시장 구조, 캔들, 패턴, 리스크까지 실전 드릴로 쌓아갑니다.",
        "드릴 훈련",
        (52, 211, 153),
    ),
    (
        "Screenshot_Phone-4.png",
        "외우는 이론 말고",
        "차트 예시로 배우는\n트레이딩 백과",
        "핵심 이론과 용어를 실전 차트 관점으로 빠르게 복습하세요.",
        "이론 백과",
        (255, 192, 79),
    ),
]


if __name__ == "__main__":
    outputs = []
    for i, args in enumerate(CARDS, start=1):
        outputs.append(create_card(i, *args))
    for path in outputs:
        print(path)

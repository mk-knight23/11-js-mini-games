# Retro Web Hub - 90s Mini Apps Collection

> **A nostalgic trip back to the golden age of the web** 🕹️

A comprehensive collection of mini games and utilities inspired by 90s web design, featuring authentic Windows 95 styling and classic gameplay mechanics.

## 🌟 Theme: 90s Web (Nostalgic)

Immerse yourself in the nostalgic era of dial-up internet, Windows 95, and classic web design:
- **Windows 95 UI** with authentic title bars, window controls, and beveled buttons
- **Classic color palette** featuring the iconic #c0c0c0 gray
- **Marquee text** and spinning construction icons
- **Visitor counter** with digital display
- **Retro color schemes** (terminal green, vivid magenta, cyan)
- **Comic Sans headers** for that authentic feel

## 🎮 Games & Apps

| App | Description | Features |
|-----|-------------|----------|
| 🎨 **Color Changer** | Random color generator | HSL to Hex conversion, retro messages |
| 🔔 **Popup Notify** | Toast notification demo | 4 notification types |
| ⏱️ **Countdown** | Event timer | Start/Pause/Reset, LED display |
| 🌙 **Theme Toggle** | Dark/Light mode | Persistent preference |
| 🔢 **Calculator** | Retro math tool | Keyboard support, safe evaluation |
| ⭕ **Tic Tac Toe** | Classic vs AI | Smart opponent |
| 🧠 **Memory Match** | Card matching game | Move counter, 8 pairs |
| 🐍 **Snake** | Classic arcade game | Canvas rendering, high score |
| ⌨️ **Speed Typer** | Typing speed test | WPM & accuracy tracking |
| ⚡ **Reaction Test** | Reflex measurement | Best score persistence |

## ✨ Features

### Core Experience
- **Single-file architecture** - No build tools required
- **Offline capable** - Works without internet
- **Local storage** - Saves preferences and high scores
- **Keyboard shortcuts** - ESC to return to hub
- **Mobile responsive** - Works on all devices

### 90s Nostalgia Elements
- Windows 95 window chrome with minimize/maximize/close buttons
- Beveled 3D buttons (outset/inset states)
- Classic link colors (blue for unvisited, purple for visited)
- Courier New monospace font for displays
- Animated marquee text
- Spinning construction icons
- Digital LED counter display
- "Under Construction" banners

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Format | Single HTML file |
| Styling | CSS Variables + Custom CSS |
| Scripting | Vanilla JavaScript |
| Graphics | Canvas API (Snake) |
| Storage | localStorage |
| Dependencies | None (zero external deps) |

## 🚀 Usage

Simply open `index.html` in any modern web browser. No build process, no dependencies, no server required.

```bash
# Open directly in browser
open index.html

# Or serve with any static server
npx serve .
python -m http.server
```

## 📁 Project Structure

```
26-game-js-mini-games/
├── index.html    # Complete single-file application
├── README.md     # This file
├── LICENSE       # MIT License
└── .gitignore
```

## 🎯 Game Mechanics

### Tic Tac Toe
- Player (X) vs Computer (O)
- AI tries to win, blocks player threats, or picks randomly
- First to get 3 in a row wins

### Memory Match
- 16 cards (8 matching pairs)
- Click to flip, find matching pairs
- Tracks moves and pairs found

### Snake
- Arrow keys or WASD to move
- Eat red food to grow
- Avoid walls and self
- Score: 10 points per food

### Speed Typer
- Type the displayed text accurately
- WPM calculated as (characters / 5) / minutes
- Accuracy tracks correct keystrokes
- Success notification on completion

### Reaction Test
- Click when screen turns green
- Too early click = penalty
- Best time saved to localStorage

## 🌍 Deployment

Deploy the single `index.html` file anywhere:

```bash
# GitHub Pages - Push to gh-pages branch
# Netlify - Drag and drop index.html
# Vercel - Deploy with zero config
```

## 🏆 Credits

**Made by MK — Built by Musharraf Kazi**

---

*A nostalgic tribute to the web that was.* 🌐

---

## 📝 Design Notes (V2)

### Intentional Quirk: The "Under Construction" GIF
V2 adds a permanent "Under Construction" animated GIF on the homepage. The site is complete, but the GIF stays. Why? Because every 90s site was perpetually under construction. It's a signal of authenticity—the project is never "done," just temporarily stable. The GIF loops forever, like the web itself.

### Tradeoff: Inline Styles Over CSS Files
All styles are inline or in `<style>` blocks. No external CSS. The tradeoff: caching vs. portability. External CSS caches better but requires another request. Inline styles load instantly and make the file truly self-contained. For a single-file retro site, self-containment matters more than performance.

### What I Chose NOT to Build
No responsive images or srcset. Images are fixed-size, often stretched or clipped on mobile. Modern practice would use responsive images. But retro sites didn't know about your phone. The design assumes 800x600. Mobile users get scrollbars. Intentional imperfection preserves the time capsule.
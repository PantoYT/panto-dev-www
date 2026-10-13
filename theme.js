// The page wears termwall's palettes. The choice (and crt) is remembered in this browser only.
// Shared by every page with the theme picker; a page that cares about crt listens for "pagecrt".
const THEMES = {"mint": {"bg": "#171717", "accent": "#b5f4e7", "secondary": "#7faca3", "text": "#939fa1", "dim": "#4b5252", "faint": "#242626"}, "catppuccin": {"bg": "#1e1e2e", "accent": "#cba6f7", "secondary": "#89b4fa", "text": "#cdd6f4", "dim": "#6c7086", "faint": "#313244"}, "gruvbox": {"bg": "#282828", "accent": "#fabd2f", "secondary": "#8ec07c", "text": "#ebdbb2", "dim": "#928374", "faint": "#3c3836"}, "nord": {"bg": "#2e3440", "accent": "#88c0d0", "secondary": "#81a1c1", "text": "#d8dee9", "dim": "#4c566a", "faint": "#3b4252"}, "dracula": {"bg": "#282a36", "accent": "#bd93f9", "secondary": "#ff79c6", "text": "#f8f8f2", "dim": "#6272a4", "faint": "#44475a"}, "tokyo-night": {"bg": "#1a1b26", "accent": "#7aa2f7", "secondary": "#bb9af7", "text": "#c0caf5", "dim": "#565f89", "faint": "#24283b"}, "rose-pine": {"bg": "#191724", "accent": "#ebbcba", "secondary": "#c4a7e7", "text": "#e0def4", "dim": "#6e6a86", "faint": "#26233a"}, "everforest": {"bg": "#2d353b", "accent": "#a7c080", "secondary": "#83c092", "text": "#d3c6aa", "dim": "#859289", "faint": "#343f44"}, "kanagawa": {"bg": "#1f1f28", "accent": "#7e9cd8", "secondary": "#957fb8", "text": "#dcd7ba", "dim": "#727169", "faint": "#2a2a37"}, "solarized": {"bg": "#002b36", "accent": "#268bd2", "secondary": "#2aa198", "text": "#93a1a1", "dim": "#586e75", "faint": "#073642"}, "one-dark": {"bg": "#282c34", "accent": "#61afef", "secondary": "#c678dd", "text": "#abb2bf", "dim": "#5c6370", "faint": "#2c313a"}, "monokai": {"bg": "#272822", "accent": "#a6e22e", "secondary": "#f92672", "text": "#f8f8f2", "dim": "#75715e", "faint": "#3e3d32"}, "amber": {"bg": "#120d02", "accent": "#ffb000", "secondary": "#cc8c00", "text": "#e0a020", "dim": "#6b4a00", "faint": "#241a04"}, "phosphor": {"bg": "#050f07", "accent": "#33ff66", "secondary": "#1fbf4a", "text": "#2fe05a", "dim": "#145c27", "faint": "#0a1f0e"}};
const KEYS = ["bg", "accent", "secondary", "text", "dim", "faint"];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
};
const select = document.getElementById("theme"), crt = document.getElementById("crt");
// CHIP-8 Studio has four phosphors; links to it (data-chip8) pick the one closest to the theme
const PHOS = {"amber": "amber", "gruvbox": "amber", "rose-pine": "paper", "dracula": "paper", "catppuccin": "ice",
  "nord": "ice", "tokyo-night": "ice", "kanagawa": "ice", "solarized": "ice", "one-dark": "ice"};
for (const name of Object.keys(THEMES)) select.add(new Option(name, name));

function apply(name) {
  const t = THEMES[name] || THEMES.mint;
  for (const k of KEYS) document.documentElement.style.setProperty("--" + k, t[k]);
  document.querySelector('meta[name="theme-color"]').content = t.bg;
  select.value = name;
  for (const a of document.querySelectorAll("a[data-chip8]")) a.href = "/demos/chip8/" + (PHOS[name] ? "?phos=" + PHOS[name] : "");
}
select.addEventListener("change", () => { store.set("theme", select.value); apply(select.value); });
function setPageCrt(on) {
  crt.checked = on;
  document.body.classList.toggle("crt", on);
  store.set("crt", on ? "1" : "");
}
crt.addEventListener("change", () => { setPageCrt(crt.checked); document.dispatchEvent(new Event("pagecrt")); });
setPageCrt(store.get("crt") === "1");
apply(THEMES[store.get("theme")] ? store.get("theme") : "mint");

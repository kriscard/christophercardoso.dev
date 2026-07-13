export const hardware = [
  {
    name: "Desktop",
    description: "AMD Ryzen 7 3800X, 32 GB RAM, RTX 3080",
  },
  {
    name: "Laptop",
    description: "Apple MacBook Air M2, 15 inch, 24 GB RAM, 1 TB SSD",
  },
  {
    name: "Monitor",
    description: "LG 27UP850N-W 27 inch UHD 4K",
  },
  {
    name: "Headset",
    description: "AirPods Pro 2, Sony WH-1000XM4, Razer BlackShark V2",
  },
]

export const software: SoftwareItem[] = [
  {
    name: "Terminal",
    description: "Ghostty config tuned around Catppuccin and fast startup.",
    href: "https://github.com/kriscard/dotfiles/tree/main/home/.config/ghostty",
  },
  {
    name: "Editor",
    description: "Neovim setup built around LazyVim, Snacks, LSPs, and tmux.",
    href: "https://github.com/kriscard/dotfiles/tree/main/home/.config/nvim",
  },
  {
    name: "Tmux",
    description: "Persistent terminal sessions for coding, agents, and notes.",
    href: "https://github.com/kriscard/dotfiles/blob/main/home/.config/tmux/tmux.conf",
  },
  {
    name: "Shell",
    description: "Zsh with Starship prompt and a small dotfiles structure.",
    href: "https://github.com/kriscard/dotfiles/tree/main/home/zsh",
  },
  {
    name: "Git",
    description:
      "LazyGit for reviewing commits, staging patches, and rebasing.",
    href: "https://github.com/kriscard/dotfiles/blob/main/home/.config/lazygit/config.yml",
  },
  {
    name: "Window Manager",
    description: "Raycast for fast window movement and app switching.",
    href: "https://github.com/kriscard/dotfiles/tree/main/home/.config/raycast/scripts",
  },
]

export const keyboards: KeyboardItem[] = [
  {
    name: "Cloud Nine",
    description: "MX Blacks, GMK Classic Beige",
    href: "https://www.instagram.com/p/DFgZFi0vF3v",
    photo: "/images/uses/keyboards/cloudnine.webp",
  },
  {
    name: "Daji",
    description: "MX Browns 55g TX M springs, GMK Rubrehose",
    href: "https://www.instagram.com/p/DCcxncwPhAH",
    photo: "/images/uses/keyboards/daji.webp",
  },
  {
    name: "Lily",
    description: "MX Blacks TX L 55g springs, GMK Hineybeige",
    href: "https://www.instagram.com/p/DIBx0o2spMt",
    photo: "/images/uses/keyboards/lily.webp",
  },
  {
    name: "Mode Envoy",
    description: "Mode Obscura, GMK Striker",
    href: "https://www.instagram.com/p/DAoDXOZRE0g",
    photo: "/images/uses/keyboards/mode-envoy.webp",
  },
  {
    name: "Neo Ergo",
    description: "HMX Hyacinth V2, GMK Dualshot 2",
    href: "https://www.instagram.com/p/DB_os-KxYQ5",
    photo: "/images/uses/keyboards/neo-ergo.webp",
  },
  {
    name: "Neo80",
    description: "Gateron Deepping, GMK Olivia",
    href: "https://www.instagram.com/p/C-rNhqOOcd1",
    photo: "/images/uses/keyboards/neo80.png",
  },
  {
    name: "Horangi60",
    description: "MX Blacks XL springs 55g, GMK Black Snail",
    href: "https://www.instagram.com/p/DTx66ecgE1J",
  },
  {
    name: "Squid60",
    description: "Tangerines, GMK Hammerhead",
    href: "https://www.instagram.com/p/C_x2xOhxlZt",
  },
  {
    name: "Mode65",
    description: "MX Black TX L 55g springs, GMK Redacted",
    href: "https://www.instagram.com/p/C_dxRrMvHNR",
  },
]

export interface SoftwareItem {
  name: string
  description: string
  href: `https://${string}`
}

export interface KeyboardItem extends SoftwareItem {
  photo?: string
}

export type KeyboardWithPhoto = KeyboardItem & { photo: string }

export function hasPhoto(
  keyboard: KeyboardItem
): keyboard is KeyboardWithPhoto {
  return Boolean(keyboard.photo)
}

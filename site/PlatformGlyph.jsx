/* global React */

// Platform glyph icons — brand-recognizable marks for Meta/TikTok/NewsBreak/etc.
// Shared between landing hero, mega menus, and any other component that
// needs to display a platform icon.

function PlatformGlyph({ name, size = 48 }) {
  if (name === 'meta') return (
    <svg viewBox="0 0 36 36" width={size} height={size}>
      <defs>
        <linearGradient id="metaG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0064E0"/>
          <stop offset="100%" stopColor="#00B6FB"/>
        </linearGradient>
      </defs>
      <path d="M5 18 C5 11, 11 7, 16 12 C19 15, 21 19, 23 22 C27 28, 31 26, 31 19 C31 14, 29 12, 27 12 C24 12, 23 15, 21 18 L18 14 C20 11, 22 9, 25 9 C30 9, 33 13, 33 19 C33 26, 29 31, 25 31 C20 31, 17 26, 14 21 C12 17, 10 14, 9 14 C7 14, 6 16, 6 19 C6 22, 8 23, 10 23 L10 27 C5 27, 5 22, 5 18 Z" fill="url(#metaG)"/>
    </svg>
  );
  if (name === 'tiktok') return (
    <svg viewBox="0 0 36 36" width={size} height={size}>
      <path d="M22.5 4 L26.5 4 C26.7 6.8 28.4 8.6 31 8.9 L31 13 C28.7 12.9 26.8 12.1 25.2 10.9 L25.2 22.2 C25.2 27.6 21.2 31 16.6 31 C12.1 31 8.4 27.4 8.4 22.9 C8.4 18.5 12 14.9 16.6 14.9 C17 14.9 17.4 14.9 17.7 15 L17.7 19.4 C17.3 19.2 16.9 19.2 16.6 19.2 C14.6 19.2 13 20.8 13 22.9 C13 25 14.6 26.6 16.6 26.6 C18.7 26.6 20.5 25 20.5 22.7 L20.5 4 Z" fill="#000"/>
      <path d="M22 3 L26 3 C26.2 5.8 27.9 7.6 30.5 7.9 L30.5 12 C28.2 11.9 26.3 11.1 24.7 9.9 L24.7 21.2 C24.7 26.6 20.7 30 16.1 30 C11.6 30 7.9 26.4 7.9 21.9 C7.9 17.5 11.5 13.9 16.1 13.9 C16.5 13.9 16.9 13.9 17.2 14 L17.2 18.4 C16.8 18.2 16.4 18.2 16.1 18.2 C14.1 18.2 12.5 19.8 12.5 21.9 C12.5 24 14.1 25.6 16.1 25.6 C18.2 25.6 20 24 20 21.7 L20 3 Z" fill="#25F4EE" opacity="0.85"/>
      <path d="M22.5 4 L26.5 4 C26.7 6.8 28.4 8.6 31 8.9 L31 13 C28.7 12.9 26.8 12.1 25.2 10.9 L25.2 22.2 C25.2 27.6 21.2 31 16.6 31 C12.1 31 8.4 27.4 8.4 22.9 C8.4 18.5 12 14.9 16.6 14.9 C17 14.9 17.4 14.9 17.7 15 L17.7 19.4 C17.3 19.2 16.9 19.2 16.6 19.2 C14.6 19.2 13 20.8 13 22.9 C13 25 14.6 26.6 16.6 26.6 C18.7 26.6 20.5 25 20.5 22.7 L20.5 4 Z" fill="#FE2C55" opacity="0.85" transform="translate(1 0)"/>
      <path d="M22 3 L26 3 C26.2 5.8 27.9 7.6 30.5 7.9 L30.5 12 C28.2 11.9 26.3 11.1 24.7 9.9 L24.7 21.2 C24.7 26.6 20.7 30 16.1 30 C11.6 30 7.9 26.4 7.9 21.9 C7.9 17.5 11.5 13.9 16.1 13.9 C16.5 13.9 16.9 13.9 17.2 14 L17.2 18.4 C16.8 18.2 16.4 18.2 16.1 18.2 C14.1 18.2 12.5 19.8 12.5 21.9 C12.5 24 14.1 25.6 16.1 25.6 C18.2 25.6 20 24 20 21.7 L20 3 Z" fill="#000"/>
    </svg>
  );
  if (name === 'newsbreak') return (
    <svg viewBox="0 0 36 36" width={size} height={size}>
      <path d="M8 6 L13 6 L13 18 L23 6 L29 6 L29 30 L24 30 L24 16 L14 30 L8 30 Z" fill="#FE2D2D"/>
    </svg>
  );
  if (name === 'slack') return (
    <svg viewBox="0 0 36 36" width={size} height={size}>
      <rect x="14" y="3"  width="6" height="14" rx="3" fill="#36C5F0"/>
      <rect x="14" y="19" width="6" height="14" rx="3" fill="#2EB67D"/>
      <rect x="3"  y="14" width="14" height="6" rx="3" fill="#ECB22E"/>
      <rect x="19" y="14" width="14" height="6" rx="3" fill="#E01E5A"/>
    </svg>
  );
  if (name === 'redtrack') return (
    <svg viewBox="0 0 36 36" width={size} height={size}>
      <circle cx="18" cy="18" r="13" fill="#FF3D00"/>
      <circle cx="18" cy="18" r="6"  fill="#FAF9F4"/>
      <circle cx="18" cy="18" r="2.5" fill="#FF3D00"/>
    </svg>
  );
  if (name === 'voluum') return (
    <svg viewBox="0 0 36 36" width={size} height={size}>
      <path d="M6 8 L11 8 L18 24 L25 8 L30 8 L20 30 L16 30 Z" fill="#A569FF"/>
    </svg>
  );
  if (name === 'google') return (
    <svg viewBox="0 0 36 36" width={size} height={size}>
      <path d="M30 18.4c0-.94-.08-1.84-.24-2.7H18v5.1h6.74c-.29 1.56-1.17 2.88-2.49 3.77v3.13h4.03C28.62 25.4 30 22.2 30 18.4z" fill="#4285F4"/>
      <path d="M18 31c3.36 0 6.18-1.11 8.24-3.01l-4.03-3.13c-1.12.75-2.55 1.2-4.21 1.2-3.24 0-5.98-2.19-6.96-5.13H6.88v3.23C8.93 28.36 13.13 31 18 31z" fill="#34A853"/>
      <path d="M11.04 20.93A7.78 7.78 0 0110.6 18c0-1.02.18-2.01.44-2.93v-3.23H6.88A12.97 12.97 0 005 18c0 2.1.5 4.08 1.39 5.83l4.65-2.9z" fill="#FBBC05"/>
      <path d="M18 10.93c1.83 0 3.47.63 4.76 1.86l3.57-3.57C24.18 7.21 21.36 6 18 6c-4.87 0-9.07 2.64-11.12 6.84l4.65 3.23C12.51 13.12 15.25 10.93 18 10.93z" fill="#EA4335"/>
    </svg>
  );
  return null;
}

window.PlatformGlyph = PlatformGlyph;

# Mobile homepage

The homepage retains the original 1920×1080 desktop video and opening animation.
At widths up to 900px it uses an 8-second, 720×1280 portrait loop (2,183,482 bytes)
instead of the 44,647,247-byte original. The loop blends its end into its beginning.
Both variants have lightweight WebP poster images from the original footage.

## Loading and interaction

- Server-rendered HTML contains a responsive poster and no video source. The
  client selects one video based on viewport width, avoiding a desktop download
  on initial mobile visits.
- Reduced-motion and supported data-saver preferences keep the poster visible
  until Play is selected. Autoplay refusal also leaves a working Play control;
  video errors retain the poster. Autoplay cannot be guaranteed on every device.
- Playback is muted and inline. It pauses outside the viewport or in a hidden
  tab, and a manual pause remains paused when scrolling back.
- Mobile hero height uses the stable viewport unit, bounded width, and cover
  cropping. Text and the About link are visible immediately on mobile.
- The mobile navigation has a 44px hamburger control with expanded-state and
  controls attributes. Escape, outside clicks, navigation, and resizing to
  desktop close the dropdown. Desktop retains its visible row of tabs.
- Projects remains unpublished.

## Verification

- Gatsby production build, including all existing pages and image processing.
- Desktop-browser viewport checks at 320, 375, 390, 430, 768, 844 (landscape),
  900, 901, and 1440px: homepage width stays inside the viewport.
- Browser checks for menu opening, Escape, outside click, link navigation,
  the unchanged desktop video source, and mobile video/poster selection.
- Isolated DOM tests of the actual video component cover server rendering,
  source selection, muted inline playback, offscreen pause/resume, manual pause,
  reduced motion, data saver, explicit opt-in, autoplay refusal, and media errors.
- Physical iPhone Safari and Android Chrome hardware were not available;
  viewport simulation and DOM tests do not reproduce every device media policy.

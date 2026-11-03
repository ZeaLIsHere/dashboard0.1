---
name: Pekalongan Public Health Command Center
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#4a5f7f'
  primary: '#001229'
  on-primary: '#ffffff'
  primary-container: '#0f2744'
  on-primary-container: '#798fb1'
  inverse-primary: '#b2c8ed'
  secondary: '#385ca6'
  on-secondary: '#ffffff'
  secondary-container: '#8eafff'
  on-secondary-container: '#164089'
  tertiary: '#001323'
  on-tertiary: '#ffffff'
  tertiary-container: '#002942'
  on-tertiary-container: '#2c94d8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#b2c8ed'
  on-primary-fixed: '#021c39'
  on-primary-fixed-variant: '#324866'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b0c6ff'
  on-secondary-fixed: '#001944'
  on-secondary-fixed-variant: '#1b448d'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
  metric-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  margin: 1.75rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

### Personality & Mission
The design system establishes a high-reliability institutional visual standard for regional government health monitoring. The aesthetic merges executive authority with civic care: authoritative, precise, transparent, and approachable. It strips away bureaucratic density in favor of high-legibility clinical clarity, structured data density, and frictionless operational oversight.

### Target Audience
Regional decision-makers, epidemiologists, heads of public health centers (Puskesmas), civil executives, and emergency response coordinators requiring instant situational awareness across maternal-child health, infectious disease tracking, medical supply logistics, and hospital capacity.

### Visual Style: Institutional Modern Widescreen
The design system operates on an **Institutional Modern** visual architecture optimized specifically for 16:9 widescreen operations:
- **Anchored Authority:** A deep navy architectural sidebar serves as the structural spine, providing high contrast and institutional stability.
- **Airy Worksurfaces:** Soft slate-blue canvas layers isolate executive cards without harsh contrast cuts.
- **Controlled Pastel Categorization:** Soft, tinted analytical surfaces categorize key performance indicators (KPIs) to prevent visual exhaustion while maintaining immediate cognitive triage.
- **High-Precision Data Interfaces:** Thin borders, crisp tabular numbers, and disciplined badge headers replace decorative flourishes.

## Colors

### Color Strategy
The system balances institutional dignity with cognitive efficiency using an intentional hierarchy:

- **Command Navy (`#0F2744`)**: The principal brand anchor. Applied to the primary vertical navigation sidebar, primary operational buttons, metric headers, and deep-emphasis UI components.
- **Civic Blue (`#133E87`)**: Secondary structural accent. Utilized for active states inside the command sidebar, focused form rings, high-level chart metrics, and interactive card headers.
- **Clinical Cyan (`#0284C7`)**: Dynamic tertiary accent for active tabs, live trend sparklines, data highlights, and link states.
- **Slate Neutral (`#64748B`)**: Neutral base used for metadata, axis marks, helper text, and secondary icon fills.

### Canvas & Surface Architecture
- **App Canvas Base**: `#F4F7FB` (soft slate-blue) provides a cool, anti-glare operational field.
- **Card Surfaces**: `#FFFFFF` with ultra-subtle border stroke `#E2E8F0`.
- **Navigation Workspace**: `#0F2744` with divider accents at `rgba(255, 255, 255, 0.08)`.

### Analytical Pastel KPI Palette
Designed strictly for categorical triage metrics:
- **Pastel Sky (`#E0F2FE` surface / `#0369A1` text & icon)**: General health indicators, outpatient census, and ongoing preventive coverage.
- **Pastel Rose (`#FFE4E6` surface / `#BE123C` text & icon)**: Critical alerts, maternal/infant acute risks, and emergency ICU saturation.
- **Pastel Lavender (`#F3E8FF` surface / `#6B21A8` text & icon)**: Stunting intervention records, pharmacy inventory, and diagnostic clusters.
- **Pastel Mint (`#DCFCE7` surface / `#15803D` text & icon)**: Target achievements, immunization success, and resolved caseloads.

## Typography

### Structural Pairings
- **Display & Headings (Plus Jakarta Sans)**: Delivers geometric warmth with contemporary civic authority. Used for regional indicators, section cards, and metric tallies to create immediate legibility.
- **Body & Numerical Data (Inter)**: Delivers clinical precision, superior micro-scale readability, and standardized tabular figures (`font-variant-numeric: tabular-nums`) necessary for high-density public health tables and live telemetry.

### Typographic Discipline
1. **Tabular Numerals**: Every data table, KPI counter, and coordinate display must enforce tabular figures to prevent horizontal visual jitter across real-time updates.
2. **Text Weight Restraint**: Titles should not exceed weight 700; body text stays at weight 400 with weight 500 for inline metadata highlights.
3. **Tracking & Casing**: Uppercase styling is strictly reserved for `label-md` badges and table header cells, accompanied by `letter-spacing: 0.05em`.

## Layout & Spacing

### 16:9 Widescreen Command Architecture
The interface layout is engineered for standard 1080p and 1440p 16:9 operational screens, optimizing vertical scan lines while preventing excess horizontal line length:

- **Sidebar Anchor**: Fixed 260px left sidebar for multi-tier Puskesmas and departmental navigation. Collapsible to 80px icon-only mode on narrower displays.
- **Operational Grid**: 12-column fluid grid system across the remaining workspace, governed by a `1.25rem` (20px) gutter and `1.75rem` (28px) page margins.
- **Widescreen Viewport Boundaries**: The content area maintains a maximum width of `1920px`, centering gracefully on ultra-wide screens with neutral `#0F2744` outer containment if stretched beyond standard proportions.

### Responsive Breakpoint Adaptations
- **Widescreen (≥ 1440px)**: 4-column KPI metric row at top, 8-column main analytical spatial visualization (e.g. Pekalongan sub-district health map), 4-column live alert queue.
- **Desktop (1024px – 1439px)**: 2x2 grid for KPI metric cards; main analytical visualization spans 12 columns, secondary panels dock below in a 6+6 configuration.
- **Tablet / Mobile Fallback (< 1024px)**: Sidebar shifts to an off-canvas drawer; metric cards scroll horizontally or stack into a single column with full-width data tables.

## Elevation & Depth

### Ambient Crisp Realism
Visual hierarchy avoids exaggerated drop shadows in favor of crisp administrative layering, fine structural outlines, and low-opacity slate ambient diffusions.

### Elevation Hierarchy
- **Level 0 (Canvas Base)**: `#F4F7FB` solid, zero shadow.
- **Level 1 (Card & Module Surfaces)**: Pure white `#FFFFFF` paired with a sharp 1px border `rgba(15, 39, 68, 0.08)` and an ambient shadow `0 1px 3px rgba(15, 39, 68, 0.04), 0 6px 16px rgba(15, 39, 68, 0.03)`.
- **Level 2 (Active Cards & Hovered Datasets)**: Surface `#FFFFFF`, border `rgba(19, 62, 135, 0.20)`, elevated shadow `0 8px 24px rgba(15, 39, 68, 0.07)`.
- **Level 3 (Command Overlays & Modals)**: Surface `#FFFFFF`, backdrop overlay `rgba(15, 39, 68, 0.60)` with 4px backdrop blur, elevated shadow `0 20px 48px rgba(15, 39, 68, 0.18)`.
- **Level Sidebar (Fixed Navigation)**: Surface `#0F2744`, no exterior drop shadow; segmented internally with subtle inset border lines (`rgba(255, 255, 255, 0.06)`).

## Shapes

### Form Geometry
The shape language uses moderate roundedness (`0.5rem` / `8px` baseline) to balance technical precision with modern executive polish.

- **Standard Containers & Cards**: `rounded-lg` (16px / `1rem`) for overall panel outlines, giving a modern dashboard aesthetic without appearing playful.
- **Inputs, Buttons & Inner Elements**: `rounded-md` (8px / `0.5rem`) for compact tactile alignment.
- **Status Pills & Metric Badges**: `rounded-full` (9999px) for categorical tags and emergency priority chips.
- **Data Table Cells & List Rows**: `rounded-sm` (4px / `0.25rem`) applied to active/hover highlights.

## Components

### 1. KPI Metric Cards
Specialized cards categorized across the 4 pastel themes:
- **Structure**: Compact cards with an 8px left boundary accent or full light pastel background tint (`#E0F2FE`, `#FFE4E6`, `#F3E8FF`, `#DCFCE7`).
- **Typography**: Label is uppercase `label-md` in darkened categorical shade; value is `metric-display` in matching deep shade or Command Navy (`#0F2744`).
- **Meta-Indicator**: Includes an upward/downward delta trend badge pill (e.g., green pill for positive immunization drift, red pill for maternal warning spikes).

### 2. Analytical Cards with Navy Headers
- **Container**: White `#FFFFFF` body with a crisp 1px border.
- **Card Header**: Optional two styles:
  1. *Executive Variant*: Solid Command Navy (`#0F2744`) header block, white title text, white badge counts, and light gray action icons.
  2. *Standard Variant*: Clean white header with a miniature Navy badge (`#0F2744` background, white text) preceding the card title, accompanied by right-aligned filter buttons.

### 3. Command Buttons
- **Primary**: Background `#0F2744`, text `#FFFFFF`, hover `#133E87`, active scale 0.98. Focus ring: 3px `#0284C7` at 30% opacity.
- **Secondary**: Background `#FFFFFF`, text `#0F2744`, border 1px solid `#CBD5E1`, hover background `#F8FAFC`.
- **Danger (Emergency Alert)**: Background `#FFE4E6`, text `#BE123C`, border 1px solid `#FDA4AF`, hover background `#FEE2E2`.

### 4. Chips and Status Badges
- **Pill Form factor**: Height 24px, horizontal padding 8px, font size 11px, weight 600.
- **Critical Status (FasKes Darurat)**: Background `#FFE4E6`, text `#9F1239`.
- **Nominal Status (Terkendali)**: Background `#DCFCE7`, text `#166534`.
- **Monitoring Status (Puskesmas Siaga)**: Background `#E0F2FE`, text `#075985`.

### 5. Input Fields & Dropdowns
- **Height**: 38px for tight vertical rhythm on widescreen displays.
- **Background**: `#FFFFFF` with 1px border `#CBD5E1`.
- **Focus**: Border `#133E87`, shadow `0 0 0 3px rgba(19, 62, 135, 0.12)`.
- **Placeholder**: Text `#94A3B8`.

### 6. Interactive Data Tables
- **Header**: Background `#F8FAFC`, uppercase 11px font in `#64748B`, bottom border 1px solid `#E2E8F0`.
- **Row**: 48px row height, hover state `#F1F5F9`, alternating striping is disabled in favor of hover clarity.
- **Numbers**: Right-aligned, formatted with `font-variant-numeric: tabular-nums`.

### 7. Regional Geo-Spatial Map Panels
- Custom dashboard component for mapping Pekalongan sub-districts (Kecamatan Kajen, Kedungwuni, Wiradesa, etc.).
- Embedded within a standard white card container with interactive floating zoom controls in Command Navy and pastel risk overlay legends docked in the lower left corner.
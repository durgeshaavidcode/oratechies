# OraTechi's — Oracle Internal Job Portal
## Design System & Architecture Document

> **Version:** 1.0.0  
> **Last Updated:** May 2026  
> **Design Standard:** Oracle Redwood Design System  
> **Stack:** React (Micro-Frontend) · MUI v5 · Tailwind CSS v3 · Redux Toolkit · RTK Query · React Hook Form 

---

## 1. Design Philosophy

OraTechi's follows **Oracle Redwood** principles — a design language centered around **clarity, trust, and purposeful density**. Every screen is built for productivity-first enterprise users who need fast access to information without cognitive overload.

### Core Tenets
| Principle | Implementation |
|-----------|---------------|
| **Clarity** | Clean type hierarchy, consistent spacing, no decorative noise |
| **Confidence** | Bold Oracle Red accents signal actions; neutral grays carry structure |
| **Density-Aware** | Tables and lists default to compact; users can switch to comfortable |
| **Accessible by Default** | WCAG 2.1 AA minimum across all components |
| **Role-Aware UX** | Candidate, Recruiter, Admin each have tailored navigation flows |

---

## 2. Brand & Color Tokens

### 2.1 Primary Palette

```css
/* Oracle Redwood Core */
--color-oracle-red:       #C74634;   /* Primary CTA, active states, badges */
--color-oracle-red-dark:  #9E2F21;   /* Hover on primary buttons */
--color-oracle-red-light: #F5E0DC;   /* Tinted backgrounds, alert fills */

/* Neutrals */
--color-neutral-900:      #1D1D1B;   /* Headings, primary text */
--color-neutral-700:      #3D3D3B;   /* Body text */
--color-neutral-500:      #6B6B69;   /* Secondary / muted text */
--color-neutral-300:      #C8C8C6;   /* Borders, dividers */
--color-neutral-100:      #F5F5F4;   /* Page background */
--color-neutral-0:        #FFFFFF;   /* Card / panel backgrounds */

/* Semantic */
--color-success:          #1B7D3F;
--color-success-light:    #D6F0E0;
--color-warning:          #B25800;
--color-warning-light:    #FAE8CC;
--color-error:            #C74634;
--color-error-light:      #F5E0DC;
--color-info:             #00558B;
--color-info-light:       #D6ECF5;
```

### 2.2 Role-Based Accent Colors

Each portal role carries a subtle secondary tint used in dashboards and nav indicators:

| Role | Accent | Hex |
|------|--------|-----|
| Candidate | Sky Blue | `#00558B` |
| Recruiter | Amber | `#B25800` |
| Admin | Graphite | `#3D3D3B` |

---

## 3. Typography

### 3.1 Font Stack

```css
/* Display / Headings — Oracle Sans (fallback: Georgia, serif) */
font-family: 'Oracle Sans', 'Georgia', serif;

/* Body / UI — Oracle Sans (fallback: system-ui) */
font-family: 'Oracle Sans', system-ui, -apple-system, sans-serif;

/* Monospace — code snippets, IDs */
font-family: 'Oracle Mono', 'Courier New', monospace;
```

> **Note:** Oracle Sans is served via Oracle CDN for internal apps. Fallbacks ensure graceful degradation.

### 3.2 Type Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|------------|--------|-------|
| `display-lg` | 32px | 40px | 700 | Page hero titles |
| `display-md` | 24px | 32px | 700 | Section headers |
| `heading-lg` | 20px | 28px | 600 | Card titles, drawer headers |
| `heading-md` | 16px | 24px | 600 | Sub-section labels |
| `body-lg` | 16px | 24px | 400 | Primary body copy |
| `body-md` | 14px | 20px | 400 | Table rows, form labels |
| `body-sm` | 12px | 16px | 400 | Captions, helper text |
| `label` | 12px | 16px | 600 | Tags, badge text |
| `code` | 13px | 20px | 400 | Monospace snippets |

---

## 4. Spacing & Grid

### 4.1 Base Unit
All spacing is derived from an **8px base unit**.

```
4px  → micro gaps (icon padding)
8px  → xs
12px → sm
16px → md (default card padding)
24px → lg
32px → xl
48px → 2xl
64px → 3xl
```

### 4.2 Layout Grid

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| Mobile `< 600px` | 4 | 16px | 16px |
| Tablet `600–1024px` | 8 | 24px | 24px |
| Desktop `1024–1440px` | 12 | 24px | 32px |
| Wide `> 1440px` | 12 | 32px | auto (max 1440px) |

### 4.3 Page Layout Structure

```
┌─────────────────────────────────────────┐
│  GLOBAL NAVBAR (64px height)            │
├───────────┬─────────────────────────────┤
│  SIDEBAR  │  MAIN CONTENT AREA          │
│  240px    │  flex-1                     │
│  (collapsed: 64px)                      │
│           │  ┌─────────────────────┐    │
│           │  │  PAGE HEADER        │    │
│           │  │  (Breadcrumb + CTA) │    │
│           │  └─────────────────────┘    │
│           │  ┌─────────────────────┐    │
│           │  │  CONTENT REGION     │    │
│           │  └─────────────────────┘    │
├───────────┴─────────────────────────────┤
│  FOOTER (40px, minimal)                 │
└─────────────────────────────────────────┘
```

---

## 5. Component Library (MUI + Tailwind)

### 5.1 Buttons

| Variant | Use Case | MUI Equivalent |
|---------|----------|---------------|
| **Primary** (Oracle Red fill) | Primary CTA — "Apply", "Post Job" | `variant="contained"` |
| **Secondary** (Outlined Red) | Secondary actions — "Save Draft" | `variant="outlined"` |
| **Tertiary** (Text only) | Low-priority — "Cancel", "Learn more" | `variant="text"` |
| **Danger** (Red fill, darker) | Destructive — "Delete Job", "Revoke" | Custom `color="error"` |
| **Ghost** (Neutral outlined) | Utility — "Export", "Filter" | `variant="outlined" color="inherit"` |

**Button Sizing:**
- `sm`: 28px height, 12px/16px padding
- `md`: 36px height (default), 16px/20px padding  
- `lg`: 44px height, 20px/24px padding

### 5.2 Form Inputs

All inputs use MUI `TextField` with `variant="outlined"` and Oracle-themed overrides:

- **Border radius:** 4px (Redwood standard)
- **Focus ring:** 2px solid `--color-oracle-red`
- **Error state:** Red border + helper text below
- **Label:** Floating label pattern (MUI default)
- **Required indicator:** Red asterisk suffix

**Special Inputs:**
- `FileUploadZone` — dashed border, drag-active fill with `--color-oracle-red-light`
- `SearchBar` — full-width with inline search icon (MUI `InputAdornment`)
- `DateRangePicker` — MUI X Date Picker with Oracle theme override
- `AutocompleteSkills` — MUI Autocomplete with chip output

### 5.3 Data Tables

Oracle-style tables are the backbone of Recruiter and Admin views:

```
- Header row: neutral-100 bg, 600 weight, 12px uppercase labels
- Row height: 40px compact / 52px comfortable (user toggle)
- Alternating rows: white / neutral-50
- Row hover: neutral-100 bg
- Selected row: oracle-red-light bg with red left border accent
- Sticky header on scroll
- Built-in: sort, filter, pagination, column show/hide
- Bulk action bar appears on multi-row selection
```

MUI component: `DataGrid` from `@mui/x-data-grid`

### 5.4 Cards

```
- Background: white
- Border: 1px solid neutral-300
- Border-radius: 8px
- Shadow: 0 2px 8px rgba(0,0,0,0.08)
- Hover shadow: 0 4px 16px rgba(0,0,0,0.12)
- Padding: 24px
```

**Card Variants:**
- `JobCard` — Job title, company badge, location, skills chips, apply CTA
- `ApplicationCard` — Candidate name, status badge, timeline
- `StatCard` — Metric number + label + trend indicator
- `ProfileCard` — Avatar, name, role, contact actions

### 5.5 Navigation

**Global Navbar (Host App — Navbar.jsx)**
- Height: 64px
- Background: `#1D1D1B` (Oracle dark)
- Left: Oracle logo + "OraTechi's" wordmark
- Center: Global search (desktop only)
- Right: Notifications bell, user avatar menu
- Border-bottom: 2px solid `--color-oracle-red`

**Side Navigation**
- Width: 240px expanded / 64px icon-only collapsed
- Background: white with neutral-100 hover states
- Active item: Oracle Red left border accent + red text
- Grouped sections with dividers
- Role-specific nav items rendered conditionally

### 5.6 Badges & Status Chips

| Status | Color | Usage |
|--------|-------|-------|
| `Active` | Green (`success`) | Active job postings |
| `Applied` | Blue (`info`) | Application submitted |
| `In Review` | Amber (`warning`) | Under recruiter review |
| `Interview` | Purple | Interview scheduled |
| `Offered` | Green | Offer extended |
| `Rejected` | Red | Application rejected |
| `Closed` | Neutral gray | Job no longer active |
| `Draft` | Neutral | Unpublished posting |

MUI component: `Chip` with custom color overrides

### 5.7 Toast Notifications (ToastNotification.jsx)

- Position: Bottom-right
- Auto-dismiss: 5 seconds (error: manual dismiss)
- Variants: success / warning / error / info
- MUI component: `Snackbar` + `Alert`
- Stack up to 3 toasts simultaneously

---

## 6. Page Inventory

### 6.1 AUTH MFE (Port 5001) — `/auth`

| Page | Route | Description |
|------|-------|-------------|
| **Login** | `/auth/login` | Oracle SSO + email/password fallback |
| **Role Selection** | `/auth/select-role` | Post-login: choose Candidate / Recruiter |
| **Forgot Password** | `/auth/forgot-password` | Email-based reset flow |
| **Reset Password** | `/auth/reset-password` | Token-validated new password |
| **First Login Setup** | `/auth/onboarding` | Profile completion wizard (candidate) |

#### Login Page Layout
```
┌─────────────────────────────────────────┐
│  Oracle Logo (top-left)                 │
│                                         │
│         ┌─────────────────┐             │
│         │  "Sign in to    │             │
│         │   OraTechi's"   │             │
│         │                 │             │
│         │  [Oracle SSO ▶] │  ← Primary  │
│         │  ─── or ───     │             │
│         │  Email input    │             │
│         │  Password input │             │
│         │  [Sign In]      │             │
│         │                 │             │
│         │  Forgot pwd?    │             │
│         └─────────────────┘             │
│                                         │
│  © 2026 Oracle Corporation              │
└─────────────────────────────────────────┘
```

---

### 6.2 CANDIDATE PORTAL (Host App — Candidate Layout)

| Page | Route | Description |
|------|-------|-------------|
| **Dashboard** | `/candidate/dashboard` | Activity feed, recommended jobs, application tracker |
| **Job Search** | `/candidate/jobs` | Full search with filters |
| **Job Detail** | `/candidate/jobs/:id` | Full JD, company info, apply CTA |
| **Application Form** | `/candidate/jobs/:id/apply` | Multi-step application wizard |
| **My Applications** | `/candidate/applications` | All submitted applications + status |
| **Application Detail** | `/candidate/applications/:id` | Timeline, feedback, status updates |
| **Profile** | `/candidate/profile` | Personal info, resume, skills |
| **Resume Builder** | `/candidate/profile/resume` | Upload or build in-app |
| **Saved Jobs** | `/candidate/saved` | Bookmarked job listings |
| **Notifications** | `/candidate/notifications` | All alerts and updates |
| **Settings** | `/candidate/settings` | Account, privacy, preferences |

#### Candidate Dashboard Layout
```
┌─────────────────────────────────────────┐
│  NAVBAR                                  │
├──────────┬──────────────────────────────┤
│ SIDEBAR  │  👋 Welcome back, [Name]     │
│          │                              │
│ Dashboard│  ┌──────┐┌──────┐┌──────┐   │
│ Find Jobs│  │ Apps ││In    ││Inter-│   │
│ Applied  │  │  12  ││Review││views │   │
│ Saved    │  │      ││  3   ││  1   │   │
│ Profile  │  └──────┘└──────┘└──────┘   │
│ Settings │                              │
│          │  Recommended Jobs ──────────  │
│          │  ┌────────────────────────┐  │
│          │  │ JobCard                │  │
│          │  │ JobCard                │  │
│          │  └────────────────────────┘  │
│          │                              │
│          │  Recent Applications ───────  │
│          │  [ApplicationCard list]      │
└──────────┴──────────────────────────────┘
```

#### Job Search Page
```
┌─────────────────────────────────────────┐
│  NAVBAR                                  │
├──────────┬──────────────────────────────┤
│ SIDEBAR  │  Find Your Next Role         │
│          │                              │
│          │  ┌──────────────────────────┐│
│          │  │ 🔍 Search jobs...  [Go] ││
│          │  └──────────────────────────┘│
│          │                              │
│          │  ┌─────────┐ ┌─────────────┐│
│          │  │ FILTERS │ │ JOB RESULTS ││
│          │  │ Location│ │             ││
│          │  │ Dept    │ │ JobCard ×N  ││
│          │  │ Type    │ │             ││
│          │  │ Level   │ │ [Load More] ││
│          │  │ Posted  │ │             ││
│          │  └─────────┘ └─────────────┘│
└──────────┴──────────────────────────────┘
```

#### Application Multi-Step Wizard
```
Step 1: Personal Info
Step 2: Resume Upload / Builder
Step 3: Skills & Experience
Step 4: Screening Questions
Step 5: Review & Submit
```
- MUI `Stepper` (horizontal on desktop, vertical on mobile)
- Progress auto-saved every step
- Final step shows full summary before submit

---

### 6.3 RECRUITER PORTAL (Host App — Recruiter Layout)

| Page | Route | Description |
|------|-------|-------------|
| **Dashboard** | `/recruiter/dashboard` | Pipeline overview, stats, recent activity |
| **Job Postings** | `/recruiter/jobs` | All jobs (DataGrid with filters) |
| **Create Job** | `/recruiter/jobs/new` | Multi-step job creation form |
| **Edit Job** | `/recruiter/jobs/:id/edit` | Modify existing posting |
| **Job Detail** | `/recruiter/jobs/:id` | Job overview + applicant list |
| **Applicants** | `/recruiter/jobs/:id/applicants` | All applicants for a job (Kanban or Table) |
| **Candidate Profile** | `/recruiter/candidates/:id` | Full candidate view with resume |
| **All Candidates** | `/recruiter/candidates` | Global candidate search |
| **Interview Schedule** | `/recruiter/interviews` | Calendar view of all scheduled interviews |
| **Schedule Interview** | `/recruiter/interviews/new` | Book slot, invite panel members |
| **Offer Management** | `/recruiter/offers` | Drafts, sent, accepted, declined |
| **Create Offer** | `/recruiter/offers/new` | Offer letter builder |
| **Reports** | `/recruiter/reports` | Hire metrics, time-to-fill, funnel |
| **Notifications** | `/recruiter/notifications` | Alerts and system messages |
| **Settings** | `/recruiter/settings` | Team, preferences, notifications |

#### Recruiter Dashboard Layout
```
┌─────────────────────────────────────────┐
│  NAVBAR                                  │
├──────────┬──────────────────────────────┤
│ SIDEBAR  │  Recruiter Dashboard         │
│          │                              │
│ Dashboard│  ┌──────┐┌──────┐┌──────┐┌──┐│
│ Jobs     │  │Open  ││Total ││Avg   ││TF ││
│ Candidates│  │Jobs  ││Apps  ││Days  ││   ││
│ Interviews│  │ 18   ││ 342  ││ 14   ││6% ││
│ Offers   │  └──────┘└──────┘└──────┘└──┘│
│ Reports  │                              │
│ Settings │  Hiring Pipeline ───────────  │
│          │  ┌──────────────────────────┐│
│          │  │ Applied→Screen→Interview ││
│          │  │ →Offer→Hired  [Funnel]  ││
│          │  └──────────────────────────┘│
│          │                              │
│          │  Active Job Postings ───────  │
│          │  [DataGrid: compact]        │
└──────────┴──────────────────────────────┘
```

#### Applicant Kanban Board (per job)
```
┌──────────┬──────────┬──────────┬──────────┬──────────┐
│ Applied  │ Screening│ Interview│  Offer   │  Hired   │
│  (45)    │   (12)   │   (6)    │   (2)    │   (1)    │
├──────────┼──────────┼──────────┼──────────┼──────────┤
│ [Card]   │ [Card]   │ [Card]   │ [Card]   │ [Card]   │
│ [Card]   │ [Card]   │ [Card]   │          │          │
│ [Card]   │          │          │          │          │
└──────────┴──────────┴──────────┴──────────┴──────────┘
```
Toggle between Kanban and Table view (DataGrid).

#### Create Job Posting — Steps
```
Step 1: Job Basics       (Title, Department, Location, Type)
Step 2: Job Description  (Rich text editor — Quill.js)
Step 3: Requirements     (Skills, Experience, Education)
Step 4: Screening Qs     (Custom questions with answer types)
Step 5: Compensation     (Band, benefits — optional/hidden)
Step 6: Team & Approvals (Hiring manager, panel members)
Step 7: Review & Publish
```

---

### 6.4 ADMIN MFE (Port 5002) — `/admin`

| Page | Route | Description |
|------|-------|-------------|
| **Dashboard** | `/admin/dashboard` | System health, user counts, activity logs |
| **User Management** | `/admin/users` | All users: Candidates + Recruiters |
| **User Detail** | `/admin/users/:id` | Profile, activity, role management |
| **Create User** | `/admin/users/new` | Manual user creation |
| **Role & Permissions** | `/admin/roles` | Role definitions and permission matrix |
| **Job Oversight** | `/admin/jobs` | All jobs across all recruiters (read + moderate) |
| **Job Detail** | `/admin/jobs/:id` | Full job view with audit trail |
| **Department Config** | `/admin/departments` | Org structure, department tree |
| **Location Config** | `/admin/locations` | Office locations, remote policies |
| **Skill Taxonomy** | `/admin/skills` | Manage global skills catalog |
| **Approval Workflows** | `/admin/workflows` | Configure posting / offer approval chains |
| **System Settings** | `/admin/settings` | Portal config, branding, email templates |
| **Email Templates** | `/admin/settings/emails` | Customize all system emails |
| **Audit Logs** | `/admin/logs` | Full activity log with filters |
| **Reports & Analytics** | `/admin/reports` | System-wide hiring analytics |
| **Announcements** | `/admin/announcements` | Post system-wide notices |

#### Admin Dashboard Layout
```
┌─────────────────────────────────────────┐
│  NAVBAR (Admin badge in red)            │
├──────────┬──────────────────────────────┤
│ SIDEBAR  │  System Overview             │
│          │                              │
│ Dashboard│  ┌───────┐┌───────┐┌───────┐│
│ Users    │  │Total  ││Active ││Jobs   ││
│ Jobs     │  │Users  ││Recrui-││Posted ││
│ Config   │  │ 1,240 ││tors 45││  89   ││
│ Workflows│  └───────┘└───────┘└───────┘│
│ Settings │                              │
│ Logs     │  Recent Activity Log ──────  │
│ Reports  │  [Timeline list]            │
└──────────┴──────────────────────────────┘
```

---

## 7. Shared Components (shared-components/)

### 7.1 Button.jsx
```jsx
// Variants: primary | secondary | tertiary | danger | ghost
// Sizes: sm | md | lg
// States: default | hover | focus | disabled | loading
// Props: variant, size, disabled, loading, startIcon, endIcon, fullWidth
```

### 7.2 TextInput.jsx
```jsx
// Oracle-themed MUI TextField wrapper
// Props: label, placeholder, helperText, error, required,
//        startAdornment, endAdornment, size, fullWidth
```

### 7.3 FileUploadZone.jsx
```jsx
// Drag-and-drop zone for resume/document uploads
// Supported: PDF, DOCX (max 5MB)
// States: idle | drag-over | uploading | success | error
// Shows: file name, size, remove button on success
```

### 7.4 ToastNotification.jsx
```jsx
// Global toast system using React Context + MUI Snackbar
// Usage: const { showToast } = useToast();
// showToast({ type: 'success', message: 'Application submitted!' })
```

---

## 8. MUI Theme Configuration

```js
// theme.js — Oracle Redwood MUI Theme Override
const oracleTheme = createTheme({
  palette: {
    primary: {
      main: '#C74634',
      dark: '#9E2F21',
      light: '#F5E0DC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00558B',
    },
    error: { main: '#C74634' },
    warning: { main: '#B25800' },
    success: { main: '#1B7D3F' },
    info: { main: '#00558B' },
    background: {
      default: '#F5F5F4',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1D1D1B',
      secondary: '#6B6B69',
    },
  },
  typography: {
    fontFamily: "'Oracle Sans', system-ui, sans-serif",
    h1: { fontSize: '2rem', fontWeight: 700 },
    h2: { fontSize: '1.5rem', fontWeight: 700 },
    h3: { fontSize: '1.25rem', fontWeight: 600 },
    h4: { fontSize: '1rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.5 },
    body2: { fontSize: '0.875rem', lineHeight: 1.43 },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 },
        containedPrimary: {
          '&:hover': { backgroundColor: '#9E2F21' },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined', size: 'small' },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: '4px', fontWeight: 600, fontSize: '0.75rem' },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: { border: '1px solid #C8C8C6' },
        columnHeaders: { backgroundColor: '#F5F5F4', fontWeight: 600 },
      },
    },
  },
});
```

---

## 9. Tailwind Configuration

```js
// tailwind.config.js — shared-components/tailwind.config.js
module.exports = {
  content: ['../*/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        oracle: {
          red: '#C74634',
          'red-dark': '#9E2F21',
          'red-light': '#F5E0DC',
          dark: '#1D1D1B',
        },
        neutral: {
          900: '#1D1D1B',
          700: '#3D3D3B',
          500: '#6B6B69',
          300: '#C8C8C6',
          100: '#F5F5F4',
        },
      },
      fontFamily: {
        oracle: ["'Oracle Sans'", 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.12)',
        navbar: '0 2px 8px rgba(0,0,0,0.16)',
      },
      borderRadius: {
        oracle: '4px',
      },
    },
  },
  plugins: [],
};
```

---

## 10. Iconography

- **Icon Library:** MUI Icons (`@mui/icons-material`) — consistent with Oracle Redwood
- **Size Standards:**
  - Navigation icons: 20px
  - Inline / action icons: 18px
  - Status / badge icons: 16px
  - Hero / empty state icons: 48–64px
- **Style:** Outlined variant preferred; Filled for active/selected states
- **Custom SVGs:** Stored in `src/assets/icons/` per MFE

---

## 11. Accessibility Standards

| Requirement | Standard |
|-------------|----------|
| Color contrast | WCAG 2.1 AA (4.5:1 text, 3:1 UI) |
| Keyboard navigation | Full tab order, visible focus rings |
| Screen reader | All interactive elements have `aria-label` |
| Form errors | Linked via `aria-describedby` |
| Focus trap | Modals and drawers trap focus correctly |
| Skip links | "Skip to main content" on all pages |
| Loading states | `aria-live` regions for async updates |

---

## 12. Responsive Behavior

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Sidebar | Bottom nav or hamburger drawer | Icon-only collapsed | Full 240px |
| Job Cards | Full-width stacked | 2-column grid | 3-column or list |
| DataGrid | Card list fallback | Scrollable table | Full DataGrid |
| Kanban Board | Hidden / list fallback | Horizontal scroll | Full board |
| Stepper | Vertical | Vertical | Horizontal |
| Filters | Bottom sheet drawer | Side panel | Inline panel |

---

## 13. Animation & Motion

- **Principle:** Functional motion only — no decorative animations
- **Page transitions:** Subtle fade-in (150ms ease-out)
- **Sidebar collapse:** 200ms ease-in-out width transition
- **Toast entry:** Slide-up + fade (200ms)
- **Skeleton loaders:** Shimmer animation for all data-loading states
- **Hover effects:** 150ms background transitions on cards and rows
- **Modal open:** Scale from 0.95 + fade (200ms)

---

## 14. Empty & Error States

Every list/table view must handle:

| State | Illustration | Action |
|-------|-------------|--------|
| **No Results** | Oracle-styled empty icon | Clear filters / CTA |
| **First Use** | Onboarding illustration | "Get Started" CTA |
| **Loading** | MUI Skeleton shimmer | — |
| **Network Error** | Warning icon | "Retry" button |
| **403 Forbidden** | Lock icon | "Request Access" |
| **404 Not Found** | Search icon | "Go to Dashboard" |
| **500 Server Error** | Alert icon | "Try Again" / Support link |

---

## 15. File & Folder Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `JobCard.jsx` |
| Pages | PascalCase | `JobSearchPage.jsx` |
| Hooks | camelCase, `use` prefix | `useJobSearch.js` |
| Utilities | camelCase | `formatDate.js` |
| Constants | UPPER_SNAKE_CASE | `JOB_STATUSES.js` |
| CSS Modules | camelCase | `jobCard.module.css` |
| Tailwind classes | inline via `cn()` utility | — |

---

## 16. State Management — Redux Toolkit

All application state is managed through **Redux Toolkit (RTK)**. Each MFE owns its slice(s); the host app composes a root store at runtime using a shared store registry pattern.

### 16.1 Store Structure

```
store/
├── index.js                  # configureStore — combines all slices + RTK Query middleware
├── rootReducer.js            # combineReducers entry point
│
├── slices/
│   ├── authSlice.js          # currentUser, role, token, isAuthenticated
│   ├── uiSlice.js            # sidebarOpen, toasts[], activeModal, density preference
│   ├── jobSlice.js           # selectedJob, jobFilters, savedJobIds[]
│   ├── applicationSlice.js   # draftApplication (multi-step wizard state)
│   ├── candidateSlice.js     # candidateProfile (local edits before save)
│   ├── recruiterSlice.js     # activeJobId, kanbanColumnOrder
│   └── adminSlice.js         # selectedUsers[], bulkActionQueue
│
└── services/                 # RTK Query API slices (replaces Axios + React Query)
    ├── authApi.js
    ├── jobsApi.js
    ├── applicationsApi.js
    ├── candidatesApi.js
    ├── recruitersApi.js
    └── adminApi.js
```

### 16.2 configureStore

```js
// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import { jobsApi } from './services/jobsApi';
import { applicationsApi } from './services/applicationsApi';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';
import jobReducer from './slices/jobSlice';
import applicationReducer from './slices/applicationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    job: jobReducer,
    application: applicationReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    [applicationsApi.reducerPath]: applicationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      jobsApi.middleware,
      applicationsApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### 16.3 Slice Conventions

Each slice follows this structure:

```js
// slices/jobSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedJobId: null,
  filters: {
    keyword: '',
    location: '',
    department: '',
    jobType: '',        // full-time | part-time | contract | internship
    experienceLevel: '',
    postedWithin: '',   // 24h | 7d | 30d
  },
  savedJobIds: [],
  viewMode: 'list',   // 'list' | 'grid'
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setSelectedJob: (state, action) => { state.selectedJobId = action.payload; },
    setFilters: (state, action) => { state.filters = { ...state.filters, ...action.payload }; },
    clearFilters: (state) => { state.filters = initialState.filters; },
    toggleSavedJob: (state, action) => {
      const id = action.payload;
      state.savedJobIds = state.savedJobIds.includes(id)
        ? state.savedJobIds.filter(j => j !== id)
        : [...state.savedJobIds, id];
    },
    setViewMode: (state, action) => { state.viewMode = action.payload; },
  },
});

export const { setSelectedJob, setFilters, clearFilters, toggleSavedJob, setViewMode } = jobSlice.actions;
export default jobSlice.reducer;
```

### 16.4 Typed Hooks (use across all MFEs)

```js
// hooks/redux.js  — import these instead of raw useSelector/useDispatch
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);
```

### 16.5 UI Slice — Toast & Modal Management

The `uiSlice` drives the global `ToastNotification` and modal system:

```js
// Dispatch from anywhere:
dispatch(showToast({ type: 'success', message: 'Application submitted!' }));
dispatch(showToast({ type: 'error', message: 'Failed to save draft.' }));
dispatch(openModal({ id: 'CONFIRM_DELETE', props: { jobId: '123' } }));
dispatch(closeModal());
dispatch(setSidebarOpen(false));
dispatch(setDensity('comfortable')); // 'compact' | 'comfortable'
```

---

## 17. Server State — RTK Query

RTK Query replaces Axios + React Query for all API calls. Each `createApi` service is co-located in `store/services/`.

### 17.1 Base API Setup

```js
// store/services/baseApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Job', 'Application', 'Candidate', 'User', 'Offer', 'Department'],
  endpoints: () => ({}),
});
```

### 17.2 Jobs API Service

```js
// store/services/jobsApi.js
import { baseApi } from './baseApi';

export const jobsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // Candidate — search jobs
    getJobs: builder.query({
      query: (filters) => ({ url: '/jobs', params: filters }),
      providesTags: ['Job'],
    }),

    // Candidate / Recruiter — single job detail
    getJobById: builder.query({
      query: (id) => `/jobs/${id}`,
      providesTags: (result, error, id) => [{ type: 'Job', id }],
    }),

    // Recruiter — create new job posting
    createJob: builder.mutation({
      query: (body) => ({ url: '/jobs', method: 'POST', body }),
      invalidatesTags: ['Job'],
    }),

    // Recruiter — update job
    updateJob: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/jobs/${id}`, method: 'PATCH', body }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Job', id }],
    }),

    // Recruiter/Admin — delete job
    deleteJob: builder.mutation({
      query: (id) => ({ url: `/jobs/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Job'],
    }),

    // Recruiter — get applicants for a job
    getApplicantsByJob: builder.query({
      query: ({ jobId, params }) => ({ url: `/jobs/${jobId}/applicants`, params }),
      providesTags: ['Application'],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useCreateJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
  useGetApplicantsByJobQuery,
} = jobsApi;
```

### 17.3 Applications API Service

```js
// store/services/applicationsApi.js
export const applicationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getMyApplications: builder.query({
      query: (params) => ({ url: '/applications/me', params }),
      providesTags: ['Application'],
    }),

    getApplicationById: builder.query({
      query: (id) => `/applications/${id}`,
      providesTags: (result, error, id) => [{ type: 'Application', id }],
    }),

    submitApplication: builder.mutation({
      query: (body) => ({ url: '/applications', method: 'POST', body }),
      invalidatesTags: ['Application'],
    }),

    updateApplicationStatus: builder.mutation({
      query: ({ id, status, feedback }) => ({
        url: `/applications/${id}/status`,
        method: 'PATCH',
        body: { status, feedback },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Application', id }],
    }),

    withdrawApplication: builder.mutation({
      query: (id) => ({ url: `/applications/${id}/withdraw`, method: 'POST' }),
      invalidatesTags: ['Application'],
    }),
  }),
});
```

### 17.4 RTK Query Usage in Components

```jsx
// Loading, error, and data states handled automatically
const { data: jobs, isLoading, isError, refetch } = useGetJobsQuery(filters);

// Show skeleton during load
if (isLoading) return <JobListSkeleton />;
if (isError) return <ErrorState onRetry={refetch} />;

// Mutations
const [submitApplication, { isLoading: isSubmitting }] = useSubmitApplicationMutation();
await submitApplication(payload).unwrap(); // .unwrap() throws on error for try/catch
```

### 17.5 Cache & Pagination Strategy

| Endpoint Type | Cache Strategy | Pagination |
|--------------|---------------|------------|
| Job listings / search | `providesTags: ['Job']` — invalidated on create/update/delete | Offset-based (DataGrid), page + limit params |
| Activity feeds / notifications | `keepUnusedDataFor: 30` (seconds) | Cursor-based, `nextCursor` in response |
| Candidate profile | `providesTags: [{ type: 'Candidate', id }]` | — |
| Reports / analytics | `keepUnusedDataFor: 300` (5 min cache) | — |
| Admin user list | `providesTags: ['User']` | Offset + total count |

---

## 18. Form Management — React Hook Form + Zod

All forms use **React Hook Form (RHF)** with **Zod** schemas for validation. MUI inputs are integrated via the `Controller` component.

### 18.1 Dependencies

```json
"react-hook-form": "^7.x",
"@hookform/resolvers": "^3.x",
"zod": "^3.x"
```

### 18.2 Zod Schema Patterns

Each form has a co-located `*.schema.js` file:

```js
// features/auth/loginForm.schema.js
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Enter a valid Oracle email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// features/jobs/createJobForm.schema.js
export const createJobSchema = z.object({
  title: z.string().min(3, 'Job title is required').max(100),
  department: z.string().min(1, 'Department is required'),
  location: z.string().min(1, 'Location is required'),
  jobType: z.enum(['full-time', 'part-time', 'contract', 'internship']),
  experienceLevel: z.enum(['entry', 'mid', 'senior', 'lead', 'director']),
  description: z.string().min(100, 'Description must be at least 100 characters'),
  skills: z.array(z.string()).min(1, 'Add at least one required skill'),
  salaryMin: z.number().positive().optional(),
  salaryMax: z.number().positive().optional(),
  closingDate: z.date().min(new Date(), 'Closing date must be in the future'),
}).refine(
  (data) => !data.salaryMin || !data.salaryMax || data.salaryMax >= data.salaryMin,
  { message: 'Max salary must be ≥ min salary', path: ['salaryMax'] }
);

// features/applications/applyForm.schema.js
export const applyFormSchema = z.object({
  // Step 1
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[0-9\s\-()]{7,15}$/, 'Enter a valid phone number'),
  // Step 2
  resumeFile: z.instanceof(File, { message: 'Please upload your resume' }),
  coverLetter: z.string().max(2000).optional(),
  // Step 3
  totalExperience: z.number().min(0).max(50),
  skills: z.array(z.string()).min(1),
  // Step 4 — screening questions are dynamic, validated per job
});
```

### 18.3 MUI + RHF Controller Pattern

All MUI inputs must be wrapped in `Controller`. Use this pattern consistently:

```jsx
// Standard MUI TextField
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@mui/material';

const { control, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(loginSchema),
  defaultValues: { email: '', password: '' },
  mode: 'onTouched',   // validate on blur; show errors progressively
});

<Controller
  name="email"
  control={control}
  render={({ field }) => (
    <TextField
      {...field}
      label="Oracle Email"
      fullWidth
      error={!!errors.email}
      helperText={errors.email?.message}
      size="small"
    />
  )}
/>
```

```jsx
// MUI Select
<Controller
  name="department"
  control={control}
  render={({ field }) => (
    <FormControl fullWidth error={!!errors.department} size="small">
      <InputLabel>Department</InputLabel>
      <Select {...field} label="Department">
        {departments.map(d => <MenuItem key={d.id} value={d.id}>{d.name}</MenuItem>)}
      </Select>
      <FormHelperText>{errors.department?.message}</FormHelperText>
    </FormControl>
  )}
/>
```

```jsx
// MUI Autocomplete (skills multi-select)
<Controller
  name="skills"
  control={control}
  render={({ field: { onChange, value } }) => (
    <Autocomplete
      multiple
      options={skillOptions}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Required Skills"
          error={!!errors.skills}
          helperText={errors.skills?.message}
          size="small"
        />
      )}
    />
  )}
/>
```

### 18.4 Multi-Step Wizard Form (Application / Job Creation)

The multi-step form stores all step data in a **single `useForm` instance** at the wizard root. Each step renders a subset of fields. The form is submitted only on the final step.

```js
// Redux slice holds wizard navigation state; RHF holds field values
// applicationSlice.js manages: currentStep, totalSteps, completedSteps[]

// WizardRoot.jsx
const methods = useForm({
  resolver: zodResolver(applyFormSchema),
  defaultValues: savedDraft ?? initialValues,
  mode: 'onTouched',
});

// Pass methods down via FormProvider
<FormProvider {...methods}>
  <StepOne />     // uses useFormContext() to access control, errors
  <StepTwo />
  <StepThree />
</FormProvider>

// Auto-save draft on step change
const watchedValues = methods.watch();
useEffect(() => {
  dispatch(saveDraft(watchedValues));   // Redux action → localStorage persist
}, [watchedValues]);
```

### 18.5 Form Submission with RTK Mutation

```jsx
const [submitApplication, { isLoading, isError, error }] = useSubmitApplicationMutation();

const onSubmit = async (data) => {
  try {
    await submitApplication(data).unwrap();
    dispatch(showToast({ type: 'success', message: 'Application submitted successfully!' }));
    dispatch(clearDraft());
    navigate('/candidate/applications');
  } catch (err) {
    dispatch(showToast({ type: 'error', message: err.data?.message ?? 'Submission failed. Please try again.' }));
  }
};

<form onSubmit={methods.handleSubmit(onSubmit)}>
  ...
  <Button type="submit" variant="contained" loading={isLoading}>
    Submit Application
  </Button>
</form>
```

### 18.6 Form File Reference by Feature

| Form | Schema File | Steps | Submit API |
|------|------------|-------|-----------|
| Login | `loginForm.schema.js` | 1 | `authApi.login` |
| Candidate Onboarding | `onboardingForm.schema.js` | 4 | `candidatesApi.completeProfile` |
| Apply for Job | `applyForm.schema.js` | 5 | `applicationsApi.submitApplication` |
| Create Job Posting | `createJobForm.schema.js` | 7 | `jobsApi.createJob` |
| Edit Job Posting | `editJobForm.schema.js` | 1 (full page) | `jobsApi.updateJob` |
| Schedule Interview | `interviewForm.schema.js` | 1 | `interviewsApi.scheduleInterview` |
| Create Offer | `offerForm.schema.js` | 3 | `offersApi.createOffer` |
| Create User (Admin) | `createUserForm.schema.js` | 1 | `adminApi.createUser` |
| System Settings (Admin) | `settingsForm.schema.js` | 1 | `adminApi.updateSettings` |

---

## 19. File & Folder Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `JobCard.jsx` |
| Pages | PascalCase | `JobSearchPage.jsx` |
| Redux Slices | camelCase + `Slice` suffix | `jobSlice.js` |
| RTK Query Services | camelCase + `Api` suffix | `jobsApi.js` |
| Zod Schemas | camelCase + `Form.schema.js` | `createJobForm.schema.js` |
| Custom Hooks | camelCase, `use` prefix | `useJobFilters.js` |
| Utilities | camelCase | `formatDate.js` |
| Constants | UPPER_SNAKE_CASE | `JOB_STATUSES.js` |
| CSS Modules | camelCase | `jobCard.module.css` |
| Tailwind classes | inline via `cn()` utility | — |

---

## 20. Auth & Token Management

- **Auth Provider:** Oracle IDCS (Identity Cloud Service)
- **Token Storage:** Access token held in Redux `authSlice` (memory only — never `localStorage`)
- **Refresh Strategy:** RTK Query `baseQuery` wrapper checks token expiry, calls `/auth/refresh` silently before retrying the original request
- **Role Guard:** `<RoleGuard role="recruiter">` HOC reads `auth.role` from Redux and redirects unauthorized users to `/auth/select-role`
- **Logout:** Dispatches `authSlice.logout()` → clears store → redirects to `/auth/login`

```js
// Enforced at route level in host-app/src/routes/
<Route path="/recruiter/*" element={
  <RoleGuard allowedRoles={['recruiter', 'admin']}>
    <RecruiterLayout />
  </RoleGuard>
} />
```

---

*This document is the single source of truth for OraTechi's design decisions. All component implementations in `shared-components/`, `host-app/`, `auth-mfe/`, and `admin-mfe/` must conform to these specifications.*

*For questions, contact the OraTechi's Design System team.*
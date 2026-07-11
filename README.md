# Web-Fundamentals-
📁 My_Travel_Website/
│
├── 📄 index.html        ← The Homepage (The front door of your site)
├── 📄 catalogue.html    ← The Catalog Page (Where users search and filter trips)
├── 📄 package.html      ← The Details Page (Loads different countries dynamically)
├── 📄 register.html     ← The Booking Page (The simple 3-step registration form)
│
├── 📄 style.css         ← The Wardrobe (Stores all colors, fonts, and layouts in one place)
└── 📄 app.js            ← The Brain (Holds all the trip info and handles button clicks)


┌────────────────────────────────────────────────────────┐
 │                      YOUR BROWSER                      │
 └──────────────────────────┬─────────────────────────────┘
                            │ (Visits URLs)
                            ▼
 ┌────────────────────────────────────────────────────────┐
 │                  HTML (The Structure)                  │
 │                                                        │
 │  ├── index.html        ──► Home & Reviews page         │
 │  ├── catalogue.html    ──► Grid of all 8 vacations     │
 │  ├── package.html      ──► Unified country details     │
 │  └── register.html     ──► 3-Step booking wizard       │
 └──────────────┬───────────────────────────┬─────────────┘
                │                           │
                │ (Styles with)             │ (Controls actions & data)
                ▼                           ▼
 ┌──────────────────────────┐   ┌─────────────────────────┐
 │   CSS (The Appearance)   │   │   JS (The Brains)       │
 │                          │   │                         │
 │  └── style.css           │   │  └── app.js             │
 │     (Colors, Fonts,      │   │     (List of countries, │
 │      Dark Mode, spacing) │   │      reviews form,      │
 │                          │   │      search, & routing) │
 └──────────────────────────┘   └─────────────────────────┘
                ▲                           ▲
                └─────────────┬─────────────┘
                              │ (Bundles & runs everything) (not important)
 ┌────────────────────────────┴───────────────────────────┐
 │               CONFIGURATIONS (The Settings)            │
 │                                                        │
 │  ├── package.json      ──► List of code packages       │
 │  └── vite.config.ts    ──► Tells the server how to build│
 └────────────────────────────────────────────────────────┘

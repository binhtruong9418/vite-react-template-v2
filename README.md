src/
├── assets/                # Static assets (images, fonts)
│   ├── fonts/
│   ├── images/
│
├── components/            # UI Components (Atomic Design)
│   ├── common/            # Smallest reusable components (Button, Input, Label)
│   ├── forms/             # Components related to forms (Form, FormField)
│   ├── layout/            # Page layouts (AuthLayout, DashboardLayout)
│
├── lib/                   # Business logic and utilities
│   ├── constants/         # Global constants
│   ├── helpers/           # Utility functions
│   ├── hooks/             # Custom reusable hooks
│   ├── store/             # State management (Redux/Zustand)
│   ├── types/types.ts     # Shared TypeScript types and interfaces
│
├── pages/                 # Page components (LoginPage, DashboardPage)
│        ├── App.tsx       # Main app entry point
├── routes/                # Centralized app routing
│   ├── routes.tsx
│
├── services/              # API services (fetching data)
│   ├── products/          # Product API services
│   │   ├── queries.ts # React Query fetching
|   |   ├── keys.ts # Query keys
│   │   ├── mutations.ts   # React Query mutations
│   │   ├── api.ts         # API functions
│
├── styles/                # Global styles (CSS Modules, Tailwind, etc.)
│   ├── globals.css
│
├── index.tsx              # React root file
├── .env.local             # Environment variables
├── .gitignore
├── package.json

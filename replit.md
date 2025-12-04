# Orbtrix Space - Replit Configuration

## Overview

Orbtrix Space Private Limited is a premium aerospace website showcasing autonomous Earth observation satellites. The platform features a multi-page architecture with a clean, minimalist design inspired by SpaceX aesthetics. Built with React, TypeScript, Express, and PostgreSQL, the application emphasizes visual storytelling through cinematic satellite imagery and a futuristic white theme with teal-turquoise gradient accents.

The site presents three core products: Autonomous EO Satellite Bus, Rigel OS (satellite operating system), and Videra (coming soon satellite imagery platform). The application includes contact form functionality and waitlist management for the upcoming Videra product.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (multi-page navigation)
- TanStack Query for server state management and API caching

**UI Component Strategy**
- shadcn/ui component library (Radix UI primitives) for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme provider supporting light/dark modes (defaulting to light)
- Design system follows "New York" style with neutral base colors

**Page Structure**
- Multi-page application (not single-page scroll) with dedicated routes:
  - Home, About, Products, Solutions, Contact
  - Product detail pages: Satellite Bus, Rigel OS, Videra
- Layout component with sticky navbar and footer for consistent structure
- Custom parallax hero component for cinematic background effects
- Section reveal animations for progressive content disclosure

**Design Implementation**
- Premium minimalist aerospace aesthetic with white/light grey base
- Teal-turquoise gradient accents matching Orbtrix brand colors
- Full-width hero sections with high-resolution satellite imagery
- Sticky transparent navbar that adapts on scroll
- Active navigation links highlighted with teal underline

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server
- TypeScript for type safety across server code
- Custom logging middleware for request/response tracking
- Static file serving for production builds

**API Design**
- RESTful endpoints for contact submissions and waitlist management
- POST `/api/contact` - Submit contact form with validation
- GET `/api/contact` - Retrieve contact submissions (admin)
- POST `/api/waitlist` - Add email to Videra waitlist
- GET `/api/waitlist` - Retrieve waitlist entries
- Zod schema validation for all incoming data

**Data Layer**
- Drizzle ORM for type-safe database interactions
- PostgreSQL as the primary database (connection via DATABASE_URL)
- Schema definitions in shared directory for client/server consistency
- In-memory storage fallback (MemStorage) for development without database

**Database Schema**
- `users` table: Basic authentication structure (id, username, password)
- `contact_submissions` table: Contact form data (id, name, organization, email, message, created_at)
- `videra_waitlist` table: Email waitlist for Videra product (id, email, created_at)

### Data Storage Solutions

**ORM & Migrations**
- Drizzle Kit for schema migrations (output to `./migrations` directory)
- Schema-first approach with TypeScript types generated from database schema
- Drizzle-Zod integration for runtime validation matching database constraints

**Storage Interface Pattern**
- IStorage interface defines contract for data operations
- MemStorage implementation for in-memory development/testing
- Database storage implementation for production (via Drizzle ORM)
- Separation allows easy testing and database provider switching

### Authentication and Authorization

**Current State**
- User schema exists but authentication not fully implemented
- Basic user table structure (username/password) prepared for future auth
- No active session management or protected routes currently

**Prepared Infrastructure**
- Session middleware packages installed (connect-pg-simple, express-session)
- User creation methods in storage interface
- Foundation for passport-local authentication strategy

### External Dependencies

**UI Component Libraries**
- Radix UI primitives (@radix-ui/*) for accessible headless components
- Embla Carousel for image carousels
- Lucide React for consistent iconography
- Class Variance Authority (CVA) for variant-based component styling

**Form Management**
- React Hook Form for performant form state management
- Hookform Resolvers for Zod schema integration
- Client-side validation before API submission

**Styling & Theme**
- Tailwind CSS with custom configuration
- PostCSS for CSS processing
- CSS variables for theme customization (light/dark modes)
- Custom font stack: Space Grotesk, Source Serif 4, Space Mono

**Development Tools**
- Replit-specific plugins for development experience:
  - Runtime error modal overlay
  - Cartographer for code navigation
  - Development banner
- ESBuild for production server bundling
- TSX for TypeScript execution in development

**Database & ORM**
- PostgreSQL client (pg)
- Drizzle ORM with PostgreSQL dialect
- Connection pooling via pg package
- Environment-based database URL configuration

**Utilities**
- date-fns for date manipulation
- nanoid for unique ID generation
- zod for runtime type validation
- clsx and tailwind-merge for className management
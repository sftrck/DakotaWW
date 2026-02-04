# Dakota Worldwide Website - Product Requirements Document

## Original Problem Statement
Create a modern, professional website replica for Dakota Worldwide, a business consulting company specializing in market analysis, site location studies, and decision support software.

## What Currently Exists
A complete, multi-page, frontend-only React application for the Dakota Worldwide website has been built. It uses TailwindCSS and shadcn/ui components. The application is fully responsive and features a professional corporate design. All content has been migrated from the authentic WordPress backup.

## What's Been Implemented (December 2025)

### Content Migration Completed
- ✅ Extracted all authentic content from WordPress SQL backup (`dakotaww_com-backup.sql`)
- ✅ Updated mock.js with real company information, products, services, and contact details
- ✅ Integrated Bob Dylan quote with authentic context from original website
- ✅ Added real contact information for Elliott W. Olson (Chairman & CEO)
- ✅ Added Minneapolis office address (4801 West 81st Street, Suite 105, Minneapolis, MN 55437)
- ✅ Added authentic phone numbers (952-835-4505, Toll Free: 800-465-4505)
- ✅ Added real email (e.olson@dakotaww.com)

### Authentic Content Integrated
1. **Company Information**
   - Founded: 1975 (originally as Retail Systems)
   - Founder: Elliott W. Olson
   - Focus: Analysis of return and quantification of risk for capital investments with a spatial dimension

2. **Products (from original website)**
   - **Quintillion 4.50** - Decision Support System developed at McDonald's
   - **Locus Pro** - Supermarket site location system (since 1975)
   - **QSL** - Quick serve restaurant site location
   - **Octane** - Network planning for retail petroleum
   - **Shipping** - Postal & overnight delivery systems
   - **LocusPharm** - Drug store site location

3. **Services (from original website)**
   - Market Analysis (Site Location, Acquisition Analysis, Preferred Markets)
   - Consumer Research (Consumer View™, 800 Consumer View™, Image Wave™)
   - Strategic Planning
   - Mapping Services (Customer Origin Studies)
   - Demographic Information

4. **Data Products**
   - STI: PopStats (quarterly population estimates)
   - STI: LandScape
   - STI: WorkPlace
   - STI: Spending Patterns

5. **Industries Served**
   - Retailers, Manufacturers, Developers, Bankers, Health Care Providers
   - Petroleum, Restaurants, Pharmacy/Drug Stores, Grocery/Supermarkets
   - Banking, Mass Merchandising

6. **Key Personnel**
   - Elliott W. Olson - Chairman & CEO (Founder, 1975)
   - Carol Murphy - System Czar (since 1998, gravity modeling expert)

### Pages Updated
- ✅ Home - Authentic company description and Bob Dylan quote
- ✅ Services - All 5 service categories with authentic descriptions
- ✅ Products (Tools) - Quintillion, Locus Pro, and all specialized tools
- ✅ Data Solutions - Synergos Technologies partnership and data products
- ✅ Training - Training programs and certification info
- ✅ About - Company history, team, and industries served
- ✅ Contact - Real contact information and address
- ✅ Footer - Updated with authentic contact details

## Technical Architecture
```
/app
├── backend/          # FastAPI (placeholder - not yet implemented)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── QuoteComponent.jsx
│   │   ├── data/
│   │   │   └── mock.js        # All authentic content
│   │   └── pages/
│   │       ├── About.jsx
│   │       ├── Contact.jsx
│   │       ├── DataSolutions.jsx
│   │       ├── Home.jsx
│   │       ├── Services.jsx
│   │       ├── Tools.jsx
│   │       └── Training.jsx
│   └── public/
│       └── index.html
```

## Key Data Sources
- WordPress backup: `/app/wordpress_backup/dakotaww_com-backup.sql` (extracted from user-provided files)
- All content verified against original website data

## Current Status
- **Frontend**: ✅ Complete with authentic content
- **Backend**: Not yet implemented
- **Database**: Not yet implemented
- **Contact Form**: Frontend only (mocked submission)

## Prioritized Backlog

### P0 - High Priority (Ready for Implementation)
- Backend development (FastAPI + MongoDB) if needed for contact form functionality

### P1 - Medium Priority
- Add more news/press releases from original website
- Implement working contact form with backend

### P2 - Future Considerations
- Admin panel for content management
- Blog/news section
- User authentication (if needed)

## Notes
- All content is now authentic from the original Dakota Worldwide website
- No third-party (Emergent) branding present
- Bob Dylan quote integrated with authentic context
- McDonald's/Quintillion credential prominently featured
- Minneapolis address confirmed from original website

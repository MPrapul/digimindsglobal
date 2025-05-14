# DigiMindsGlobal Website
A modern, responsive website for DigiMindsGlobal, showcasing Web Design, B2B Lead Generation, Software Development, UI/UX Design, Social Media Management, and Digital Marketing services.

## Tech Stack Used
- Next.js 15
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Server Components
- Framer Motion
- Vercel Analytics

## Recent Updates
- Added "Industries We Serve" section featuring Banking & Finance, Food and Beverage, E-Commerce, Real Estate, Fashion & Lifestyle, Logistic Transport, Education, and Healthcare sectors with custom icons
- Modified "Trusted by Leading Organizations" section spacing for better UI flow
- Improved tab navigation in the Services section with dedicated tabs for Web Design, B2B Lead Generation & Social Media, Software Development & Testing, and UI/UX Design
- Enhanced card layouts with consistent heights using Tailwind's h-full property

## Getting Started
1. Clone the repository:
```bash
git clone https://github.com/digimindsglobal/digimindsglobal-website.git
cd digimindsglobal-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add any other required environment variables here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── marketing/          # Marketing pages
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog pages
│   │   ├── contact/        # Contact page
│   │   └── services/       # Services pages
│   │       ├── web-design/         # Web Design services
│   │       ├── lead-generation/    # B2B Lead Generation services
│   │       ├── software-development/ # Software Development services
│   │       ├── ux-design/          # UI/UX Design services
│   │       └── social-media/       # Social Media Management services
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── lib/                  # Utility functions
└── styles/               # Global styles

public/                   # Static assets
├── images/               # Images
│   ├── icons/            # Service icons
│   └── logos/            # Logo files
```

## Features

- Responsive design
- Dark mode support
- Server-side rendering
- SEO optimization
- Performance optimized
- Accessible components
- Modern UI with Shadcn UI
- Contact form
- Service showcase pages
- Animated components with Framer Motion
- Newsletter subscription
- Industry-specific showcase
- Client portfolio display

## Services Offered

- **Web Design & Development**
  - Custom Website Development
  - WordPress, Wix, Shopify, and E-commerce Solutions
  - Landing Page & Business Website Creation
  - SEO Optimization for Better Ranking
  - Responsive Design for All Devices
  - Website Maintenance & Support

- **B2B Lead Generation**
  - Targeted Lead Acquisition Strategies
  - Email & LinkedIn Outreach Campaigns
  - Data-Driven Lead Scoring
  - Maximizing Conversions with Smart Engagement
  - CRM Integration & Management
  - Lead Nurturing & Follow-up Automation

- **Software Development & Testing**
  - Custom Software Solutions
  - Mobile App Development (Android & iOS)
  - Enterprise Software & Automation Tools
  - Web Application Development
  - Quality Assurance & Testing
  - Software Maintenance & Support

- **UI/UX Design**
  - User-Friendly Website & App Designs
  - Wireframing & Prototyping
  - Interactive UI Elements
  - Enhancing User Experience with Modern Trends
  - Design Systems & Style Guides
  - Usability Testing & Optimization

- **Social Media Management & Digital Marketing**
  - Content Creation & Strategy
  - Social Media Advertising
  - Brand Engagement & Growth
  - SEO & Content Optimization
  - PPC & Paid Advertising Campaigns
  - Email Marketing Campaigns

## Industries We Serve
- Banking & Finance
- Food and Beverage
- E-Commerce
- Real Estate
- Fashion & Lifestyle
- Logistic Transport
- Education
- Healthcare

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

The site is configured for deployment on Vercel. Follow these steps to deploy:

1. Push the code to your GitHub repository
2. Connect your Vercel account to GitHub
3. Import the repository in Vercel
4. Configure the deployment settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Environment Variables: None required (static site)

For optimal Vercel deployment:
```
VERCEL=true
```

This will automatically apply production optimizations.

### Static Site Considerations

This is a static site version with no database or email dependencies. All forms will show success messages but won't actually send data anywhere. To add real functionality:

1. Add Supabase integration by updating the supabase.ts file with actual connection details
2. Add Resend integration by updating the resend.ts file with your API key

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

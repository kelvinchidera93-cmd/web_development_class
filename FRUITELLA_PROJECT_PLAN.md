# Fruitella Fruit Vendor Website - Project Plan

## Project Overview
A professional fruit vendor website for **Fruitella** featuring a landing page, about page, and contact page with modern, clean design.

---

## Project Structure

```
fruitella/
├── index.html              # Landing page
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   ├── style.css           # Global styles (navbar, footer, typography, spacing)
│   ├── index.css           # Landing page specific styles
│   ├── about.css           # About page specific styles
│   └── contact.css         # Contact page specific styles
├── js/
│   └── main.js             # Navigation, form handling, interactions
└── assets/
    ├── images/
    │   ├── hero-fruit-basket.jpg
    │   ├── apple.jpg
    │   ├── mango.jpg
    │   ├── lemon.jpg
    │   ├── pineapple.jpg
    │   └── oranges.jpg
    └── icons/
        ├── logo.svg
        ├── phone.svg
        ├── email.svg
        ├── location.svg
        └── social-icons/
```

---

## Page Layouts & Structure

### 1. Landing Page (index.html)

#### a) Navigation Bar
- **Position:** Fixed at top, centered over hero section
- **Content:** Logo (left), Nav Links (center), Social Icons (right optional)
- **Links:** Home | About | Contact
- **Styling:** Semi-transparent or solid with contrast to ensure readability
- **Behavior:** Smooth scroll to sections or page navigation

#### b) Hero Section
- **Background:** Full-width fruit basket image (high-quality)
- **Content Overlay:**
  - Store name: "Fruitella" (large, bold typography)
  - Tagline/Motto: "Fresh Fruits, Freshly Delivered" or similar
  - CTA Button: "Explore Our Fruits" (smooth scroll to fruit section)
- **Height:** 100vh (full viewport height)
- **Text Styling:** White/light text with subtle shadow or dark overlay for readability

#### c) Fruit Showcase Section
5 fruits displayed with **alternating layout pattern**:

**Fruit 1 - Apple**
- Layout: Image (Left) | Benefits (Right)
- Background: Left side = Apple image as background, Right side = Clean white
- Image: High-quality apple photo (4:3 or 16:9 aspect ratio)
- Benefits Text: 3-4 paragraphs about apple health benefits, nutrition facts

**Fruit 2 - Mango**
- Layout: Benefits (Left) | Image (Right)
- Background: Left side = Clean white, Right side = Mango image as background
- Benefits Text: 3-4 paragraphs about mango health benefits, nutrition facts
- Image: High-quality mango photo

**Fruit 3 - Lemon**
- Layout: Image (Left) | Benefits (Right)
- Background: Left side = Lemon image, Right side = Clean white
- Similar content structure

**Fruit 4 - Pineapple**
- Layout: Benefits (Left) | Image (Right)
- Background: Left side = Clean white, Right side = Pineapple image
- Similar content structure

**Fruit 5 - Oranges**
- Layout: Image (Left) | Benefits (Right)
- Background: Left side = Oranges image, Right side = Clean white
- Similar content structure

**Styling Guidelines for Fruit Sections:**
- Each section: 50/50 split (image | text) with flexbox
- Minimum height: 400-500px for visual impact
- Image backgrounds: Use background-size: cover, background-position: center
- Text side: Padding of 40-60px, proper line-height (1.6-1.8)
- Smooth transitions between sections (subtle shadows or spacing)
- Font sizes: Headings (24-28px), Body text (16-18px)
- Color palette: Natural greens, earth tones, warm colors matching the fruit

#### d) Footer
- **Background:** Dark neutral color (dark gray/charcoal, not black)
- **Layout:** 3-column or 4-column grid
  
**Column 1 - Quick Links**
- About Us
- Contact
- Privacy Policy
- Terms of Service

**Column 2 - Contact Info**
- Phone: +[Phone Number]
- Email: contact@fruitella.com
- Address: [Store Address]

**Column 3 - Social Media**
- Links to Instagram, Facebook, Twitter
- Icons or text links

**Column 4 - Map/Location**
- Embedded Google Map showing store location
- Or small location widget

**Bottom:** Copyright notice, year, company name

---

### 2. About Page (about.html)

#### Page Structure:

**a) Page Header/Introduction**
- Hero section similar to landing but with "About Fruitella" title
- Subtle background (solid color or light texture, NOT fruit basket)
- Brief introduction: 2-3 sentences about the business

**b) Our Story Section**
- Large section (600-800 words) describing:
  - How Fruitella started
  - Founder's passion for fresh fruits
  - Journey and milestones
  - Current operations
- Supported by 1-2 relevant images
- Layout: Text + image combinations

**c) Our Mission & Values**
- **Mission Statement:** Single focused statement
- **Core Values:** 2-4 values presented as cards or list items
  - Quality
  - Freshness
  - Sustainability
  - Customer Satisfaction
- Simple, clean layout with icons (optional)

**d) Why Choose Fruitella**
- 4-6 key points/benefits presented as cards or list items
  - Fresh Daily Sourcing
  - Premium Quality Selection
  - Competitive Pricing
  - Expert Fruit Selection
  - Reliable Delivery
  - Eco-Friendly Practices
- Use subtle background colors to distinguish from white space

**e) Team Section**
- Brief team introduction
- 3-4 team member cards with:
  - Photo
  - Name
  - Position
  - Brief bio (1-2 sentences)
- Clean card layout with subtle hover effects

**f) Testimonials/Customer Reviews**
- 3-4 customer testimonials
- Card layout with:
  - Quote
  - Customer name
  - Star rating
- Rotating background colors or simple styling

**g) Statistics Section**
- Visual representation (numbers/counters):
  - Years in Business
  - Fruits Delivered
  - Happy Customers
  - Daily Orders
- Use larger fonts and icons for visual appeal

**h) Call-to-Action Section**
- "Get Started" or "Order Now" button
- Links to contact page or shop

---

### 3. Contact Page (contact.html)

#### Page Structure:

**a) Page Header**
- "Contact Us" title
- Subtitle: "We'd love to hear from you"
- Subtle background (matching about page style)

**b) Two-Column Layout:**

**Left Column - Contact Form**
- Professional form with fields:
  - Full Name (required)
  - Email Address (required)
  - Phone Number (optional)
  - Subject (dropdown: General Inquiry, Order Issue, Feedback, Partnership)
  - Message (textarea, required)
  - Submit button
- Form styling:
  - Clean input fields with subtle borders
  - Proper spacing between fields
  - Clear labels
  - Input focus states (subtle color change)
  - Placeholder text for guidance
  - Validation messages

**Right Column - Contact Information**
- **Direct Contact:**
  - Phone: +[XX] XXX XXXX
  - Email: contact@fruitella.com
  - Hours: Monday-Saturday, 8 AM - 6 PM
  - Sunday: Closed

- **Address:**
  - Store Address (full)
  - Store Name: Fruitella Fruit Market

- **Follow Us:**
  - Social media links

**c) Map Section**
- Full-width embedded Google Map
- Shows store location
- Below the contact form section
- Interactive marker with store name/info

**d) Additional Information Section**
- FAQ or quick responses:
  - "How do I place an order?"
  - "What are your delivery times?"
  - "Do you offer wholesale pricing?"
  - "How do I report quality issues?"
- Each with brief answer (2-3 sentences)
- Expandable/collapsible (optional JavaScript)

**e) Newsletter Signup**
- Optional: Email signup for offers/updates
- Simple input field + subscribe button
- Encouraging message about offers/news

---

## Design Guidelines

### Typography
- **Headings:** Professional sans-serif (e.g., Inter, Poppins, Segoe UI)
- **Body Text:** Clean sans-serif, 16-18px for readability
- **Hierarchy:** Clear visual distinction between H1, H2, H3, body text

### Color Palette
- **Primary Colors:** 
  - Warm greens (for freshness): #2D5016, #4A7C2C
  - Warm oranges/yellows (for fruit): #E8963E, #F4A460
  - Neutral backgrounds: #FFFFFF, #F8F8F8
- **Secondary Colors:**
  - Dark text: #1A1A1A or #333333
  - Light dividers: #EEEEEE
  - Accent colors: #C71585 (optional, for CTAs)
- **Avoid:** Flat design colors, overly saturated colors, clashing combinations

### Spacing & Layout
- Use consistent padding/margins (8px, 16px, 24px, 32px, 48px, 64px)
- Mobile-first responsive design
- Content width: 1200px max-width for desktop
- Clean whitespace usage (don't overcrowd sections)

### Images & Visuals
- High-quality, professional product photography
- Consistent image sizing ratios
- Natural lighting in fruit images
- No stock photo watermarks
- Optimized for web (compressed but clear)

### Interactive Elements
- Subtle hover effects on buttons and links
- Smooth transitions (200-300ms)
- No jarring animations
- Focus states for accessibility
- Clear visual feedback for form interactions

### Professional Touches
- Consistent button styles (CTAs)
- Proper line-heights for text readability (1.6-1.8)
- Adequate whitespace between sections
- Professional footer design
- Accessible color contrast ratios
- Mobile-responsive across all breakpoints

---

## Content Specifications

### Fruit Benefits Content

**Apple**
- Rich in fiber and antioxidants
- Supports heart health and digestion
- Boosts immune system
- Low calorie, naturally sweet
- Contains quercetin for brain health

**Mango**
- "King of Fruits" - nutrient powerhouse
- Rich in vitamin C and vitamin A
- Aids digestion with natural enzymes
- Supports immune system
- Contains antioxidants that fight inflammation

**Lemon**
- Excellent source of vitamin C
- Aids digestion and detoxification
- Boosts metabolism
- Supports hydration when added to water
- Contains compounds that may improve heart health

**Pineapple**
- Contains bromelain enzyme for digestion
- Rich in vitamin C for immunity
- Anti-inflammatory properties
- Promotes bone health
- May aid post-workout recovery

**Oranges**
- Packed with vitamin C
- Rich in dietary fiber
- Supports cardiovascular health
- Aids collagen formation
- Natural energy boost without crash

---

## Development Notes

### Responsive Design Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Considerations
- Proper heading hierarchy (H1 → H6)
- Alt text for all images
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios (WCAG AA minimum)
- Focus states clearly visible

### Performance Optimization
- Compress all images
- Minify CSS and JavaScript
- Use semantic HTML
- Lazy load images if needed
- Use web fonts efficiently (limited typefaces)

---

## File Naming Conventions
- Use kebab-case for file names: `fruit-section.css`, `contact-form.js`
- Use semantic class names: `.fruit-showcase`, `.contact-form-container`
- Use BEM or similar CSS naming convention for clarity

---

## Next Steps
1. Create HTML structure files (index.html, about.html, contact.html)
2. Set up CSS files with base styles and variables
3. Create responsive navbar component
4. Implement landing page layout
5. Implement fruit showcase section with alternating layouts
6. Create and style footer
7. Build about page content
8. Build contact page with form and map
9. Add responsive design for mobile/tablet
10. Optimize images and test performance
11. Test accessibility and browser compatibility
12. Deploy and test live

---

**Total Estimated Content:**
- Landing Page: 1000-1500 words (fruit benefits)
- About Page: 1200-1800 words (story, values, team, testimonials)
- Contact Page: 400-600 words (form labels, faq content, contact info)


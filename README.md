# INTELIA Landing Page

A professional, minimalist landing page for INTELIA Consulting built with Bootstrap 5 and vanilla JavaScript.

## Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **High Performance**: Optimized loading, smooth animations
- **Professional Styling**: Minimalist design with attention to detail
- **Scroll Animations**: AOS library for engaging scroll reveals
- **Contact Form**: Functional form with validation
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Sections

1. **Hero** - Eye-catching hero section with logo and CTA
2. **Services** - Four service cards with icons
3. **About** - Expertise and differentiators
4. **Contact** - Contact form and call-to-action
5. **Footer** - Quick links and contact info

## Technology Stack

- **HTML5** - Semantic markup
- **Bootstrap 5** - Responsive grid and components
- **CSS3** - Custom styling and animations
- **Vanilla JavaScript** - Form validation and interactivity
- **AOS.js** - Scroll animation library

## File Structure

```
website/
├── index.html          # Main HTML file
├── css/
│   └── custom.css      # Custom styling
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   └── logo.jpeg       # Company logo
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Getting Started

### Local Development

1. Clone or download the repository
2. Open `index.html` in your browser
3. No build process or dependencies needed!

### Using a Local Server (Recommended)

For better development experience and to avoid CORS issues:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (with http-server):**
```bash
npx http-server
```

Then visit: `http://localhost:8000`

## Deployment

### GitHub Pages

1. Create a GitHub repository named `username.github.io`
2. Clone the repository locally
3. Copy all files into the repository
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: INTELIA landing page"
   git push origin main
   ```
5. Your site will be live at `https://username.github.io`

### Other Hosting Options

- **Netlify**: Drag and drop deployment, free tier available
- **Vercel**: Optimized for performance
- **Any traditional web host**: Upload files via FTP

## Customization

### Colors

Edit the CSS variables in `css/custom.css`:

```css
:root {
    --primary-blue-dark: #2E5084;
    --primary-blue: #4472A8;
    --secondary-blue-light: #B8CDE6;
    --neutral-background: #F5F7FA;
    --text-dark: #333333;
    --text-light: #666666;
}
```

### Content

Edit sections in `index.html`:
- Update service descriptions
- Modify about section text
- Customize footer information
- Change contact email

### Animations

AOS animations are configured in `js/script.js`. Adjust duration and easing:

```javascript
AOS.init({
    duration: 800,      // Animation duration in ms
    easing: 'ease-in-out',
    once: true,
    offset: 100
});
```

## Form Submission

Currently, the form displays a success message but doesn't send data anywhere. To implement email notifications, consider:

1. **Formspree** - Add your form action attribute
2. **Netlify Forms** - Deploy on Netlify and enable form handling
3. **Custom Backend** - Implement server-side handling

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Page Load: < 2 seconds
- Lightweight: ~50KB total (no build process)
- SEO Friendly: Semantic HTML, proper meta tags

## Future Enhancements

- [ ] Blog/Resources section
- [ ] Case studies/Portfolio
- [ ] Team member profiles
- [ ] Email integration for contact form
- [ ] Newsletter signup
- [ ] Dark mode toggle
- [ ] Multi-language support

## License

© 2026 INTELIA. All rights reserved.

## Support

For questions or issues, contact: hello@intelia.com

---

**Last Updated**: March 2026

# AspireNet Website

A modern, responsive website for AspireNet - Powering Business Efficiency with AI Agents.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized CSS and JavaScript for quick page loads
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Interactive Elements**: Hover effects, smooth scrolling, and animated sections
- **Calendly Integration**: Direct booking functionality through Calendly (fahadmughal5415@gmail.com)
- **LinkedIn Integration**: "Get in Touch" button links to your LinkedIn profile (https://www.linkedin.com/in/fahad-mughal54/)
## Structure

```
AspireNet_website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/
│       └── AspireNetlogo.png # Company logo
├── README.md               # This file
└── website_plan.md         # Design and structure documentation
```

## Deployment to GitHub Pages

1. **Create a new repository** on GitHub (e.g., `aspirenet-website`)

2. **Upload files** to the repository:
   - Upload all files maintaining the folder structure
   - Ensure `index.html` is in the root directory

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your website**:
   - Your site will be available at: `https://[username].github.io/[repository-name]`
   - It may take a few minutes to deploy

## Local Development

To run locally:
1. Open `index.html` in a web browser
2. Or use a local server like Live Server in VS Code

## Customization

### Colors
The main color scheme uses:
- Primary Green: `#4CAF50`
- Dark Background: `#1a1a1a`
- Light Background: `#f8f9fa`
- Text: `#333333`

### Fonts
Uses Inter font family from Google Fonts for modern, clean typography.

### Content Updates
All content can be updated directly in `index.html`. The structure follows the original reference design from aiworkshop.me but with AspireNet branding and content.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images
- Minified CSS and JavaScript (can be further optimized for production)
- Efficient animations using CSS transforms
- Responsive images and layouts



## Calendly Integration

The "Book A Call" buttons throughout the website are integrated with Calendly booking system:
- **Calendly URL**: https://calendly.com/fahadmughal5415
- **Email**: fahadmughal5415@gmail.com
- **Functionality**: Opens Calendly booking page in a new tab when clicked

To update the Calendly integration:
1. Edit `assets/js/script.js`
2. Find the line: `window.open('https://calendly.com/fahadmughal5415', '_blank');`
3. Replace with your Calendly URL


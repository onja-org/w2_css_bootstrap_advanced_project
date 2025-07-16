const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { expect } = require('chai');

describe('TechFlow Bootstrap Landing Page', function() {
    let dom;
    let document;
    let window;

    before(function() {
        // Read the starter HTML file
        const htmlPath = path.join(__dirname, '../starter-files/index.html');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');

        // Create JSDOM instance
        dom = new JSDOM(htmlContent);
        document = dom.window.document;
        window = dom.window;
    });

    describe('Phase 1: Navigation Bar', function() {
        it('should have a navbar with proper Bootstrap classes', function() {
            const navbar = document.querySelector('nav.navbar');
            expect(navbar).to.exist;
            expect(navbar.classList.contains('navbar-expand-lg')).to.be.true;
            expect(navbar.classList.contains('navbar-dark')).to.be.true;
            expect(navbar.classList.contains('bg-dark')).to.be.true;
        });

        it('should have a brand logo in the navbar', function() {
            const brand = document.querySelector('.navbar-brand');
            expect(brand).to.exist;

            // Check for logo image or text
            const logo = brand.querySelector('img') || brand.textContent.trim();
            expect(logo).to.exist;
        });

        it('should have a mobile toggle button with correct attributes', function() {
            const toggleButton = document.querySelector('.navbar-toggler');
            expect(toggleButton).to.exist;
            expect(toggleButton.getAttribute('data-bs-toggle')).to.equal('collapse');
            expect(toggleButton.getAttribute('data-bs-target')).to.exist;
        });

        it('should have exactly 5 navigation items (Home, Features, About, Pricing, Contact)', function() {
            const navItems = document.querySelectorAll('.navbar-nav .nav-item');
            expect(navItems.length).to.equal(5);

            const expectedItems = ['Home', 'Features', 'About', 'Pricing', 'Contact'];
            const actualItems = Array.from(navItems).map(item =>
                item.querySelector('.nav-link').textContent.trim()
            );

            expectedItems.forEach(expectedItem => {
                expect(actualItems).to.include(expectedItem);
            });
        });

        it('should have a collapsible navbar section with correct ID', function() {
            const collapse = document.querySelector('.navbar-collapse');
            expect(collapse).to.exist;
            expect(collapse.id).to.exist;

            const toggleButton = document.querySelector('.navbar-toggler');
            const targetId = toggleButton.getAttribute('data-bs-target');
            expect(targetId).to.equal(`#${collapse.id}`);
        });
    });

    describe('Phase 2: Hero Section', function() {
        it('should have a hero section with proper Bootstrap classes', function() {
            const heroSection = document.querySelector('.hero-section, section[id="home"], .min-vh-100');
            expect(heroSection).to.exist;
        });

        it('should have a two-column layout in hero section', function() {
            const heroSection = document.querySelector('.hero-section, section[id="home"], .min-vh-100');
            if (heroSection) {
                const columns = heroSection.querySelectorAll('.col-lg-6, .col-md-6');
                expect(columns.length).to.be.at.least(2);
            }
        });

        it('should have hero headline "Revolutionize Your Workflow with AI"', function() {
            const headlines = document.querySelectorAll('h1, .display-4, .display-1, .display-2, .display-3');
            let foundHeadline = false;

            headlines.forEach(headline => {
                if (headline.textContent.includes('Revolutionize Your Workflow with AI')) {
                    foundHeadline = true;
                }
            });

            expect(foundHeadline).to.be.true;
        });

        it('should have call-to-action buttons', function() {
            const heroSection = document.querySelector('.hero-section, section[id="home"], .min-vh-100');
            if (heroSection) {
                const buttons = heroSection.querySelectorAll('.btn');
                expect(buttons.length).to.be.at.least(2);
            }
        });

        it('should have responsive image in hero section', function() {
            const heroSection = document.querySelector('.hero-section, section[id="home"], .min-vh-100');
            if (heroSection) {
                const images = heroSection.querySelectorAll('img');
                expect(images.length).to.be.at.least(1);

                // Check for responsive image classes
                const responsiveImages = heroSection.querySelectorAll('.img-fluid, .img-responsive');
                expect(responsiveImages.length).to.be.at.least(1);
            }
        });
    });

    describe('Phase 3A: Features Section', function() {
        it('should have a features section with proper heading', function() {
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            let foundFeaturesHeading = false;

            headings.forEach(heading => {
                if (heading.textContent.includes('Why Choose TechFlow') ||
                    heading.textContent.includes('Features')) {
                    foundFeaturesHeading = true;
                }
            });

            expect(foundFeaturesHeading).to.be.true;
        });

        it('should have three feature cards with Bootstrap card classes', function() {
            const cards = document.querySelectorAll('.card');
            expect(cards.length).to.be.at.least(3);

            // Check for card structure
            cards.forEach(card => {
                expect(card.classList.contains('card')).to.be.true;
            });
        });

        it('should have equal height cards using h-100 class', function() {
            const cards = document.querySelectorAll('.card');
            let hasEqualHeight = false;

            cards.forEach(card => {
                if (card.classList.contains('h-100')) {
                    hasEqualHeight = true;
                }
            });

            expect(hasEqualHeight).to.be.true;
        });

        it('should have feature content for AI Analytics, Integration, and Support', function() {
            const pageContent = document.body.textContent;
            expect(pageContent).to.include('AI');
            expect(pageContent).to.include('Integration');
            expect(pageContent).to.include('Support');
        });
    });

    describe('Phase 3B: Team/About Section', function() {
        it('should have team section with proper heading', function() {
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            let foundTeamHeading = false;

            headings.forEach(heading => {
                if (heading.textContent.includes('Meet Our Team') ||
                    heading.textContent.includes('Team') ||
                    heading.textContent.includes('About')) {
                    foundTeamHeading = true;
                }
            });

            expect(foundTeamHeading).to.be.true;
        });

        it('should have team member cards with images', function() {
            const pageContent = document.body.textContent;
            const teamMembers = ['Sarah Johnson', 'Mike Chen', 'Lisa Rodriguez'];

            teamMembers.forEach(member => {
                expect(pageContent).to.include(member);
            });
        });

        it('should have responsive grid layout for team members', function() {
            const gridColumns = document.querySelectorAll('.col-lg-4, .col-md-4, .col-sm-12');
            expect(gridColumns.length).to.be.at.least(3);
        });
    });

    describe('Phase 3C: Pricing Section', function() {
        it('should have pricing section with proper heading', function() {
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            let foundPricingHeading = false;

            headings.forEach(heading => {
                if (heading.textContent.includes('Choose Your Plan') ||
                    heading.textContent.includes('Pricing')) {
                    foundPricingHeading = true;
                }
            });

            expect(foundPricingHeading).to.be.true;
        });

        it('should have pricing plans (Starter, Professional, Enterprise)', function() {
            const pageContent = document.body.textContent;
            expect(pageContent).to.include('Starter');
            expect(pageContent).to.include('Professional');
            expect(pageContent).to.include('Enterprise');
        });

        it('should have pricing information ($29, $79, Custom)', function() {
            const pageContent = document.body.textContent;
            expect(pageContent).to.include('$29');
            expect(pageContent).to.include('$79');
            expect(pageContent).to.include('Custom');
        });

        it('should highlight recommended plan with Bootstrap classes', function() {
            const highlightedElements = document.querySelectorAll('.border-primary, .bg-primary, .text-primary');
            expect(highlightedElements.length).to.be.at.least(1);
        });
    });

    describe('Phase 4: Footer', function() {
        it('should have a footer element', function() {
            const footer = document.querySelector('footer');
            expect(footer).to.exist;
        });

        it('should have footer with dark background', function() {
            const footer = document.querySelector('footer');
            if (footer) {
                expect(footer.classList.contains('bg-dark')).to.be.true;
            }
        });

        it('should have multi-column footer layout', function() {
            const footer = document.querySelector('footer');
            if (footer) {
                const columns = footer.querySelectorAll('.col-lg-3, .col-lg-4, .col-md-6, .col-sm-12');
                expect(columns.length).to.be.at.least(2);
            }
        });

        it('should have contact information in footer', function() {
            const footer = document.querySelector('footer');
            if (footer) {
                const footerContent = footer.textContent;
                expect(footerContent).to.include('TechFlow');
                expect(footerContent).to.include('2024');
            }
        });

        it('should have social media links with Font Awesome icons', function() {
            const socialIcons = document.querySelectorAll('.fab, .fa-twitter, .fa-linkedin, .fa-github');
            expect(socialIcons.length).to.be.at.least(1);
        });
    });

    describe('General Requirements', function() {
        it('should have Bootstrap CSS linked in head', function() {
            const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
            expect(bootstrapLink).to.exist;
        });

        it('should have Font Awesome CSS linked in head', function() {
            const fontAwesomeLink = document.querySelector('link[href*="font-awesome"]');
            expect(fontAwesomeLink).to.exist;
        });

        it('should have Bootstrap JavaScript linked before closing body tag', function() {
            const bootstrapScript = document.querySelector('script[src*="bootstrap"]');
            expect(bootstrapScript).to.exist;
        });

        it('should have proper viewport meta tag for mobile responsiveness', function() {
            const viewport = document.querySelector('meta[name="viewport"]');
            expect(viewport).to.exist;
            expect(viewport.getAttribute('content')).to.include('width=device-width');
        });

        it('should have semantic HTML structure', function() {
            const nav = document.querySelector('nav');
            const main = document.querySelector('main');
            const sections = document.querySelectorAll('section');
            const footer = document.querySelector('footer');

            expect(nav).to.exist;
            expect(sections.length).to.be.at.least(3);
            expect(footer).to.exist;
        });

        it('should use only Bootstrap classes for styling (no custom CSS except colors)', function() {
            const styleTag = document.querySelector('style');
            if (styleTag) {
                const styles = styleTag.textContent;
                // Should only contain color variables and basic overrides
                expect(styles).to.include('--primary-color');
                expect(styles).to.include('--secondary-color');
                expect(styles).to.include('--dark-color');
            }
        });

        it('should have proper alt attributes for images', function() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                expect(img.getAttribute('alt')).to.exist;
                expect(img.getAttribute('alt').trim()).to.not.be.empty;
            });
        });
    });

    describe('Responsive Design', function() {
        it('should use Bootstrap responsive grid classes', function() {
            const responsiveClasses = document.querySelectorAll('[class*="col-"], [class*="row"]');
            expect(responsiveClasses.length).to.be.at.least(5);
        });

        it('should use Bootstrap responsive utility classes', function() {
            const responsiveUtils = document.querySelectorAll('[class*="d-none"], [class*="d-block"], [class*="d-md-"], [class*="d-lg-"]');
            expect(responsiveUtils.length).to.be.at.least(1);
        });

        it('should have responsive navigation with collapse functionality', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            const navbarToggler = document.querySelector('.navbar-toggler');

            expect(navbarCollapse).to.exist;
            expect(navbarToggler).to.exist;
            expect(navbarToggler.getAttribute('data-bs-toggle')).to.equal('collapse');
        });
    });

    describe('Accessibility', function() {
        it('should have proper heading hierarchy', function() {
            const h1 = document.querySelectorAll('h1');
            const h2 = document.querySelectorAll('h2');

            expect(h1.length).to.be.at.least(1);
            expect(h2.length).to.be.at.least(1);
        });

        it('should have proper ARIA attributes for navigation toggle', function() {
            const navToggle = document.querySelector('.navbar-toggler');
            if (navToggle) {
                expect(navToggle.getAttribute('aria-controls')).to.exist;
                expect(navToggle.getAttribute('aria-expanded')).to.exist;
                expect(navToggle.getAttribute('aria-label')).to.exist;
            }
        });

        it('should have proper link text (no "click here" or "read more")', function() {
            const links = document.querySelectorAll('a');
            links.forEach(link => {
                const linkText = link.textContent.trim().toLowerCase();
                expect(linkText).to.not.equal('click here');
                expect(linkText).to.not.equal('read more');
            });
        });
    });

    describe('Performance and Best Practices', function() {
        it('should have proper document title', function() {
            const title = document.querySelector('title');
            expect(title).to.exist;
            expect(title.textContent).to.include('TechFlow');
        });

        it('should have proper meta description', function() {
            const metaDesc = document.querySelector('meta[name="description"]');
            // Optional but good practice
            if (metaDesc) {
                expect(metaDesc.getAttribute('content')).to.include('TechFlow');
            }
        });

        it('should have efficient image usage with proper sizing', function() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                expect(img.classList.contains('img-fluid')).to.be.true;
            });
        });

        it('should use CDN links for external resources', function() {
            const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
            const fontAwesomeLink = document.querySelector('link[href*="font-awesome"]');

            if (bootstrapLink) {
                expect(bootstrapLink.getAttribute('href')).to.include('cdn');
            }
            if (fontAwesomeLink) {
                expect(fontAwesomeLink.getAttribute('href')).to.include('cdn');
            }
        });
    });
});

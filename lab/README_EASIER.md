# TechFlow Landing Page - Bootstrap Lab

Welcome to the Bootstrap Lab! In this project, you'll build a professional landing page for **TechFlow**, an AI startup. This lab is designed for students with 2-3 days of Bootstrap experience and provides lots of code snippets to help you succeed.

## 🚀 What You'll Build

By the end of this lab, you'll have created a responsive startup landing page featuring:
- Professional navigation with mobile toggle
- Eye-catching hero section with call-to-action
- Feature showcase with cards
- Team member profiles
- Pricing table
- Professional footer

## 📋 Prerequisites

- Basic HTML structure knowledge
- Understanding of CSS concepts
- 2-3 days of Bootstrap experience

## 🎯 Learning Objectives

After completing this lab, you will be able to:
- Use Bootstrap's navigation component
- Create responsive layouts with Bootstrap's grid system
- Implement Bootstrap cards effectively
- Use Bootstrap utility classes for spacing and styling
- Structure a professional website with minimal custom CSS

## 🏗️ Project Structure

```
/
├── starter-files/
│   ├── index.html          # Your working file (mostly empty)
│   └── content.txt         # All text content
├── assets/
│   └── images/             # All project images
└── solution/               # Complete solution (for reference)
```

## 🎨 Design System

**Colors (already defined in starter CSS):**
- Primary: `#0066cc`
- Secondary: `#00cccc`
- Dark: `#1a1a1a`

**Important:** You don't need to write any CSS! Everything is done with Bootstrap classes.

## 🛠️ Getting Started

1. Open `starter-files/index.html` in your code editor
2. Open the file in your browser
3. Follow the phases below - each builds on the previous one

---

## 📝 Phase 1: Navigation Bar

### Your Mission
Create a responsive navigation bar using Bootstrap's navbar component.

### Step 1: Basic Navbar Structure
Copy this code and paste it right after the `<body>` tag:

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <!-- Logo goes here -->

    <!-- Mobile toggle button goes here -->

    <!-- Navigation links go here -->
  </div>
</nav>
```

**Bootstrap Classes Explained:**
- `navbar` - Makes it a Bootstrap navigation bar
- `navbar-expand-lg` - Expands to horizontal layout on large screens (768px+)
- `navbar-dark bg-dark` - Dark theme with white text
- `container` - Centers content with responsive margins

### Step 2: Add the Logo
Replace `<!-- Logo goes here -->` with:

```html
<a class="navbar-brand" href="#">
  <img src="../../assets/images/logo-light.svg" alt="TechFlow logo" height="40" class="d-inline-block align-top img-fluid">
</a>
```

### Step 3: Add Mobile Toggle Button
Replace `<!-- Mobile toggle button goes here -->` with:

```html
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
```

**Key Points:**
- `data-bs-toggle="collapse"` - Tells Bootstrap this button controls a collapsible element
- `data-bs-target="#navbarNav"` - Points to the element with ID "navbarNav"

### Step 4: Add Navigation Links
Replace `<!-- Navigation links go here -->` with:

```html
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ms-auto">
    <li class="nav-item">
      <a class="nav-link active" href="#home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#features">Features</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#about">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#pricing">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#contact">Contact</a>
    </li>
  </ul>
</div>
```

**Bootstrap Classes Explained:**
- `collapse navbar-collapse` - Makes this section collapsible on mobile
- `navbar-nav` - Styles the list as navbar navigation
- `ms-auto` - Pushes navigation to the right (margin-start: auto)
- `nav-item` and `nav-link` - Bootstrap classes for navigation items

### 📚 Reference
- [Bootstrap Navbar Documentation](https://getbootstrap.com/docs/5.3/components/navbar/)

### ✅ Test Your Work
- Does the navbar show horizontally on desktop?
- Does it collapse to a hamburger menu on mobile (try resizing your browser)?
- Do all links work?

---

## 📝 Phase 2: Hero Section

### Your Mission
Create a full-height hero section with text on the left and an image on the right.

### Step 1: Hero Section Container
Add this after your `</nav>` closing tag:

```html
<section id="home" class="hero-section min-vh-100 d-flex align-items-center text-white"
    style="background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);" >
  <div class="container-fluid">
    <!-- Grid row goes here -->
  </div>
</section>
```

**Bootstrap Classes Explained:**
- `min-vh-100` - Minimum height of 100% of viewport height
- `d-flex align-items-center` - Uses flexbox to center content vertically
- `text-white` - White text color
- `container-fluid` - Full-width container (no side margins)

### Step 2: Create Two-Column Layout
Replace `<!-- Grid row goes here -->` with:

```html
<div class="row align-items-center">
  <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
    <!-- Text content goes here -->
  </div>
  <div class="col-lg-6 col-md-12 text-center">
    <!-- Image goes here -->
  </div>
</div>
```

**Bootstrap Classes Explained:**
- `row` - Creates a horizontal row
- `col-lg-6` - Takes up 6/12 columns (50%) on large screens
- `col-md-12` - Takes up full width on medium and smaller screens
- `mb-4 mb-lg-0` - Margin bottom on small screens, no margin on large screens

### Step 3: Add Text Content
Replace `<!-- Text content goes here -->` with:

```html
<div class="px-4 px-lg-5">
  <h1 class="display-4 fw-bold mb-4">Revolutionize Your Workflow with AI</h1>
  <p class="lead mb-4">
    TechFlow's cutting-edge AI solutions streamline your processes, boost productivity, and drive innovation across your entire organization.
  </p>
  <div class="d-flex flex-column flex-sm-row gap-3">
    <a href="#features" class="btn btn-light btn-lg px-4">Get Started</a>
    <a href="#about" class="btn btn-outline-light btn-lg px-4">Learn More</a>
  </div>
</div>
```

**Bootstrap Classes Explained:**
- `display-4` - Large display heading
- `fw-bold` - Font weight bold
- `lead` - Makes paragraph text larger and more prominent
- `btn btn-light btn-lg` - Large light-colored button
- `btn-outline-light` - Button with white outline and transparent background
- `d-flex flex-column flex-sm-row gap-3` - Stacks buttons vertically on mobile, horizontally on larger screens

### Step 4: Add Hero Image
Replace `<!-- Image goes here -->` with:

```html
<img src="../../assets/images/hero-bg.svg" alt="Team collaborating with AI technology" class="img-fluid" style="max-height: 500px">
```

**Bootstrap Classes Explained:**
- `img-fluid` - Makes image responsive (scales with container)

### 📚 Reference
- [Bootstrap Grid System](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Bootstrap Buttons](https://getbootstrap.com/docs/5.3/components/buttons/)
- [Bootstrap Typography](https://getbootstrap.com/docs/5.3/content/typography/)

### ✅ Test Your Work
- Does the hero take up the full screen height?
- Do the columns stack on mobile and sit side-by-side on desktop?
- Are both buttons properly styled?

---

## 📝 Phase 3: Features Section

### Your Mission
Create a section with three feature cards using Bootstrap's card component.

### Step 1: Features Section Container
Add this after your hero section:

```html
<section id="features" class="py-5">
  <div class="container">
    <!-- Section header goes here -->

    <!-- Cards row goes here -->
  </div>
</section>
```

**Bootstrap Classes Explained:**
- `py-5` - Large padding on top and bottom (5 units)
- `container` - Responsive container with automatic margins

### Step 2: Add Section Header
Replace `<!-- Section header goes here -->` with:

```html
<div class="row mb-5">
  <div class="col-12 text-center">
    <h2 class="display-5 fw-bold mb-3">Why Choose TechFlow?</h2>
    <p class="lead text-muted">Discover how our AI-powered solutions can transform your business</p>
  </div>
</div>
```

### Step 3: Create Cards Row
Replace `<!-- Cards row goes here -->` with:

```html
<div class="row g-4">
  <div class="col-lg-4 col-md-6">
    <!-- Card 1 goes here -->
  </div>
  <div class="col-lg-4 col-md-6">
    <!-- Card 2 goes here -->
  </div>
  <div class="col-lg-4 col-md-6">
    <!-- Card 3 goes here -->
  </div>
</div>
```

**Bootstrap Classes Explained:**
- `g-4` - Adds gutters (spacing) between columns
- `col-lg-4` - 3 columns on large screens (4/12 each)
- `col-md-6` - 2 columns on medium screens (6/12 each)

### Step 4: Add First Feature Card
Replace `<!-- Card 1 goes here -->` with:

```html
<div class="card h-100 shadow-sm border-0">
  <div class="card-body text-center p-4">
    <div class="mb-4">
      <img src="../../assets/images/feature-1.svg" alt="Analytics dashboard chart" class="img-fluid" style="height: 80px">
    </div>
    <h5 class="card-title text-primary fw-bold">AI-Powered Analytics</h5>
    <p class="card-text">
      Get deep insights into your workflow with advanced AI analytics that identify bottlenecks and optimization opportunities in real-time.
    </p>
  </div>
</div>
```

### Step 5: Add Second Feature Card
Replace `<!-- Card 2 goes here -->` with:

```html
<div class="card h-100 shadow-sm border-0">
  <div class="card-body text-center p-4">
    <div class="mb-4">
      <img src="../../assets/images/feature-2.svg" alt="Integration connection diagram" class="img-fluid" style="height: 80px">
    </div>
    <h5 class="card-title text-primary fw-bold">Seamless Integration</h5>
    <p class="card-text">
      Connect with your existing tools and platforms effortlessly. Our API-first approach ensures smooth integration with minimal disruption.
    </p>
  </div>
</div>
```

### Step 6: Add Third Feature Card
Replace `<!-- Card 3 goes here -->` with:

```html
<div class="card h-100 shadow-sm border-0">
  <div class="card-body text-center p-4">
    <div class="mb-4">
      <img src="../../assets/images/feature-3.svg" alt="Customer support headset" class="img-fluid" style="height: 80px">
    </div>
    <h5 class="card-title text-primary fw-bold">24/7 Expert Support</h5>
    <p class="card-text">
      Our dedicated support team is available around the clock to help you maximize your productivity and resolve any issues quickly.
    </p>
  </div>
</div>
```

**Bootstrap Classes Explained:**
- `card` - Bootstrap card component
- `h-100` - Height 100% (makes all cards same height)
- `shadow-sm` - Small shadow effect
- `border-0` - Removes default border
- `card-body` - Main content area of card
- `card-title` and `card-text` - Bootstrap typography classes for cards

### 📚 Reference
- [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/)

### ✅ Test Your Work
- Do the cards display in 3 columns on desktop?
- Do they stack properly on mobile?
- Are all cards the same height?

---

## 📝 Phase 4: Team Section

### Your Mission
Create a team section with three team member cards.

### Add This Complete Section
Add this after your features section:

```html
<section id="about" class="py-5 bg-light">
  <div class="container">
    <div class="row mb-5">
      <div class="col-12 text-center">
        <h2 class="display-5 fw-bold mb-3">Meet Our Team</h2>
        <p class="lead text-muted">The brilliant minds behind TechFlow's innovation</p>
      </div>
    </div>
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <div class="card h-100 shadow-sm border-0">
          <img src="../../assets/images/team-1.svg" alt="Sarah Johnson, CEO of TechFlow" class="card-img-top img-fluid">
          <div class="card-body text-center p-4">
            <h5 class="card-title text-primary fw-bold">Sarah Johnson</h5>
            <p class="text-muted mb-3">CEO & Founder</p>
            <p class="card-text">
              Former Google executive with 15 years of experience in AI and machine learning. Sarah leads our vision for the future of work.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card h-100 shadow-sm border-0">
          <img src="../../assets/images/team-2.svg" alt="Mike Chen, CTO of TechFlow" class="card-img-top img-fluid">
          <div class="card-body text-center p-4">
            <h5 class="card-title text-primary fw-bold">Mike Chen</h5>
            <p class="text-muted mb-3">Chief Technology Officer</p>
            <p class="card-text">
              MIT graduate and former Tesla engineer. Mike oversees our technical architecture and ensures our platform scales globally.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card h-100 shadow-sm border-0">
          <img src="../../assets/images/team-3.svg" alt="Lisa Rodriguez, Head of Design at TechFlow" class="card-img-top img-fluid">
          <div class="card-body text-center p-4">
            <h5 class="card-title text-primary fw-bold">Lisa Rodriguez</h5>
            <p class="text-muted mb-3">Head of Design</p>
            <p class="card-text">
              Award-winning UX designer from Apple. Lisa crafts intuitive experiences that make complex AI tools accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**New Bootstrap Classes:**
- `bg-light` - Light gray background color
- `card-img-top` - Image that sits at the top of a card
- `text-muted` - Gray text color

---

## 📝 Phase 5: Pricing Section

### Your Mission
Create a pricing section with three pricing plans, highlighting the middle one as "most popular."

### Step 1: Pricing Section Container
Add this after your team section:

```html
<section id="pricing" class="py-5">
  <div class="container">
    <!-- Section header goes here -->

    <!-- Pricing cards row goes here -->
  </div>
</section>
```

### Step 2: Add Section Header
Replace `<!-- Section header goes here -->` with:

```html
<div class="row mb-5">
  <div class="col-12 text-center">
    <h2 class="display-5 fw-bold mb-3">Choose Your Plan</h2>
    <p class="lead text-muted">Select the perfect plan for your organization's needs</p>
  </div>
</div>
```

### Step 3: Create Pricing Cards Row
Replace `<!-- Pricing cards row goes here -->` with:

```html
<div class="row g-4 justify-content-center">
  <div class="col-lg-4 col-md-6">
    <!-- Starter plan goes here -->
  </div>
  <div class="col-lg-4 col-md-6">
    <!-- Professional plan goes here -->
  </div>
  <div class="col-lg-4 col-md-6">
    <!-- Enterprise plan goes here -->
  </div>
</div>
```

### Step 4: Add Starter Plan
Replace `<!-- Starter plan goes here -->` with:

```html
<div class="card h-100 shadow-sm border-0">
  <div class="card-body text-center p-4">
    <h5 class="card-title text-primary fw-bold">Starter</h5>
    <div class="mb-4">
      <span class="display-4 fw-bold text-primary">$29</span>
      <span class="text-muted">/month</span>
    </div>
    <ul class="list-unstyled mb-4">
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Up to 5 team members</li>
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Basic analytics</li>
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Email support</li>
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>10GB storage</li>
    </ul>
    <button class="btn btn-outline-primary btn-lg w-100">Start Free Trial</button>
  </div>
</div>
```

### Step 5: Add Professional Plan (Most Popular)
Replace `<!-- Professional plan goes here -->` with:

```html
<div class="card h-100 shadow border-primary position-relative">
  <div class="position-absolute top-0 start-50 translate-middle">
    <span class="badge bg-primary px-3 py-2">Most Popular</span>
  </div>
  <div class="card-body text-center p-4">
    <h5 class="card-title text-primary fw-bold">Professional</h5>
    <div class="mb-4">
      <span class="display-4 fw-bold text-primary">$79</span>
      <span class="text-muted">/month</span>
    </div>
    <ul class="list-unstyled mb-4">
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Up to 25 team members</li>
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Advanced AI analytics</li>
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Priority support</li>
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>100GB storage</li>
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Custom integrations</li>
    </ul>
    <button class="btn btn-primary btn-lg w-100">Get Started</button>
  </div>
</div>
```

### Step 6: Add Enterprise Plan
Replace `<!-- Enterprise plan goes here -->` with:

```html
<div class="card h-100 shadow-sm border-0">
  <div class="card-body text-center p-4">
    <h5 class="card-title text-primary fw-bold">Enterprise</h5>
    <div class="mb-4">
      <span class="display-4 fw-bold text-primary">Custom</span>
      <span class="text-muted">pricing</span>
    </div>
    <ul class="list-unstyled mb-4">
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Unlimited team members</li>
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Full AI suite</li>
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Dedicated support</li>
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Unlimited storage</li>
      <li class="mb-2"><i class="fas fa-check text-success me-2"></i>White-label options</li>
    </ul>
    <button class="btn btn-outline-primary btn-lg w-100">Contact Sales</button>
  </div>
</div>
```

**New Bootstrap Classes:**
- `border-primary` - Blue border to highlight recommended plan
- `position-relative` - Allows absolute positioning of child elements
- `position-absolute top-0 start-50 translate-middle` - Centers badge at top of card
- `badge bg-primary` - Bootstrap badge component with blue background
- `list-unstyled` - Removes default list styling
- `w-100` - Width 100%

### 📚 Reference
- [Bootstrap Badges](https://getbootstrap.com/docs/5.3/components/badge/)
- [Bootstrap Position](https://getbootstrap.com/docs/5.3/utilities/position/)

---

## 📝 Phase 6: Footer

### Your Mission
Create a professional footer with company information and links.

### Add This Complete Footer
Add this before your closing `</body>` tag:

```html
<footer id="contact" class="bg-dark text-white py-5">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <div class="mb-4">
          <img src="../../assets/images/logo-light.svg" alt="TechFlow logo" height="40" class="mb-3 img-fluid">
          <p class="mb-3">
            Empowering businesses with AI-driven workflow solutions that boost productivity and drive innovation.
          </p>
          <div class="mb-2">
            <i class="fas fa-map-marker-alt me-2"></i>
            <small>123 Innovation Drive, Tech City, CA</small>
          </div>
          <div class="mb-2">
            <i class="fas fa-phone me-2"></i>
            <small>(555) 123-4567</small>
          </div>
          <div class="mb-2">
            <i class="fas fa-envelope me-2"></i>
            <small>hello@techflow.ai</small>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-6">
        <h6 class="text-uppercase fw-bold mb-3">Quick Links</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#home" class="text-white-50 text-decoration-none">Home</a></li>
          <li class="mb-2"><a href="#features" class="text-white-50 text-decoration-none">Features</a></li>
          <li class="mb-2"><a href="#about" class="text-white-50 text-decoration-none">About</a></li>
          <li class="mb-2"><a href="#pricing" class="text-white-50 text-decoration-none">Pricing</a></li>
          <li class="mb-2"><a href="#contact" class="text-white-50 text-decoration-none">Contact</a></li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-6">
        <h6 class="text-uppercase fw-bold mb-3">Legal</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none">Privacy Policy</a></li>
          <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none">Terms of Service</a></li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-6">
        <h6 class="text-uppercase fw-bold mb-3">Stay Updated</h6>
        <p class="mb-3">Get the latest updates on AI trends and TechFlow features.</p>
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Email address">
          <button class="btn btn-primary" type="button">Subscribe</button>
        </div>
        <div class="d-flex gap-3">
          <a href="#" class="text-white-50 fs-4"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white-50 fs-4"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white-50 fs-4"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    <hr class="my-4">
    <div class="row">
      <div class="col-12 text-center">
        <p class="mb-0 text-white-50">&copy; 2025 TechFlow. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
```

**New Bootstrap Classes:**
- `text-white-50` - Semi-transparent white text
- `text-decoration-none` - Removes underline from links
- `text-uppercase` - Makes text uppercase
- `input-group` - Groups input and button together
- `form-control` - Bootstrap form input styling
- `fs-4` - Font size 4 (for icons)

### 📚 Reference
- [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
- [Bootstrap Input Groups](https://getbootstrap.com/docs/5.3/forms/input-group/)

---

## 🧪 Testing Your Work

### Manual Testing Checklist
- [ ] Navigation works on desktop and mobile
- [ ] Hero section is responsive and full-height
- [ ] Feature cards display properly in grid
- [ ] Team section shows all members
- [ ] Pricing section highlights middle plan
- [ ] Footer displays all information

### Responsive Testing
Test your page at these widths by resizing your browser:
- **Mobile**: 375px wide
- **Tablet**: 768px wide
- **Desktop**: 1200px wide

### Cross-Browser Testing
Open your page in different browsers if available:
- Chrome
- Firefox
- Safari
- Edge

---

## 🏆 Congratulations!

You've successfully built a professional landing page using Bootstrap!

## 🚀 Next Steps

### If You Finish Early
1. **Customize colors**: Try changing the CSS custom properties in the `<style>` section
2. **Add animations**: Research Bootstrap utilities for transitions
3. **Improve accessibility**: Add more descriptive alt text to images

### Learning Resources
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)
- [Bootstrap Cheat Sheet](https://bootstrap-cheatsheet.themeselection.com/)

---

## 📞 Need Help?

### Common Issues & Solutions

**Navigation not collapsing on mobile:**
- Check that your button has `data-bs-target="#navbarNav"`
- Make sure the div has `id="navbarNav"`

**Images not showing:**
- Verify the file path: `../assets/images/filename.svg`
- Check that the images folder is in the right location

**Cards not the same height:**
- Make sure you have `h-100` class on each card

**Layout breaking on mobile:**
- Check that you're using `col-lg-` and `col-md-` classes correctly
- Remember: `col-lg-4` = 3 columns on large screens, `col-md-6` = 2 columns on medium screens

### Getting Help
- Check the solution file for reference
- Pair program with a classmate

---

**Happy coding! 🎉**

*Remember: Learning Bootstrap is about understanding the pattern of classes. Once you learn the system, you can build anything!*

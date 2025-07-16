const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// ANSI color codes for console output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

// Helper function to colorize console output
function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

// Validation results tracking
let validationResults = {
  passed: 0,
  failed: 0,
  warnings: 0,
  sections: {
    phase1: { passed: 0, failed: 0, total: 0 },
    phase2: { passed: 0, failed: 0, total: 0 },
    phase3a: { passed: 0, failed: 0, total: 0 },
    phase3b: { passed: 0, failed: 0, total: 0 },
    phase3c: { passed: 0, failed: 0, total: 0 },
    phase4: { passed: 0, failed: 0, total: 0 },
    general: { passed: 0, failed: 0, total: 0 },
  },
};

// Validation test function
function test(description, testFunction, phase = "general") {
  validationResults.sections[phase].total++;
  try {
    const result = testFunction();
    if (result) {
      console.log(`  ${colorize("✓", "green")} ${description}`);
      validationResults.passed++;
      validationResults.sections[phase].passed++;
    } else {
      console.log(`  ${colorize("✗", "red")} ${description}`);
      validationResults.failed++;
      validationResults.sections[phase].failed++;
    }
  } catch (error) {
    console.log(`  ${colorize("✗", "red")} ${description} (Error: ${error.message})`);
    validationResults.failed++;
    validationResults.sections[phase].failed++;
  }
}

// Warning function
function warn(message) {
  console.log(`  ${colorize("⚠", "yellow")} ${message}`);
  validationResults.warnings++;
}

// Main validation function
function validateHTML() {
  console.log(colorize("\n🚀 TechFlow Bootstrap Landing Page Validator", "cyan"));
  console.log(colorize("=".repeat(50), "cyan"));

  // Read HTML file
  const htmlPath = path.join(__dirname, "../starter-files/index.html");

  if (!fs.existsSync(htmlPath)) {
    console.log(colorize("\n❌ HTML file not found!", "red"));
    console.log(`Please ensure your HTML file exists at: ${htmlPath}`);
    return;
  }

  const htmlContent = fs.readFileSync(htmlPath, "utf8");
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  // Phase 1: Navigation Validation
  console.log(colorize("\n📋 Phase 1: Navigation Bar", "blue"));
  console.log(colorize("-".repeat(30), "blue"));

  test(
    "Has navbar with proper Bootstrap classes",
    () => {
      const navbar = document.querySelector("nav.navbar");
      return (
        navbar &&
        navbar.classList.contains("navbar-expand-lg") &&
        navbar.classList.contains("navbar-dark") &&
        navbar.classList.contains("bg-dark")
      );
    },
    "phase1"
  );

  test(
    "Has navbar brand with logo",
    () => {
      const brand = document.querySelector(".navbar-brand");
      return brand && (brand.querySelector("img") || brand.textContent.trim());
    },
    "phase1"
  );

  test(
    "Has mobile toggle button with correct attributes",
    () => {
      const toggle = document.querySelector(".navbar-toggler");
      return toggle && toggle.getAttribute("data-bs-toggle") === "collapse" && toggle.getAttribute("data-bs-target");
    },
    "phase1"
  );

  test(
    "Has exactly 5 navigation items",
    () => {
      const navItems = document.querySelectorAll(".navbar-nav .nav-item");
      return navItems.length === 5;
    },
    "phase1"
  );

  test(
    "Has collapsible navbar section",
    () => {
      const collapse = document.querySelector(".navbar-collapse");
      const toggle = document.querySelector(".navbar-toggler");
      return collapse && collapse.id && toggle && toggle.getAttribute("data-bs-target") === `#${collapse.id}`;
    },
    "phase1"
  );

  // Phase 2: Hero Section Validation
  console.log(colorize("\n📋 Phase 2: Hero Section", "blue"));
  console.log(colorize("-".repeat(30), "blue"));

  test(
    "Has hero section with proper structure",
    () => {
      const hero = document.querySelector('.hero-section, section[id="home"], .min-vh-100');
      return hero !== null;
    },
    "phase2"
  );

  test(
    "Has two-column layout in hero",
    () => {
      const hero = document.querySelector('.hero-section, section[id="home"], .min-vh-100');
      if (!hero) return false;
      const columns = hero.querySelectorAll(".col-lg-6, .col-md-6");
      return columns.length >= 2;
    },
    "phase2"
  );

  test(
    "Contains hero headline about AI workflow",
    () => {
      const headlines = document.querySelectorAll("h1, .display-4, .display-1, .display-2, .display-3");
      return Array.from(headlines).some(
        h => h.textContent.includes("Revolutionize") && h.textContent.includes("Workflow")
      );
    },
    "phase2"
  );

  test(
    "Has call-to-action buttons",
    () => {
      const hero = document.querySelector('.hero-section, section[id="home"], .min-vh-100');
      if (!hero) return false;
      const buttons = hero.querySelectorAll(".btn");
      return buttons.length >= 2;
    },
    "phase2"
  );

  test(
    "Has responsive hero image",
    () => {
      const hero = document.querySelector('.hero-section, section[id="home"], .min-vh-100');
      if (!hero) return false;
      const images = hero.querySelectorAll("img.img-fluid");
      return images.length >= 1;
    },
    "phase2"
  );

  // Phase 3A: Features Section Validation
  console.log(colorize("\n📋 Phase 3A: Features Section", "blue"));
  console.log(colorize("-".repeat(30), "blue"));

  test(
    "Has features section heading",
    () => {
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      return Array.from(headings).some(h => h.textContent.includes("Why Choose") || h.textContent.includes("Features"));
    },
    "phase3a"
  );

  test(
    "Has three or more feature cards",
    () => {
      const cards = document.querySelectorAll(".card");
      return cards.length >= 3;
    },
    "phase3a"
  );

  test(
    "Has equal height cards",
    () => {
      const cards = document.querySelectorAll(".card.h-100");
      return cards.length >= 3;
    },
    "phase3a"
  );

  test(
    "Contains AI, Integration, and Support features",
    () => {
      const content = document.body.textContent;
      return content.includes("AI") && content.includes("Integration") && content.includes("Support");
    },
    "phase3a"
  );

  // Phase 3B: Team Section Validation
  console.log(colorize("\n📋 Phase 3B: Team Section", "blue"));
  console.log(colorize("-".repeat(30), "blue"));

  test(
    "Has team section heading",
    () => {
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      return Array.from(headings).some(h => h.textContent.includes("Meet Our Team") || h.textContent.includes("Team"));
    },
    "phase3b"
  );

  test(
    "Contains all three team members",
    () => {
      const content = document.body.textContent;
      return content.includes("Sarah Johnson") && content.includes("Mike Chen") && content.includes("Lisa Rodriguez");
    },
    "phase3b"
  );

  test(
    "Has team member images",
    () => {
      const teamImages = document.querySelectorAll('img[alt*="Sarah"], img[alt*="Mike"], img[alt*="Lisa"]');
      return teamImages.length >= 3;
    },
    "phase3b"
  );

  test(
    "Uses responsive grid for team cards",
    () => {
      const gridCols = document.querySelectorAll(".col-lg-4, .col-md-4, .col-sm-12");
      return gridCols.length >= 3;
    },
    "phase3b"
  );

  // Phase 3C: Pricing Section Validation
  console.log(colorize("\n📋 Phase 3C: Pricing Section", "blue"));
  console.log(colorize("-".repeat(30), "blue"));

  test(
    "Has pricing section heading",
    () => {
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      return Array.from(headings).some(
        h => h.textContent.includes("Choose Your Plan") || h.textContent.includes("Pricing")
      );
    },
    "phase3c"
  );

  test(
    "Contains all pricing plans",
    () => {
      const content = document.body.textContent;
      return content.includes("Starter") && content.includes("Professional") && content.includes("Enterprise");
    },
    "phase3c"
  );

  test(
    "Has pricing information",
    () => {
      const content = document.body.textContent;
      return content.includes("$29") && content.includes("$79") && content.includes("Custom");
    },
    "phase3c"
  );

  test(
    "Highlights recommended plan",
    () => {
      const highlighted = document.querySelectorAll(".border-primary, .bg-primary, .text-primary");
      return highlighted.length >= 1;
    },
    "phase3c"
  );

  // Phase 4: Footer Validation
  console.log(colorize("\n📋 Phase 4: Footer", "blue"));
  console.log(colorize("-".repeat(30), "blue"));

  test(
    "Has footer element",
    () => {
      const footer = document.querySelector("footer");
      return footer !== null;
    },
    "phase4"
  );

  test(
    "Footer has dark background",
    () => {
      const footer = document.querySelector("footer");
      return footer && footer.classList.contains("bg-dark");
    },
    "phase4"
  );

  test(
    "Has multi-column footer layout",
    () => {
      const footer = document.querySelector("footer");
      if (!footer) return false;
      const columns = footer.querySelectorAll(".col-lg-3, .col-lg-4, .col-md-6, .col-sm-12");
      return columns.length >= 2;
    },
    "phase4"
  );

  test(
    "Contains contact information",
    () => {
      const footer = document.querySelector("footer");
      if (!footer) return false;
      const content = footer.textContent;
      return content.includes("TechFlow") && content.includes("2025");
    },
    "phase4"
  );

  test(
    "Has social media icons",
    () => {
      const socialIcons = document.querySelectorAll(".fab, .fa-twitter, .fa-linkedin, .fa-github");
      return socialIcons.length >= 1;
    },
    "phase4"
  );

  // General Requirements Validation
  console.log(colorize("\n📋 General Requirements", "blue"));
  console.log(colorize("-".repeat(30), "blue"));

  test(
    "Has Bootstrap CSS linked",
    () => {
      const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
      return bootstrapLink !== null;
    },
    "general"
  );

  test(
    "Has Font Awesome CSS linked",
    () => {
      const fontAwesome = document.querySelector('link[href*="font-awesome"]');
      return fontAwesome !== null;
    },
    "general"
  );

  test(
    "Has Bootstrap JavaScript linked",
    () => {
      const bootstrapScript = document.querySelector('script[src*="bootstrap"]');
      return bootstrapScript !== null;
    },
    "general"
  );

  test(
    "Has proper viewport meta tag",
    () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      return viewport && viewport.getAttribute("content").includes("width=device-width");
    },
    "general"
  );

  test(
    "Uses semantic HTML structure",
    () => {
      const nav = document.querySelector("nav");
      const sections = document.querySelectorAll("section");
      const footer = document.querySelector("footer");
      return nav && sections.length >= 3 && footer;
    },
    "general"
  );

  test(
    "Images have alt attributes",
    () => {
      const images = document.querySelectorAll("img");
      return Array.from(images).every(img => img.getAttribute("alt") && img.getAttribute("alt").trim() !== "");
    },
    "general"
  );

  // Warnings for best practices
  console.log(colorize("\n⚠️  Best Practices Check", "yellow"));
  console.log(colorize("-".repeat(30), "yellow"));

  const title = document.querySelector("title");
  if (!title || !title.textContent.includes("TechFlow")) {
    warn('Consider adding a descriptive page title including "TechFlow"');
  }

  const metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    warn("Consider adding a meta description for better SEO");
  }

  const customCSS = document.querySelector("style");
  if (customCSS && customCSS.textContent.length > 500) {
    warn("Consider using more Bootstrap utilities instead of custom CSS");
  }

  // Display results summary
  console.log(colorize("\n📊 Validation Results", "cyan"));
  console.log(colorize("=".repeat(50), "cyan"));

  // Phase summaries
  Object.entries(validationResults.sections).forEach(([phase, results]) => {
    if (results.total > 0) {
      const percentage = Math.round((results.passed / results.total) * 100);
      const status =
        percentage === 100 ? "COMPLETE" : percentage >= 80 ? "GOOD" : percentage >= 60 ? "NEEDS WORK" : "INCOMPLETE";

      const color = percentage === 100 ? "green" : percentage >= 80 ? "cyan" : percentage >= 60 ? "yellow" : "red";

      console.log(
        `${phase.toUpperCase().padEnd(10)} ${colorize(status.padEnd(12), color)} ${results.passed}/${results.total} (${percentage}%)`
      );
    }
  });

  // Overall summary
  const totalTests = validationResults.passed + validationResults.failed;
  const overallPercentage = Math.round((validationResults.passed / totalTests) * 100);

  console.log(colorize("\n" + "=".repeat(50), "cyan"));
  console.log(
    `${colorize("OVERALL SCORE:", "bright")} ${validationResults.passed}/${totalTests} tests passed (${overallPercentage}%)`
  );

  if (validationResults.warnings > 0) {
    console.log(`${colorize("WARNINGS:", "yellow")} ${validationResults.warnings} best practice suggestions`);
  }

  // Final recommendations
  console.log(colorize("\n💡 Next Steps:", "cyan"));

  if (overallPercentage === 100) {
    console.log(colorize("🎉 Excellent! Your TechFlow landing page is complete!", "green"));
    console.log("✅ All phases implemented correctly");
    console.log("✅ Ready for portfolio submission");
    console.log("✅ Consider adding personal touches or additional features");
  } else if (overallPercentage >= 80) {
    console.log(colorize("🚀 Great progress! Almost there!", "cyan"));
    console.log("• Review failed tests above");
    console.log("• Focus on completing remaining phases");
    console.log("• Test responsive behavior on different devices");
  } else if (overallPercentage >= 60) {
    console.log(colorize("📚 Good start! Keep building!", "yellow"));
    console.log("• Complete the current phase before moving to next");
    console.log("• Review Bootstrap documentation for failed tests");
    console.log("• Check the phase checkpoint descriptions");
  } else {
    console.log(colorize("🔨 Keep working! You can do this!", "red"));
    console.log("• Focus on completing Phase 1 first");
    console.log("• Review the README.md for detailed instructions");
    console.log("• Check the solution in /solution/index.html if you are stuck");
  }

  console.log(colorize("\n🔗 Helpful Resources:", "cyan"));
  console.log("• Bootstrap Documentation: https://getbootstrap.com/docs/5.3/");
  console.log("• Phase checkpoints: /checkpoints/ folder");
  console.log("• Self-assessment: self-assessment-checklist.md");
  console.log("• Complete solution: /solution/index.html");

  console.log(colorize("\n" + "=".repeat(50), "cyan"));
  console.log(colorize("Happy coding! 🚀", "green"));
}

// Run validation
if (require.main === module) {
  validateHTML();
}

module.exports = { validateHTML };

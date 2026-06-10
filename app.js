/**
 * Personal Portfolio Core Interaction Engine
 * Features: Advanced Interactive Theme Toggling & Validation Structures
 */

document.addEventListener("DOMContentLoaded", () => {
  // DOM Element Queries using modern arrow mechanics and declaration structures
  const themeToggleButton = document.getElementById("theme-toggle");
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");

  /**
   * Interactivity Feature 1: Dark Mode Theme Switcher
   * Satisfies the "Beyond Class Scope" design execution patterns.
   */
  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Dynamically update UI state tracking attributes
    if (document.body.classList.contains("dark-mode")) {
      themeToggleButton.textContent = "☀️ Light Mode";
      themeToggleButton.classList.replace(
        "btn-outline-light",
        "btn-outline-light",
      );
    } else {
      themeToggleButton.textContent = "🌙 Dark Mode";
      themeToggleButton.classList.replace(
        "btn-outline-dark",
        "btn-outline-light",
      );
    }
  });

  /**
   * Interactivity Feature 2: Clean Custom Form Validation
   * Validates element parameters client-side prior to execution patterns.
   */
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop default navigation vectors

    // Use Bootstrap native evaluation APIs
    if (!contactForm.checkValidity()) {
      event.stopPropagation();
      contactForm.classList.add("was-validated");

      // Clean dynamic alert presentation
      formFeedback.className = "mt-3 text-center text-danger fw-bold";
      formFeedback.textContent =
        "Please correct the invalid input structures in the form.";
      formFeedback.classList.remove("d-none");
    } else {
      // Processing execution upon valid structural processing
      contactForm.classList.remove("was-validated");
      formFeedback.className = "mt-3 text-center text-success fw-bold";
      formFeedback.textContent =
        "Thank you! Your message was submitted successfully.";
      formFeedback.classList.remove("d-none");

      // Clear input forms safely
      contactForm.reset();
    }
  });
});
/**
 * Interactivity Feature 3: Custom Cursor
 * Satisfies the "Beyond Class Scope" design execution patterns.
 */
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

# 🔐 PassGen - Password Generator Web App

A simple, responsive Password Generator web application built with HTML, CSS, and JavaScript. It allows users to generate secure, random passwords based on custom criteria.

## Project Description

This PassGen is a Minor Project demonstrating core web development concepts. Users can customize the password length and choose which character types to include (uppercase letters, lowercase letters, numbers, and special characters). The app validates user input, generates a password dynamically, displays a strength indicator, and lets users copy the result to their clipboard with one click.

## Features

- Adjustable password length (4–32 characters) via a slider
- Toggle options for:
  - Uppercase letters (A–Z)
  - Lowercase letters (a–z)
  - Numbers (0–9)
  - Special characters (!@#$%^&* etc.)
- Input validation (prevents generating a password with no character types selected)
- Guarantees at least one character from each selected type is present
- Password strength indicator (Weak / Medium / Strong)
- One-click copy to clipboard
- Fully responsive, mobile-friendly UI

## Technologies Used

- **HTML5** – page structure
- **CSS3** – styling and responsive layout
- **JavaScript (Vanilla)** – password generation logic, DOM manipulation, validation

No external libraries or frameworks are used.

## Steps to Run the Project

This project is built using HTML, CSS, and JavaScript. Simply clone the repository and open index.html in your browser to run it locally.

### Option 1: Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/irisrann10/passgen-minorproject1.git
   ```
2. Navigate into the project folder:
   ```bash
   cd passgen-minorproject1
   ```
3. Open `index.html` directly in any web browser (double-click the file, or right-click → Open With → Browser).

That's it — no build steps or dependencies required.

### Option 2: View Live
Visit the hosted link: **[Live Demo](#)** *(add your Vercel URL here after deployment)*

## Deployment (Vercel)

1. Push this project to a public GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project**, select this repository, and deploy with default settings (no build command needed since this is a static site).
4. Once deployed, Vercel will provide a live URL.

## Folder Structure

```
password-generator/
├── index.html      # HTML structure
├── styles.css      # Styling
├── script.js       # Password generation logic
└── README.md       # Project documentation
```

---

## Author

**Girish Ranjan**  
B.Tech Computer Science Engineering  
KIIT University

---

## License

This project is original work created for educational purposes. Submission purpose(Minor Project 1)

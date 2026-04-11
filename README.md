# Phnom Penh Compass

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/ManithSoun/web2-phnom-penh-compass.git
cd web2-phnom-penh-compass
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tailwind

```bash
npm run build:css
```

## Project Structure

# Project Structure

```bash
web2-phnom-penh-compass/
├── index.html              # Home page (entry point of the website)

├── pages/                  # Other pages of the website
│   ├── advisory.html       # Travel advisory page
│   ├── dos-donts.html      # Cultural guidelines page
│   ├── explore.html        # Explore places page
│   └── services.html       # Services & emergency contacts page

├── src/                    # Source files (main development folder)
│   ├── assets/             # Static files
│   │   ├── images/         # Images used in the website
│   │   └── icons/          # Icons used in the UI
│
│   ├── css/                # Styles source
│   │   └── input.css       # Tailwind source file (edit this file)
│
│   └── js/                 # JavaScript files
│       ├── components.js   # Shared components (navbar, footer)
│       ├── main.js         # General/common scripts
│       ├── weather.js      # Home page weather logic (API)
│       ├── explore.js      # Explore page logic (API + UI)
│       ├── services.js     # Services page logic
│       ├── emergencyData.js# Static emergency data
│       ├── dos-donts.js    # Do’s & Don’ts page logic
│       └── advisory.js     # Travel advisory logic (API)

├── dist/                   # Generated files (do not edit)
│   └── output.css          # Compiled Tailwind CSS

├── .gitignore              # Files/folders ignored by Git
├── config.example.js       # Example config for API keys
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind configuration
└── README.md               # Project documentation
```

### CSS

- Do not edit dist/output.css
- Edit src/css/input.css

Each HTML file must include:

```bash
<link rel="stylesheet" href="../dist/output.css">
```

## Workflow

### Start working

```bash
# Pull the latest main
git checkout main
git pull origin main
#  Create your own branch
git checkout -b feature/your-task
```

### After finishing

```bash
# Commit code to the git
git add .
git commit -m "feat(page): describe what you did"
# Push your branch to GitHub
git push origin feature/your-task
```

# Notes

- Run `npm run build:css` before coding
- Do not commit API keys

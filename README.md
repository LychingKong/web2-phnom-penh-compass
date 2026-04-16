# Phnom Penh Compass 🧭

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/ManithSoun/web2-phnom-penh-compass.git
cd web2-phnom-penh-compass
```

### 2. Set up your API keys

Create a new file `config.js` \
Copy the `config.example.js` and paste to it.

```bash
cp config.example.js config.js
```

Open `config.js` and fill in your real API keys:

```js
// config.js
const CONFIG = {
  GOOGLE_PLACES_KEY: "your_key_here",
  OPENWEATHER_KEY: "your_key_here",
  TUGO_KEY: "your_key_here",
};
```

### 3. Working on your page

Copy `template.html` and paste it to your HTML page, then:

- Write your content inside `<main>`

## Project Structure

```
web2-phnom-penh-compass/
├── pages/                       # Paste the template.html file to your belong page in this folder
│   ├── advisory.html
│   ├── dos-donts.html
│   ├── explore.html
│   └── services.html
├── src/
│   ├── assets/                   # Folder for images and icons
│   │   ├── images/
│   │   └── icons/
│   ├── components/               # Create reusable UI components in this folder (cards, sections, etc.)
│   │   ├── navbar.html           # Shared navbar — DO NOT EDIT unless assigned
│   │   └── footer.html           # Shared footer — DO NOT EDIT unless assigned
│   ├── css/
│   │   └── style.css             # Custom styles only
│   └── js/
│       ├── components.js         # Loads navbar & footer — DO NOT EDIT unless assigned
│       ├── main.js               # Home page JS
│       ├── explore.js
│       ├── services.js
│       ├── servicesData.js       # For the static data for Services page
│       ├── dos-donts.js
│       └── advisory.js
├── index.html                    # Home page
├── template.html                 # Base template — copy this for new pages
├── config.js                     # Your API keys — NEVER commit this
├── config.example.js
├── .gitignore
└── README.md
```

## Coding Standards

### CSS

- Use **Tailwind classes** directly in HTML for all styling
- Only use `src/css/style.css` for custom styles Tailwind cannot handle
- Font (Raleway) is already imported in `style.css` — do not add font links in HTML

### JS

Always use `async/await` and handle errors for API calls:

```js
async function fetchData() {
  try {
    const res = await fetch(`https://...`);
    if (!res.ok) throw new Error("Request failed");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("fetchData error:", err);
  }
}
```

## Git Workflow

### Branch Naming

```
feature/page-name
```

### Workflow

```bash
# 1. Always pull the latest main first
git checkout main
git pull origin main

# 2. Create your own branch
git checkout -b feature/your-feature-name

# 3. Work and commit often
git add .
git commit -m "feat(page): describe what you did"

# 4. Push your branch
git push origin feature/your-feature-name

# 5. Open a Pull Request on GitHub
# → Get at least 1 teammate to review before merging
```

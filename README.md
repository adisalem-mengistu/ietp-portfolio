# Addisalem Mengistu — IETP Portfolio

A professional personal academic portfolio for the **Integrated Engineering Team Project (IETP)**  
at Addis Ababa Science and Technology University (AASTU).

## 🚀 How to Run

This portfolio requires **no build step**. Simply open `index.html` in any modern browser:

```
Double-click → index.html
```

Or right-click → "Open with" → Chrome / Edge / Firefox.

## 📁 File Structure

```
my portifolo/
├── index.html      ← Main portfolio page (all sections)
├── styles.css      ← All styling (dark/light theme, responsive)
├── app.js          ← All interactive logic (journal, animations, etc.)
└── README.md       ← This file
```

## ✏️ Personalizing Your Portfolio

### Update Your Contact Links
In `index.html`, search for `your.email@example.com`, `yourusername` and replace with your real details.

### Replace Your Photo
In the About section, the avatar uses an emoji placeholder (`👨‍💻`).  
To add a real photo, replace the `.about-avatar` div with:
```html
<img src="your-photo.jpg" alt="Addisalem Mengistu" class="about-avatar" style="object-fit:cover" />
```

### Add Gallery Photos
Replace placeholder `gallery-item` divs with:
```html
<div class="gallery-item" onclick="openLightbox('Caption', '<img src=\'photo.jpg\' style=\'max-width:100%\'>')">
  <img src="photo.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover" />
  <div class="gallery-overlay"><span>View Photo</span></div>
</div>
```

### Update Contributions
Edit the `contributionsData` array in `app.js` to update task status (`'planned'`, `'ongoing'`, `'completed'`) and add evidence descriptions.

### Weekly Journal
Use the **"+ Add Weekly Entry"** button on the site — entries are saved automatically in your browser's localStorage.

## 🎨 Sections Included

| Section | Description |
|---------|-------------|
| Hero | Landing page with name, university, CTA buttons |
| About Me | Bio, skills breakdown by category |
| Project Overview | Solar dryer project description, SDGs, objectives |
| System Working Principle | Annotated SVG diagram + 7-step explanation |
| My Contributions | 8 contribution cards with status tracking |
| Weekly Journal | Add/edit/delete weekly entries (localStorage) |
| Interdisciplinary Team | All 6 disciplines and collaboration flow |
| Skills & Learning | Animated skill bars + soft skills + reflection |
| Gallery | 8 placeholder slots for project photos |
| Challenges & Reflection | Honest reflection + future improvements |
| Contact | Info cards + contact form |
| Footer | Navigation + university info |

## 🌙 Features

- Dark / Light mode toggle (saved in localStorage)
- Smooth scroll navigation with active link highlight
- Responsive design (desktop, tablet, mobile)
- Animated skill bars on scroll
- SVG solar dryer system diagram
- Interactive weekly journal (CRUD via localStorage)
- Scroll-reveal animations on all sections
- Mobile hamburger menu

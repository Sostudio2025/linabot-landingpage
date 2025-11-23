# Content Management Guide

## Overview

The website content is managed through two JSON files:
- `src/content/hosts.json` - Content for מארחים (Hosts)
- `src/content/guests.json` - Content for מתארחים (Guests)

The content automatically switches with a smooth fade transition when users toggle between the two cards in the hero section. The toggle responds instantly on the first click.

## File Structure

Each JSON file contains the following sections:

### 1. Hero Section
```json
"hero": {
  "title": "Main headline text",
  "backgroundImage": "/path-to-image.png"
}
```

### 2. Intro Section
```json
"intro": {
  "title": "Introduction headline",
  "buttonText": "Button label",
  "subtitle": "Subtitle text",
  "image": "/path-to-image.svg"
}
```

### 3. About Section
```json
"about": {
  "title": "Section title",
  "description": "Description text",
  "image": "/path-to-image.svg"
}
```

### 4. Packages Section
```json
"packages": {
  "title": "Packages headline",
  "buttonText": "Button label",
  "mainImage": "/path-to-main-image.svg",
  "decorativeImage1": "/path-to-decor1.svg",
  "decorativeImage2": "/path-to-decor2.svg",
  "monthLabel": "Month name"
}
```

### 5. FAQ Section
```json
"faq": {
  "title": "FAQ section title",
  "icon": "/path-to-icon.svg",
  "items": [
    {
      "id": "item-1",
      "question": "Question text",
      "answer": "Answer text"
    }
  ],
  "viewPackagesButton": "Button label",
  "dividerImage": "/path-to-divider.svg"
}
```

## How to Edit Content

### Text Content
1. Open either `src/content/hosts.json` or `src/content/guests.json`
2. Find the section you want to edit
3. Update the text values
4. Save the file
5. Rebuild: `npm run build`

### Images
1. Add your new image to the `/public/` folder
   - For hosts images: create `/public/hosts/` folder
   - For guests images: create `/public/guests/` folder
2. Update the image path in the JSON file
   - Example: `"image": "/hosts/hero.jpg"`
3. Save the file
4. Rebuild: `npm run build`

## Example: Changing Hero Title for Guests

1. Open `src/content/guests.json`
2. Find the hero section:
```json
"hero": {
  "title": "השאר כותרת עבור מתארחים - תוכל לערוך אותה כאן",
  "backgroundImage": "/mask-group.png"
}
```
3. Change the title:
```json
"hero": {
  "title": "מצא את הלינה המושלמת שלך",
  "backgroundImage": "/mask-group.png"
}
```
4. Save and rebuild

## Example: Adding a Custom Image

1. Save your image as `/public/guests/hero.jpg`
2. Update `src/content/guests.json`:
```json
"hero": {
  "title": "מצא את הלינה המושלמת שלך",
  "backgroundImage": "/guests/hero.jpg"
}
```
3. Save and rebuild

## Tips

- All image paths start with `/` and are relative to the `/public/` folder
- Keep the JSON structure intact (don't remove fields)
- You can leave `"answer": ""` empty for FAQ items without answers
- Make sure to maintain proper JSON syntax (commas, quotes, brackets)
- Test your changes by rebuilding and viewing the site

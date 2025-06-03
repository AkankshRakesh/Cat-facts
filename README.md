# 🐱 Cat Facts Generator

A beautiful, interactive web application that fetches random cat facts using a clean neumorphic design. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Random Cat Facts**: Fetches interesting cat facts from the Cat Facts API
- **Neumorphic Design**: Modern soft UI design with subtle shadows and depth
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth button press effects and loading states
- **Error Handling**: Graceful error messages with retry functionality
- **Accessibility**: Built with semantic HTML and proper ARIA attributes

## 🖇️ Demo
Live at: 
Click the link to discover amazing facts about our feline friends! The app features:
- Instant fact loading with visual feedback
- Beautiful neumorphic button interactions
- Elegant fact display with soft shadows
- Subtle decorative animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **API**: Cat Facts Ninja API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cat-facts-generator.git
   cd cat-facts-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the app in action!

## 🎨 Design Philosophy

This project showcases **Neumorphism** (Soft UI), a design trend that creates:
- Soft, extruded plastic-like appearance
- Subtle shadows for depth and dimension
- Monochromatic color schemes
- Tactile, interactive elements

The design uses a carefully crafted gray palette with custom CSS shadows to achieve the signature neumorphic look.

## 🔧 Customization

### Changing the API
To use a different facts API, modify the `fetchRandomFact` function in `app/page.tsx`:

```typescript
const response = await fetch("YOUR_API_ENDPOINT_HERE")
```

### Adjusting Colors
The neumorphic shadows can be customized by modifying the `boxShadow` styles:

```css
boxShadow: "20px 20px 40px #a6a6a6, -20px -20px 40px #ffffff"
```

### Adding New Features
The component structure makes it easy to add:
- Fact categories
- Favorite facts
- Social sharing
- Sound effects
- Dark mode

## 📱 Responsive Design

The app is fully responsive with:
- Mobile-first approach
- Flexible layouts
- Touch-friendly interactions
- Optimized typography scaling

## 🌐 API Reference

This app uses the [Cat Facts Ninja API](https://catfact.ninja/):
- **Endpoint**: `https://catfact.ninja/fact`
- **Method**: GET
- **Response**: JSON with cat fact text
- **Rate Limit**: 100 for free users

### Development Guidelines Followed
- Followed TypeScript best practices
- Maintained the neumorphic design language
- Ensured responsive design
- Added proper error handling
- Included accessibility features

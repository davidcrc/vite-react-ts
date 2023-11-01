# Setup

```bash
npm create vite@latest vite-react-ts -- --template react-ts
```

```bash
cd vite-react-ts &&  npm install
```

# Add Tailwind

- https://tailwindcss.com/docs/guides/vite

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

```bash
npm add -D sass
```

<!--  -->

# react-icons

```bash
npm i react-icons
```

```bash
npm i react-scroll
```

```bash
npm i --save-dev @types/react-scroll
```

<!--  -->

# Add Alias

- update vite.config.ts

```ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),

      routes: `${path.resolve(__dirname, "./src/routes/")}`,

      services: `${path.resolve(__dirname, "./src/services/")}`,
    },
  },
});
```

- update tsconfig.json

```json
{
  "compilerOptions": {
    // ...
    "paths": {
      "@/*": ["./src/*", "./dist/*"],
      "routes/*": ["./src/routes/*"],
      "services/*": ["./src/services/*"]
    }
  }
}
```

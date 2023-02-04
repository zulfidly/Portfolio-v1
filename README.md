# [My Portfolio website](https://zulfidly.github.io/Portfolio/)

## Design approach

| Tools   | Utilisation |
| ------------- | ------------- |
| VS Code  | IDE used  |
| Tailwind CSS + Vite  | npm init -y <br> Cell <br> npm install -D tailwindcss postcss autoprefixer vite <br> npx tailwindcss init -p <br> npm run dev <br> <br> |
| Google Chrome + Pesticide extension | run inspect to view webpage live  |
<br>

## Command lines used

| Command used | Remarks |
| ------------- | ------------- |
| npm init -y  | create a package.json file  |
| npm install -D tailwindcss postcss autoprefixer vite  | install packages in a dev mode  |
| npx tailwindcss init -p  | creates postcss.config.js & tailwind.config.js  |
| npm run dev  | execute vite server (go into development mode) |
| npx tailwindcss-cli -i input.css -o output.css  | update output.css (for production mode)  |
<br>

### Important customisations
- edit in package.json
```
    "scripts": {
        "dev": "vite --host --port 5100"
    },
```  
- edit in tailwind.config.js (enable purge to tree-shake unused css classes)
```
module.exports = {
   content: ["./index.html", "./projects.html", "./contact.html", "./about.html"], 		
    purge: {                                                
        enabled: true,
        content: ["./index.html", "./projects.html", "./contact.html", "./about.html"]
    },
   theme: {
     extend: {},
   },
   plugins: [],
}
```
- add to input.css
```
@tailwind base; 					                   
@tailwind components;
@tailwind utilities;

@layer base {
    html {
      -webkit-tap-highlight-color: transparent;
    }
}
```





<br>

| Reference  | Code integration |
| ------------- | ------------- |
| [Sigma School](https://app.sigmaschool.co/) | HTML, CSS, JavaScipt & TailwindCSS vocabularies |
| [Web Dev Simplified](https://www.youtube.com/watch?v=9HcxHDS2w1s)  | Image slider in CSS (with some minor edits)  |
| [Tony Heimark](https://www.youtube.com/watch?v=hRaMbPlCT4A)  | hamburger menu animation (with edits)  |
| [w3schools](https://www.w3schools.com/)  | coding infos  |
| [MDN](https://developer.mozilla.org/en-US/)  | coding infos  |
| [Tailwind CSS](https://tailwindcss.com/)  | tailwind coding syntaxes  |

<br>

### Final step

- Adding project to GitHub Pages
    - git init
    - git add ./index.html ./projects.html ./contact.html ./about.html
    - git add ./main.js ./homeMobile.js
    - git add ./asset/
    - git commit -m "description"
    - git remote add origin 'link'
    - git push -u origin main

<br>

| Items  | Files size |
| ------------- | ------------- |
| All in  | 2.6 MB  |
| All - images  | 49 KB  |

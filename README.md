# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
-  [Author](#author)

## Overview

### The challenge

Users should be able to:

-  View the optimal layout for the app depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Add new todos to the list
-  Mark todos as complete
-  Delete todos from the list
-  Filter by all/active/complete todos
-  Clear all completed todos
-  Toggle light and dark mode
-  **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshots.png)

### Links

-  Live Site URL: [Add live site URL here](https://todoapp-benjo.netlify.app/)

## My process

Hello there! Thanks for checking out this project of mine.

This is my 26th frontendmentor challenge and my 6th intermediate frontend project.
The project was made using Reactjs with TypeScript and tailwindCSS for designing the app, I just started to learn TypeScript that's why I want to build project written with typescripts. I really thought that it was easy but coding with typescript is pain in the \*ss, especially if you're beginner like me, It not easy to me when writing in the props, because there's some props I don't want to used but typescript basically forced us to use it😅.

but I also inlove using typescript, it was just easier to debug because most of the problems you encounter in IDE or in compilation time. You don't need to console.log to check what the problems is. I also encountered that I don't know how to write and It basically forced me to use the **any** keyword😅. There still many to learn about typescript and I believe it will improve in no time.

Some features on the page that I added:

-  One of the best features of this one is the drag and drop, if you want to change the todo that you want to finish first just drag and drop the items.
-  **Local Storage** in the browser, I stored the data in local storage so that it will not fade the items after the browser refresh.

Overall, I am very happy with how the application turned out. I am sure it can be improved, but it was a great learning experience that I intend to build upon.

Any additional feedback or a criticism will be appreciated!

### Built with

-  JSX
-  CSS custom properties
-  Flexbox
-  TailwindCSS
-  React-beatiful-dnd
-  [React](https://reactjs.org/) - JS library
-  [TailwindCSS](https://styled-components.com/) - For styles

### What I learned

#### TypeScript

TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.
It looks something like this

```
export interface TodoListRender {
   id: number;
   todo: string;
   completed: boolean;
   index: number;
   updateItem: (id: number) => void;
   deleteItem: (id: number) => void;
}
```

I'm having fun on using this typescript because what interface objects looks like then the components function need to also like the interface above.

```
const TodoItem: React.FC<TodoListRender> = ({
   id,
   todo,
   completed,
   index,
   deleteItem,
   updateItem,
})
```

### Continued development

After finishing this one, I realize that I need to learn more about tailwindcss, typescript and also reactjs especially in react hooks useEffect.

I will finish every frontendmentor challenge as much I take.

## Author

-  Website - [Benjo Quilario](https://benjoquilario.me/)
-  Frontend Mentor - [@benjoquilario](https://www.frontendmentor.io/profile/benjoquilario)
-  Twitter - [@iam_benjo](https://twitter.com/iam_benjo)

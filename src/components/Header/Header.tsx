import React from 'react';

const Header: React.FC = () => {
   let clickedClass: string = 'clicked';
   const light: string = 'light';
   const dark: string = 'dark';
   const root = document.documentElement;
   let theme: string;

   if (localStorage) {
      theme = localStorage.getItem('theme');
   }

   if (theme === light || theme === dark) {
      root.classList.add(theme);
   } else {
      root.classList.add(light);
   }

   const switchTheme = event => {
      if (theme === light) {
         root.classList.replace(light, dark);
         event.target.classList.add(clickedClass);
         localStorage.setItem('theme', dark);
         theme = dark;
      } else {
         root.classList.replace(dark, light);
         event.target.classList.remove(clickedClass);
         localStorage.setItem('theme', 'light');
         theme = light;
      }
   };

   return (
      <header className="mb-[30px]">
         <div className="flex justify-between items-center">
            <h2 className="text-[26px] md:text-[38px] font-bold uppercase tracking-[9px] md:tracking-[16px] text-white">
               Todo
            </h2>
            <button
               className={`bg-[url('/public/images/icon-sun.svg')] dark:bg-[url('/public/images/icon-moon.svg')] h-[24px] w-[24px] bg-no-repeat bg-cover transition`}
               aria-label="toggle theme"
               onClick={event => switchTheme(event)}
            ></button>
         </div>
      </header>
   );
};

export default Header;

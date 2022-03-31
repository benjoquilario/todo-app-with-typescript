module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   darkMode: 'class',
   theme: {
      extend: {
         backgroundImage: {
            'gradient-check':
               "url('/public/images/icon-check.svg'), bg-gradient-to-r from-[#57ddff] to-[#c058f3]",
         },
      },
   },
   plugins: [],
};

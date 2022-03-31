import Todo from './components/Todo/Todo';

function App() {
   return (
      <div className="flex justify-center bg-[#161722] dark:bg-[#f9f9f9] min-h-screen py-10 md:py-[68px] px-6 bg-[url('/public/images/bg-mobile-dark.jpg')] md:bg-[url('/public/images/bg-desktop-dark.jpg')] dark:bg-[url('/public/images/bg-mobile-light.jpg')] dark:md:bg-[url('/public/images/bg-desktop-light.jpg')] bg-[length:100%_auto] bg-no-repeat transition-all">
         <Todo />
      </div>
   );
}

export default App;

import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/snahal04/Sumz_AI.git", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Worried About Reading A Huge Article? <br className='max-md:hidden' />
        <span className='orange_gradient '>Summarize It !</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with us, a small AI
        that transforms lengthy articles into clear and concise paragraph.
      </h2>
    </header>
  );
};

export default Hero;
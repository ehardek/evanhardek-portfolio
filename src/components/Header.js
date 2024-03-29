import React from 'react';
export default function Header(){
    return(
    <header className="appHeader">
      <h1 id="nameTag" > 
        Evan Hardek
      </h1>
       <div className='navbar'>
         <a href='/' id='aboutLink'>About Me</a>
         <a href='/projects' id='projectLink'>Projects</a>
         <a href='/contactEvan' id='contactLink'>Contact Me</a>
       </div>
    </header>
    );
};
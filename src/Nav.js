import React, { useState } from 'react';
import classNames from 'classnames';

export default function Nav(props) {
  const [nav, setNav] = useState(false);
  const [hash, setHash] = useState(props.location.hash);

  if (hash !== props.location.hash) {
    setHash(props.location.hash);
  }

  return (
    <nav className={classNames('fixed w-full', {
        'bg-gray-50': hash !== '' && hash !== '#main',
        'bg-opacity-75': hash !== '' && hash !== '#main'
      })}>
     <div className="py-2 px-2">
       <div className="flex items-center">
         <div className="flex-1 items-center">
            <p className="font-medium text-3xl text-gray-600">
              <a href="#main">Eben Goodman</a>
            </p>
          </div>
          <div className="hidden md:block font-medium text-sm">
            <div className={classNames('inline-block transform transition-all duration-150 ease-out', {
                'scale-0': hash == '' || hash == '#main',
                'scale-100': hash !== '' && hash !== '#main'
              })}>
              <a href="#main" className="px-4 py-2 mr-2 text-purple-600 hover:text-purple-300">
                Top
              </a>
            </div>
            <div className={classNames('inline-block transform transition-all duration-150 ease-out', {
                'scale-0': hash == '' || hash == '#main',
                'scale-100': hash !== '' && hash !== '#main'
              })}>
              <a href="http://github.com/bakedbean" target="_new" className="px-4 py-2 mr-2 text-purple-600 hover:text-purple-300">
                Github
              </a>
            </div>
            <div className={classNames('inline-block transform transition-all duration-150 ease-out', {
                'scale-0': hash == '' || hash == '#main',
                'scale-100': hash !== '' && hash !== '#main'
              })}>
              <a href="http://www.linkedin.com/pub/eben-goodman/4/6/6a4" target="_new" className="px-4 py-2 mr-2 text-purple-600 hover:text-purple-300">
                LinkedIn
              </a>
            </div>
            <div className={classNames('inline-block transform transition-all duration-150 ease-out', {
                'scale-0': hash == '' || hash == '#main',
                'scale-100': hash !== '' && hash !== '#main'
              })}>
              <a href="mailto: eben.goodman@gmail.com" target="_new" className="px-4 py-2 mr-2 text-purple-600 hover:text-purple-300">
                Email
              </a>
            </div>
            <a href="#experience" className="px-4 py-2 mr-2 text-purple-600 hover:text-purple-300">
              Experience
            </a>
            <a href="#tools" className="px-4 py-2 mr-2 text-purple-600 hover:text-purple-300">
              Tools
            </a>
            <a href="http://ebengoodman.com/eben-goodman-resume.pdf" target="_new" className="px-4 py-2 mr-2 text-purple-600 hover:text-purple-300">
              Résumé
            </a>
         </div>
         <div className="md:hidden">
           <span onClick={() => setNav(true)}>
             <svg className={classNames('h-6 w-6', {
                'block': !nav,
                'hidden': nav
               })} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
             </svg>
           </span>

           <span onClick={() => setNav(false)}>
             <svg className={classNames('h-6 w-6', {
                'hidden': !nav
               })} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
           </span>
         </div>
       </div>
      </div>  

      <div className={classNames('md:hidden bg-opacity-75', {
          'hidden': !nav,
          'block': nav,
          'bg-gray-50': hash !== '' && hash !== '#main',
          'bg-purple-400': hash === '#main'
        })}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#main" onClick={() => setNav(false)} className="text-white-purple-600 block px-3 py-2 rounded-md text-base font-medium">Top</a>
          <a href="#experience" onClick={() => setNav(false)} className="text-purple-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Experience</a>
          <a href="#tools" onClick={() => setNav(false)} className="text-purple-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tools</a>
          <a href="#" onClick={() => setNav(false)} className="text-purple-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Resume</a>
        </div>
      </div>
    </nav>
  )
}

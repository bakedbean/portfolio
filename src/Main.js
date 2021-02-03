import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ScrollableAnchor from 'react-scrollable-anchor';
import Nav from './Nav';
import Experience from './Experience';

export default function Main(props) {
  const [place, setPlace] = useState();

  return (
    <div className="text-gray-700">
      <Experience place={place} setPlace={setPlace} />
      
      <Nav {...props} />

      <ScrollableAnchor id={'main'}>
        <section className="flex body-font h-screen md:items-center pt-20 px-3 md:pt-6 md:px-0 md:m-0 md:pt-0 bg-gradient-to-b from-purple-400 to-gray-0 ">
          <div className="max-w-7xl mx-auto text-center">
            <img src="https://res.cloudinary.com/bakedbean/image/upload/w_200,h_200,c_fill,r_max/IMG_2509.png" width="150" className="mx-auto mb-5" />
            <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">Experienced Technical Leadership</h2>
            <p className="mt-2 text-2xl leading-8 font-bold tracking-tight sm:text-4xl">
              Building healthy, productive teams
            </p>
            <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
              I am a proven leader in the software development industry with
              a track record of success. I focus on building great products by
              building even greater teams. I place emphasis on right sizing process,
              encouraging collaboration with stakeholders and staying healthy.
            </p>
            <div className="text-center mt-5">
              <div className="inline-block mr-3">
                <a href="http://github.com/bakedbean" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/github-logo.png" width="40px" /></a>
              </div>
              <div className="inline-block mr-2">
                <a href="http://www.linkedin.com/pub/eben-goodman/4/6/6a4" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/linkedin-logo-bw.png" width="40px" /></a>
              </div>
              <div className="inline-block">
                <a href="mailto: eben.goodman@gmail.com">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="40px">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </a>
              </div>
            </div>
            {/*<p className="mt-4 text-sm text-purple-900 hover:text-purple-500 lg:max-auto">
              <a href="#">Read more about my approach to team building and the SDLC</a>
            </p>*/}
          </div>
        </section>
      </ScrollableAnchor>

      <ScrollableAnchor id={'experience'}>
        <section className="flex body-font h-screen md:items-center pt-6 m-3 md:m-0 md:pt-0">
          <div className="max-w-7xl mx-auto">
            <div className="mb-5">
              <p className="mt-2 text-2xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
                Recent Experience
              </p>
            </div>
            <dl className="space-y-10 text-center sm:text-left md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <a onClick={() => setPlace('creditkey')} className="p-3 md:flex md:items-start rounded-lg hover:bg-gray-100">
                <img src="https://creditkey-assets.s3-us-west-2.amazonaws.com/ck-mark.png" className="mx-auto sm:mx-0" width="40px" />

                <div className="ml-4">
                  <p className="text-base font-medium text-2xl">
                    Credit Key (current)
                  </p>
                  <p className="mt-1 text-purple-900 text-sm italic font-semibold">
                    Los Angeles CA / Remote
                  </p>
                  <p className="mt-1 text-purple-700 text-sm font-semibold">
                    VP of Engineering
                  </p>
                  <p className="mt-1">
                    Instant B2B Point-of-Sale financing payment option
                  </p>
                </div>
              </a>
              <a onClick={() => setPlace('localvore')} className="p-3 md:flex md:items-start rounded-lg hover:bg-gray-100">
                <img src="https://egoodman-portfolio.s3.amazonaws.com/localvore.jpg" className="mx-auto sm:mx-0" width="40px" />

                <div className="ml-4">
                  <p className="text-base font-medium text-2xl">
                    Localvore
                  </p>
                  <p className="mt-1 text-purple-900 text-sm italic font-semibold">
                    Burlington VT / Remote
                  </p>
                  <p className="mt-1 text-purple-700 text-sm font-semibold">
                    Principle Front End Developer
                  </p>
                  <p className="mt-1">
                    Great deals on local food and local food sources
                  </p>
                </div>
              </a>
              <a onClick={() => setPlace('engineyard')} className="p-3 md:flex md:items-start rounded-lg hover:bg-gray-100">
                <img src="https://egoodman-portfolio.s3.amazonaws.com/engineyard.jpeg" className="mx-auto sm:mx-0" width="40px" />

                <div className="ml-4">
                  <p className="text-base font-medium text-2xl">
                    Engine Yard
                  </p>
                  <p className="mt-1 text-purple-900 text-sm italic font-semibold">
                    San Francisco CA / Remote
                  </p>
                  <p className="mt-1 text-purple-700 text-sm font-semibold">
                    Senior Front End Developer
                  </p>
                  <p className="mt-1">
                    Premier PaaS for AWS infrastructure
                  </p>
                </div>
              </a>
              <a onClick={() => setPlace('berklee')} className="p-3 md:flex md:items-start rounded-lg hover:bg-gray-100">
                <img src="https://egoodman-portfolio.s3.amazonaws.com/berklee.jpg" className="mx-auto sm:mx-0" width="40px" />

                <div className="ml-4">
                  <p className="text-base font-medium text-2xl">
                    Berklee College of Music
                  </p>
                  <p className="mt-1 text-purple-900 text-sm italic font-semibold">
                    Boston MA
                  </p>
                  <p className="mt-1 text-purple-700 text-sm font-semibold">
                    Director of Engineering
                  </p>
                  <p className="mt-1">
                    The world’s preeminent college for the study of music
                  </p>
                </div>
              </a>
            </dl>

            {/*<div className="lg:text-center">
              <p className="mt-4 text-sm text-purple-900 hover:text-purple-500 lg:max-auto">
                <a href="#">Read more about my past experience and roles</a>
              </p>
            </div>*/}
          </div>
        </section>
      </ScrollableAnchor>

      <ScrollableAnchor id={'tools'}>
        <section className="flex body-font h-screen items-center pt-6 m-3 md:m-0 md:pt-0">
          <div className="max-w-7xl text-center mx-auto">
            <div className="mb-7">
              <p className="mt-2 text-2xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
                Some of the tools I use
              </p>
            </div>

            <div className="grid grid-cols-5 gap-4 items-center">
              <div>
                <a href="https://reactjs.org" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/react.svg" width="50px" alt="react" /></a>
              </div>
              <div>
                <a href="https://redux.js.org" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/redux-logo.png" width="50px" alt="redux" /></a>
              </div>
              <div>
                <a href="https://reactrouter.com" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/react-router.svg" width="70px" alt="react router" /></a>
              </div>
              <div>
                <a href="https://www.postgresql.org" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/1200px-Postgresql_elephant.svg.png" width="50px" alt="postgres" /></a>
              </div>
              <div>
                <a href="https://www.mongodb.com" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/MongoDB-Emblem-1024x640.jpg" width="50px" alt="mongodb" /></a>
              </div>
              <div>
                <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/480px-JavaScript-logo.png" width="50px" alt="javascript" /></a>
              </div>
              <div>
                <a href="https://www.ruby-lang.org/en" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/ruby.png" width="50px" alt="ruby" /></a>
              </div>
              <div>
                <a href="https://rubyonrails.org" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/rails-logo.png" width="90px" alt="ruby" /></a>
              </div>
              <div>
                <a href="https://nodejs.org/en" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/node-logo.png" width="90px" alt="nodejs" /></a>
              </div>
              <div>
                <a href="https://expressjs.com" target="_new"><img src="https://egoodman-portfolio.s3.amazonaws.com/Expressjs.png" width="130px" alt="nodejs" /></a>
              </div>
            </div>

            {/*<div className="lg:text-center">
              <p className="mt-4 text-sm text-purple-900 hover:text-purple-500 lg:max-auto">
                <a href="#">Read more about what I'm working on today</a>
              </p>
            </div>*/}
          </div>
        </section>
      </ScrollableAnchor>
    </div>
  )
}

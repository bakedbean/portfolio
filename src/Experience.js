import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

export default function Experience({ place, setPlace }) {
  const [content, setContent] = useState();

  const escFunction = e => {
    if(e.keyCode === 27) {
      setContent(false);
    }
  }

  const resume = (<div className="mt-3 text-purple-900 hover:text-purple-500"><a href="http://ebengoodman.com/eben-goodman-resume.pdf" target="_new">View Résumé</a></div>);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return function cleanup() {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  useEffect(() => {
    switch (place) {
      case 'creditkey':
        setContent(<div className="flex flex-col justify-center text-center md:w-1/2">
          <img src="https://creditkey-assets.s3-us-west-2.amazonaws.com/ck-mark.png" className="mx-auto" width="40px" />
          <div className="text-3xl font-semibold mb-3">Credit Key</div>
          <div className="px-3">
            <p>
              At Credit Key we're solving the problems of supporting small businesses with real time credit.
              As Vice President of Engineering my primary role is to provide leadership and guidance to the
              engineering teams and define good process for product development.  
            </p>
            <p className="mt-3">
              As a technical manager at a startup my role with Credit Key also spans other areas ranging from 
              compliance to infrastructure to still getting my hands dirty and helping out with support, bugs 
              and features where and when possible.
            </p>
          </div>
          {resume}
        </div>);
        break;
      case 'localvore':
        setContent(<div className="flex flex-col justify-center text-center md:w-1/2">
          <img src="https://egoodman-portfolio.s3.amazonaws.com/localvore.jpg" className="mx-auto" width="40px" />
          <div className="text-3xl font-semibold mb-3">Localvore</div>
          <div className="px-3">
            <p>
              At Localvore I lead the buildout and deployment of new website powered by an Elixir API and Algolia search index.
              Localvore provided me with the opportunity to take lead on a big, greenfield front end project.  
            </p>
            <p className="mt-3">
              I was also able to bring my past experience to bear to help a fledgling startup bring in some process and diligence to their
              project management efforts. As a result we were able to leverage React, Redux and React Router to create a powerful search engine for local food deals and farm to table options.
            </p>
          </div>
          {resume}
        </div>);
        break;
      case 'engineyard':
        setContent(<div className="flex flex-col justify-center text-center md:w-1/2">
          <img src="https://egoodman-portfolio.s3.amazonaws.com/engineyard.jpeg" className="mx-auto" width="40px" />
          <div className="text-3xl font-semibold mb-3">Engine Yard</div>
          <div className="px-3">
            <p>
              Engine Yard provides a Platform as a Service (PaaS) for deploying application clusters to various cloud 
              hosting providers. At Engine Yard I worked on the front end team building out Engine Yard's next generation PaaS dashboard.
              I joined Engine Yard after several years of working as a manager and leader at various insitutions and decided I wanted a reset.
            </p>
            <p className="mt-3">
              At Engine Yard I worked as an individual contributor on a team of outstanding front end developers and designers.  I also had
              the honor to report to one of the best people managers I've ever worked with in my career.  The lessons I learned at Engine Yard
              have stayed with me and helped me to raise my game as a leader.
            </p>
          </div>
          {resume}
        </div>);
        break;
      case "berklee":
        setContent(<div className="flex flex-col justify-center text-center md:w-1/2">
          <img src="https://egoodman-portfolio.s3.amazonaws.com/berklee.jpg" className="mx-auto" width="40px" />
          <div className="text-3xl font-semibold mb-3">Berklee College of Music</div>
          <div className="px-3">
            <p>
              Berklee College of Music is the premiere institution for receiving an educaton in music.
              Berklee established a cutting edge online music school experience to allow continuing education for music professionals.
              I was hired to lead the operational engineering team to help migrate from a legacy ERP system to a combination of
              in-house developed web applications and 3rd party integrations.
            </p>
            <p className="mt-3">
              Within my first year at Berklee I also took over managing the infrastructure ops team (AWS) and the marketing
              development team.  I brought improved process and collaboration to the online school's technical projects by
              allowing these disparate teams to function as a cross pollinated organization.
            </p>
          </div>
          {resume}
        </div>);
        break;
      default:
        setContent(false);
    }
  }, [place]);

  return (
    <div className={classNames('modal opacity-0 fixed w-full h-full top-0 left-0 flex items-center justify-center', {
        'pointer-events-none': !content,
        'modal-active opacity-95': content
      })}>
      <div className="modal-overlay absolute w-full h-full bg-white opacity-95"></div>
      <div className="modal-container fixed w-full h-full z-50 overflow-y-auto">

        <div onClick={() => setPlace(false)} className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-16 mr-4 text-black text-sm z-50">
          <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
          (Esc)
        </div>

        <div className="flex justify-center items-center pb-2 h-full">
          {content}
        </div>
      </div>
    </div>
  )
}

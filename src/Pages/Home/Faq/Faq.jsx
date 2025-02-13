import React from "react";

const Faq = () => {
  return (
    <div className="w-8/12 mx-auto mt-10">
      <div className="collapse collapse-plus bg-base-200 my-2">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-orange-300">
        What is Fixitnest?
        </div>
        <div className="collapse-content">
          <p>Fixitnest is your one-stop solution platform for all day-to-day personal and professional service needs, all gathered in one daali (platform). From electricians, cleaners, and plumbers to drivers and skilled freelancers - you can find, book, and hire the right person to do the job you need done at home or work, through our website and app.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium bg-orange-300">
        How does Fixitnest work?
        </div>
        <div className="collapse-content">
          <p>Easy! Use our app/ website to find the person you need to get the job done! You put in your location and desired service, and we connect you to the relevant service providers closest to you. Choose the SP you want, based on their ratings and pre-set service charges, and we will help you book and schedule the job, and ensure the SP arrives at the right location, following health and safety protocols. Our Customer Service agents are there to remotely monitor job status till completion, and support you during any time.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium bg-orange-300">
        What are your services?
        </div>
        <div className="collapse-content">
          <p>We have service providers skilled in over 100 services - Driver? Electrician? Plumber? Photographer? Content Writer? Find them all and more here! Please find a full list of our services form our website.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;

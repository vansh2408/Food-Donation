import React from 'react';
import './about.css'

const About = () => {
  return (
    <div>
        <br/>
        <br/>
      <div className="coverc bg-cover bg-center flex items-center justify-center">
        <p className="title text-center items-center text-[38px]">"Welcome to <u className="text-green-500">Food Donate</u>"</p>
      </div>
        <br />
        <br />
        <br />
      <div className="container mx-auto mt-8">
        <p className="title text-3xl text-center underline decoration-[5px] decoration-green-500">About us</p>
        <div className="para mt-4 text-lg">
          <p>We are a team of passionate individuals committed to addressing the issue of food waste in India. Our goal is to create a system that connects food donors with charities and NGOs, while also reducing the environmental impact of food waste.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

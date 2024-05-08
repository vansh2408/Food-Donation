import React, {useState} from "react";
import "./about.css";
import backgroundImage from "../assets/image.jpg";

const Contact = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if(activeAccordion === index){
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <div>
      <section
        className="bg-cover h-[25.3rem]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></section>

      <p className="heading my-5 text-black">contact us</p>

      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="contact-form flex flex-col items-cente w-[50%]">
          <form
            action="feedback.php"
            method="post"
            className="flex flex-col items-center"
          >
            <label htmlFor="name" className="my-2 w-full text-black">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border box-border w-full border-gray-400 px-2 py-1 rounded my-1"
            />

            <label htmlFor="email" className="my-2 w-full text-black">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-400 px-2 py-1 rounded my-1 w-full"
            />

            <label htmlFor="message" className="my-2 w-full text-black">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-400 px-2 py-1 rounded my-1 w-full"
            ></textarea>

            <input
              type="submit"
              value="Send"
              name="send"
              className="bg-green-500 text-white w-full px-4 py-2 rounded my-4 cursor-pointer hover:bg-green-600"
            />
          </form>
        </div>

        <div className="contact-info p-[10px] justify-center items-center">
          <p>Email: fooddonate@gmail.com</p>
          <p>Phone: +91-8307611216</p>
          <p>Address: BML Munjal College</p>
        </div>
      </div>

      <div className="help my-8">
        <p className="title text-3xl text-center py-4">Help & FAQs?</p>

        {/* Accordion items */}
        {faqData.map((faq, index) => (
          <div key={index}>
            <button
              className="accordion bg-gray-200 hover:bg-gray-300 text-left w-full px-4 py-2 mb-2 rounded"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
            </button>
            {activeAccordion === index && (
              <div className="panel bg-gray-100 px-4 py-2 mb-2">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

const faqData = [
  {
    question: 'How to donate food?',
    answer: (
      <>
        <p>1) Click on donate in the home page</p>
        <p>2) Fill the details</p>
        <p>3) Click on submit</p>
      </>
    ),
  },
  {
    question: 'How will my donation be used?',
    answer: (
      <p>
        Your donation will be used to support our mission and the various
        programs and initiatives that we have in place. Your donation will help
        us to continue providing assistance and support to those in need. You
        can find more information about our programs and initiatives on our
        website. If you have any specific questions or concerns, please feel
        free to contact us.
      </p>
    ),
  },
  {
    question: 'What should I do if my food donation is near or past its expiration date?',
    answer: (
      <p>
        We appreciate your willingness to donate, but to ensure the safety of
        our clients, we can't accept food that is near or past its expiration
        date. We recommend checking expiration dates before making a donation
        or contacting us for further guidance.
      </p>
    ),
  },
];

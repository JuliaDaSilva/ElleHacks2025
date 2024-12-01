import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "When and where is ElleHacks?",
      answer:
        "ElleHacks will be hosted at York University (Keele Campus) in Toronto, Ontario, Canada on February, 2024."
    },
    {
      question: "What's a hackathon?",
      answer:
        "At ElleHacks, you'll get to make tons of new friends, network with recruiters, and pick up cool skills through workshops, speaker sessions, activities, and games!"
    },
    {
      question: "Do I need to know how to code?",
      answer:
        "Nope! Students of all skill levels are welcome at ElleHacks (even if you have absolutely zero experience)! Tons of hackathon participants are total newbies, and we'll be there to support you through workshops and mentorship. :) Still not sure? Check this out for inspiration: https://medium.com/tfogo/hackathons-are-for-beginners-77e9c9cb000#.cj21niskl"
    },
    {
      question: "Who can apply?",
      answer:
        "We welcome all students from underrepresented gender groups (i.e., women and gender-diverse students) who either live or attend school in North America. Only students who are currently enrolled at a high school or college/university, or have graduated within the past 12 months, are eligible to attend. You must bring a valid student or government-issued ID card for admission."
    },
    {
      question: "Is ElleHacks in-person this year?",
      answer:
        "Yes! ElleHacks will be in-person at York University in Toronto. There will be no option to participate in the event virtually."
    },
    {
      question: "What in-person accommodations are available?",
      answer: "This FAQ response is coming soon :)."
    },
    {
      question: "When is the last day to sign up?",
      answer: "This FAQ response is coming soon :)."
    },
    {
      question: "Will there be swag?",
      answer: "Yes!!"
    },
    {
      question: "Do I need to find a team?",
      answer:
        "At ElleHacks, we welcome you to compete in teams of 1-4 students. ➝ If you already have a team, we’ll ask you to list their names during registration, the first day of the event. ➝ If you’d like to look for teammates later, we’ll open our Discord server a week early for you to search for a team. ➝ If you’d like help finding a team, we can match you with a team before or on the first day of the event."
    },
    {
      question: "Can I start working on my project before the event?",
      answer:
        "No. All participants are required to start and complete their project during the hackathon. Any project that starts before the event will be disqualified."
    },
    {
      question: "Can I submit a project I’ve used at another hackathon/school assignment/anywhere else?",
      answer: "No."
    }
  ];
  
  return (
    <div className="faq-container select-none">
      <h1 className="faq-title">FAQ</h1>
      <div className="faq-items">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "active" : ""}`}>
            <div className="faq-header" onClick={() => toggleFAQ(index)}>
              <span className="faq-question">{faq.question}</span>
              <span className="faq-icon"></span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Accordion({ question, answer, isOpen, onClick }) {
  return (
    <div className={`accordion ${isOpen ? "active" : ""}`} onClick={onClick}>
      <div className="question">
        <span className="icon">
          {isOpen ? (
            <FontAwesomeIcon icon={faMinus} className="m-1" />
          ) : (
            <FontAwesomeIcon icon={faPlus} className="m-1" />
          )}
        </span>
        {question}
      </div>
      <div className="answer">{isOpen && answer}</div>
    </div>
  );
}

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "When does the workshop start?",
      answer: "Workshop is on Saturday, 18 May 2024, 07:00 p.m. IST ",
    },
    {
      question: "Are there any pre-requisites to attend this workshop?",
      answer:
        "You just need an interest in the world of WhatsApp Marketing & Automation. No prior knowledge about any software is required.",
    },
    {
      question: " Is the workshop live or pre-recorded?",
      answer:
        "It is a completely LIVE workshop with a total duration of 3 hours.",
    },
    {
      question: "Timings of the workshop?",
      answer: "Workshop will starts at Saturday, 7 PM IST",
    },
    {
      question: "Do you get notes & assignments to practice?",
      answer:
        "Absolutely. It is a completely hands-on Workshop where you will also get notes, reference material & assignments for your future reference.",
    },
    {
      question:
        "I've never run & setup Marketing or Automation on WhatsApp. Am I eligible for this Workshop?",
      answer:
        "Absolutely! This Workshop begins from basics and will teach you everything from the beginning and scale to advanced Systems & Methods.",
    },
    {
      question: "Is it a certified workshop?",
      answer: "Yes! It is a Skill Nation Certified Workshop.",
    },
    {
      question: "Will it be recorded?",
      answer:
        "No, it won’t be recorded but you will get detailed notes for your references",
    },
  ];

  return (
    <div className="containerOf">
      <h2 className="question-main">Frequently Asked Questions</h2>
      <h4 style={{ textAlign: "center", fontSize: "15px", color: "#000" }}>
        We have answered all common questions below that you might have about
        the workshop. For any further queries, please contact:9533037680
      </h4>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={activeIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
}

export default FAQSection;

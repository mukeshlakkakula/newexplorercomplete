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
            <FontAwesomeIcon icon={faMinus} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
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
      question: "  When is the next tourism workshop scheduled?",
      answer:
        "  The next tourism workshop is scheduled for Saturday, 25th May 2024, at 10:00 a.m. IST.",
    },
    {
      question:
        "  Are there any prerequisites for attending the tourism workshop?",
      answer:
        "  No prerequisites are required. The workshop is open to anyone interested in learning about tourism.",
    },
    {
      question: "  What topics will be covered in the tourism workshop?",
      answer:
        "  The workshop will cover various aspects of tourism, including destination management, sustainable tourism practices, and customer service in the tourism industry.",
    },
    {
      question: "  Are there any certification courses available in tourism?",
      answer:
        "  Yes, we offer certification courses in tourism management, tour guiding, and hospitality management.",
    },
    {
      question: "  How can I enroll in the tourism courses?",
      answer:
        "  You can enroll in our tourism courses by visiting our website and filling out the enrollment form.",
    },
  ];

  return (
    <div className="containerOf">
      <h2 className="question-main">Tourism Workshop FAQ</h2>
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

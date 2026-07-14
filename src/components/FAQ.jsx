import { useState } from "react";

function FAQ() {

  const faqs = [
    {
      question: "How much can I save with solar?",
      answer:
        "Your savings depend on your monthly electricity consumption, roof size and system capacity. Most residential customers reduce their electricity bills by 70–90%, resulting in substantial long-term savings throughout the life of the system."
    },
    {
      question: "How long does installation take?",
      answer:
        "Once the site survey, design and approvals are completed, a residential solar installation generally takes between 2–5 working days. Commercial projects may require additional time depending on their scale."
    },
    {
      question: "Do you assist with government subsidy?",
      answer:
        "Yes. We guide customers through the complete subsidy process, including eligibility verification, documentation, application submission and inspection coordination."
    },
    {
      question: "How long do solar panels last?",
      answer:
        "Premium solar panels are designed to perform efficiently for more than 25 years while requiring very little maintenance."
    }
  ];

  const [active, setActive] = useState(null);

  return (

    <section className="faq-section">

      <h2>Everything You Need to Know</h2>

      <div className="faq-list">

        {faqs.map((faq,index)=>(

          <div

            className={`faq-item ${active===index?"active":""}`}

            key={index}

            onMouseEnter={()=>setActive(index)}

            onMouseLeave={()=>setActive(null)}

            onClick={()=>setActive(active===index?null:index)}

          >

            <h3>{faq.question}</h3>

            <div className="faq-answer">

              <p>{faq.answer}</p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default FAQ;
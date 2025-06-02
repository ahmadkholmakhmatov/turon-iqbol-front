import FAQAccordion from "../faq-accordion/FAQAccordion";

const faqData = [
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for creating modern, responsive designs without writing custom CSS.",
  },
  {
    question: "How does the accordion work?",
    answer:
      "Clicking on a question expands the answer. You can toggle multiple accordions as needed.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur eius dolorem nesciunt alias unde vero explicabo labore recusandae iusto inventore.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam quisquam reprehenderit corporis consequatur accusamus at eveniet perferendis unde ipsa ea qui animi cum itaque quibusdam sed, id velit vitae laudantium iste ut saepe. Voluptatum molestias maiores adipisci placeat quam?",
  },
  { question: "How does billing work?", answer: "It is really easy with Visa" },
];

const FAQ = () => {
  return (
    <div className="flex flex-col items-center gap-16 px-28 py-24">
      <div className="max-w-lg text-center">
        <h1 className="text-black font-medium text-3xl mb-5">
          Frequently asked questions
        </h1>
        <p className="text-gray-600 text-lg">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="w-[768px] mx-auto">
        <FAQAccordion data={faqData} />
      </div>

      <div className="flex flex-col items-center gap-8 w-full py-8 bg-gray-50 rounded-2xl">
        <img src="/images/avatarg.svg" alt="Avatar" className="w-30 h-14" />
        <div className="text-center">
          <h3 className="text-black text-xl font-semibold mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 text-lg">
            Can’t find the answer you’re looking for? Please chat with our
            friendly team.
          </p>
        </div>
        <button className="text-white font-semibold w-36 py-3 px-5 rounded-full border border-green-600 bg-green-600 shadow-sm">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQ;

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import MinusIcon from "../../assets/icons/MinusIcon";
import PlusIcon from "../../assets/icons/PlusIcon";

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
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-[64px] px-[112px] py-[96px]">
      <div className="max-w-[768px] text-center">
        <h1 className="text-black font-franie text-[36px] font-medium leading-[44px] mb-5">
          Frequently asked questions
        </h1>
        <p className="text-gray-600 font-inter text-xl leading-[30px]">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <Accordion
        allowZeroExpanded
        className="w-full"
        onChange={(uuid) => {
          setOpenIndex(typeof uuid === "string" ? parseInt(uuid) : null);
        }}
      >
        {faqData.map((item, index) => (
          <AccordionItem key={index} uuid={index.toString()}>
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between items-center bg-gray-100 p-4 rounded-lg text-lg font-semibold">
                {item.question}
                {openIndex === index ? <MinusIcon /> : <PlusIcon />}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-4 text-gray-600">
              {item.answer}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex flex-col items-center gap-8 w-full py-8 bg-gray-50 rounded-2xl">
        <img src="/images/avatarg.svg" alt="" className="w-[120px] h-[56px]" />

        <div className="text-center">
          <h3 className="text-black font-franie text-xl font-semibold leading-[30px] mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 font-inter text-lg leading-[28px]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <button className="text-white font-inter font-semibold leading-[24px] w-[148px] py-3 px-5 rounded-[50px] border border-green-600 bg-green-600 shadow-sm">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQ;

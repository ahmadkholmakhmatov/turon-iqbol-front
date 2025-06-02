import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import MinusIcon from "../../assets/icons/MinusIcon";
import PlusIcon from "../../assets/icons/PlusIcon";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  data: FAQItem[];
}

interface AccordionItemProps {
  header: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  header,
  className,
  ...rest
}) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className={`flex justify-between items-center w-full pt-6`}>
        <p className="font-franie text-lg font-medium">{header}</p>
        <span
          className={`transition-transform duration-300 ${
            isEnter ? "rotate-180" : "rotate-0"
          }`}
        >
          {isEnter ? <MinusIcon /> : <PlusIcon />}
        </span>
      </div>
    )}
    className={`${className}`}
    buttonProps={{
      className: () => `flex w-full text-left `,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "text-gray-600 font-inter pt-2" }}
  />
);

const FAQAccordion: React.FC<FAQAccordionProps> = ({ data }) => {
  return (
    <Accordion className="w-full" transition transitionTimeout={200}>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          header={item.question}
          className={index === data.length - 1 ? "pb-8" : "border-b pb-8"}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;

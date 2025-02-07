import PatternService from "../../assets/design-patterns/PatternService";
import CheckboxIcon from "../../assets/icons/CheckboxIcon";
import CustomFeaturedIcon from "../../assets/icons/CustomFeaturedIcon";
import ContactInfo from "../../components/contact/ContactInfo";

interface Service {
  id: number;
  className: string;
  title: string;
  support_text: string;
  checkbox: string[];
  img: string;
}

const services: Service[] = [
  {
    id: 1,
    className: "pagination",
    title: "Pagination",
    support_text:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    checkbox: [
      "Leverage automation to move fast",
      "Always give customers a human to chat to",
      "Automate customer support and close leads faster",
    ],
    img: "/images/books/sBook1.png",
  },
  {
    id: 2,
    className: "service-2",
    title: "Editing",
    support_text:
      "Become a published author in only 5 easy steps. Write and design your book using creative tools made easy to use. Get published worldwide for free in ebook and paperback formats and earn high royalty. Take your story to the screen by pitching to studios and professionals industry-wide.",
    checkbox: [
      "Keep your customers in the loop with live chat",
      "Embed help articles right on your website",
      "Customers never have to leave the page to find an answer",
    ],
    img: "/images/books/sBook2.png",
  },
  {
    id: 3,
    className: "design",
    title: "Creating design",
    support_text:
      "Using our cover creator tools, create an eye-catching book cover in seconds with the right images and fonts to help ensure your book stands out.",
    checkbox: [
      "Filter, export, and drilldown on the data quickly",
      "Save, schedule, and automate reports to your inbox",
      "Connect the tools you already use with 100+ integrations",
    ],
    img: "/images/books/sBook3.png",
  },
  {
    id: 4,
    className: "service-2",
    title: "Taking ISBN",
    support_text:
      "Distribute and Sell your book in paperback and eBook format worldwide on 400+ retailers across all global regions on Amazon, Barnes & Noble, Google Play Books, and more.",
    checkbox: [
      "Keep your customers in the loop with live chat",
      "Embed help articles right on your website",
      "Customers never have to leave the page to find an answer",
    ],
    img: "/images/books/sBook4.png",
  },
  {
    id: 5,
    className: "print",
    title: "Ofset va sitraxvoy pechat",
    support_text:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    checkbox: [
      "Filter, export, and drilldown on the data quickly",
      "Save, schedule, and automate reports to your inbox",
      "Connect the tools you already use with 100+ integrations",
    ],
    img: "/images/books/sBook5.png",
  },
  {
    id: 6,
    className: "service-2",
    title: "Pechatdan keyingi abrabotka",
    support_text:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    checkbox: [
      "Keep your customers in the loop with live chat",
      "Embed help articles right on your website",
      "Customers never have to leave the page to find an answer",
    ],
    img: "/images/books/sBook6.png",
  },
];

const Services = () => {
  return (
    <div className="">
      <div className="bg-green-50 flex flex-col items-center gap-6 mx-auto pt-24">
        <h1 className="text-green-900 text-center font-franie text-[48px] font-normal leading-normal max-w-[1024px]">
          The reader is more than ready to be wooed and mystified
        </h1>
        <p className="text-green-700 text-center font-inter text-xl leading-[30px] max-w-[768px]">
          It is this very ease that puts pressure on the writer to maintain the
          believable nature of the fantasy they are weaving. The spell can never
          be broken.
        </p>
      </div>

      <div className="pt-16 w-full bg-no-repeat bg-contain relative pb-24">
        <span className="absolute top-0 right-0 left-0 mx-auto">
          <PatternService />
        </span>

        <div className="w-[916px] h-[516px] bg-gray-500 border border-black rounded-[10px] mx-auto z-100 relative"></div>
      </div>

      <div className="flex flex-col items-center gap-24 pb-24">
        <div className="text-center max-w-[768px]">
          <h2 className="text-black text-[36px] font-franie mb-5">
            Beautiful analytics to grow smarter
          </h2>
          <p className="text-gray-600 text-xl leading-[30px] font-inter">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex items-center gap-24 w-full max-w-6xl ${
              service.className === "service-2" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <div className="mb-6">
                <CustomFeaturedIcon color="#3CCB7F" />
              </div>
              <h3 className="text-black text-[30px] font-medium font-franie mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 font-inter text-lg mb-8">
                {service.support_text}
              </p>
              <ul className="space-y-5">
                {service.checkbox.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-600 text-lg font-inter"
                  >
                    <CheckboxIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-end bg-gray-200 rounded-lg overflow-hidden max-h-[512px] w-[100%]">
              <img
                src={service.img}
                alt={service.title}
                className="object-cover w-full max-w-md"
              />
            </div>
          </div>
        ))}
      </div>

      <ContactInfo />
    </div>
  );
};

export default Services;

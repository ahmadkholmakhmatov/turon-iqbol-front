import ContactInfo from "../../components/contact/ContactInfo";
import FAQ from "../../components/faq/FAQ";

const Contact = () => {
  return (
    <div>
      <div className="py-[96px] text-center w-[960px] mx-auto">
        <h1 className="text-black font-franie text-[48px] font-normal leading-[48px]">
          Dedicated to making the world a better place
        </h1>
        <p className="text-gray-600 font-inter text-[20px] mx-auto mt-[24px]">
          Our international network of printers handles each book individually,
          ensuring the highest-quality custom book printing in the industry.
        </p>
      </div>

      <div className="flex ">
        <div className="h-[68.75rem] flex-1 overflow-hidden">
          <img
            src="/images/image.png"
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
        <div className="flex-1 ">
          <form className="border-none p-24">
            <div className="mb-12">
              <h1 className="text-gray-900 font-inter text-5xl font-semibold leading-[3.75rem] mb-6">
                Let’s level up your brand, together
              </h1>
              <p className="text-gray-600 font-inter text-xl font-normal leading-[1.875rem]">
                You can reach us anytime via{" "}
                <span className="text-green-600 font-medium">
                  hi@turoniqbol.com
                </span>
              </p>
            </div>

            <div className="flex gap-8 mb-6">
              <div className="flex-1">
                <label className="text-gray-700 font-inter text-sm font-medium mb-1">
                  First name
                </label>
                <input
                  className="p-2.5 w-full rounded-md border border-gray-300 bg-white shadow-xs placeholder-gray-500 text-base font-normal leading-6"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-700 font-inter text-sm font-medium mb-1">
                  Last name
                </label>
                <input
                  className="p-2.5 w-full rounded-md border border-gray-300 bg-white shadow-xs placeholder-gray-500 text-base font-normal leading-6"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-gray-700 font-inter text-sm font-medium mb-1 block">
                Email
              </label>
              <input
                className="p-2.5 w-full rounded-md border border-gray-300 bg-white shadow-xs placeholder-gray-500 text-base font-normal leading-6"
                type="email"
                placeholder="you@company.com"
              />
            </div>
            <div className="mb-6">
              <label className="text-gray-700 font-inter text-sm font-medium mb-1 block">
                Phone number
              </label>
              <input
                className="p-2.5 w-full rounded-md border border-gray-300 bg-white shadow-xs placeholder-gray-500 text-base font-normal leading-6"
                type="tel"
              />
            </div>
            <div className="mb-6">
              <label className="text-gray-700 font-inter text-sm font-medium mb-1 block">
                Message
              </label>
              <textarea
                className="p-3 w-full rounded-md border border-gray-300 bg-white shadow-xs placeholder-gray-500 text-base font-normal leading-6 min-h-[140px]"
                placeholder="Leave us a message..."
              ></textarea>
            </div>
            <div className="mb-8">
              <label className="text-gray-700 font-inter text-sm font-medium mb-4 block">
                Services
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  "Website design",
                  "Content creation",
                  "UX design",
                  "Strategy & consulting",
                  "User research",
                  "Other",
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={service}
                      value={service.toLowerCase().replace(/ /g, "-")}
                    />
                    <label
                      htmlFor={service}
                      className="text-gray-700 font-inter text-base font-medium"
                    >
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <button className="text-white font-inter text-base font-semibold leading-6 p-3.5 w-full rounded-[50px] border border-green-600 bg-green-600 shadow-xs">
              Get started
            </button>
          </form>
        </div>
      </div>

      <ContactInfo />

      <FAQ />
    </div>
  );
};

export default Contact;

import CustomFeaturedIcon from "../../assets/icons/CustomFeaturedIcon";

const ContactInfo = () => {
  const phoneNumber = "+1234567890";
  const sEmail = "sales@turoniqbol.com";
  const supportEmail = "support@turoniqbol.com";
  const subject = "Hello";
  const body = "I wanted to reach out to you regarding...";

  const mailtoLinkSales = `mailto:${sEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const mailtoLinkSupport = `mailto:${supportEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="px-28 py-24">
      <div className="mb-16">
        <h1 className="text-black font-medium text-[30px] font-franie mb-5">
          We’d love to hear from you
        </h1>
        <p className="text-gray-600 text-xl font-inter">
          Our friendly team is always here to chat.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-inter">
        <div className="flex flex-col bg-gray-50 py-12 px-6 rounded-lg items-start">
          <CustomFeaturedIcon />
          <h2 className="text-black text-xl font-semibold mt-8 mb-2">
            Chat to sales
          </h2>
          <p className="text-gray-600 text-base mb-5">
            Speak to our friendly team.
          </p>
          <a
            href={mailtoLinkSales}
            className="text-green-700 font-semibold text-base"
          >
            sales@turoniqbol.com
          </a>
        </div>
        <div className="flex flex-col bg-gray-50 py-12 px-6 rounded-lg items-start">
          <CustomFeaturedIcon />
          <h2 className="text-black text-xl font-semibold mt-8 mb-2">
            Chat to support
          </h2>
          <p className="text-gray-600 text-base mb-5">We’re here to help.</p>
          <a
            href={mailtoLinkSupport}
            className="text-green-700 font-semibold text-base"
          >
            support@turoniqbol.com
          </a>
        </div>
        <div className="flex flex-col bg-gray-50 py-12 px-6 rounded-lg items-start">
          <CustomFeaturedIcon />
          <h2 className="text-black text-xl font-semibold mt-8 mb-2">
            Visit us
          </h2>
          <p className="text-gray-600 text-base mb-5">Visit our office HQ.</p>
          <a
            href="https://maps.app.goo.gl/cqBHmaUAPd3EoQ9M6"
            className="text-green-700 font-semibold text-base"
          >
            100 Smith Street Collingwood VIC 3066 AU
          </a>
        </div>
        <div className="flex flex-col bg-gray-50 py-12 px-6 rounded-lg items-start">
          <CustomFeaturedIcon />
          <h2 className="text-black text-xl font-semibold mt-8 mb-2">
            Call us
          </h2>
          <p className="text-gray-600 text-base mb-5">
            Mon-Fri from 8am to 5pm.
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="text-green-700 font-semibold text-base"
          >
            +1 (555) 000-0000
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

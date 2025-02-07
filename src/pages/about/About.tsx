import CustomFeaturedIcon from "../../assets/icons/CustomFeaturedIcon";
import StarIcon from "../../assets/icons/feauture-icons/StarIcon";
import FAQ from "../../components/faq/FAQ";
import StatsSection from "../../components/stats/StatsSection";

const About = () => {
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

      <div className="px-[112px] pb-24">
        <StatsSection />
      </div>

      <div className="px-20 py-24">
        <div className="max-w-[990px] mx-auto text-center">
          <h1 className="text-black font-franie text-[36px] mb-5">
            Cutting-edge features for advanced analytics
          </h1>
          <p className="text-gray-600 font-inter text-xl max-w-[830px] mx-auto">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="pt-16 flex flex-col items-center">
          <div className="flex justify-center bg-gray-100 rounded-t-full px-[98px] pt-[124px]">
            <img
              src="/images/books/book3.jpeg"
              alt=""
              className="w-[365px] h-[516px] object-cover rounded-t-full"
            />
          </div>

          <div className="flex w-full px-8 mt-[80px]">
            <div className="flex-1 text-center border-t-4 border-gray-100 px-4 pt-6 hover:border-green-500">
              <h3 className="text-black font-franie text-xl font-medium mb-2">
                Our Ethical Standards
              </h3>
              <p className="text-gray-600 font-inter">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
            <div className="flex-1 text-center border-t-4 border-gray-100 px-4 pt-6 hover:border-green-500">
              <h3 className="text-black font-franie text-xl font-medium mb-2">
                Our Quality Standards
              </h3>
              <p className="text-gray-600 font-inter">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
            <div className="flex-1 text-center border-t-4 border-gray-100 px-4 pt-6 hover:border-green-500">
              <h3 className="text-black font-franie text-xl font-medium mb-2">
                Our Origin Story
              </h3>
              <p className="text-gray-600 font-inter">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 py-24 bg-gray-50">
        <div className="max-w-[768px] mb-[64px] px-8">
          <h1 className="font-franie text-gray-900 text-[36px] font-medium leading-[44px] mb-[20px]">
            Overflowing with useful features
          </h1>
          <p className="text-gray-600 font-inter text-[20px] leading-[30px]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="flex gap-[64px] items-stretch px-8">
          <div className="flex-1 flex flex-col gap-[48px]">
            <div className="flex flex-col">
              <StarIcon />
              <h3 className=" font-franie text-gray-900 text-[20px] font-medium leading-[30px] mb-[8px]">
                Share team inboxes
              </h3>
              <p className=" font-inter text-gray-600 text-[16px] leading-[24px]">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
            <div className="flex flex-col">
              <StarIcon />
              <h3 className="text-gray-900 font-franie text-[20px] font-medium leading-[30px] mb-[8px]">
                Deliver instant answers
              </h3>
              <p className="text-gray-600 font-inter text-[16px] leading-[24px]">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>
            <div className="flex flex-col">
              <StarIcon />
              <h3 className="text-gray-900 font-franie text-[20px] font-medium leading-[30px] mb-[8px]">
                Manage your team with reports
              </h3>
              <p className="text-gray-600 font-inter text-[16px] leading-[24px]">
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-[8px] overflow-hidden">
            <img
              src="/images/aBackground.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="px-[112px] py-[96px]">
        <div className="flex gap-[72px] mb-[64px]">
          <div className="flex-1">
            <h1 className="text-gray-900 font-franie text-[36px] font-medium leading-[44px] mb-5">
              Introducing team inboxes
            </h1>
            <p className="text-gray-600 font-inter text-xl leading-[30px]">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-[48px]">
            <div className="flex items-center gap-8">
              <CustomFeaturedIcon color="#087443" />
              <div className="pt-[10px]">
                <h3 className="text-gray-900 font-franie text-xl font-medium leading-[30px] mb-2">
                  Share team inboxes
                </h3>
                <p className="text-gray-600 font-inter leading-[24px]">
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <CustomFeaturedIcon color="#087443" />
              <div className="pt-[10px]">
                <h3 className="text-gray-900 font-franie text-xl font-medium leading-[30px] mb-2">
                  Deliver instant answers
                </h3>
                <p className="text-gray-600 font-inter leading-[24px]">
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[572px] rounded-[12px] overflow-hidden">
          <img
            src="/images/baBackground.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <FAQ />
    </div>
  );
};

export default About;

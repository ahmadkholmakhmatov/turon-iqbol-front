import InstagramLogo from "../../assets/icons/InstagramLogo";
import LogoLight from "../../assets/icons/LogoLight";
import TelegramLogo from "../../assets/icons/TelegramLogo";
import TwitterLogo from "../../assets/icons/TwitterLogo";

const Footer = () => {
  return (
    <>
      <div
        className="bg-green-800 flex flex-col items-center gap-[40px] w-full py-[112px] px-[64px] bg-no-repeat bg-contain"
        style={{ backgroundImage: `url('/images/footer.svg')` }}
      >
        <div className="text-center">
          <h1 className="text-white text-[36px] font-semibold leading-[44px] tracking-[-0.72px] mb-[24px]">
            Connect with our communities
          </h1>
          <p className="text-green-100 text-[20px] leading-[30px] font-normal mx-auto w-[65%]">
            We treat others with professionalism and respect, assuming positive
            intent as we exchange in honest dialogue across our organization.
          </p>
        </div>
        <div className="flex gap-[12px]">
          <button className="w-[185px] py-[12px] px-[20px] text-gray-700 bg-white rounded-full font-semibold text-[16px] leading-[24px] shadow-sm">
            Contact us
          </button>
          <button className="w-[185px] py-[12px] px-[20px] bg-green-500 text-white rounded-full font-semibold text-[16px] leading-[24px] shadow-sm border border-green-500">
            Explore books
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full px-16 py-12 border-t border-green-600 bg-green-800">
        <div className="flex gap-6 text-green-400 w-[320px]">
          <TwitterLogo />
          <TelegramLogo />
          <InstagramLogo />
        </div>

        <div className="flex justify-center ">
          <LogoLight />
        </div>

        {/* Copyright */}
        <div className="text-green-300 font-inter font-normal text-right w-[320px]">
          &copy; 2024 Turon Iqbol. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;

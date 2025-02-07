import ArrowIcon from "../../assets/icons/ArrowIcon";
import CloudSmileIcon from "../../assets/icons/feauture-icons/CloudSmileIcon";
import FlagIcon from "../../assets/icons/feauture-icons/FlagIcon";
import HeartIcon from "../../assets/icons/feauture-icons/HeartIcon";
import SmileIcon from "../../assets/icons/feauture-icons/SmileIcon";
import StarIcon from "../../assets/icons/feauture-icons/StarIcon";
import TargetIcon from "../../assets/icons/feauture-icons/TargetIcon";
import FeatureCard from "../../components/feature-card/FeatureCard";
import TeamSlider from "../../components/sliders/TeamSlider";

// import "swiper/css";

const teamMembers = [
  {
    id: 1,
    name: "Alisa Hester",
    position: "Founder & CEO",
    about:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    img: "/images/staff/s1.png",
  },
  {
    id: 2,
    name: "Rich Wilson",
    position: "Engineering Manager",
    about: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    img: "/images/staff/s2.png",
  },
  {
    id: 3,
    name: "Annie Stanley",
    position: "Product Manager",
    about: "Former PM for Airtable, Medium, Ghost, and Lumi.",
    img: "/images/staff/s3.png",
  },
  {
    id: 4,
    name: "Johnny Bell",
    position: "Frontend Developer",
    about: "Former frontend dev for Linear, Coinbase, and Postscript.",
    img: "/images/staff/s4.png",
  },
  {
    id: 5,
    name: "Mia Ward",
    position: "Backend Developer",
    about: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
    img: "/images/staff/s5.png",
  },
  {
    id: 6,
    name: "Thanos",
    position: "Destroyer of Worlds",
    about: "Former King Of Titan who committed genocide in order to do good",
    img: "/images/staff/s6.png",
  },
];

const features = [
  {
    id: 1,
    name: "Care about our team",
    info: "Understand what matters to our employees. Give them what they need to do their best work.",
    icon: <SmileIcon />,
  },
  {
    id: 2,
    name: "Be excellent to each other",
    info: "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.",
    icon: <HeartIcon />,
  },
  {
    id: 3,
    name: "Pride in what we do",
    info: "Value quality and integrity in everything we do. At all times. No exceptions.",
    icon: <StarIcon />,
  },
  {
    id: 4,
    name: "Don't #!&$ the customer",
    info: "Understand customers' stated and unstated needs. Make them wildly successful.",
    icon: <CloudSmileIcon />,
  },
  {
    id: 5,
    name: "Do the impossible",
    info: `Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"`,
    icon: <FlagIcon />,
  },
  {
    id: 6,
    name: "Sweat the small stuff",
    info: "We believe the best products come from the best attention to detail. Sweat the small stuff.",
    icon: <TargetIcon />,
  },
];

const Team = () => {
  return (
    <div>
      <div className="py-[96px] text-center">
        <h1 className="text-black font-franie text-[48px] font-normal leading-[48px]">
          Meet the makers behind Turon Iqbol
        </h1>
        <p className="text-gray-600 font-inter text-[20px] font-normal leading-[30px] w-[1000px] mx-auto mt-[24px]">
          We’re a small group of bright, motivated designers and developers all
          around the world. We’re growing fast and would love to meet you. Check
          out our open roles!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[32px] px-[112px] pb-[96px]">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative max-w-[420px] h-[480px] min-w-[384px] rounded-lg overflow-hidden group"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full h-[40%] px-[24px] py-[32px] bg-white/30 backdrop-blur-lg border-t border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex justify-between">
                <h1 className="text-white text-[30px] font-semibold leading-[38px] mb-[16px]">
                  {member.name}
                </h1>
                <ArrowIcon />
              </div>
              <div className="text-white text-[18px] font-semibold leading-[28px] mb-[4px]">
                {member.position}
              </div>
              <div className="text-white text-[16px] font-normal leading-[24px]">
                {member.about}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-[112px] pb-[96px]">
        <div className="w-[55%] mx-auto mb-[64px] text-center">
          <h1 className="text-black font-normal text-[36px] leading-[54px] mb-[20px]">
            We’re an ambitious and smart team with a shared mission
          </h1>
          <p className="text-gray-600 text-[20px] leading-[30px]">
            Our shared values keep us connected and guide us as one team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] justify-center">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

      <TeamSlider />
    </div>
  );
};

export default Team;

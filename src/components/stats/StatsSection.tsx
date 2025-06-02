import CountUp from "react-countup";

const stats = [
  {
    number: 341,
    label: "Book published",
    description: "We’ve helped build over 400 projects with great companies.",
  },
  {
    number: 222,
    label: "Client request",
    description: "We’ve helped build over 222 projects with great companies.",
  },
  {
    number: 20,
    label: "Year in industry",
    description: "Our free UI kit has been downloaded over 10k times.",
    suffix: "+",
  },
];

const StatsSection = () => {
  return (
    <div className="relative rounded-xl p-10 md:p-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/aImage.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-lg px-6 py-8 rounded-lg text-center border border-white/60 font-inter "
          >
            <h2 className="text-white text-[60px] font-bold">
              <CountUp
                start={0}
                end={stat.number}
                duration={2.5}
                separator=" "
                suffix={stat.suffix || ""}
              />
            </h2>
            <h3 className="text-white text-lg font-semibold mt-3">
              {stat.label}
            </h3>
            <p className="text-white mt-2">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;

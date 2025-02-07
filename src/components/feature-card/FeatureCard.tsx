import React from "react";
interface FeatureProps {
  feature: {
    id: number;
    name: string;
    info: string;
    icon: React.ReactNode;
  };
}

const FeatureCard: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <div className="w-full flex flex-col items-center text-center flex-1">
      {feature.icon}
      <h1 className="text-black font-medium text-[20px] leading-[30px] mb-[8px] text-center">
        {feature.name}
      </h1>
      <p className="text-gray-600 text-[16px] leading-[24px] text-center">
        {feature.info}
      </p>
    </div>
  );
};

export default FeatureCard;

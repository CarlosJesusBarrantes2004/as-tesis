import { ctaFeatures } from "@/app/data/cta-features";
import { CheckCircle } from "lucide-react";
import React from "react";

function CtaFeaturesList() {
  return (
    <ul className="space-y-3 mb-8">
      {ctaFeatures.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle
            className="text-secondary mr-3 flex-shrink-0 mt-1"
            size={20}
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export default CtaFeaturesList;

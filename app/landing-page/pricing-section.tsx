import PricingCard from "./pricing-card";

export type PricingPlan = {
  title: string;
  price: number;
  description: string;
  isPopular: boolean;
  features: string[];
  url: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "100% Free & Open Source",
    price: 0,
    description: "For small teams just getting started",
    isPopular: false,
    url: "/dashboard",
    features: [
      "4 projects",
      "Unlimited users",
      "1GB storage",
      "Priority support",
    ],
  }
]


const PricingSection = () => {
  return (
    <div className="text-center">
      <h1 className="capitalize text-3xl">Freedom to Create</h1>
      <h2 className="font-extrabold text-3xl mb-8 pt-3">
      Completely Free, Open Source, and Ready for Your Projects
      </h2>
      <div className="mt-10 grid items-center justify-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {
          pricingPlans.length === 1 
          ? (
            <div className="col-span-full flex justify-center">
              <div className="w-full max-w-lg">
                <PricingCard {...pricingPlans[0]} />
              </div>
            </div>
          ) 
          : (
            pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))
          )
        }
      </div>
    </div>
  )
}

export default PricingSection;
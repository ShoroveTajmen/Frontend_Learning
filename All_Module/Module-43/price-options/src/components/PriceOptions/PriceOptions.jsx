import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio equipment",
        "Free weights area",
        "Locker room access",
        "Limited access to group fitness classes",
        "Discounts on personal training sessions",
        "Monthly gym newsletter",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "Full access to all gym equipment",
        "Locker room access with towel service",
        "Unlimited access to group fitness classes",
        "Access to sauna and steam room",
        "Discounts on personal training sessions",
        "Monthly gym newsletter",
        "Free guest passes (2 per month)",
      ],
    },
    {
      id: 3,
      name: "Student Membership",
      price: 24.99,
      features: [
        "Access to cardio equipment",
        "Free weights area",
        "Locker room access",
        "Student ID required",
        "Limited access to group fitness classes",
        "Discounts on personal training sessions",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;

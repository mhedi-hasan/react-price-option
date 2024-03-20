import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "All Standard Membership",
                "Unlimited fitness class",
                "Priority booking for class",
                "Discounted personal pack",
                "Unlimited towel service",
                "Access to with feedback",
                "Monthly fitness challenges"
            ],
            "price": 39.99
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "features": [
                "All Standard Membership",
                "Unlimited fitness class",
                "Priority booking for class",
                "Discounted personal pack",
                "Unlimited towel service",
                "Access to with feedback",
                "Monthly fitness challenges "
            ],
            "price": 59.99
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "features": [
                "All Standard Membership",
                "Unlimited fitness class",
                "Priority booking for class",
                "Discounted personal pack",
                "Unlimited towel service",
                "Access to with feedback",
                "Monthly fitness challenges"
            ],
            "price": 79.99
        },
        {
            "id": 4,
            "name": "Elite Membership",
            "features": [
                "All Standard Membership",
                "Unlimited fitness class",
                "Priority booking for class",
                "Discounted personal pack",
                "Unlimited towel service",
                "Access to with feedback",
                "Monthly fitness challenges"
            ],
            "price": 99.99
        }
    ]

    return (
        <div>
            <h2 className="text-2xl mx-3 font-bold text-red-600">My name is Mehedi Hasan (jihad)</h2>
            <h2>Best prices in the town</h2>
            <div className=" items-center md:mx-0 mx-5 gap-4 md:flex md:w-full justify-evenly mt-5">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
            
        </div>
    );
};

export default PriceOptions;
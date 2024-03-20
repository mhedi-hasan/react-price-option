import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities during staffed hours",
                "Cardio and weight training equipment",
                "Basic locker access (limited number, first-come-first-served)",
                "Free Wi-Fi",
                "Discounted rates on merchandise",
                "Access to a basic workout plan library"
            ],
            "price": 39.99
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "features": [
                "All Basic Membership benefits",
                "Access to gym facilities 24/7",
                "Group fitness classes (limited selection)",
                "Free on-demand fitness classes (basic library)",
                "One free personal training session",
                "Limited towel service (quantity varies based on time of day)",
                "Larger, secure locker rental option",
                "Access to a personalized workout plan builder (basic version)"
            ],
            "price": 59.99
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "features": [
                "All Standard Membership benefits",
                "Unlimited group fitness classes (including premium classes)",
                "Priority booking for classes",
                "Discounted personal training packages",
                "Unlimited towel service",
                "Luxe locker with phone charging station and climate control",
                "Access to premium amenities (sauna, steam room, lap pool, jacuzzi)",
                "Nutritional counseling consultation",
                "Access to an advanced workout plan builder with trainer feedback",
                "Monthly fitness challenges and social events"
            ],
            "price": 79.99
        },
        {
            "id": 4,
            "name": "Elite Membership",
            "features": [
                "All Premium Membership benefits",
                "Dedicated concierge service for scheduling and bookings",
                "Semi-private training sessions (discounted rate)",
                "Priority access to new equipment and amenities",
                "Exclusive member lounge with refreshments",
                "Valet parking (limited spaces)"
            ],
            "price": 99.99
        }
    ]

    return (
        <div>
            <h2 className="text-2xl font-bold text-red-600">My name is Mehedi Hasan (jihad)</h2>
            <h2>Best prices in the town</h2>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;
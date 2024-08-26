import React from 'react';

const Services = () => {

    const services = [
        {
            title: "Dine-In Experience",
            description: "Enjoy our cozy ambiance, exquisite cuisine, and attentive service for an unforgettable dining experience.",
            image: "https://media.istockphoto.com/id/536922377/photo/chef-in-hotel-or-restaurant-kitchen-cooking-only-hands.webp?b=1&s=612x612&w=0&k=20&c=odaTvgdypk3FiRcGT9ilx3DK03Y2R1BUg6w1Q_0IH_0=",
        },
        {
            title: "Catering Services",
            description: "We offer tailored catering solutions for weddings, parties, and corporate events, ensuring your guests are well served.",
            image: "https://media.istockphoto.com/id/811911828/photo/young-waiter-serving.webp?b=1&s=612x612&w=0&k=20&c=aqPIHrOaoaJNSRwzA1nLCRQ_VfyIlxzgcq7G5jTTMbE=",
        },
        {
            title: "Online Ordering & Delivery",
            description: "Order your favorite meals online and have them delivered hot and fresh to your doorstep.",
            image: "https://media.istockphoto.com/id/1287186696/photo/food-delivery-app-order-with-phone-online-mobile-service-for-take-away-burger-and-pizza.webp?b=1&s=612x612&w=0&k=20&c=YHNJKutSpZo6usUbgNmmbhIXTXHYi8n85bUjGVQ_xOQ=",
        },
        {
            title: "Private Dining",
            description: "Book our private dining room for exclusive gatherings and special occasions with a personalized menu.",
            image: "https://media.istockphoto.com/id/1253278056/photo/luxury-dining-room-with-seascape.webp?b=1&s=612x612&w=0&k=20&c=3PkskrgKezeUcvrIB0gPRGJK1krdsg3OhpN16vPWv2Y=",
        },
        {
            title: "Takeaway Service",
            description: "Convenient and quick takeaway options for those on the go. Pre-order online or via phone for easy pick-up.",
            image: "https://media.istockphoto.com/id/1314632869/photo/close-up-of-woman-packing-food-for-delivery.webp?b=1&s=612x612&w=0&k=20&c=mo8UrYshY9LKYGaLSrDItbHFhTE7vkz01bXNLkyOsfI=",
        },
        {
            title: "Event Hosting",
            description: "Host your events at our restaurant with customized menus, seating arrangements, and impeccable service.",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBob2lzdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            title: "Chef’s Special Menu",
            description: "Experience our chef's curated menu, featuring seasonal and unique dishes that showcase culinary creativity.",
            image: "https://media.istockphoto.com/id/2152664260/photo/gourmet-seafood-pasta-with-fresh-herbs-and-tomatoes.webp?b=1&s=612x612&w=0&k=20&c=wYL9OGdnb0eSqA4K_XmDMX842jlQSt6MdsNMLPEFTtA=",
        },
        
        
        {
            title: "Family Meal Packages",
            description: "Order our family-sized meal packages, ideal for sharing a delicious and hearty meal at home.",
            image: "https://media.istockphoto.com/id/1165073259/photo/family-dinner-of-healthy-food-in-black-take-away-boxes.webp?b=1&s=612x612&w=0&k=20&c=iAYFwfSyI2RCZNcUo2SqFP2kbMvpC26ZthLheVAvPjo=",
        },
        {
            title: "Gift Cards",
            description: "Give the gift of great food with our restaurant gift cards, perfect for any occasion.",
            image: "https://media.istockphoto.com/id/854341766/photo/rustic-silverware-with-flowers-and-empty-tag.webp?b=1&s=612x612&w=0&k=20&c=vlKeT1WZC2ojlmgEti8v5ntRd_pZuSkotVrkxiT5n20=",
        },
        {
            title: "Custom Menu Design",
            description: "Work with our chef to create a custom menu for your special event, tailored to your tastes and preferences.",
            image: "https://media.istockphoto.com/id/1409730006/photo/team-of-cooks-working-at-a-restaurant-and-looking-at-a-recipe.webp?b=1&s=612x612&w=0&k=20&c=WznGX91GJZoGIeUAJ7fh-tYE__P-bjvxBVdyzBluGoo=",
        },
        {
            title: "Outdoor Seating",
            description: "Dine al fresco with our comfortable and scenic outdoor seating options, available seasonally.",
            image: "https://media.istockphoto.com/id/1312405874/photo/store-window-of-coffee-shop-with-table-green-chairs-in-front-of-shop-and-brick-wall-background.webp?b=1&s=612x612&w=0&k=20&c=pgz-ZKo-pjvLXYDGEMW2apmUA0KbOkYsYUjjAZHAouI=",
        },
        
        {
            title: "Cooking Classes",
            description: "Join our chef for hands-on cooking classes, where you’ll learn to prepare some of our signature dishes.",
            image: "https://media.istockphoto.com/id/1370529871/photo/chefs-hands-spraying-flour-over-the-dough.webp?b=1&s=612x612&w=0&k=20&c=P75SSfVsY0UQ3ODei3hE9EC-IYQgFESkAHzJBavAycs=",
        },
    ];
      
    return (
        <div className='py-28'>
        <div className="grid px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center align-middle max-w-screen-2xl mx-auto place-items-center">
            {services?.map((item, index) => (
                <div key={index} className="card hover:bg-gray-700 group rounded-lg card-compact bg-gray-800 shadow-2xl overflow-hidden">
                    <div className="overflow-hidden">
                        <img 
                            src={item?.image || `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTk-VUWu71zkugnJOVwEvTEt371z7u1WEJg&s`} 
                            className='w-full h-64 object-cover transform group-hover:scale-110 group-hover:translate-y-4 duration-700 ease-in-out' 
                            alt="Service" 
                        />
                    </div>
                    <div className="card-body text-gray-200">
                        <h2 className="card-title">{item?.title}</h2>
                        <p>{item?.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    );
};

export default Services;

import { useEffect, useState } from "react";

export const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGv9zhRzMOSZ7TGmek6WGDWoAj7z5bNa4OPLca6UogDNCdSIouFvDNlyvXe4mQ75g9ZYE6-zNIaWLaSiTIJ10qGdElUf7SIUe4FTaTB5CsXSp04V1c6F-jo6qwdCoZd52N_YV3JqvjBxE/s1600/romantic+table.jpg", title: "A Taste of Tradition", des: "Savor the flavors of timeless recipes made with love and tradition.", }, { img: "https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck=", title: "Farm Fresh Delights", des: "Enjoy fresh, seasonal produce straight from the farm to your plate.", }, { img: "https://insanelygoodrecipes.com/wp-content/uploads/2021/09/Homemade-Chocolate-Mousse-Cake-with-Berries.jpg", title: "Indulge in Sweet Temptations", des: "Chocolate dessert, decadent sweets, elegant plating", }, { img: "https://www.capecrystalbrands.com/cdn/shop/articles/ultimate-guide-to-perfect-food-pairing-enhance-your-meals-423610.jpg?v=1699238482", title: "The Perfect Pairing", des: "Treat yourself to our irresistible, handcrafted desserts..", }, { img: "https://cdn.squaremeal.co.uk/seo-landing-page/107/images/private-dining-rooms-the-savoy_23032020111849.jpg?w=1400&h=580&fit=crop", title: "Gather Around Our Table", des: "Share memorable meals with family and friends at our table.", },];
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 4000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <div className="relative">
            <div className="w-full  h-60 sm:h-96 md:h-screen flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}
                <div className="drop-shadow-lg text-white text-center px-5">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
            </div>
            {/* slider container */}
            <div className="flex absolute lg:mt-2 mt-2 lg:bottom-10 left-1/2  -translate-x-1/2 justify-center z-[999] items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-white p-px' : ''} rounded-md md:rounded-lg lg:border-white lg:border-2 box-content cursor-pointer`}
                        alt={slide.title} />
                ))}
            </div>
        </div>
    )
};

import Lottie from "lottie-react";
import { useState } from "react";
import animationData  from "../../public/FAQ.json"

export default function FAQ() {
    const [isOpen, setIsOpen] = useState(null);
    const dataArr = [
        {
          title: "What are your restaurant hours?",
          description: "Our restaurant is open from 11:00 AM to 10:00 PM, Monday through Sunday. For special hours during holidays, please check our website or call us directly.",
        },
        {
          title: "Do you offer reservations?",
          description: "Yes, we accept reservations. You can book a table online through our website or by calling us at (123) 456-7890. We recommend making a reservation, especially during peak times.",
        },
        {
          title: "Do you have a gluten-free menu?",
          description: "Yes, we offer a variety of gluten-free options. Please ask your server for our gluten-free menu or check our website for detailed information on our gluten-free offerings.",
        },
        {
          title: "Can I order takeout or delivery?",
          description: "Yes, we offer both takeout and delivery services. You can place your order online through our website or by calling us. Delivery options may vary based on location.",
        },
        {
          title: "Are there any specials or promotions today?",
          description: "We offer daily specials and promotions that vary throughout the week. Please visit our website or follow us on social media to stay updated on the latest deals and special offers.",
        },
      ];
      
    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };

    return (
       <div className=" my-20 max-w-screen-2xl px-10 mx-auto ">

        <h1 className="text-xl md:text-2xl lg:text-3xl my-20 text-center text-white font-semibold">Frequently Asked Questions</h1>

        <div className="flex flex-col-reverse lg:flex-row gap-20 ">
        <div className="mx-auto lg:w-2/3  rounded-lg">
            {dataArr.map((PerAccordion, idx) => (
                <div key={idx} className="my-2 rounded-lg border bg-white p-3 py-3 *:mix-blend-difference dark:border-zinc-600 hover:bg-gray-700 dark:bg-gray-800">
                    <button onClick={() => toggle(idx)} className="flex py-2 h-full w-full items-center justify-between font-medium text-white outline-none">
                        <span>{PerAccordion.title}</span>
                        <span className="rounded-full">
                            <svg className="ml-8 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                            </svg>
                        </span>
                    </button>
                    <div className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden text-white  opacity-0.8 pr-4 text-sm">{PerAccordion.description}</div>
                    </div>
                </div>
            ))}
        </div>

        <div className=" lg:w-1/3">
        <Lottie animationData={animationData} loop={true} autoplay={true} />
        </div>
        </div>
       </div>
    );
}
import React from 'react';

const BestFoods = () => {
    return (
        <div className='my-16'>
            <h1 className='my-16  mt-28 lg:mt-0 text-xl lg:text-3xl text-white font-semibold  text-center'>Try Our Best Foods</h1>

            <div className="grid px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center align-middle max-w-screen-2xl mx-auto   place-items-center">

                <div className="card hover:bg-gray-700 group rounded-lg  card-compact bg-gray-800  shadow-2xl">
                    <figure>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTk-VUWu71zkugnJOVwEvTEt371z7u1WEJg&s " className='w-full group-hover:scale-110 duration-100  object-cover'
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-gray-200 ">
                        <h2 className="card-title">Grilled Ribeye Steak</h2>
                        <p> A juicy, perfectly grilled ribeye steak seasoned with a blend of herbs and spices, served with garlic butter and a side of roasted vegetable</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card hover:bg-gray-700 group rounded-lg  card-compact bg-gray-800  shadow-2xl">
                    <figure>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTX4tflryeAXbjXVTUoS0ZbqpIcv0FiAdYw&s" className='w-full h-60 group-hover:scale-110 duration-100  object-cover'
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-gray-200 ">
                        <h2 className="card-title">Margherita Pizza</h2>
                        <p> A traditional Italian pizza topped with fresh mozzarella, vine-ripened tomatoes, basil, and a drizzle of extra virgin olive oil on a thin, crispy crust.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card hover:bg-gray-700 group rounded-lg  card-compact bg-gray-800  shadow-2xl">
                    <figure>
                        <img
                            src="https://media.istockphoto.com/id/1177501296/photo/traditional-spanish-seafood-paella-dish-in-a-black-pan-mussels-amandi-and-prawns-on-a-pillow.webp?b=1&s=612x612&w=0&k=20&c=fXUzsqDoqD6SRD8Wpq8lRBTeKidYJGNBWHvcSQHMHNY=" className='w-full h-60 group-hover:scale-110 duration-100  object-cover'
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-gray-200 ">
                        <h2 className="card-title">Seafood Paella</h2>
                        <p> A vibrant Spanish dish featuring saffron-infused rice cooked with a medley of fresh seafood including shrimp, mussels, and clams, garnished with lemon wedges.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card hover:bg-gray-700 group rounded-lg  card-compact bg-gray-800  shadow-2xl">
                    <figure>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEVYugGCuEgcMl5X7Sp9xRjn4VtzwPG0b6g&s" className='w-full h-60  group-hover:scale-110 duration-100  object-cover'
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-gray-200 ">
                        <h2 className="card-title">Beef Kofta Kebabs</h2>
                        <p>Grilled skewers of seasoned ground beef mixed with herbs and spices, served with a side of hummus, tabbouleh, and warm pita bread.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card hover:bg-gray-700 group rounded-lg  card-compact bg-gray-800  shadow-2xl">
                    <figure>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzHwFIMhTkEaPUKgspyFuLDTLrDE7xlhF0g&s" className='w-full h-60 group-hover:scale-110 duration-100  object-cover'
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-gray-200 ">
                        <h2 className="card-title">Kacchi Biryani</h2>
                        <p>A rich and aromatic dish with marinated goat meat cooked with partially cooked rice, saffron, and spices in a sealed pot. Garnished with fried onions and boiled eggs.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card hover:bg-gray-700 group rounded-lg  card-compact bg-gray-800  shadow-2xl">
                    <figure>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1723867522131-af9733323bc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENob2NvbGF0ZSUyMExhdmElMjBDYWtlfGVufDB8fDB8fHww" className='w-full h-60 group-hover:scale-110 duration-100  object-cover '
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-gray-200 ">
                        <h2 className="card-title"> Chocolate Lava Cake</h2>
                        <p>A decadent dessert with a warm, molten chocolate center, served with a scoop of vanilla ice cream and a sprinkle of powdered sugar.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestFoods;
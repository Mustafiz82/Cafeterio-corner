import React, { useContext, useState } from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Rating from 'react-rating';
import { FaStar, FaRegStar, FaPlus, FaMinus } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const Foods = () => {
    const axios = useAxiosPublic();
    const [quantities, setQuantities] = useState({}); 
    const {user} = useContext(AuthContext)
    const skeletons = Array.from({ length: 30 }, (_, index) => index + 1); 

    const { data: foods, error, isLoading } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const response = await axios.get('/foods');
            return response.data;
        },
    });

    const handleIncreaseQuantity = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 1) + 1,
        }));
    };

    const handleDecreaseQuantity = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
        }));
    };

    const handleOrder = (id, quantity) => {

        console.log(`Order placed for product ID: ${id}, Quantity: ${quantity}`);
        if(user){
            const object = {
                email :user?.email,
                ProductID : id,
                quantity : quantity,
                date : new Date()
                
            }
            axios.post("/orders" , object)
            .then(res => {
                console.log(res?.data)
                if(res?.data?.acknowledged){
                    Swal.fire({
                        title: "Order Placed",
                        text: "You clicked Has been Placed",
                        icon: "success"
                      });
                }
            })

            

            console.log(object)
        }
        else{
            console.log("please login ot order")
        }

    };

    return (
        <div className='my-28 px-10'>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

                {
                    isLoading ? skeletons?.map(item => <div className="skeleton w-full h-[400px]"></div> ) : ""
                }
                {foods?.map(item => (
                    <div key={item?._id} className="card hover:bg-gray-700 group rounded-lg card-compact bg-gray-800 shadow-2xl overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                                src={item?.imageUrl || `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTk-VUWu71zkugnJOVwEvTEt371z7u1WEJg&s`}
                                className='w-full h-64 object-cover transform group-hover:scale-110 group-hover:translate-y-4 duration-700 ease-in-out'
                                alt="Service"
                            />
                        </div>
                        <div className="card-body space-2 text-gray-200">
                            <div className="flex justify-between items-center">
                                <h2 className="card-title">{item?.name}</h2>
                                <Rating
                                    initialRating={item?.rating}
                                    readonly
                                    emptySymbol={<FaRegStar className="text-gray-400" />}
                                    fullSymbol={<FaStar className="text-yellow-500" />}
                                />
                            </div>

                            <p>{item?.description}</p>
                            <h2 className='text-2xl'>$ {item?.price}</h2>

                            <div className="flex my-3 justify-between items-center">
                                <div className="join w-1/2 join-vertical join-horizontal">
                                    <button onClick={() => handleIncreaseQuantity(item._id)} className="btn bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 rounded-none join-item">
                                        <FaPlus />
                                    </button>
                                    <button className="btn bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 rounded-none join-item">
                                        {quantities[item._id] || 1}
                                    </button>
                                    <button onClick={() => handleDecreaseQuantity(item._id)} className="btn bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 rounded-none join-item">
                                        <FaMinus />
                                    </button>
                                </div>
                                <div onClick={() => handleOrder(item._id, quantities[item._id] || 1)} className="btn bg-red-500 hover:bg-red-600 text-white rounded-lg cursor-pointer">
                                    Order Now
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Foods;

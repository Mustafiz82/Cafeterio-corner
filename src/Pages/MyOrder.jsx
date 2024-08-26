import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { RxCross2 } from "react-icons/rx";


const MyOrder = () => {

    const { user } = useContext(AuthContext)
    const axios = useAxiosPublic()
    const skeletons = Array.from({ length: 10 }, (_, index) => index + 1);



    const { data: orders, error, isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const response = await axios.get(`/orders?email=${user?.email}`);
            return response.data;
        },

    });

    console.log(orders)



    return (
        <div className='py-20 box-border max-w-screen-2xl mx-auto px-10 text-white'>

            <div className="grid text-white mb-10 grid-cols-5 gap-5 lg:grid-cols-6">
                <h1 className='hidden'>Date</h1>
                <h1 className='col-span-3 lg:col-span-2'>Name</h1>
                <h1>Quantity</h1>
                <h1 className='hidden'>subTotal</h1>
                <h1>Total</h1>
            </div>


            {
                (orders?.length === 0 )? <div className="flex justify-center items-center h-[400px]"><h1>No Order Found</h1></div> : ""
            }
            {
                isLoading ? skeletons?.map(item => <div className=" mb-10 gap-5 grid grid-cols-5 lg:grid-cols-6   ">

                    <div className="skeleton hidden h-6 w-28"></div>
                    <div className="col-span-3 lg:col-span-2 flex gap-2 items-center">
                        <div className="skeleton w-10 h-10 "></div>
                        <div className="skeleton  h-6 w-32 "></div>
                    </div>
                    <div className="skeleton h-6 w-10"></div>
                    <div className="skeleton hidden h-6 w-14"></div>
                    <div className="skeleton h-6 w-14"></div>
                    
                </div>) : ""
            }



            {orders?.map(item => <div className='mt-6 items-center grid grid-cols-5 lg:grid-cols-6 gap-4'>



                <div className="text-white hidden lg:text-lg">
                    {item?.date ? new Date(item.date).toISOString().split('T')[0] : 'Invalid Date'}
                </div>
                <div className='flex col-span-3 lg:col-span-2 items-center gap-2'>
                    <img src={item?.imageUrl} className='w-10 rounded-xl h-10 object-cover ' alt="" />
                    <h1 className='lg:text-lg text-white'>{item?.name}</h1>

                </div>

                <div className='flex items-center text-white gap-1'>
                    <RxCross2 />
                    {item?.quantity}
                </div>

                <div className='lg:text-lg hidden text-white'>$ {item?.price}</div>
                <div className='lg:text-lg text-white'>$ {item?.price * item?.quantity}</div>

            </div>)}
        </div>
    );
};

export default MyOrder;
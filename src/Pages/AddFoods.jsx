import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ParticlesComponent from "../Component/ParticlesComponent";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AddFoods = () => {
  // Initialize useForm hook
  const { register, handleSubmit ,reset } = useForm();
  const [btnText , setBtnText] = useState("Submit")
  const axios = useAxiosPublic()

  // Function to handle form submission
  const onSubmit = (data) => {
	setBtnText("Adding Food ...")
    console.log(data); // Log form data as an object

	// const 

	axios.post("/foods" , data)
	.then(res => {
		console.log(res?.data.acknowledged)
		if(res?.data?.acknowledged){
			setBtnText("Food Added")
			return reset()
		}
		else{
			setBtnText("Error adding Food")
		}

	})
	

  };

  return (
    <div className="relative px-5 lg:py-24 flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)} // Handle form submission
        className="max-w-[600px] z-[999] mx-auto space-y-8 text-white"
      >
        <input
          type="text"
          placeholder="Name"
          required
          className=" glass  input focus:border-white focus:outline-none rounded-sm w-full border-white bg-transparent text-white"
          {...register("name", { required: true })} // Register the input field with required validation
        />
        <textarea
          placeholder="Description"
          required
          className=" glass input focus:border-white focus:outline-none rounded-sm w-full h-28 py-4 border-white bg-transparent text-white"
          {...register("description", { required: true })} // Register the textarea with required validation
        />
        <input
          type="text"
          placeholder="Image URL"
          required
          className=" glass input focus:border-white focus:outline-none rounded-sm w-full border-white bg-transparent text-white"
          {...register("imageUrl", { required: true })} // Register the input field with required validation
        />
        <select
          placeholder="Rating"
          required
          className=" glass select select-bordered w-full max-w-full  focus:border-white focus:outline-none rounded-sm  border-white bg-transparent text-white"
          {...register("rating", { required: true })} // Register the select field with required validation
        >
          <option className="  bg-gray-700" value="" disabled>Select Rating</option>.
          <option className="  bg-gray-700" value="1">1 star</option>
          <option className="  bg-gray-700" value="2">2 star</option>
          <option className="  bg-gray-700" value="3">3 star</option>
          <option className="  bg-gray-700" value="4">4 star</option>
          <option className="  bg-gray-700" value="5">5 star</option>
        </select>
        <input
          type="number" step="0.01"
          placeholder="Price"
          required
          className=" glass input focus:border-white focus:outline-none rounded-sm w-full border-white bg-transparent text-white"
          {...register("price", { required: true })} // Register the input field with required validation
        />
        <input
          type="text"
          placeholder="Category"
          required
          className=" glass input focus:border-white focus:outline-none rounded-sm w-full border-white bg-transparent text-white"
          {...register("category", { required: true })} // Register the input field with required validation
        />
        <button type="submit" className="w-full btn text-white bg-red-500">
          {btnText}
        </button>
      </form>
      <ParticlesComponent />
    </div>
  );
};

export default AddFoods;

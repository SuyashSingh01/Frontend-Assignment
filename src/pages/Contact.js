import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
const Contact = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();



  const submitContactForm = async (data) => {

    try {
      setLoading(true)
      const response = await fetch("https://backendendpoint/submit", {
        method: "POST",
        body: JSON.stringify({
          apikey:
            "YOUR_API_KEY",
          formid: "YOUR_FORM_ID",
          data: data,
        })
      });
      const responseData = await response.json();
      console.log("RESPONSE DATA - ", responseData)
      setLoading(false)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        message: "",
      })
    }
  }, [reset, isSubmitSuccessful]);



  return (
    <div className="container mx-auto p-6">
      <section className="text-center my-10">
        <h3 className="text-lg font-bodyfont text-[#232536]">Contact Us</h3>
        <h1 className='text-3xl font-headingfont font-extrabold text-[#232536]'>Let's Start the conversation</h1>
        <p className="text-[#6D6E76] mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti officia minus quibusdam alias aut explicabo ullam eum velit, delectus eius </p>
      </section>

      {/* Contact Form */}
      <form className="max-w-lg mx-auto bg-[#F4F4F4] p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit(submitContactForm)}
      >
        <div className="mb-4">
          <label className="block text-[#6D6E76] font-semibold mb-2">Name</label>
          <input type="text" className="w-full p-3 rounded border border-[#6D6E76]"
            name='name'
            id='name'
            placeholder='Enter your name'
            {...register("name", { required: true })}
          />
          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your name.
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-[#6D6E76] font-semibold mb-2">Email</label>
          <input type="email"
            className="w-full p-3 rounded border border-[#6D6E76]"
            name="email"
            id="email"
            placeholder="Enter email address"
            {...register("email", { required: true })}

          />
          {errors.email && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your Email address.
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-[#6D6E76] font-semibold mb-2">Message</label>
          <textarea className="w-full p-3 rounded border border-[#6D6E76]" rows="5"
            name="message"
            id="message"
            placeholder="Enter your message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your Message.
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={` w-full rounded-md bg-[#FFD050] px-6 py-3 text-center text-[13px] font-bold text-black 
          ${!loading &&
            "transition-all duration-200 hover:scale-95 hover:bg-[#FFD050]"
            }  disabled:bg-richblack-500 sm:text-[16px] hover-shadow-none  `}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import TitleCard from "../../../components/titlecard";
import { ContactForm } from "@/types/types";
import TitleCards from "@/data/titlecards.json";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();
  const onSubmit: SubmitHandler<ContactForm> = (data) => console.log(data);

  return (
    <div>
      <TitleCard {...TitleCards.contact} />

      <div className="flex flex-col justify-center items-center pt-4">
        <div className="font-bold text-3xl">SAY HELLO</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-5/6 pt-4"
        >
          <input
            placeholder="First Name"
            {...(register("firstName"), { required: true })}
            className="border-solid border-1 p-1 p-1 rounded-sm m-2"
          />
          {errors.firstName && <span>This field is required</span>}

          <input
            placeholder="Last Name"
            {...register("lastName")}
            className="border-solid border-1 p-1 rounded-sm shadow-md m-2"
          />

          <input
            placeholder="Email"
            {...register("email")}
            className="border-solid border-1 p-1 rounded-sm shadow-md m-2"
          />

          <input
            placeholder="Phone"
            {...register("phone")}
            className="border-solid border-1 p-1 rounded-sm shadow-md m-2"
          />

          <textarea
            placeholder="Message"
            {...(register("message"), { required: true })}
            className="border-solid border-1 p-1 rounded-sm shadow-md m-2 min-h-20"
          />
          {errors.message && <span>This field is required</span>}

          <input
            type="submit"
            value="Submit"
            className="bg-black text-white w-2/5 h-10 rounded-sm shadow-md m-2"
          />
        </form>
        <div className="pt-4">
          <div className="font-bold text-2xl">OPERATING HOURS</div>
          <div className="font-bold">Thursday 4 - 10pm</div>
          <div className="font-bold">Friday 1 - 10pm</div>
          <div className="font-bold">Saturday 12-10pm</div>
        </div>

        <div className="grid grid-cols-3 gap-x-2 pt-4 pb-8">
          <div className="grid col-span-3 justify-self-center font-bold text-2xl">
            SOCIALS
          </div>
          <div className="font-bold">Instagram</div>
          <div className="font-bold">Facebook</div>
          <div className="font-bold">0486 035 890</div>
        </div>
      </div>
    </div>
  );
}

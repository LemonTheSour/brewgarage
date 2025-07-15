import TitleCard from "../../../components/titlecard";
import JobCard from "../../../components/jobs/jobcard";
import JobListings from "@/data/jobs.json";
import TitleCards from "@/data/titlecards.json";

export default function Jobs() {
  return (
    <div className="">
      <TitleCard {...TitleCards.jobs} />
      <div className="flex justify-center items-center flex-col w-full">
        <div className="text-xl font-bold pt-4 pb-4">
          0486 035 890 - INQUIRE
        </div>
        <JobCard
          title={JobListings["Bar Staff"].title}
          body={JobListings["Bar Staff"].body}
        />
        <JobCard
          title={JobListings["Kitchen Staff"].title}
          body={JobListings["Kitchen Staff"].body}
        />
        <JobCard
          title={JobListings["Duty Manager"].title}
          body={JobListings["Duty Manager"].body}
        />
      </div>
    </div>
  );
}

//import Image from "next/image";

import JobList from "./job/page";

export default function Home() {
  return (
    <div className="flex w-full items-center">
        <JobList/>
    </div>
  );
}

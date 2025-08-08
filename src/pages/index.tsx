import Ending from "@/components/footer/ending";
import Waitlist from "./center/waitlist";
import Intro from "./header/intro";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-500">
        <Intro />
      </div>
      <div className="bg-gray-100">
        <Waitlist />
      </div>
      <div>
        <Ending />
      </div>
    </div>
  );
}

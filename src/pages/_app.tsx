import TopLayer from "@/components/navigation/top-layer";
import Ending from "@/components/footer/ending";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="bg-indigo-200 px-5">
        <TopLayer />
      </div>
      <Component {...pageProps} />
      <div>
        <Ending />
      </div>
    </div>
  );
}

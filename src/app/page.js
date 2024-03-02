import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="container mx-auto mb-8 px-8">
      <Header />
      <h1 className="mt-8 text-center text-3xl font-bold">
        Hamburger menu in Tailwind & React
      </h1>
    </div>
  );
}

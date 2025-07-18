import Image from "next/image";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-2 gap-5" >
       <img className="rounded-2xl"
          src={
            "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/52/b1/52b1bb50bff9caa98ee302e4151a6fd1.png"
          }
        />
      <span className="font-medium text-2xl">Khuyến mãi Online</span>
      <ProductGrid/>
    </div>
  );
}

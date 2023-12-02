import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadoe-black/25 transition-all">
      <div className="text-center">
        <Image
          className="max-h-auto max-h-24 block mx-auto"
          src="/pizza.png"
          alt="pizza"
          width="100"
          height="100"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">Prepperoni pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
        tempore expedita qui nesciunt reprehenderit provident quis!
      </p>
      <button className="mt-4 bg-primary text-white rounden-full px-6 py-2">
        Add to cart $12
      </button>
    </div>
  );
}

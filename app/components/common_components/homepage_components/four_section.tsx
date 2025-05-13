import Image from "next/image";

export default function FourSection() {
  return (
    <div className="text-gray-800 font-serif">
      <div>
        <div className="w-full md:grid grid-cols-2">
          <div className="my-auto">
            <h1 className="p-8">
              At Birara Dragon Bridge General Trading, we are dedicated to
              delivering high-quality products and services across diverse
              industries.
            </h1>
            <h1 className="p-8">
              In the realm of medical supplies and equipment, we provide a wide
              range of products, including premium-quality scrubs, medical
              devices, and essential equipment for hospitals and clinics.
            </h1>
            <h1 className="p-8">
              We also excel in cars, machinery, and electronics, sourcing and
              supplying automobiles, heavy machinery, and electronics for
              industrial, commercial, and personal use, featuring advanced
              technology and gadgets.
            </h1>
            <h1 className="p-8">
              Our offerings in fashion, apparel, and human hair include
              wholesale clothing, shoes, accessories, and 100% human hair
              products, all designed to keep up with the latest global trends.
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 m-8">
            <Image
              src="/four/img15.jpg"
              alt="Medical Supplies"
              width={500}
              height={500}
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
            <Image
              src="/four/img16.jpg"
              alt="Machinery"
              width={500}
              height={500}
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
            <Image
              src="/four/img17.jpg"
              alt="Electronics"
              width={500}
              height={500}
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
            <Image
              src="/four/img18.jpg"
              alt="Fashion"
              width={500}
              height={500}
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

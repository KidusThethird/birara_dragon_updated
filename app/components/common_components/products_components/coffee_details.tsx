import Image from "next/image";

export default function CoffeeDetails() {
  const data = [
    {
      title: "Yirgacheffe Type",
      type: "Arabica Coffee",
      process: "Process: Typically washed, some natural",
      text: "Known for its floral, tea-like characteristics with bright acidity and complex notes of citrus, jasmine, and tropical fruits, Yirgacheffe is among the finest Ethiopian coffees.",
      text2: "Altitude: 1,700-2,200 meters (5,570-7,210 feet)",
      text3: "",
      img: "/products/coffee/img01.png",
    },
    {
      title: "Guji Type",
      type: "Arabica Coffee",
      process: "Process: Both natural and washed",
      text: "Grown in the Guji Zone, this coffee has a fruity profile with hints of berries, stone fruit, and chocolate, with a full-bodied, rich mouthfeel and a hint of spice.",
      text2: "Altitude: 1600 - 2300 meters (5249 - 7546 feet)",
      text3: "",
      img: "/products/coffee/img02.png",
    },
    {
      title: "Harrar Type",
      type: "Arabica Coffee",
      process: "Process: Natural",
      text: "Known for its bold, fruity, and winey flavors, often with blueberry and chocolate notes, Harrar coffee has a heavier body and rich, wild character.",
      text2: "Altitude: 1,510 – 2,210 meters (4,950 – 6,950 feet)",
      text3: "",
      img: "/products/coffee/img03.png",
    },
    {
      title: "Sidamo Type",
      type: "Arabica Coffee",
      process: "Process: Washed",
      text: "Sidamo coffee is balanced and smooth, featuring berry, floral, and citrus notes with medium acidity.",
      text2: "Altitude: 1,550 – 2,200 meters (5,080 – 7,210 feet)",
      text3: "",
      img: "/products/coffee/img04.png",
    },
    {
      title: "Limu Type",
      type: "Arabica Coffee",
      process: "Process: Washed",
      text: "Smooth body, low acidity, with hints of citrus, spice, and wine undertones, Limu coffee is mild yet complex.",
      text2: "Altitude: 1,400 – 2,100 meters (4,590 – 6,880 feet)",
      text3: "",
      img: "/products/coffee/img05.png",
    },
    {
      title: "Specialty Ethiopian Coffees",
      type: "",
      process: "",
      text: "",
      text2: "",
      text3: "",
      text4: "",
      c1: "Ethiopia Geisha Village (Gold Label, Red Label, Green Label) – High-grade Geisha with floral and fruity notes, offering select, sun-dried options for enhanced flavor.",
      c2: "Ethiopia Banzimajji G1 Geisha Wash – Elegant Geisha with bright acidity, delicate florals, and a smooth finish.",
      c3: "96-Hour Anaerobic Sun-Dried (Grana, Ethiopia) – Specialty coffee with tropical fruit notes and a layered complexity from anaerobic fermentation.",
      c4: "Jashephu Kochir G1 – Clean and crisp with citrus and floral hints.",
      img: "/products/coffee/img06.png",
    },
    {
      title: "Roasted Coffee Brands",
      type: "",
      process: "",
      text: "We also offer roasted Ethiopian coffee, crafted to bring out the unique flavors of each variety. Available in light to dark roasts, our roasted coffee is ideal for specialty cafes and home brewers, preserving the distinct aroma and richness of Ethiopian beans.",
      text2: "",
      text3: "",
      img: "/products/coffee/img07.png",
    },
    {
      title: "Peanut",
      type: "",
      process: "",
      text: "Peanuts provide a good source of protein and healthy monounsaturated fats. Rich in vitamins E and B, magnesium, and folate, they support heart health and energy metabolism. Their antioxidants may combat oxidative stress, while fiber aids digestion and weight management.",
      text2: "",
      text3: "",
      img: "/products/coffee/img08.png",
    },
    {
      title: "Sesame Seed (Humera)",
      type: "",
      process: "",
      text: "Humera sesame seeds are rich in healthy fats, protein, and essential minerals like calcium and magnesium. They offer antioxidants that reduce inflammation and support skin health. Regular consumption can aid digestion, enhance bone health, and lower cholesterol levels.",
      text2: "",
      text3: "",
      img: "/products/coffee/img09.png",
    },
    {
      title: "Sun Flower",
      type: "",
      process: "",
      text: "Sunflower seeds are high in healthy fats, protein, and essential vitamins, including vitamin E. They promote heart health, reduce inflammation, and support skin health. Antioxidants enhance immune function, and their fiber content aids digestion and helps regulate blood sugar levels.",
      text2: "",
      text3: "",
      img: "/products/coffee/img10.png",
    },
  ];

  return (
    <div className="pt-14 sm:pt-14 md:pt-0 font-serif">
      <div className="md:grid grid-cols-2">
        <div>
          <div className="w-5/6 mx-auto">
            <div className="flex items-center space-x-3 py-3">
              <div className="w-12 h-1 bg-[#1f5a73] mr-3"></div>
              <h1 className="text-lg font-bold"></h1>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold py-5">
              We specialize in the import of exceptional Ethiopian coffee and a
              range of high-quality oil seeds.
            </h1>
            <h1 className="leading-9">
              Our Ethiopian coffee is celebrated for its distinct flavors and
              aromas, sourced directly from local farmers who practice
              sustainable cultivation. We also import premium oil seeds, valued
              for their health benefits and culinary versatility. Our dedicated
              team ensures rigorous quality checks and efficient logistics,
              providing our clients with fresh and authentic products. Committed
              to excellence, we aim to enrich your business offerings with the
              finest Ethiopian imports, tailored to meet your specific needs.
            </h1>
            <h1 className="leading-9">
              Our partnerships with major clients like Starbucks and Luckin
              Coffee reflect our commitment to quality and reliability,
              delivering Ethiopia’s exceptional coffee heritage worldwide.
            </h1>
          </div>
        </div>
        <div>
          <div>
            <Image
              src="/products/coffee/img09.png"
              className="w-3/4 mx-auto shadow-2xl rounded-xl my-5"
              alt="Coffee"
              width={500}
              height={500}
            />
          </div>
          <div className="w-3/4 mx-auto px-1">
            <h1></h1>
          </div>
        </div>
      </div>

      <div className="py-20 px-10 bg-gray-100 mt-4">
        <div className="py-6 mb-6">
          <h1 className="w-fit mx-auto text-3xl font-semibold">
            We import premium oil seeds, valued for their health benefits
          </h1>
          <h1 className="w-fit mx-auto">
            Our dedicated team ensures rigorous quality checks and efficient
            logistics, providing our clients with fresh and authentic products.
          </h1>
        </div>

        <div className="space-y-6">
          {data.map((item, index) => (
            <div key={index} className="grid md:grid-cols-4">
              <div className="md:col-span-1">
                <Image
                  className="rounded"
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={300}
                />
              </div>
              <div className="md:col-span-3 p-4 space-y-3">
                <div className="flex space-x-4">
                  <h1 className="underline text-lg pb-3 text-sky-900 font-semibold">
                    {item.title}
                  </h1>
                  {item.type !== "" && (
                    <h1 className="bg-sky-600 text-sm text-white w-fit h-fit p-1 rounded-2xl">
                      {item.type}
                    </h1>
                  )}
                </div>
                <h1>
                  <span className="font-bold">{item.process.slice(0, 8)}</span>
                  {item.process.slice(8)}
                </h1>
                <h1>
                  {item.text !== "" && (
                    <span className="font-bold pr-2">Flavor Profile:</span>
                  )}
                  {item.text}
                </h1>
                <h1>
                  <span className="font-bold">{item.text2.slice(0, 8)}</span>
                  {item.text2.slice(8)}
                </h1>
                {item.c1 && (
                  <div>
                    <span className="font-bold">{item.c1.slice(0, 60)}</span>
                    {item.c1.slice(60)}
                  </div>
                )}
                {item.c2 && (
                  <div>
                    <span className="font-bold">{item.c2.slice(0, 35)}</span>
                    {item.c2.slice(35)}
                  </div>
                )}
                {item.c3 && (
                  <div>
                    <span className="font-bold">{item.c3.slice(0, 46)}</span>
                    {item.c3.slice(46)}
                  </div>
                )}
                {item.c4 && (
                  <div>
                    <span className="font-bold">{item.c4.slice(0, 21)}</span>
                    {item.c4.slice(21)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

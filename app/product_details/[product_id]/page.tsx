// app/product_details/[product_id]/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import productsData from "../../../lib/products.json"; // Adjust the path based on your project structure
import Navbar from "@/app/components/common_components/navbar";
import ProductsHero from "@/app/herosections/products_hero";
import { use } from "react"; // Import React's use hook

interface Product {
  image_id: string;
  title: string;
  detail_text: string;
  category: string;
  related_images?: string[];
  bigimages?: string[];
}

export default function ProductDetails({
  params,
}: {
  params: Promise<{ product_id: string }>; // Update type to reflect that params is a Promise
}) {
  // Unwrap the params Promise using React.use()
  const { product_id } = use(params);

  // Find the product matching the product_id
  const product = productsData.find((p: Product) => p.image_id === product_id);

  if (!product) {
    return (
      <div className="p-6 min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto mt-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Product Details
          </h1>
          <p className="text-xl text-red-600">Product not found</p>
        </div>
      </div>
    );
  }

  // Determine the initial main image extension (default to .jpeg, handle .png for specific IDs)
  const imageExtension = [16, 23, 43].includes(parseInt(product_id))
    ? "png"
    : "jpeg";
  const initialImageSrc = `/products/${product_id}.${imageExtension}`;

  // State to manage the currently displayed main image
  const [mainImage, setMainImage] = useState<string>(initialImageSrc);

  // Handler to update the main image when a related image is clicked
  const handleRelatedImageClick = (relatedImage: string) => {
    setMainImage(`/productscroll/${relatedImage}.jpeg`); // Update main image to the selected related image
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ProductsHero />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={mainImage}
                alt={product.title}
                width={1200} // Increased width for higher resolution
                height={1200} // Increased height for higher resolution
                quality={100} // Maximum quality
                priority // Prioritize loading this image
                className="w-full h-auto object-contain rounded-xl" // Changed to object-contain to avoid cropping
                onError={(e) => (e.currentTarget.src = "/placeholder.jpg")} // Fallback image
              />
            </div>

            {/* Related Images Thumbnails (if they exist) */}
            {product.related_images && product.related_images.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-6">
                {" "}
                {/* Increased gap for better spacing */}
                {product.related_images.map((relatedImage, index) => (
                  <button
                    key={index}
                    onClick={() => handleRelatedImageClick(relatedImage)}
                    className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      mainImage === `/productscroll/${relatedImage}.jpeg`
                        ? "border-sky-600 scale-105"
                        : "border-gray-300 hover:border-sky-400"
                    }`}
                  >
                    <Image
                      src={`/productscroll/${relatedImage}.jpeg`}
                      alt={`${product.title} related image ${index + 1}`}
                      width={100} // Increased width for better clarity
                      height={100} // Increased height for better clarity
                      quality={100} // Maximum quality
                      className="w-full h-full object-contain" // Changed to object-contain
                      onError={(e) =>
                        (e.currentTarget.src = "/placeholder.jpg")
                      } // Fallback image
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Category:{" "}
              <span className="font-medium text-gray-800">
                Products {product.category}
              </span>
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              {product.detail_text}
            </p>
            <div className="flex space-x-6">
              <button className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                Inquiry
              </button>
              <button className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Big Images Section (if they exist) */}
        {product.bigimages && product.bigimages.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Additional Large Images
            </h2>
            <div className="space-y-6">
              {product.bigimages.map((bigImage, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={`/productscroll/${bigImage}.jpeg`}
                    alt={`${product.title} big image ${index + 1}`}
                    width={1200}
                    height={1200}
                    quality={100}
                    className="w-full h-auto object-contain rounded-xl"
                    onError={(e) => (e.currentTarget.src = "/placeholder.jpg")}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

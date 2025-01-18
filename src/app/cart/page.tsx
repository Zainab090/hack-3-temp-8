"use client";

import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };



export default function Cart() {
  const [products, setProducts] = useState([
    { id: 1, name: "Library Stool Chair", price: 99, quantity: 1 },
    { id: 2, name: "Wooden Chair", price: 80, quantity: 1 },
    { id: 3, name: "Dining Chair", price: 50, quantity: 1 },
  ]);

  const increaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navigation />
      <section className="mx-5 md:mx-10 lg:mx-48 py-10">
        {/* Header */}
        <h2 className="text-2xl font-bold pb-6">Bag</h2>

        {/* Product List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 text-sm">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b pb-5 mb-5"
              >
                <div className="flex items-start gap-4 text-sm">
                  <Image
                    src="/img-4.png"
                    alt={product.name}
                    width={100}
                    height={100}
                    className="rounded"
                  />
                  <div>
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>
                    <p className="text-sm">Size: L</p>
                    <p>Quantity: {product.quantity}</p>
                    <button className="px-3"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
                {product.quantity}
                <button className="px-3"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-bold">MRP: ${product.price}</p>
                  <button
                    onClick={() => removeProduct(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <span className="sr-only">Remove</span>
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Summary</h3>
            <div className="flex justify-between mb-4 text-sm">
              <p>Subtotal</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-4 text-sm">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className="flex justify-between font-bold text-sm mb-6 pt-5 ">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <hr/>
            <Button className="w-full mt-5 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-medium">
              <Link href="/checkout">Member Checkout</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../components/Card";

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/data/`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Set an empty array or handle the error as needed
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div className="w-full flex justify-center items-center flex-wrap">
      {products?.length>0  && products.map((item) => (
        <Link href={`/products/${item.id}`} key={item.id}>
          <Card name={item.name} price={item.price} image={item.image} />
        </Link>
      ))}
    </div>
  );
};

export default Page;

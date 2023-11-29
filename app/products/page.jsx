import Link from "next/link";
import React from "react";
import Card from "../components/Card";

const getProducts = async () => {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/data/`,
    { next: { revalidate: 10 } }
  );
  return products.json();
};
const Page = async () => {
  const products = await getProducts();

  return (
    <div className="w-full flex justify-center items-center flex-wrap">
        { products && 
          products.map((item)=>{
            return (
              <Link href={`/products/${item.id}`} key={item.id}>
                <Card name={item.name} price={item.price} image={item.image}/>
              </Link>
            )
          })
        }
    </div>
  );
};

export default Page;
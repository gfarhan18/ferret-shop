import React from "react";
import ProductCard from "../shared/ProductCard";
import Button from "../shared/Button";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 99.99,
      originalPrice: 149.99,
      brand: "SoundMagic",
    },
    {
      id: 2,
      name: "Compact Camera",

      image:
        "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 299.99,
      originalPrice: 399.99,
      brand: "SnapShot",
    },
    {
      id: 3,
      name: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 199.99,
      originalPrice: 259.99,
      brand: "TimeKeeper",
    },
    // {
    //   id: 4,
    //   name: 'Bluetooth Speaker',
    //   image: 'https://example.com/images/speaker.jpg',
    //   price: 59.99,
    //   originalPrice: 89.99,
    //   brand: 'BeatBlast'
    // },
    // {
    //   id: 5,
    //   name: 'Ergonomic Keyboard',
    //   image: 'https://example.com/images/keyboard.jpg',
    //   price: 70.00,
    //   originalPrice: 110.00,
    //   brand: 'TypeFast'
    // },
    // {
    //   id: 6,
    //   name: 'Gaming Mouse',
    //   image: "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //   price: 49.99,
    //   originalPrice: 79.99,
    //   brand: 'GamerGear'
    // }
  ];

  return (
    <section className=" py-10">
      <h2 className="text-3xl text-chinese-violet text-center">Our Products</h2>
      <div className="container w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">

      <Button variant="primary" href="/shop" className="mt-8">
        View More Products
      </Button>
      </div>
    </section>
  );
};

export default Products;

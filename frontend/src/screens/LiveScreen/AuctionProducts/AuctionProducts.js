import React from "react";
const auctionScrollBarList = [
  "Auction",
  "Buy Now",
  "Giveaways",
  "Sold",
  "Purchased",
];
const productsList = [
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
  {
    title: "Evo #74",
    name: "$40 hit your energy pick a slab! Insurance included! $20 floor $50 average $200 ceiling!",
  },
];
function AuctionProducts() {
  return (
    <div className="actionProducts__div">
      <div className="auction__name">
        Evo + Energy = Slabs & Freebies all stream!
      </div>
      <div className="auction__scrollbar">
        {auctionScrollBarList.map((title) => {
          return (
            <div className="auction__single__title" key={title}>
              <div className="auction__title__name">{title}</div>
            </div>
          );
        })}
      </div>
      <div className="auction__search__products">
        <input
          type="text"
          placeholder="Search products..."
          className="search__products__input"
        />
      </div>
      <div className="">
        <div className="total__products__count">77 Products</div>

        <div className="products__list">
          {productsList.map((product) => {
            return (
              <div className="individual__product" key={product.title}>
                <p className="product__title">{product.title}</p>
                <div className="product__name">{product.name}</div>
                <p className="auction__title">Auction</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AuctionProducts;

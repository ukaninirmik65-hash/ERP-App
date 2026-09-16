import { useContext } from "react";
import { products } from "../../Data/Data.js";
import Card from "../Card.jsx";
import { SidebarContext } from "../context/SidebarContext.jsx";

const Sales = () => {
  const { search } = useContext(SidebarContext);

  const SearchProduct = products.filter((val) =>
    val.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="product-contant">
      {SearchProduct.map((val) => {
        return <Card key={val.id} product={val} />;
      })}
    </div>
  );
};

export default Sales;

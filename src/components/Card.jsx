import { Skeleton } from "@mui/material";
import { useState } from "react";

const Card = ({ product }) => {
  const {
    image,
    productCode,
    name,
    category,
    price,
    purchasePrice,
    stock,
    gst,
    status,
    description,
  } = product;
  const [img, setImg] = useState(false);
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        {image && !img ? (
          <img
            src={image}
            alt={name}
            className="product-image"
            onError={() => setImg(true)}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{ height: "100%" }}
          />
        )}

        <span
          className={`product-status ${
            status === "Out of Stock" ? "out-of-stock" : null
          }`}
        >
          {status}
        </span>
      </div>

      <div className="product-content">
        <div className="product-top">
          <span className="product-category">{category}</span>
          <span className="product-code">{productCode}</span>
        </div>

        <h3 className="product-name">{name}</h3>

        <p className="product-description">{description}</p>

        <div className="product-details">
          <div className="product-detail">
            <span>Purchase Price</span>
            <strong>₹ {purchasePrice}</strong>
          </div>

          <div className="product-detail">
            <span>Sale Price</span>
            <strong>₹ {price}</strong>
          </div>
        </div>

        <div className="product-bottom">
          <div className="stock-info">
            <span className="stock-label">Stock</span>
            <strong>{stock} Units</strong>
          </div>

          <button
            className="product-action"
            style={{ cursor: stock === 0 ? "not-allowed" : null }}
            disabled={stock === 0}
          >
            {stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

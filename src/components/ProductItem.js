// Styling
import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;
  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
        onClick={() => setProduct(product)}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </ProductWrapper>
  );
};

export default ProductItem;

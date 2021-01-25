// Styling
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;
  const deleteProduct = props.deleteProduct;

  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
        onClick={() => setProduct(product)}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton deleteProduct={deleteProduct} product={product} />
    </ProductWrapper>
  );
};

export default ProductItem;

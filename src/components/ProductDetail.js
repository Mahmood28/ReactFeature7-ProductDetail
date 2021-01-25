import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const ProductDetail = (props) => {
  const product = props.product;
  const deleteProduct = props.deleteProduct;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => props.setProduct(null)}>
        return to list view
      </button>
      <DeleteButton deleteProduct={deleteProduct} product={product} />
    </DetailWrapper>
  );
};

export default ProductDetail;

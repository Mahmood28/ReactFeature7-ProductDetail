import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteProduct(props.product.id);
  };
  return <DeleteButtonStyled onClick={handleDelete} />;
};

export default DeleteButton;

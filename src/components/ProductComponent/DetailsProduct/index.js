import NameDetail from "./NameDetail";
import PropertyDetail from "./PropertyDetail";
import SelectColorProduct from "./SelectColorProduct";

const DetailsProducts = ({ itemData }) => {
  return (
    <div className="detial-container">
      <NameDetail
        productName={itemData.name}
        productRate={itemData.score}
        productComments={itemData.comment}
      />
      <SelectColorProduct />
      <PropertyDetail />
    </div>
  );
};

export default DetailsProducts;

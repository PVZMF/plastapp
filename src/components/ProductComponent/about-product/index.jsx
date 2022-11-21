// import "./index.scss";
import DescriptionLayout from "../descriptions-layout";

function AboutProduct({ productDetails = "" }) {
  return (
    <div>
      <DescriptionLayout title="درباره محصول">
        <p style={{ direction: "rtl" }}>{productDetails}</p>
      </DescriptionLayout>
    </div>
  );
}

export default AboutProduct;

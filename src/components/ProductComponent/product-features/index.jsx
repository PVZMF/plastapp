import "./index.scss";
import DescriptionLayout from "../descriptions-layout";

function ProductFeatures({ features }) {
  const renderedFeatures = () =>
    features?.map(({ id, name, value }) => {
      return (
        <li key={id}>
          {name}: {value}
        </li>
      );
    });

  return (
    <div className="product-features-container">
      <DescriptionLayout title="ویژگی‌های محصول">
        <ul style={{ direction: "rtl", paddingRight: "0" }}>
          {features?.length > 0 ? (
            renderedFeatures()
          ) : (
            <li>ویژگی برای این محصول ثبت نشده!</li>
          )}
        </ul>
      </DescriptionLayout>
    </div>
  );
}

export default ProductFeatures;

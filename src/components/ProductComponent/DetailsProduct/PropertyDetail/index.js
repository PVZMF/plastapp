const PropertyDetail = () => {
  const propertyList = [
    { id: 1, title: "طول", value: "50", unit: "m" },
    { id: 2, title: "عرض", value: "80", unit: "cm" },
    { id: 3, title: "جنس", value: "PPT", unit: "" },
    { id: 4, title: "تعداد در بسته", value: "12", unit: "Pcs" },
  ];
  return (
    <div className="property-con">
      <h3 className="product-title property-title">ویژگی ها</h3>
      <div className="property">
        {propertyList.map((item) => (
          <div className="pro-container" key={item.id}>
            <div>{item.title}</div>
            <div className="pro-value-con">
              <div className="pro-value">{item.unit}</div>
              <div>{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetail;

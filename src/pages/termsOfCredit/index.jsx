import React, { useEffect, useState } from "react";
import {getStoreRegistration} from "../../api/api"
const CreateTermsOfCredit = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    // setLoading(true);
    Promise.all([getStoreRegistration()])
      .then((results) => {
        setData(results[0].data);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);

  return (
    <footerComponent data={data} title={"شرایط خرید اعتباری"}></footerComponent>
  );
};

export default CreateTermsOfCredit;

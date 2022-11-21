import React, { useEffect, useState } from "react";
import {getStoreRegistration} from "../../api/api"

const CreatSupport = () => {  
  const [data, setData] = useState([]);
  window.scrollTo(0, 0);
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
    <footerComponent data={data} title={"پشتیبانی"}></footerComponent>
  );
};

export default CreatSupport;

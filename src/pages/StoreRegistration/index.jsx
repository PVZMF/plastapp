import React, { useEffect, useState } from "react";
import {getStoreRegistration} from "../../api/api";
import FooterComponent from "../../components/FooterPages/FooterComponent"
const CreateStoreRegistration = () => {
  
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
    <>
    {console.log(data)}
    <FooterComponent data={data} title={"مراحل ثبت فروشگاه"}/>
    </>
  );
};

export default CreateStoreRegistration;

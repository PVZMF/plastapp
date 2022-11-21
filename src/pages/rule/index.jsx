import React, { useEffect, useState } from "react";
import {getRulesConditon} from "../../api/api";
import FooterComponent from "../../components/FooterPages/FooterComponent"
const CreateStoreRegistration = () => {
  
  const [data, setData] = useState([]);
  window.scrollTo(0, 0);
  useEffect(() => {
    // setLoading(true);
    
    Promise.all([getRulesConditon()])
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
    <FooterComponent data={data} title={"قوانین و مقررات"}/>
    </>
  );
};

export default CreateStoreRegistration;

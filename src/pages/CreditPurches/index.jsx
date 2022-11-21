import React, { useEffect, useState } from "react";
import { getCreatePurches } from "../../api/api";
import FooterComponent from "../../components/FooterPages/FooterComponent"

const CreateOrderPlace = () => {

    const [data, setData] = useState([]);
    window.scrollTo(0, 0);
    useEffect(() => {
        // setLoading(true);
        Promise.all([getCreatePurches()])
            .then((results) => {
                setData(results[0].data);
            })
            .finally(() => {
                // setLoading(false);
            });
    }, []);

    return (
        <>
            <FooterComponent data={data} title={"شرایط خرید اعتباری"} />
        </>
    );
};

export default CreateOrderPlace;

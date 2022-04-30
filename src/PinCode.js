import React, { useState, useEffect } from "react";
import axios from "axios";

function PinCode({ address }) {
  var location =
    "Himalaya Mall, Drive In Road, Nilmani Society, Gurukul, Ahmedabad, Gujarat, India";
  const [pincode, setPincode] = useState({
    loading: false,
    requiredpincode: null,
  });
  useEffect(() => {
    setPincode({ loading: true });
    const URL = "https://maps.googleapis.com/maps/api/geocode/json";
    axios
      .get(URL, {
        params: {
          address: address,
          key: "AIzaSyC-iSBj-hJJq1K339bDZAgOdxp6rJcjg6k",
        },
      })
      .then((res) => {
        console.log(res);

        let dataLength = res.data.results[0].address_components.length;
        var pincode =  res.data.results[0].address_components[dataLength - 1].long_name;
        setPincode({loading:false,requiredpincode:pincode})
        console.log(address)
       
      });
  }, [setPincode,address]);
  return <div>PinCode:{pincode.requiredpincode}</div>;
}

export default PinCode;

import React, { useEffect, useState } from "react";
import endpoint from "../../../utils/endpoints/endpoint";
import CloudinaryUpload from "../../../utils/CloudinaryUpload";

/* This component serves handles the waybill for each customer
per delivery. It is reflected in the CustomerListDetails component
*/

function SecondaryWaybill({ index, formData, setFormData }) {
  // const handleChange = (e) => {
  //     setFormData((prev) => {
  //         return {
  //             ...prev,
  //             secondaryWayBills: [prev.secondaryWayBills.map((item) => ({
  //                 ...item,
  //                 [e.target.name]: e.target.value,
  //             }))],
  //         };
  //     });
  // };

  const handleChange = (e, frmId, fieldName) => {
    const updatedValue =
      e.target.type === "number" ? +e.target.value : e.target.value;

    setFormData((prevFormData) => {
      const updatedSecondaryWayBills = [...prevFormData.secondaryWayBills];
      updatedSecondaryWayBills[frmId] = {
        ...updatedSecondaryWayBills[frmId],
        [fieldName]: updatedValue,
      };

      return { ...prevFormData, secondaryWayBills: updatedSecondaryWayBills };
    });
  };

  // const handleChange = (e, frmId, fieldName) => {
  //   formData.secondaryWayBills[frmId][fieldName] = +e.target.value;
  //   // console.log(e.target.value)
  //   // let i = 0
  //   // while (i < formData.truckDocuments.length) {
  //   //     if (formData.truckDocuments[i].type === type) {
  //   //         formData.truckDocuments[i][valToChange] = newVal
  //   //         break;
  //   //     }
  //   //     i += 1
  //   // }
  //   setFormData({ ...formData });
  // };

  const handleImageUpload = (imageURL, index) => {
    handleChange(
      {
        target: { value: imageURL },
      },
      index,
      "documentUrl"
    );
  };

  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    endpoint
      .get("/variable/customers")
      .then((res) => {
        console.log(res.data.data);
        setCustomers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const shortageClaim = (arg1, arg2) => {
  //   return arg1 - arg2;
  // };

  const shortageClaim = (quantityLoaded, quantityDelivered) => {
    // Check if quantityLoaded and quantityDelivered are valid numbers
    if (
      typeof quantityLoaded === "number" &&
      typeof quantityDelivered === "number"
    ) {
      return quantityLoaded - quantityDelivered;
    } else {
      // Handle the case where one or both values are not valid numbers
      return 0; // Or any other appropriate value or message
    }
  };

  return (
    <form className="text-primary grid gap-5 lg:w-1/2 border border-primary rounded-lg p-5">
      <h6 className="font-medium">{`Secondary Waybill ${index + 1}`}</h6>
      <label htmlFor="">
        Waybill Number
        <input
          className="input input-primary w-full"
          value={formData?.secondaryWayBills[index]?.waybillNumber}
          onChange={(e) => handleChange(e, index, "waybillNumber")}
          placeholder="SWN-123456"
          type="text"
          name="waybillNumber"
          id=""
        />
      </label>
      <label>
        Upload Waybill
        <CloudinaryUpload
          onSuccess={(imageURL) => handleImageUpload(imageURL, index)}
        />
        {/* <input
          className="pt-4"
          type="file"
          value={formData?.secondaryWayBills[index]?.documentUrl}
          onChange={(e) => handleChange(e, index, "documentUrl")}
          name="documentUrl"
        ></input> */}
      </label>
      <label htmlFor="">
        Customer Name
        <select
          className="select select-primary w-full"
          value={formData?.secondaryWayBills[index]?.customerId}
          onChange={(e) => handleChange(e, index, "customerId")}
          name="customerId"
          id=""
        >
          <option value="">Select Customer</option>
          {customers.map((item) => (
            <option value={item.customerId} key={item.customerId}>
              {item.customerName}
            </option>
          ))}
        </select>
        {/* <input class='input input-primary w-full' placeholder='Sam Doe' type="text" name="" id="" /> */}
      </label>
      <label htmlFor="">
        Secondary Customer Address
        <input
          class="input input-primary w-full"
          placeholder="Sam Doe"
          type="text"
          name=""
          id=""
        />
      </label>
      <fieldset className="grid text-primary gap-5 w-full md:grid-cols-2 items-end">
        <label htmlFor="">
          Delivery Zone
          <input
            className="input input-primary w-full"
            type="text"
            name="deliveryZone"
          ></input>
        </label>
        <label htmlFor="">
          Quantity Loaded
          <input
            class="input input-primary w-full"
            value={formData?.secondaryWayBills[index]?.quantityLoaded}
            onChange={(e) => handleChange(e, index, "quantityLoaded")}
            placeholder="33000 Ltrs"
            type="number"
            name="quantityLoaded"
            id=""
          />
        </label>
        <label htmlFor="">
          Quantity Delivered
          <input
            class="input input-primary w-full"
            value={formData?.secondaryWayBills[index]?.quantityDelivered}
            onChange={(e) => handleChange(e, index, "quantityDelivered")}
            placeholder="32980 Ltrs"
            type="number"
            name="totalQuantityDelivered"
            id=""
          />
        </label>
        <label htmlFor="">
          Estimated Product Shortage
          <input
            class="input input-primary w-full"
            value={shortageClaim(
              formData?.secondaryWayBills[index]?.quantityLoaded,
              formData?.secondaryWayBills[index]?.quantityDelivered
            )}
            placeholder="20 Ltrs"
            type="text"
            name="estimatedProductShortage"
            id=""
          />
        </label>
        <label htmlFor="">
          Customer Shortage Claim
          <input
            class="input input-primary w-full"
            value={formData?.secondaryWayBills[index]?.shortageClaim}
            onChange={(e) => handleChange(e, index, "shortageClaim")}
            placeholder="20 Ltrs"
            type="number"
            name="customerShortageClaim"
            id=""
          />
        </label>
        <label htmlFor="">
          Secondary Delivery Distance Travelled
          <input
            class="input input-primary w-full"
            value={formData?.secondaryWayBills[index]?.distanceTravelled}
            onChange={(e) => handleChange(e, index, "distanceTravelled")}
            placeholder="56 Km"
            type="number"
            name="distanceTravelled"
            id=""
          />
        </label>
      </fieldset>
      <fieldset className="grid gap-5">
        <h6 className="font-medium">Transaction Status</h6>
        <label htmlFor="">
          Reviewed and Complete
          <select
            className="w-full select select-primary"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: +e.target.value })
            }
            name="transactionStatus"
            id=""
          >
            <option value="">Select Status</option>
            <option value="0">Close</option>
            <option value="1">Open</option>
          </select>
        </label>
      </fieldset>
    </form>
  );
}

export default SecondaryWaybill;

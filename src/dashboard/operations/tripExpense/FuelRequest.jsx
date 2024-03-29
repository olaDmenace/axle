import React, { useEffect, useState } from "react";
import endpoint from "../../../utils/endpoints/endpoint";
import FormTitle from "../../FormTitle";
import { useLocation } from "react-router-dom";

const FuelRequest = () => {
  const location = useLocation();

  const [truck, setTruck] = useState([]);
  useEffect(() => {
    endpoint
      .get("/truck/programme")
      .then((res) => {
        console.log(res.data.data);
        setTruck(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [stations, setStations] = useState([]);
  useEffect(() => {
    endpoint
      .get("/variable/depots")
      .then((res) => {
        console.log(res.data.data);
        setStations(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleFuelRequestChange = (field, value) => {
  //   if (field === "requestDate" && value) {
  //     // Split the date into parts
  //     const parts = value.split("/");
  //     if (parts.length === 3) {
  //       // Create a new date in ISO format (yyyy-mm-dd)
  //       value = `${parts[2]}-${parts[0].padStart(2, "0")}-${parts[1].padStart(
  //         2,
  //         "0"
  //       )}`;
  //     }
  //   }

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     fuelRequest: {
  //       ...prevData.fuelRequest,
  //       [field]: value,
  //     },
  //   }));
  // };

  const handleTopUpRequestChange = (field, value) => {
    if (field === "requestDate" && value) {
      // Split the date into parts
      const parts = value.split("/");
      if (parts.length === 3) {
        // Create a new date in ISO format (yyyy-mm-dd)
        value = `${parts[2]}-${parts[0].padStart(2, "0")}-${parts[1].padStart(
          2,
          "0"
        )}`;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      topUpRequest: {
        ...prevData.topUpRequest,
        [field]: value,
      },
    }));
  };

  const [formData, setFormData] = useState({
    journeyManagementId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    fuelRequest: {
      dispensingStationId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      requestDate: "2023-12-05T14:40:45.353Z",
      currentVolume: 0,
      issuedVolume: 0,
      baseStock: 0,
      status: 0,
    },
    topUpRequest: {
      dispensingStationId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      requestDate: "2023-12-05T14:40:45.353Z",
      currentVolume: 0,
      issuedVolume: 0,
      baseStock: 0,
      status: 0,
      reason: "string",
    },
    fuelReconciliation: {
      volumeConsumed: 0,
      comment: "string",
      variationReason: "string",
    },
    unionDuesPayable: 0,
    unionDuesPaid: 0,
    status: 0,
    roadExpensePayable: 0,
    roadExpensePaid: 0,
    roadExpenseStatus: 0,
    tripAllowancePayable: 0,
    tripAllowancePaid: 0,
    tripAllowanceStatus: 0,
    aquilaFlashingPayable: 0,
    aquilaFlashingPaid: 0,
    aquilaFlashingStatus: 0,
    welfarePayable: 0,
    welfarePaid: 0,
    welfareStatus: 0,
    otherExpensesPaid: 0,
    purpose: "string",
    otherExpensesStatus: 0,
  });

  return (
    <div className="space-y-2 grid bg-white p-5 rounded-lg">
      <FormTitle Title={"Truck Expense Request Form"} />
      <hr className="pb-5" />
      <div className="py-5 text-primary space-y-3">
        <form action="" className="grid text-primary gap-10 w-full">
          <fieldset className="grid md:grid-cols-2 gap-3 items-end">
            <label htmlFor="trip_Id">
              Trip ID
              <select
                // disabled={location.state ? true : false}
                className="select select-primary w-full"
                // value={formData.journeyManagementId}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     journeyManagementId: e.target.value,
                //   })
                // }
              >
                <option value="">Select Trip ID</option>
                {truck.map((item) => (
                  <option
                    key={item.journeyManagementId}
                    value={item.truckProgrammingId}
                  >
                    {item.tripReference}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="">
              Dispensing Station Name
              <select
                className="w-full select select-primary"
                // value={formData.fuelRequest.dispensingStation}
                // onChange={(e) => {
                //   handleFuelRequestChange("dispensingStation", e.target.value);
                // }}
              >
                {stations.map((station) => (
                  <option key={station.depotId} value={station.depotName}>
                    {station.depotName}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="">
              Request Date
              <input
                className="w-full input input-primary"
                type="date"
                name=""
                id=""
                // value={formData.fuelRequest.requestDate}
                // onChange={(e) =>
                //   handleFuelRequestChange("requestDate", e.target.value)
                // }
              />
            </label>
            <label htmlFor="">
              Current Fuel In Tank (L)
              <input
                className="input input-primary w-full"
                type="number"
                name=""
                id=""
                placeholder="48 Ltr"
                // value={formData.fuelRequest.currentVolume}
                // onChange={(e) => {
                //   const newValue = parseFloat(e.target.value);
                //   if (!isNaN(newValue)) {
                //     handleFuelRequestChange("currentVolume", newValue);
                //   }
                // }}
              />
            </label>
            <label htmlFor="">
              Base Stock Request
              <input
                className="w-full input input-primary"
                placeholder="48 Ltr"
                type="text"
                name=""
                id=""
                // value={formData.fuelRequest.baseStock}
                // onChange={(e) => {
                //   const newValue = parseFloat(e.target.value);
                //   if (!isNaN(newValue)) {
                //     handleFuelRequestChange("baseStock", newValue);
                //   }
                // }}
              />
            </label>
            <label htmlFor="">
              Fuel Requested
              <input
                className="w-full input input-primary"
                placeholder="68 Ltr"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Fuel Issued (Litres)
              <input
                className="w-full input input-primary"
                disabled={location?.state === null}
                placeholder="68"
                type="text"
                name=""
                id=""
                // value={formData.fuelRequest.issuedVolume}
                // onChange={(e) => {
                //   const newValue = parseFloat(e.target.value);
                //   if (!isNaN(newValue)) {
                //     handleFuelRequestChange("issuedVolume", newValue);
                //   }
                // }}
              />
            </label>
            <label htmlFor="">
              Fuel Issued (Price/Litre)
              <input
                className="w-full input input-primary"
                disabled={location?.state === null}
                placeholder="145"
                type="text"
                name=""
                id=""
              />
            </label>
          </fieldset>
          <fieldset className="grid gap-5">
            <label htmlFor="">
              Total Fuel Issued (Price/Litre)
              <input
                className="w-full input input-primary"
                disabled={location?.state === null}
                placeholder="145"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Fuel Request Status
              <select
                className="w-full select select-primary"
                disabled={location?.state === null}
                name=""
                id=""
                // value={formData.fuelRequest.status}
                // onChange={(e) => {
                //   handleFuelRequestChange("status", +e.target.value);
                // }}
              >
                <option value="">Select Status</option>
                <option value="1">Issued</option>
                <option value="2">Declined</option>
              </select>
            </label>
          </fieldset>
          <h4 className="text-lg font-semibold">Fuel Request</h4>
          <fieldset className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-end">
            <label htmlFor="">
              Union Dues Payable
              <input
                className="w-full input input-primary"
                placeholder="4000"
                type="number"
                name=""
                id=""
                // value={formData.unionDuesPayable}
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     unionDuesPayable: +e.target.value,
                //   });
                // }}
              />
            </label>
            <label htmlFor="">
              Union Dues Paid
              <input
                className="w-full input input-primary"
                placeholder="4000"
                disabled={location?.state === null}
                type="number"
                name=""
                id=""
                // value={formData.unionDuesPaid}
                // onChange={(e) => {
                //   setFormData({ ...formData, unionDuesPaid: +e.target.value });
                // }}
              />
            </label>
            <label htmlFor="">
              Union Dues Status
              <select
                className="w-full select select-primary"
                name=""
                disabled={location?.state === null}
                id=""
                // value={formData.status}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     status: +e.target.value,
                //   })
                // }
              >
                <option value="">Select Status</option>
                <option value="1">Paid</option>
                <option value="2">Refused</option>
              </select>
            </label>
            <label htmlFor="">
              Road Expense Payable
              <input
                className="w-full input input-primary"
                placeholder="4000"
                type="number"
                name=""
                id=""
                // value={formData.roadExpensePayable}
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     roadExpensePayable: +e.target.value,
                //   });
                // }}
              />
            </label>
            <label htmlFor="">
              Road Expense Paid
              <input
                className="w-full input input-primary"
                placeholder="4000"
                disabled={location?.state === null}
                type="number"
                name=""
                id=""
                // value={formData.roadExpensePaid}
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     roadExpensePaid: +e.target.value,
                //   });
                // }}
              />
            </label>
            <label htmlFor="">
              Road Expense Status
              <select
                className="w-full select select-primary"
                disabled={location?.state === null}
                name=""
                id=""
                // value={formData.roadExpenseStatus}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     roadExpenseStatus: +e.target.value,
                //   })
                // }
              >
                <option value="">Select Status</option>
                <option value="1">Paid</option>
                <option value="2">Refused</option>
              </select>
            </label>
          </fieldset>
          <h4 className="text-lg font-semibold">Top-up Request</h4>
          <fieldset className="grid md:grid-cols-2 gap-3 items-end">
            <label htmlFor="">
              Fuel Issued (Litres)
              <input
                className="w-full input input-primary"
                placeholder="68"
                type="text"
                name=""
                id=""
                // value={formData.fuelRequest.issuedVolume}
                // onChange={(e) => {
                //   const newValue = parseFloat(e.target.value);
                //   if (!isNaN(newValue)) {
                //     handleFuelRequestChange("issuedVolume", newValue);
                //   }
                // }}
              />
            </label>
            <label htmlFor="">
              Fuel Issued (Price/Litre)
              <input
                className="w-full input input-primary"
                placeholder="145"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Dispensing Station Name
              <select
                className="w-full select select-primary"
                // value={formData.topUpRequest.dispensingStation}
                // onChange={(e) => {
                //   handleTopUpRequestChange("dispensingStation", e.target.value);
                // }}
              >
                {stations.map((station) => (
                  <option key={station.depotId} value={station.depotName}>
                    {station.depotName}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="">
              Request Date
              <input
                className="w-full input input-primary"
                type="date"
                name=""
                id=""
                // value={formData.topUpRequest.requestDate}
                // onChange={(e) =>
                //   handleTopUpRequestChange("requestDate", e.target.value)
                // }
              />
            </label>
            <label htmlFor="">
              Current Fuel In Tank (L)
              <input
                className="input input-primary w-full"
                type="number"
                name=""
                id=""
                placeholder="48 Ltr"
                // value={formData.topUpRequest.currentVolume}
                // onChange={(e) => {
                //   const newValue = parseFloat(e.target.value);
                //   if (!isNaN(newValue)) {
                //     handleTopUpRequestChange("currentVolume", newValue);
                //   }
                // }}
              />
            </label>
            <label htmlFor="">
              Base Stock Request - Top-up
              <input
                className="w-full input input-primary"
                placeholder="48 Ltr"
                type="text"
                name=""
                id=""
                // value={formData.topUpRequest.baseStock}
                // onChange={(e) => {
                //   const newValue = parseFloat(e.target.value);
                //   if (!isNaN(newValue)) {
                //     handleTopUpRequestChange("baseStock", newValue);
                //   }
                // }}
              />
            </label>
            <label htmlFor="">
              Fuel Requested
              <input
                className="w-full input input-primary"
                placeholder="68 Ltr"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Fuel Issued (Litres)
              <input
                className="w-full input input-primary"
                placeholder="68"
                type="text"
                disabled={location?.state === null}
                name=""
                id=""
                // value={formData.topUpRequest.issuedVolume}
                // onChange={(e) => {
                //   const newValue = parseFloat(e.target.value);
                //   if (!isNaN(newValue)) {
                //     handleTopUpRequestChange("issuedVolume", newValue);
                //   }
                // }}
              />
            </label>
            <label htmlFor="">
              Fuel Issued (Price/Litre)
              <input
                className="w-full input input-primary"
                placeholder="145"
                type="text"
                disabled={location?.state === null}
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Total Fuel Issued (Price/Litre)
              <input
                className="w-full input input-primary"
                placeholder="145"
                disabled={location?.state === null}
                type="text"
                name=""
                id=""
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="">
              Fuel Request - Top-Up Status
              <select
                className="w-full select select-primary"
                name=""
                disabled={location?.state === null}
                id=""
                // value={formData.topUpRequest.status}
                // onChange={(e) => {
                //   handleTopUpRequestChange("status", +e.target.value);
                // }}
              >
                <option value="">Select Status</option>
                <option value="1">Issued</option>
                <option value="2">Declined</option>
              </select>
            </label>
          </fieldset>
          <label htmlFor="">
            Top-up Reason
            <textarea
              className="w-full textarea textarea-primary"
              name=""
              id=""
              rows="5"
              // value={formData.topUpRequest.reason}
              // onChange={(e) => {
              //   handleTopUpRequestChange("reason", e.target.value);
              // }}
            ></textarea>
          </label>
          <button className="btn btn-primary mx-auto">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FuelRequest;

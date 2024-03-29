import React from "react";
import CloudinaryUpload from "../../../utils/CloudinaryUpload";

function CustomerDetails({ formData, setFormData }) {
  const handleImageUpload = (imageUrl) => {
    setFormData({
      ...formData,
      primaryWayBill: {
        ...formData.primaryWayBill,
        documentUrl: imageUrl,
      },
    });
  };

  return (
    <div className="space-y-2">
      <div className="space-y-2">
        <h4 className="text-xl text-primary font-medium">Customer Details</h4>
        <hr />
        {/* Show the entry as requested here */}
        <form className="grid gap-5">
          <div className="grid text-primary gap-5 w-full md:grid-cols-2 lg:grid-cols-3 items-end">
            <label htmlFor="">
              Actual Customer Type
              <br />
              <input
                class="input input-primary w-full"
                placeholder="Ardova Direct Delivery"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Actual Primary/Direct Customer Name
              <br />
              <input
                class="input input-primary w-full"
                placeholder="Sam Doe"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Actual Number of Customers
              <br />
              <input
                class="input input-primary w-full"
                placeholder="0"
                type="number"
                min={0}
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Actual Customer Destination State
              <br />
              <select class="select select-primary w-full" name="" id="">
                <option selected disabled>
                  Lagos
                </option>
              </select>
            </label>
            <label htmlFor="">
              Actual Delivery Business Area
              <br />
              <select className="select select-primary w-full">
                <option value="">Select Business Area</option>
                <option value="south west">South West</option>
                <option value="south east">South East</option>
                <option value="north i">North I</option>
                <option value="north ii">North II</option>
              </select>
            </label>
            <label htmlFor="">
              Primary Current Waybill Number
              <br />
              <input
                value={formData.primaryWayBill.waybillNumber}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    primaryWayBill: {
                      ...formData.primaryWayBill,
                      waybillNumber: e.target.value,
                    },
                  });
                }}
                class="input input-primary w-full"
                type="text"
                name=""
                id=""
              />
            </label>
            <label>
              Upload Primary Waybill
              {/* <input
                value={formData.primaryWayBill.documentUrl}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    primaryWayBill: {
                      ...formData.primaryWayBill,
                      documentUrl: e.target.value,
                    },
                  });
                }}
                className="pt-4"
                type="file"
              ></input> */}
              <CloudinaryUpload onSuccess={handleImageUpload} />
            </label>
          </div>
          {/* <div className='grid text-primary gap-5 w-full md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Primary Delivery Distance Travelled<br />
                            <input class='input input-primary w-full' placeholder='124KM' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Total Distance Travelled<br />
                            <input value={formData.primaryWayBill.distanceTravelled} onChange={(e) => { setFormData({ ...formData, primaryWayBill: { ...formData.primaryWayBill, distanceTravelled: +e.target.value } }) }} class='input input-primary w-full' placeholder='124KM' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            ETA Delivery Location<br />
                            <input class='input input-primary w-full' placeholder='02:00' type="time" name="" id="" />
                        </label>
                        <label htmlFor="">
                            ETA Return Destination<br />
                            <input class='input input-primary w-full' placeholder='08:00' type="time" name="" id="" />
                        </label>
                    </div> */}
        </form>
      </div>
    </div>
  );
}

export default CustomerDetails;

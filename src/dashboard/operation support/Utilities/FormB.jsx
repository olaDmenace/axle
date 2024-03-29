import React from "react";

const FormB = () => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <br />

      <form action="" className="grid text-primary gap-5 w-full">
        <h4 className="text-xl text-primary font-medium">FORM B</h4>
        <fieldset className="grid md:grid-cols-2 gap-3 items-end">
          <label htmlFor="">
            Truck
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Number"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Truck Owner
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Owner"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Vehicle Renewal Type
            <input
              className="w-full input input-primary"
              placeholder="0000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Due Date *
            <input
              className="w-full input input-primary"
              placeholder="ivusu"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Due Soon Threshold
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Notify
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
        </fieldset>
        <button class="btn btn-primary mx-auto" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormB;

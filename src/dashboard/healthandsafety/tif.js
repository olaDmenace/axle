import React, { useState } from "react";
import PageTitle from "../../utils/PageTitle";
import WhiteProduct from "./WhiteProduct";
import LPG from "./LPG";
import FormTitle from "../FormTitle";
import WhiteProduct2 from "./WhiteProduct2";
import LPG2 from "./LPG2";

function Tif() {
  PageTitle("Axle & Cartage - Pre Trip Inspection Form");
  const [form, setForm] = useState(0);

  const activeForm = () => {
    if (form === 0) {
      return <WhiteProduct />;
    } else if (form === 1) {
      return <WhiteProduct2 />;
    } else if (form === 2) {
      return <LPG />;
    } else {
      return <LPG2 />;
    }
  };

  return (
    <div className="space-y-2 grid">
      <FormTitle Title={"Pre Trip Inspection Form"} />
      <hr />
      <ul className="steps steps-horizontal w-full pt-5">
        <li className="step step-primary"></li>
        <li className={`step ${form === 1 ? `step-primary` : `step`}`}></li>
        <li className={`step ${form === 2 ? `step-primary` : `step`}`}></li>
        <li className={`step ${form === 3 ? `step-primary` : `step`}`}></li>
      </ul>
      <div className="flex gap-10 pb-10 overflow-x-scroll scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-green-900">
        <div>{activeForm()}</div>
      </div>
      <div class="btn-group mx-auto pt-5">
        <button
          disabled={form === 0}
          onClick={() => {
            setForm((currForm) => currForm - 1);
          }}
          class="btn btn-active"
        >
          Prev
        </button>
        <button
          class="btn btn-active"
          onClick={() => {
            setForm((currForm) => currForm + 1);
           
          }}
        >
          {form === 3 ? "Submit"={handlesubmit} : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Tif;

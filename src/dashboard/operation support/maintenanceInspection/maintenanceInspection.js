import React, { useState } from "react";

import PageTitle from "../../../utils/PageTitle";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import FormTitle from "../../FormTitle";

function MaintenanceInspection() {
  PageTitle("Axle & Cartage - maintenance Inspection ");
  const [form, setForm] = useState(0);

  const activeForm = () => {
    if (form === 0) {
      return <Form1 />;
    } else if (form === 1) {
      return <Form2 />;
    } else if (form === 2) {
      return <Form3 />;
    } else {
      return <Form4 />;
    }
  };

  return (
    <div className="space-y-2 grid">
      <FormTitle Title={"Maintenance Inspection Form"} />
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
          {form === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default MaintenanceInspection;
import React, { useState } from "react";
import endpoint from "../../../utils/endpoints/endpoint";
import FormA1 from "./FormA1";
import FormA2 from "./FormA2";
import FormA3 from "./FormA3";
import FormA4 from "./FormA4";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import PopUp from "../../../utils/PopUp";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/outline";
import { useLocation } from "react-router-dom";

function FormA() {
  const [form, setForm] = useState(0);
  const location = useLocation();
  // console.log(location?.state?.truck)

  // Collects and holds the data from the children form
  const initialState = location.state
    ? {
        // Use the data from location.state.truck
        // truckNumber: location.state.truck.truckNumber,
        // fleetNumber: location.state.truck.fleetNumber,
        // licensePlateNumber: location.state.truck.licensePlateNumber,

        ...location.state.truck,
        // truckNumber: location.state.truck?.truckNumber || '',
        // fleetNumber: '',
        // licensePlateNumber: '',
        // pictureUrl: '',
        // tractorChasis: '',
        // engineNumber: '',
        // identificationNumber: '',
        // manufactureDate: '',
        // brand: {
        //     model: '',
        //     manufacturer: ''
        // },
        truckDocuments: [
          {
            type: 0,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 1,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 2,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 3,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 4,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 5,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 6,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 7,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 8,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 9,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 10,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          // {
          //     type: 11,
          //     referenceNumber: "",
          //     dateIssued: "",
          //     expiryDate: ""
          // }
        ],
        // FormA3

        maintenanceInfo: {
          lastPreventiveMaintenance: "",
          nextPreventiveMaintenance: "",
          inServiceDate: "",
          inServiceOdometer: 0,
          estimatedServiceLive: 0,
          estServiceMet: "",
          estimatedResaleValue: 0,
          outOfServiceDate: "",
          outOfServiceOdometer: 0,
        },
        purchaseInfo: {
          vendorName: "",
          purchaseDate: "",
          purchaseValue: 0,
          odometer: 0,
          notes: "",
          warrantyExpiryDate: "",
          warrantyMaxOdometer: 0,
        },
        specification: {
          driveType: "",
          brakeSystem: "",
          rearAxle: 0,
          fuelType: "",
          fisrtTankCapacity: 0,
          secondTankCapacity: 0,
          tankCapacityMetric: "",
          oilCapacity: 0,
          oilCapacityMetric: "",
          maintenanceVendor: "",
        },
        // Rest of the properties...
      }
    : {
        // FormA1
        truckNumber: "",
        fleetNumber: "",
        licensePlateNumber: "",
        tractorChasis: "",
        engineNumber: "",
        identificationNumber: "",
        manufactureDate: "",
        brand: {
          model: "",
          manufacturer: "",
        },
        registrationState: "",
        pictureUrl: "",
        status: 0,
        logisticsCoordinatorId: "",
        journeyOfficerId: "",
        deliveryOfficerId: "",
        ownership: "",
        ownerId: "",
        additionalDetails: "",

        // FormA2

        truckDocuments: [
          {
            type: 0,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 1,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 2,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 3,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 4,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 5,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 6,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 7,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 8,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 9,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          {
            type: 10,
            referenceNumber: "",
            dateIssued: "",
            expiryDate: "",
          },
          // {
          //     type: 11,
          //     referenceNumber: "",
          //     dateIssued: "",
          //     expiryDate: ""
          // }
        ],

        // FormA3

        maintenanceInfo: {
          lastPreventiveMaintenance: "",
          nextPreventiveMaintenance: "",
          inServiceDate: "",
          inServiceOdometer: 0,
          estimatedServiceLive: 0,
          estServiceMet: "",
          estimatedResaleValue: 0,
          outOfServiceDate: "",
          outOfServiceOdometer: 0,
        },
        purchaseInfo: {
          vendorName: "",
          purchaseDate: "",
          purchaseValue: 0,
          odometer: 0,
          notes: "",
          warrantyExpiryDate: "",
          warrantyMaxOdometer: 0,
        },

        // FormA4

        specification: {
          driveType: "",
          brakeSystem: "",
          rearAxle: 0,
          fuelType: "",
          fisrtTankCapacity: 0,
          secondTankCapacity: 0,
          tankCapacityMetric: "",
          oilCapacity: 0,
          oilCapacityMetric: "",
          maintenanceVendor: "",
        },
      };

  const [formData, setFormData] = useState(initialState);

  const [formValues, setFormValues] = useState({
    truckNumber: formData.truckNumber,
    fleetNumber: formData.fleetNumber,
    licensePlateNumber: formData.licensePlateNumber,
    pictureUrl: "",
    tractorChasis: formData.tractorChasis,
    engineNumber: formData.engineNumber,
    identificationNumber: formData.identificationNumber,
    manufactureDate: formData.manufactureDate,
    brand: {
      model: formData.brand.model,
      manufacturer: formData.brand.manufacturer,
    },
    // referenceNumber: formData.referenceNumber || "",
    // dateIssued: formData.dateIssued || "",
    // expiryDate: formData.expiryDate || "",
  });

  // Controls which form is displayed on the page
  const formDisplay = () => {
    if (form === 0) {
      return <FormA1 formData={formData} setFormData={setFormData} />;
    } else if (form === 1) {
      return <FormA2 formData={formData} setFormData={setFormData} />;
    } else if (form === 2) {
      return <FormA3 formData={formData} setFormData={setFormData} />;
    } else {
      return <FormA4 formData={formData} setFormData={setFormData} />;
    }
  };

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState({
    icon: "",
    message: "",
  });

  // Handles the submit event
  function handleSubmit() {
    // e.preventDefault()
    setLoading(!loading);
    console.log(formData);
    endpoint
      .post("/truck", formData)
      .then((res) => {
        setShow(true);
        console.log(res);
        setShow(!show);
        setReply({
          icon: <ThumbUpIcon className="mx-auto h-24 text-primary" />,
          message: res.data.message,
        });
      })
      .catch((err) => {
        setShow(!show);
        setReply({
          icon: <XCircleIcon className="mx-auto h-24 text-red-500" />,
          message: `Please, check your form and try again. ${err.response.data.message}`,
        });
        console.log(err);
      });
    // setLoading(!loading)
  }

  function closePop(e) {
    setShow(false);
    setLoading(!loading);
  }

  const handleUpdate = (arg) => {
    // console.log(formValues)
    // arg.preventDefault()
    setLoading(!loading);
    console.log(formValues);
    endpoint
      .put(`/truck/${arg}`, formValues)
      .then((res) => {
        setShow(true);
        console.log(res);
        setShow(!show);
        setReply({
          icon: <ThumbUpIcon className="mx-auto h-24 text-primary" />,
          message: res.data.message,
        });
      })
      .then((err) => {
        setShow(!show);
        setReply({
          icon: <XCircleIcon className="mx-auto h-24 text-red-500" />,
          message: `Please, check your form and try again ${err.response.data.message}`,
        });
        console.log(err);
      });
  };

  const formSubmit = () => {
    if (form === 3 && location.state) {
      handleUpdate(location.state.truck.truckId);
    } else if (form === 3 && !location.state) {
      handleSubmit();
    } else setForm((currForn) => currForn + 1);
  };

  // const formSubmit = () => {
  //     if (form === 3 && location.state) {
  //       handleUpdate(location.state.truck.truckId)
  //     } else if (form === 3 && !location.state) {
  //       handleSubmit()
  //     } else {
  //       setForm((currForm) => currForm + 1)
  //     }
  //   }

  // { form === 3 ? handleSubmit() : setForm((currForm) => currForm + 1) }

  return (
    <div className="grid rounded-lg p-5 bg-white">
      {show && (
        <PopUp>
          {reply.icon}
          <p className="mx-auto text-center text-primary bg-transparent">
            {reply.message}
          </p>
          <button className="btn btn-primary" onClick={(e) => closePop()}>
            Confirm
          </button>
        </PopUp>
      )}
      <div>{formDisplay()}</div>
      {!loading && (
        <div className="btn-group mx-auto pt-5">
          <button
            className={form === 0 ? "btn btn-disabled" : "btn btn-primary"}
            onClick={() => {
              setForm((currFage) => currFage - 1);
            }}
          >
            Prev
          </button>
          <button
            disabled={form === 3 && !formData.truckNumber}
            className="btn btn-active"
            onClick={() => formSubmit()}
          >
            {form === 3 ? "Submit" : "Next"}
          </button>
        </div>
      )}
      {loading && <LoadingSpinner />}
    </div>
  );
}

export default FormA;

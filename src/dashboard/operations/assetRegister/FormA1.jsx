import React from 'react'

function FormA1({ formData, setFormData }) {
    return (
        <div className='py-5 text-primary space-y-3'>
            <h4 className='text-lg font-semibold'>Form A - Tractor</h4>
            <h6 className='font-semibold text-lg'>Identification</h6>
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label className='text-primary'>
                        Truck Number
                        <select value={formData.truckNumber} onChange={(e) => setFormData({ ...formData, truckNumber: e.target.value })} class='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Truck Number</option>
                        </select>
                    </label>
                    <label className='text-primary'>
                        Fleet No. - Tractor
                        <select value={formData.fleetNumber} onChange={(e) => setFormData({ ...formData, fleetNumber: e.target.value })} class='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Service Type</option>
                        </select>
                    </label>
                    <label>
                        Tractor Chasis
                        <input value={formData.chasis} onChange={(e) => setFormData({ ...formData, chasis: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Engine Number
                        <input value={formData.engineNumber} onChange={(e) => setFormData({ ...formData, engineNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        VIN/SN
                        <input value={formData.vin} onChange={(e) => setFormData({ ...formData, vin: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        License Plate
                        <input value={formData.licensePlate} onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Year Manufacture
                        <select value={formData.yearManufacture} onChange={(e) => setFormData({ ...formData, yearManufacture: e.target.value })} className='select select-primary w-full'>
                            <option selected disabled value="">Select Year</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Brand
                        <input value={formData.brand} onChange={(e) => setFormData({ ...formData, brand: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Model
                        <select value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Model</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Registration State/Province
                        <input value={formData.regState} onChange={(e) => setFormData({ ...formData, regState: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
                <input value={formData.upload} onChange={(e) => setFormData({ ...formData, upload: e.target.value })} className='py-5' type="file" src="" alt="" />
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label htmlFor="">
                        Operational Status
                        <select value={formData.opeStatus} onChange={(e) => setFormData({ ...formData, opeStatus: e.target.value })} className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Status</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Current Assignee - LC
                        <input value={formData.assigneeLC} onChange={(e) => setFormData({ ...formData, assigneeLC: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Current Assignee - JO
                        <input value={formData.assigneeJO} onChange={(e) => setFormData({ ...formData, assigneeJO: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Current Asignee - DO
                        <input value={formData.assigneeDO} onChange={(e) => setFormData({ ...formData, assigneeDO: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Ownership
                        <select value={formData.ownership} onChange={(e) => setFormData({ ...formData, ownership: e.target.value })} className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Ownership</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Owner
                        <select value={formData.owner} onChange={(e) => setFormData({ ...formData, owner: e.target.value })} className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Owner</option>
                        </select>
                    </label>
                </fieldset>
                <label htmlFor="">
                    Additional Details
                    <textarea value={formData.adddetails} onChange={(e) => setFormData({ ...formData, adddetails: e.target.value })} className='textarea textarea-primary w-full' name="" id="" rows="4"></textarea>
                </label>
            </form>
        </div>
    )
}

export default FormA1
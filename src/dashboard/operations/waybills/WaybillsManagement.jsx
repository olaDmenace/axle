import { PlusCircleIcon } from '@heroicons/react/solid';
import React from 'react'
import PageTitle from '../../../utils/PageTitle';
import FormTitle from '../../FormTitle';
import WaybillItem from './WaybillItem';

const WaybillsManagement = () => {
    PageTitle("Axle & Cartage - Waybills Management");
    return (
        <div className='text-primary grid gap-5'>
            <div>
                <FormTitle Title={"Waybills Management Form"} />
                <hr />
            </div>
            <form className='grid gap-5 pt-5' action="">
                <fieldset className='grid lg:grid-flow-col lg:grid-cols-3 gap-5'>
                    <label htmlFor="trip_Id">
                        Trip ID
                        <input className='input input-primary w-full' type="text" name="trip_Id" id="trip_Id" />
                    </label>
                    <label htmlFor="product">
                        Product Loaded
                        <input className='input input-primary w-full' type="text" name="product" id="product" />
                    </label>
                    <label htmlFor="quantity">
                        Quantity Loaded
                        <input className='input input-primary w-full' type="text" name="quantity" id="quantity" />
                    </label>
                </fieldset>
                <fieldset className='grid lg:grid-flow-col lg:grid-cols-2 gap-5'>
                    <label htmlFor="trip_Id">
                        Qunatity Delivered
                        <input className='input input-primary w-full' type="text" name="trip_Id" id="trip_Id" />
                    </label>
                    <label htmlFor="product">
                        Primary/Direct Waybill Number
                        <input className='input input-primary w-full' type="text" name="product" id="product" />
                    </label>
                </fieldset>
                <img className='h-56 w-56 shadow-xl' src="" alt="" />
                <label htmlFor="status">
                    Primary/Direct Waybill Status
                    <input className='input input-primary w-full' type="text" name="" id="" />
                </label>
                <div className='grid grid-flow-col items-center gap-10'>
                    <WaybillItem />
                    <PlusCircleIcon className='h-48 text-primary/70' />
                </div>
            </form>
            <button className='btn btn-primary mx-auto'>Submit</button>
        </div>
    )
}

export default WaybillsManagement
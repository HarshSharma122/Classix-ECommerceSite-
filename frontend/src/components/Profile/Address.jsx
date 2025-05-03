
import { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { useAppStore } from "../../store";
import { toast } from "sonner";
import { ADDRESS_ROUTES } from "../../util/constants.js";
import apiClient from "../../library/api_client.js";
const Address = () => {
    const { userInfo } = useAppStore();
    const [AddressBook, setAddressBook] = useState(false);
    const [color, setcolor] = useState("gray-50");
    const [Inputvalue, setInputValue] = useState({
        address: "",
        number: "",
        city: "",
        pincode: "",
        country: "",

    })

    const changeValue = (e) => {
        setInputValue({ ...Inputvalue, [e.target.name]: e.target.value })
    }

    const addressBook = () => {
        setAddressBook(!AddressBook);
    }
    const validateAddress = () => {
        if (!Inputvalue.address.length) {
            toast.error("Address is required");
            return false;
        }
        if (!Inputvalue.number.length) {
            toast.error("Number is required");
            return false;
        }
        if (!Inputvalue.city.length) {
            toast.error("city is required");
            return false;
        }
        if (!Inputvalue.pincode.length) {
            toast.error("pincode is required");
            return false;
        }
        if (!Inputvalue.country.length) {
            toast.error("country is required");
            return false;
        }
        return true;
    }

    const handleAddressData = async () => {
        if (validateAddress()) {

            const response = await apiClient.post(ADDRESS_ROUTES,
                {
                    address: Inputvalue.address,
                    number: Inputvalue.number,
                    city: Inputvalue.city,
                    pincode: Inputvalue.pincode,
                    country: Inputvalue.country
                }, { withCredentials: true })

        }
    }

    return (
        <>

            <div class="flex justify-center items-center mb-15 mt-10">

                <div class="bg-white shadow-lg rounded-2xl p-6 w-1/2">
                    <div class="flex justify-between items-center border-b pb-4">

                        <div>
                            <h2 class="text-xl font-semibold">Address Book</h2>
                        </div>

                    </div>


                    <div class="grid grid-cols-2 gap-6 mt-6">
                        <div>
                            <label class="text-gray-600">Full Name</label>
                            <h3>{userInfo.username}</h3>
                        </div>

                        <div>
                            <label class="text-gray-600">Email</label>
                            <h3>{userInfo.email}</h3>

                        </div>
                        <div>
                            <label class="text-gray-600">Contact Number</label>
                           <h3>{userInfo.number}</h3>
                        </div>
                        <div>
                            <label class="text-gray-600">Pincode</label>
                            <h3>{userInfo.pincode}</h3>
                        </div>
                        <div>
                            <label class="text-gray-600">Country</label>
                            <h3>{userInfo.country}</h3>
                        </div>
                        <div>
                            <label class="text-gray-600">City</label>
                            <h3>{userInfo.city}</h3>
                        </div>

                    </div>
                    <div class="mt-6">
                        <h4 class="font-semibold">My Adrress</h4>
                        <div class="flex items-center mt-2">
                            <div class="ml-4">
                                <p class="text-sm">{userInfo.address}</p>

                            </div>
                        </div>
                        <button onClick={addressBook} class="mt-4 text-black bg-white border px-4 py-2 rounded-lg hover:bg-black cursor-pointer hover:text-white">+ Add Address</button>
                    </div>
                </div>


            </div>
            {
                AddressBook && (
                    <div className='bg-[#fff] bottom-[28px] right-[10px] absolute flex-50 flex items-center justify-center w-100 h-[100vh]'>
                        <div className='items-center justify-center'>
                            <div className='w-[34vw] h-[70vh] lg:w-[30vw] lg:h-[50vh] flex items-center justify-center'>

                                <div className="grid grid-col-1 gap-x-5 gap-y-1">
                                    <div className='sm:col-span-2'>
                                        <div className="mt-2.5">
                                            <input
                                                id="full-name"
                                                name="address"
                                                type="text"
                                                value={Inputvalue.address}
                                                onChange={changeValue}

                                                autoComplete="given-name"
                                                required
                                                placeholder='Address'
                                                className="block w-[20vw]  rounded-md bg-white px-3.5 py-2 ml-3 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400"
                                            />
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                id="full-name"
                                                name="number"
                                                type="text"
                                                autoComplete="given-number"
                                                required
                                                value={Inputvalue.number}
                                                onChange={changeValue}
                                                placeholder='Phone-No'
                                                className="block w-[20vw]  rounded-md bg-white px-3.5 py-2 ml-3 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400"
                                            />
                                        </div>

                                    </div>
                                    <div className='sm:col-span-2'>

                                        <div className="mt-2.5">
                                            <input
                                                id="full-name"
                                                name="city"
                                                type="text"
                                                autoComplete="given-number"
                                                required
                                                value={Inputvalue.city}
                                                onChange={changeValue}
                                                placeholder='City'
                                                className="block w-[20vw]  rounded-md bg-white px-3.5 py-2 ml-3 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400"
                                            />
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                id="full-name"
                                                name="country"
                                                type="text"
                                                autoComplete="given-number"
                                                required
                                                value={Inputvalue.country}
                                                onChange={changeValue}
                                                placeholder='Country'
                                                className="block w-[20vw]  rounded-md bg-white px-3.5 py-2 ml-3 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400"
                                            />
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                id="full-name"
                                                name="pincode"
                                                type="text"
                                                autoComplete="given-number"
                                                required
                                                value={Inputvalue.pincode}
                                                onChange={changeValue}
                                                placeholder='Pincode'
                                                className="block w-[20vw]  rounded-md bg-white px-3.5 py-2 ml-3 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400"
                                            />
                                        </div>

                                    </div>
                                    <button onClick={handleAddressData} class="w-50 text-sm mt-4 text-black bg-white border px-4 py-2 rounded-lg hover:bg-black hover:text-white cursor-pointer">+Submit</button>


                                </div>
                            </div>


                        </div>

                    </div>
                )

            }


        </>
    )
};

export default Address;

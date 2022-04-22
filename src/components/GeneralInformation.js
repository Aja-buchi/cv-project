import React, { useEffect, useState } from "react"
import GeneralInformationView from "./views/GeneralInfomationView";

const getDataFromLocalStorage = () => {
    const data = localStorage.getItem('generalForm');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}


const GeneralInformation = () => {
    const [generalForm, setGeneralForm] = useState(getDataFromLocalStorage());
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()

        let general = {
            name,
            email,
            phoneNumber
        }
        setGeneralForm([...generalForm, general])
        setName('');
        setEmail('');
        setPhoneNumber('');
    }
    useEffect(() => {
        localStorage.setItem('generalForm', JSON.stringify(generalForm))
    }, [generalForm]);

    const print = () => {
        window.print()
    }


    return (
        <>
            <h1>General Information</h1>
            <div className="container">
                <div className="left">
                    <form className="mb-3" style={{ width: '60%' }} onSubmit={handleSubmit}>
                        <label className="form-label">
                            Name
                        </label>
                        <input className="form-control"
                            type="text" name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />


                        <label className="form-label">
                            Email
                        </label>
                        <input className="form-control" type="email" name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className="form-label">
                            Phone number
                        </label>
                        <input className="form-control" type="number" name="phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <input className="form-control" style={{ margin: '2rem 0', backgroundColor: 'orange' }} type="submit" value="Submit" />
                    </form>

                </div>

                <div className="right">
                    {/* Table */}
                    {generalForm.length > 0 &&

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th> Name </th>
                                        <th> Email </th>
                                        <th> Phone number </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <GeneralInformationView generalForm={generalForm} />
                                </tbody>
                            </table>

                            <div>
                                <button onClick={print} className=' btn btn-primary'>
                                    Download as PDF
                                </button><br />
                            </div>

                        </div>


                    }
                    {generalForm.length < 1 && <div>No data added yet</div>}
                </div>
            </div>
        </>
    )
}

export default GeneralInformation
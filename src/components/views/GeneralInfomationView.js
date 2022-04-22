import React, { useId } from 'react';

const GeneralInformationView = ({ generalForm }
) => {
    const id = useId();
    console.log(id);
    return generalForm.map(generalInfoForm => (
        <tr key={id}>
            <td>{generalInfoForm.name}</td>
            <td>{generalInfoForm.email}</td>
            <td>{generalInfoForm.phoneNumber}</td>
        </tr>
    ))
}

export default GeneralInformationView
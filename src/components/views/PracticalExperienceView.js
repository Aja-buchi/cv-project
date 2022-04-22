import React, { useId } from 'react';

const PracticalExperienceView = ({ practicalForm }
) => {
    // const id = useId();
    // console.log(id);
    return practicalForm.map((practicalInfoForm, index) => (
        <tr key= {index}>
            <td>{practicalInfoForm.name}</td>
            <td>{practicalInfoForm.email}</td>
            <td>{practicalInfoForm.phoneNumber}</td>
        </tr>
    ))
}

export default PracticalExperienceView
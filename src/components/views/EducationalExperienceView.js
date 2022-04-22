import React, { useId } from 'react';

const EducationalExperienceView = ({ educationForm }
) => {
    const id = useId();
    // htmlFor={`${id}-name`}
    return educationForm.map(educationInfoForm => (
        <tr key={`${id}-education`}>
            <td key={`${id}-name`}>{educationInfoForm.name}</td>
            <td key={`${id}-email`}>{educationInfoForm.email}</td>
            <td key={`${id}-phoneNumber`}>{educationInfoForm.phoneNumber}</td>
        </tr>
    ))
}

export default EducationalExperienceView
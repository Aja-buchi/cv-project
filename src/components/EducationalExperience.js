import React, { useEffect, useState } from "react"
import EducationalExperienceView from "./views/EducationalExperienceView";

const getDataFromLocalStorageEducation = () => {
    const data = localStorage.getItem('educationForm');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}

const EducationalExperience = () => {
    const [educationForm, setEducationForm] = useState(getDataFromLocalStorageEducation());
    const [schoolName, setSchoolName] = useState('');
    const [courseofStudy, setCourseofStudy] = useState('');
    const [dateofGraduation, setDateofGraduation] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()

        let general = {
            schoolName,
            courseofStudy,
            dateofGraduation
        }
        setEducationForm([...educationForm, general])
        setSchoolName('');
        setCourseofStudy('');
        setDateofGraduation('');
    }
    useEffect(() => {
        localStorage.setItem('educationForm', JSON.stringify(educationForm))
    }, [educationForm]);

    const print = () => {
        window.print()
    }

    return (
        <>
            <h1>Educational Experience</h1>
            <div className="container">
                <div className="left">
                    <form className="mb-3" style={{ width: '60%' }} onSubmit={handleSubmit}>
                        <label className="form-label">
                        School Name
                        </label>
                        <input className="form-control"
                            type="text" name="schoolName"
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                        />

                        <label className="form-label">
                        Course of Study
                        </label>
                        <input className="form-control" type="text" name="course of study"
                            value={courseofStudy}
                            onChange={(e) => setCourseofStudy(e.target.value)}
                        />

                        <label className="form-label">
                        Date of Graduation
                        </label>
                        <input className="form-control" type="date" name="date of graduation"
                            value={dateofGraduation}
                            onChange={(e) => setDateofGraduation(e.target.value)}
                        />
                        <input className="form-control" style={{ margin: '2rem 0', backgroundColor: 'orange' }} type="submit" value="Submit" />
                    </form>

                </div>
                <div className="right">
                    {/* Table */}
                    {educationForm.length > 0 &&

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th> School Name </th>
                                        <th> Course of Study </th>
                                        <th> Date of Graduation </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <EducationalExperienceView educationForm={educationForm} />
                                </tbody>
                            </table>

                            <div>
                                <button onClick={print} className=' btn btn-primary'>
                                    Download as PDF
                                </button><br />
                            </div>

                        </div>

                    }
                    {educationForm.length < 1 && <div>No data added yet</div>}
                </div>
            </div>
        </>
    )
}

export default EducationalExperience

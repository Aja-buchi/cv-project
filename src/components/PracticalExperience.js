import React, { useEffect, useState, useId } from "react"
import PracticalExperienceView from "./views/PracticalExperienceView";

const getDataFromLocalStoragePractical = () => {
    const data = localStorage.getItem('practicalForm');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}



const PracticalExperience = () => {
    const id = useId();
    const [practicalForm, setPracticalForm] = useState(getDataFromLocalStoragePractical());
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [jobResponsibilities, setJobResponsibilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()

        let practical = {
            companyName,
            positionTitle,
            jobResponsibilities,
            startDate,
            endDate
        }
        setPracticalForm([...practicalForm, practical])
        setCompanyName('');
        setPositionTitle('');
        setJobResponsibilities('');
        setStartDate('');
        setEndDate('');
    }
    useEffect(() => {
        localStorage.setItem('practicalForm', JSON.stringify(practicalForm))
    }, [practicalForm]);

    const print = () => {
        window.print()
    }


    return (
        <>
            <h1>Practical Experience</h1>
            <div className="container">
                <div className="left">
                    <form className="mb-3" style={{ width: '60%' }} onSubmit={handleSubmit}>
                        {/* <label htmlFor={id}>My label</label>
      <input id={id} type="text"/> */}
                        <label className="form-label">
                            Company Name
                        </label>
                        <input className="form-control"
                            type="text" name="company name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />


                        <label className="form-label">
                            Position Title
                        </label>
                        <input className="form-control" type="text" name="position title"
                            value={positionTitle}
                            onChange={(e) => setPositionTitle(e.target.value)}
                        />

                        <label className="form-label">
                            Job Responsibilities
                        </label>
                        <input className="form-control" type="text" name="job responsibilities"
                            value={jobResponsibilities}
                            onChange={(e) => setJobResponsibilities(e.target.value)}
                        />

                        <label className="form-label">
                            Start Date
                        </label>
                        <input className="form-control" type="date" name="start date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />

                        <label className="form-label">
                            End Date
                        </label>
                        <input className="form-control" type="date" name="end date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />

                        <input className="form-control" style={{ margin: '2rem 0', backgroundColor: 'orange' }} type="submit" value="Submit" />
                    </form>

                </div>

                <div className="right">
                    {/* Table */}
                    {practicalForm.length > 0 &&

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th> Company Name </th>
                                        <th> Position Title </th>
                                        <th> Job Responsibilities </th>
                                        <th> Start Date </th>
                                        <th> End Date </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <PracticalExperienceView practicalForm={practicalForm} />
                                </tbody>
                            </table>

                            <div>
                                <button onClick={print} className=' btn btn-primary'>
                                    Download as PDF
                                </button><br />
                            </div>

                        </div>


                    }
                    {practicalForm.length < 1 && <div>No data added yet</div>}
                </div>
            </div>
        </>
    )
}

export default PracticalExperience







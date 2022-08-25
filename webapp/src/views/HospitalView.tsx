import HospitalViewProps from "./HospitalViewProps";
import './HospitalView.css';
import { useState } from "react";

function HospitalView(props: HospitalViewProps) {
    const [showAddHospitalForm, setShowAddHospitalForm] = useState(false);
    const [newHospitalName, setNewHospitalName] = useState('');
    
    return (
        <>
            <div className="hospital-view">
                {!props.hospitals.length
                    ? 
                    <div className="zero-state">
                        Let's add your first hospital
                    </div>
                    :   
                    <div className="hospital-table">
                        <div className="header cell">ID</div>
                        <div className="header cell">Name</div>
                        <div className="header cell">Created At</div> 
                        {props.hospitals.map(hospital =>
                            <>
                                <div className="cell">{hospital.hospitalId}</div>
                                <div className="cell">{hospital.name}</div>
                                <div className="cell">{new Date(hospital.createdAt).toDateString()}</div>    
                            </>
                        )}
                    </div>
                }
                <button
                    className="add-hospital-button"
                    onClick={() => setShowAddHospitalForm(true)}
                    title="Add hospital"
                    type="button">
                        +
                </button>
            </div>
            {showAddHospitalForm ?
                <form className="add-hospital-form">
                    <label>
                        Name
                        <input
                            onChange={event => setNewHospitalName(event.target.value)}
                            value={newHospitalName} />
                    </label>
                    <button onClick={() => addHospital(newHospitalName)}>
                        Submit
                    </button>
                </form>
                : null
            }
        </>
    );
}

const addHospital = async (name: string) => {
    await fetch(
        'https://localhost:54041/Hospitals',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        });
};

export default HospitalView;
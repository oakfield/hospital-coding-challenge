import './HospitalView.css';
import { useEffect, useState } from "react";
import Hospital from '../types/Hospital';

function HospitalView() {
    const [loading, setLoading] = useState(true);
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [showAddHospitalForm, setShowAddHospitalForm] = useState(false);
    const [newHospitalName, setNewHospitalName] = useState('');
      
    useEffect(() => {
        getHospitals().then(hospitals => {
            setLoading(false);
            setHospitals(hospitals);
        });
      }, [setLoading, setHospitals]);
    
    return (
        <>
            <div className="hospital-view">
                {!hospitals.length
                    ? 
                    <div className="zero-state">
                        Let's add your first hospital
                    </div>
                    :   
                    <table className="hospital-table">
                        <th className="header cell">ID</th>
                        <th className="header cell">Name</th>
                        <th className="header cell">Created At</th>
                        {hospitals.map(hospital =>
                            <tr key={hospital.hospitalId}>
                                <td className="cell">{hospital.hospitalId}</td>
                                <td className="cell">{hospital.name}</td>
                                <td className="cell">{new Date(hospital.createdAt).toDateString()}</td>
                                <td className="cell">
                                    <button
                                        className="delete-button"
                                        onClick={async () => {
                                            await deleteHospital(hospital.hospitalId);
                                            var hospitals = await getHospitals();
                                            setHospitals(hospitals);
                                        }}
                                        title="Delete hospital"
                                        type="button">
                                            x
                                    </button>
                                </td>
                            </tr>
                        )}
                    </table>
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
                <>
                <div
                    className="add-hospital-form-shadow"
                    onClick={() => setShowAddHospitalForm(false)}>
                </div>
                <form className="add-hospital-form" >
                    <button
                        className="close-hospital-form-button"
                        onClick={() => setShowAddHospitalForm(false)}
                        type="button"
                        >
                            x
                    </button>
                    <fieldset>
                        <legend>Add new hospital</legend>
                        <label>
                            Name
                            <input
                                onChange={event => setNewHospitalName(event.target.value)}
                                value={newHospitalName} />
                        </label>
                    </fieldset>
                    <button
                        className="submit-hospital-form-button"
                        onClick={async () => {
                            await addHospital(newHospitalName);
                            var hospitals = await getHospitals();
                            setHospitals(hospitals);
                            setShowAddHospitalForm(false);
                        }}
                        type="button">
                        Submit
                    </button>
                </form>
                </>
                : null
            }
        </>
    );
}

const addHospital = async (name: string) => {
    await fetch(
        'https://localhost:5001/Hospitals',
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

const deleteHospital = async (hospitalId: number) => {
    await fetch(
        `https://localhost:5001/Hospitals/${hospitalId}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
};

const getHospitals = async (): Promise<Hospital[]> => {
    const apiUrl = `https://localhost:5001/Hospitals`;
    return fetch(apiUrl)
      .then((res) => res.json());
}

export default HospitalView;
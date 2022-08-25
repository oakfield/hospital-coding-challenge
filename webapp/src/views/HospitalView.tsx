import './HospitalView.css';
import { useEffect, useState } from "react";
import Hospital from '../types/Hospital';
import { addHospital, deleteHospital, editHospital, getHospitals } from '../services/HospitalService';

function HospitalView() {
    const [loading, setLoading] = useState(true);
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [showAddHospitalForm, setShowAddHospitalForm] = useState(false);
    const [showEditHospitalForm, setShowEditHospitalForm] = useState(false);
    const [newHospitalName, setNewHospitalName] = useState('');
    const [currentHospital, setCurrentHospital] = useState<Hospital | null>(null);
      
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
                                            ✖
                                    </button>
                                </td>
                                <td className="cell">
                                    <button
                                        className="edit-button"
                                        onClick={() => {
                                            setCurrentHospital(hospital);
                                            setShowEditHospitalForm(true);
                                        }}
                                        title="Edit hospital"
                                        type="button">
                                            🖊
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
                    className="hospital-form-shadow"
                    onClick={() => setShowAddHospitalForm(false)}>
                </div>
                <form className="hospital-form" >
                    <button
                        className="close-hospital-form-button"
                        onClick={() => setShowAddHospitalForm(false)}
                        type="button"
                        >
                            ✖
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
            {showEditHospitalForm ?
                <>
                <div
                    className="hospital-form-shadow"
                    onClick={() => setShowEditHospitalForm(false)}>
                </div>
                <form className="hospital-form" >
                    <button
                        className="close-hospital-form-button"
                        onClick={() => setShowEditHospitalForm(false)}
                        type="button"
                        >
                            ✖
                    </button>
                    <fieldset>
                        <legend>Edit hospital {currentHospital?.hospitalId}</legend>
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
                            await editHospital(currentHospital!.hospitalId, newHospitalName);
                            var hospitals = await getHospitals();
                            setHospitals(hospitals);
                            setShowEditHospitalForm(false);
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



export default HospitalView;
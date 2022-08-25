import Hospital from "../components/Hospital";
import HospitalViewProps from "./HospitalViewProps";
import './HospitalView.css';

function HospitalView(props: HospitalViewProps) {
    if (!props.hospitals.length)
    {
        return (
            <div className="hospital-view">
                <div className="zero-state">
                    Let's add your first hospital
                </div>
            </div>
        );
    }

    return (
        <div className="hospital-view">
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
    );
}

export default HospitalView;
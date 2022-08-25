import Hospital from "../components/Hospital";
import HospitalViewProps from "./HospitalViewProps";

function HospitalView(props: HospitalViewProps) {
    return (
        <div className="hospital-view">
            {props.hospitals.map(hospital =>
                <Hospital
                    hospitalId={hospital.hospitalId}
                    name={hospital.name}
                    createdAt={hospital.createdAt} />
            )}
        </div>
    );
}

export default HospitalView;
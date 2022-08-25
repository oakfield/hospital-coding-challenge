import HospitalProps from "./HospitalProps";

function Hospital(props: HospitalProps) {
    return (
        <div className="hospital">
            <div>{props.hospitalId}</div>
            <div>{props.name}</div>
            <div>{props.createdAt}</div>
        </div>
    )
}

export default Hospital;
import Hospital from "../types/Hospital";

const baseUrl = "https://localhost:5001/Hospitals";

const addHospital = async (name: string) => {
    await fetch(
        baseUrl,
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
        `${baseUrl}/${hospitalId}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
};

const editHospital = async (hospitalId: number, name: string) => {
    await fetch(
        `${baseUrl}/${hospitalId}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        });
};

const getHospitals = async (): Promise<Hospital[]> => {
    const apiUrl = baseUrl;
    return fetch(apiUrl)
      .then((res) => res.json());
}

export { addHospital, deleteHospital, editHospital, getHospitals };
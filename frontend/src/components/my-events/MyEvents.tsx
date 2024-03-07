type Props = {
    id: number,
    latitude: number,
    longitude: number,
}

function MyEvents({id, latitude, longitude}:Props) {

    console.log(latitude, longitude, id);
    return(
        <>
        <h1>Carnaval</h1>
        </>
    )
}

export default MyEvents;
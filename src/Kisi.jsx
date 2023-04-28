import useFetch from "./hooks/useFetch";

function Kisi({kisiNo}){
    const [data] = useFetch(`https://jsonplaceholder.typicode.com/users/${kisiNo}`)

    return(
        <>
            {data && <p>Ad Soyad: {data.name} Şehir: {data.address.city}</p>}
        </>
    )
};

export default Kisi;
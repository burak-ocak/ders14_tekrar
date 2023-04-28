import useFetch from "./hooks/useFetch";

function IsBilgi({ isNo }) {

    const [data] = useFetch(`https://jsonplaceholder.typicode.com/todos/${isNo}`);

    return (
        <>
            {data && <p>İş no: {data.id} iş adı: {data.title} <input readOnly type="checkbox" checked={data.completed} /></p>
            }
        </>
    )
};

export default IsBilgi;
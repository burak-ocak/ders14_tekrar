import { useEffect, useState } from "react";

function useFetch(url){

    //veri çekme işlemini alt component'te hallediyoruz. Oradaki function'dan data'yı döndürdük ve parametresini değiştirdik.
    //geriye kalan bütün işlemler aynı olduğu için sıkıntısız bir şekilde çalışıyor.
    const [data, setData] = useState(null);

    useEffect( ()=>{
        fetch(url)
        .then( (res) => (res.json()) )
        .then( data => setData(data) );

    }, [url] );

    return [data];
};

export default useFetch;
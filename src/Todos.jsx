import { memo } from "react";

function Todos({yapilacakIsler, IsEkle, kisi}) {
    console.log("Todos render oldu");
    return (
        <>
            <h2>Yapılacak İşler</h2>
            {yapilacakIsler.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={IsEkle}>İş Ekle</button>
            <p><strong>İsim Soyisim:</strong> {kisi.ad} {kisi.soyad}</p>
        </>
    );
};

export default memo(Todos);
import React from 'react'
import Table from './Table'

export default function Examples() {

    const insan = {
        isim: 'fatih',
        soyisim: 'kuşçu'
    }

    const welcometojsx = <h1>Merhaba {insan.isim} </h1>

    const isimler = ['ayşe', 'ali', 'fatma', 'hüseyin']

    const kosul = false;

    const clickHandle = () => {
        alert('butona tıklandı')
    }


    return (
        <div>
            <h1>OnClick Kullanımı</h1>
            <button className="btn btn-primary" onClick={clickHandle}> Tıkla </button>

            <hr />

            <h1>Koşullu İfadeler</h1>
            <h5> Koşulun değeri : {kosul ? 'True' : 'False'} </h5>
            <p>{kosul ? 'merhaba' : 'güle güle'}</p>
            <p>  {kosul && 'merhaba'} </p>
            <p> isimler dizisi dolu mu ? {isimler.length != 0 ? 'İsimler dizisi dolu' : 'İsimler dizisi boş'} </p>
            <p>
                {isimler.length != 0 && (
                    <ul>
                        {isimler.map((item, index) => <li key={index}> {item} </li>)}
                    </ul>
                )}
            </p>

            <p>

                {kosul && 'Kosul True' || 'Kosul False'}

            </p>



            <hr />

            {welcometojsx}
            <ul>
                {isimler.map(
                    (isim, index) =>
                        <>
                            <li> {isim} {index} </li>
                        </>
                )}
            </ul>
            <hr />
            <Table />
        </div>
    )
}

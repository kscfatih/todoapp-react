import { useState } from 'react'
import '../assets/App.css'

export default function Table() {
    
    const ogrenciler = [
        {
            isim: 'fatih',
            soyisim: 'kuşçu'
        },
        {
            isim: 'ahmet',
            soyisim: 'güreli'
        },
        {
            isim: 'halil',
            soyisim: 'kara'
        }
    ]
    const customCss = {
        backgroundColor:'black', 
        color:'blue', 
        display:'block'
    }
    
    return (
        <>
        <h1 className='adana'  > Öğrenci Tablosu </h1>
         <table className="table " >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                </tr>
            </thead>
            <tbody>
                {ogrenciler.map((item, index) =>
                    <tr>
                        <th scope="row"> {index} </th>
                        <td> {item.isim} </td>
                        <td> {item.soyisim} </td>
                    </tr>
                )}

            </tbody>
        </table>
        </>
       
    )
}
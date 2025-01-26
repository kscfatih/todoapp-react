import React, { useState } from 'react'


export default function Counter() {
    const [count, setCount] = useState(0) // let count = 0 güncelle : count = 1 // setCount(1)

    function artir(){
        setCount(count+1)
    }

    function azalt(){
        if(count == 0){
            alert('0\'dan aşağıya gidemezsiniz')
        }else{
            setCount(count-1)
        }
    }

    function sifirla(){
        setCount(0)
    }

    return (
        <div>
            <h1>Counter Uygulaması</h1>
            <p> {count} </p>
            <p> 
                <button className="btn btn-success" onClick={artir} >Artır</button> 
                <button className="btn btn-danger" onClick={azalt} >Azalt</button> 
                <button className="btn btn-warning" onClick={sifirla} >Sıfırla</button>
            </p>
        </div>
    )
}

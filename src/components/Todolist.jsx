import React from 'react'

export default function Todolist({todosProp, todoProp}) { // props olarak buraya gelir props.todosProp veya {parantez içinde direkt todosProp olarak alınır}
    //const {todosProp, todoProp} = props 
   
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>

                        <th scope="col">Todo</th>
                    </tr>
                </thead>
                <tbody>
                    {todosProp.length ? todosProp.map((item, index) =>
                        <tr key={index}>
                            <td> {item} </td>
                        </tr>
                    ) : 'Henüz hiç todo eklenmedi'}
                </tbody>
            </table>
        </div>
    )
}

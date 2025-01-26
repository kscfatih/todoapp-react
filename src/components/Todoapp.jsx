import React, { useState } from 'react'
import Todolist from './Todolist'


export default function Todoapp() {
    const [todos, setTodos] = useState([]) // başlangıç değeri boş bir dizi
    const [todo, setTodo] = useState('') // başlangıç değeri boş string

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todo === ''){
            alert('Boş Todo ekleyemezsiniz!')
        }else{
            setTodos([...todos,todo]) // ['todo1','todo2','yenitodo']
            setTodo('')
        }
        
      
    }

    function temizle(){
        setTodos([])
    }

    return (
        <div>
            <div className="container mt-5 justify-content-center">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="card-title">
                            <h5> Todo App </h5>
                        </div>

                        <form onSubmit={handleSubmit} >
                            <div className="input-group">
                                <input
                                    onChange={e => setTodo(e.target.value)}
                                    value={todo}
                                    type="text"
                                    className="form-control"
                                    placeholder='Todo giriniz ...' />
                                <button type='submit' className="btn btn-primary">Ekle</button>
                                <button type='button' className="btn btn-danger" onClick={temizle} >Temizle</button>
                            </div>
                        </form>

                        <Todolist todosProp={todos} todoProp={todo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

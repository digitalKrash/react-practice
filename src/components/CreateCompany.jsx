import React from 'react'
import axios from 'axios'

import { Sidebar } from '../components'


function CreateCompany({ onAddCompany }) {

    const [inputName, setInputName] = React.useState('')
    const [inputAdress, setInputAdress] = React.useState('')

    const onChangeName = (e) => {
        setInputName(e.target.value)
    }
    const onChangeAdress = (e) => {
        setInputAdress(e.target.value)
    }

    const handleAddCompany = () => {
        if (!inputName || !inputAdress) {
            alert('Введите данные')
            return
        }
        setInputName('')
        setInputAdress('')

        axios
            .post('http://localhost:3001/companies', {
                name: inputName,
                adress: inputAdress
            })
            .then(({ data }) => {
                console.log(data)
                const listObj = {...data}
                onAddCompany(listObj)
                alert('Компания добавлена')
            })
    }



    return (
        <div className="wrapper">

            <Sidebar />

            <div className="section">
                <h3 className="section__title">Создание wiki:</h3>

                <div className="block company__form">
                    <div className="input">
                        <label>Название компании</label>
                        <input value={inputName} onChange={onChangeName} />
                    </div>
                    <div className="input">
                        <label>Адрес сайта</label>
                        <input value={inputAdress} onChange={onChangeAdress} />
                    </div>

                    <button className="btn" onClick={handleAddCompany} >Создать компанию</button>
                </div>
            </div>

        </div>
    )
}

export default CreateCompany

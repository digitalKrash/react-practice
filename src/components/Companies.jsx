import React from 'react'
import { Link } from 'react-router-dom';
import {Company} from './'
import { Sidebar } from '../components'


function AddCompany({ items }) {

    return (
        <div className="wrapper">

            <Sidebar />

            <div className="section">

                <h3 className="section__title">Ваши wiki</h3>

                <div className="companies-box">
                    <div className="companies__create">
                        <p className="companies__create-text">Создайте wiki и вовлекайте сотрудников в процесс непрерывного обмена знаниями и опытом.</p>
                        <Link to="/create-company" className="companies__create-btn">Создать wiki</Link>
                    </div>

                    {items.map(
                        (item) => <Company key={item.id} {...item} />
                    )}

                </div>

            </div>

        </div>
    )
}

export default AddCompany

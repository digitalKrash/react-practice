import React from 'react'
import PropTypes from 'prop-types';

const tarif = 'Free'
const users = '24'

function Company({ name, adress }) {
    return (
        <div className="company">
            <h2>{name}</h2>

            <ul>
                <li>Тариф: <b>{tarif}</b></li>
                <li>Пользователей: <b>{users}</b></li>
                <li>Адрес: <b>{adress}</b></li>
            </ul>
        </div>
    )
}


Company.propTypes = {
    name: PropTypes.string.isRequired,
    tarif: PropTypes.string.isRequired,
    users: PropTypes.number.isRequired,
    adress: PropTypes.string.isRequired,
}
Company.defaultProps = {
    name: '',
    tarif: '',
    users: 0,
    adress: '',
}

export default Company

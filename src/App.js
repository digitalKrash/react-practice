import React from 'react'
import { Route } from 'react-router-dom';
import axios from 'axios';

import { Companies, CreateCompany, Register } from './components'



function App() {
  const [companies, setCompanies] = React.useState([])
  const [users, setUsers] = React.useState([])
  React.useEffect(() => {
    axios.get('http://localhost:3001/companies').then(({ data }) => {
      setCompanies(data)
    })
  }, []);

  React.useEffect(() => {
    axios.get('http://localhost:3001/users').then(({ data }) => {
      setUsers(data)
    })
  }, []);


  const onAddCompany = (obj) => {
    const newList = [...companies, obj]
    setCompanies(newList)
  }
  const onAddUser = (obj) => {
    const newUsers = [...users, obj]
    setUsers(newUsers)
  }


  return (
    <div className="container">

      <div className="content">
        <Route path="/" render={() => <Companies  items={companies} />} exact />
        <Route path="/create-company" render={() => <CreateCompany onAddCompany={onAddCompany} />} exact />
        <Route path="/register" render={() => <Register onAddUser={onAddUser} />}  exact />
      </div>

    </div>

  )
}

export default App

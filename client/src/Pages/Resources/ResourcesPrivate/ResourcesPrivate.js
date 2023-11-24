import ResourcesAccordion from '../ResourcesAccordion'
import ResourcesHeader from '../ResourcesHeader'
import {Link} from 'react-router-dom'
import { getAll } from '../../../axios-apis/api-general'
import { useState, useEffect } from 'react'
import logo from '../../../assets/images/cib.png'

//shows accordion list of private veterans organizations
const ResourcesPrivate = () => {
  const [resources, setResources] = useState([])

  //serves static data from db
  useEffect(() => {
    getResources()
  }, [])

  const getResources = async () => {
    const all = await getAll('/resources/private')
    setResources(all.data)
  }

  return (
    <div>
      <ResourcesHeader />
      <div className="d-grid">
        <img className="mx-auto my-2 acc-logo" src={logo} alt="combat infantry badge rifle on blue field" />
      </div>
      <div className="d-grid text-center m-2">
        <h3>Local Veterans Organizations</h3>
        <Link to='/resources/federal'>See Federal VA resources</Link>
        <small>Select a link for more information</small>
      </div>
      <ResourcesAccordion resources={resources} />
    </div>
  )
}

export default ResourcesPrivate
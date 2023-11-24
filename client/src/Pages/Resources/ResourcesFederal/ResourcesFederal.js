import ResourcesAccordion from "../ResourcesAccordion"
import ResourcesHeader from '../ResourcesHeader'
import {Link} from 'react-router-dom'
import { getAll } from '../../../axios-apis/api-general'
import { useState, useEffect } from 'react'
import logo from '../../../assets/images/vaLogo.png'

//shows accordion list of federal veterans organizations
const ResourcesFederal = () => {
  const [resources, setResources] = useState([])

  //serves static data from db
  useEffect(() => {
    getResources()
  }, [])

  const getResources = async () => {
    try {
      const all = await getAll('/resources/federal')
      setResources(all.data)
    } catch (err) {
      document.location = '/error'
    }
  }

  return (
    <div>
      <ResourcesHeader />
      <div className="d-grid">
        <img className="mx-auto my-2 acc-logo" src={logo} alt="eagle in a circle VA logo" />
      </div>
      <div className="d-grid text-center m-2">
        <h3>VA Services for Veterans and their Families</h3>
        <Link to='/resources/private'>See Veterans Organizations</Link>
        <small>Select a link for more information</small>
      </div>
      <ResourcesAccordion resources={resources} />
    </div>
  )
}

export default ResourcesFederal
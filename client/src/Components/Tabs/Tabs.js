import { Tabs, Tab } from 'react-bootstrap'
import { useState } from 'react'
import ArticlePreview from '../../Components/ArticlePreview'
import './Tabs.css'

//tabs are used to sort by all articles or by date and popularity calc by like or attendees
const ShowTabs = ({ showAll, showRecent, showTrending, allNews, newsByLikes, newsByDate, user, setChange, change, model }) => {
  const [key, setKey] = useState('All')
  return (
    <div className="tab-bar">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        onClick={(k) => {
          let f = k.target.innerText.split(' ')[1].toString()
          if (f === 'Trending') {
            showTrending()
          } else if (f === 'Recent') {
            showRecent()
          } else if (f === 'All') {
            showAll()
          }
        }}
      >
        <Tab eventKey="All" title="Show All">
          <ArticlePreview news={allNews} user={user} model={model} change={change} setChange={setChange} />
        </Tab>
        <Tab eventKey="trending" title="Now Trending">
          <ArticlePreview news={newsByLikes} user={user} model={model} change={change} setChange={setChange} />
        </Tab>
        <Tab eventKey="recent" title="Most Recent">
          <ArticlePreview news={newsByDate} user={user} model={model} change={change} setChange={setChange} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default ShowTabs
import ArticleFull from '../../../Components/ArticleFull'

//renders full story with articlefull component and model
const StoryArticle = ({ model }) => {
  return (
    <div>
      <ArticleFull model={model} />
    </div>
  )
}

export default StoryArticle

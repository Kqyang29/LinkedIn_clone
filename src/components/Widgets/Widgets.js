import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {

  const NewsArticle = (heading, subtitle) => {
    return (
      <div className='widget_article'>
        <div className="widget_articleLeft">
          <FiberManualRecordIcon fontSize='15px'/>
        </div>
        <div className="widget_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='widgets'>
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>
      {NewsArticle("PAPA REACT IS BACK", "TOP NEWS - 9999 READER")}
      {NewsArticle("Coronavirus: UK updates", "TOP NEWS - 9929 READER")}
      {NewsArticle("Coronavirus: UK updates", "TOP NEWS - 9929 READER")}
      {NewsArticle("Coronavirus: UK updates", "TOP NEWS - 9929 READER")}
      {NewsArticle("Coronavirus: UK updates", "TOP NEWS - 9929 READER")}
      {NewsArticle("Coronavirus: UK updates","TOP NEWS - 9929 READER")}

    </div>

  )
}

export default Widgets
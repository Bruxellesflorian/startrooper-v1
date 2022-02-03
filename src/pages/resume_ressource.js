import React from 'react'
import { useSelector } from 'react-redux'
import { Display_resume_ressource } from '../styledComponent/resume_resource_style'

const Resume_ressource = () => {
  const workers_ressource_days = useSelector(
    (state) => state.workers_ressource_days
  )

  return (
    <>
      <Display_resume_ressource>
        <div>
          <div>Gold{workers_ressource_days.gold}</div>
          <div>Iron{workers_ressource_days.iron}</div>
          <div>Gas{workers_ressource_days.GAS}</div>
        </div>
      </Display_resume_ressource>
    </>
  )
}

export default Resume_ressource

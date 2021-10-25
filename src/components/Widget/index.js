import * as React from 'react'

import * as widgetCSS from './widget.module.scss'

const Widget = ({setShowModal}) => {
  return (
    <div className={widgetCSS.widget} onClick={setShowModal}>
        Currency
    </div>
  )
}

export default Widget

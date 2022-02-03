import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFont } from '../actions/settings_action'
import { Display_settings, List_font } from '../styledComponent/settings_style'



const SettingsGame = (displayStyle) => {
  const dispatch = useDispatch()

  const list_font = [
    // { title: 'Orbitron', font: 'Orbitron' },
    { title: 'Minecraft', font: 'pixels0' },
    { title: 'rainyhearts', font: 'pixels2' },
    { title: 'I-pixel-u', font: 'pixels3' },
    { title: 'cyberspace', font: 'pixels4' },
  ]

  const handleChangeFont = (data) => {
    dispatch(changeFont(data))
  }

  return (
    <Display_settings style={{ display: `${displayStyle.displayStyle}` }}>
      <div>
        <h2>Settings</h2>

        <div>
          <h4>Font :</h4>
          <List_font>
            {list_font.map((data) => (
              <div onClick={() => handleChangeFont(data.font)}>
                {data.title}
              </div>
            ))}
          </List_font>
        </div>
        <div>
          <h4>Volume :</h4>
          <div>Coming soon...</div>
        </div>
      </div>
    </Display_settings>
  )
}

export default SettingsGame

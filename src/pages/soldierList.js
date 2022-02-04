import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Display_soldier , Soldier_box, Pv, Atk} from '../styledComponent/soldier.style'
import { GiShoulderArmor , GiGunshot} from "react-icons/gi";
import  AvatarAnimate from './animate/avatar'
import Detail_soldier from './detail_soldier';
import deadSoldierAvatar from '../sprites/soldierAvatar/dead.png'
import DeadOfSoldierAvatar from 'react-responsive-spritesheet'



const SoldierList = () => {

  const soldierList = useSelector((state) => state.soldierList)
  const step_days = useSelector((state) => state.step)
  const [loading, set_loading] = useState(true)
  const [opacity_style, set_opacity_style]=useState(100)
  const [push_soldier_detail, set_push_soldier_detail]=useState()
  const [display_detail, set_display_detail]=useState(0)



  const handePushSoldierDetail = (data) =>{
    set_push_soldier_detail(data)
    set_display_detail(300)
  }

  useEffect(() => {
    if(step_days === "EVENT"){
      set_opacity_style(0)   
    }else{
        set_opacity_style(100)
    }
    set_loading(false)
  },[step_days])

  useEffect(() => {
    if(step_days === "NIGHT"){

    }else{


    }
    set_loading(false)
  },[step_days])

  
let id = 0
  return (
    < div >

    <Detail_soldier 
    detail= {{push_soldier_detail}}
    display = {display_detail} 
    setDisplay = {set_display_detail}
    />
      <Display_soldier style={{opacity : `${opacity_style}%` }}>
        {!loading ? (
          <>
            {soldierList.map((data) => (
              <Soldier_box onClick={()=>handePushSoldierDetail(data)} key={id++}>
                {data.soldier.stat.pv > 0 ? 
                  <div style={{display :'flex', justifyContent : "center"}}>
                    <AvatarAnimate
                      avatar ={data.soldier.avatar} 
                    />
                  </div>
                :
                <DeadOfSoldierAvatar
                style={{ height: '50px', width: '90px' }}
                className={`my-element__class--style`}
                image={deadSoldierAvatar}
                widthFrame={64}
                heightFrame={60}
                steps={20}
                fps={9}
                autoplay={true}
                loop={true}
              />
                }
                
                <div>{data.soldier.name}</div>
                <Pv>
                      <div style={{width:`${(100/data.soldier.stat.pvMax)*data.soldier.stat.pv}%`}}></div>
                      <div><GiShoulderArmor/>  {data.soldier.stat.pv}</div>    
                </Pv>
                  <Atk><GiGunshot/>  {data.soldier.stat.atk}
                </Atk>

              </Soldier_box>
            ))}
          </>
        ) : null}

      </Display_soldier>
    </div>
  )
}

export default SoldierList

import React from 'react'
import { CopyIcon } from '../../../assets/icons'

function ProfilePageRight() {
  return (
    <div className='profile-page__wrapper-right main-right' >
      <div className="main-right__top">
        <p className="main-right__top-title">Мои карты:</p>
      </div>
         <div className="main-right__center">
          <div className="main-right__center-top">
             <div className="main-right__center-top-head">
               <p className="main-right__center-top-title">Карта M&S</p>
               <span className="main-right__center-top-info">ID:345322</span>
             </div>
             <div className="main-right__center-top-bottom">
               <a href="" className="main-right__center-top-money">0 сум</a>
             </div>
          </div>
          <div className="main-right__center-center">
            <div className="main-right__center-center-head">
               <p className="main-right__center-center-title">Бонусы</p>
               <span className="main-right__center-center-info">ID:345322</span>
            </div>
            <div className="main-right__center-center-bottom">
               <a href="" className="main-right__center-center-money">0 сум</a>
             </div>
          </div>
          <div className="main-right__center-bottom">
            <div className="main-right__center-bottom-top">
              <h2 className="main-right__center-bottom-title">Пригласите друзей</h2>
              <span className="main-right__center-bottom-span">И получите бонусные баллы!</span>
            </div>
            <div className="main-right__center-bottom-content">
              <span className="main-right__center-bottom-link">https://m&s/user/referal/254687</span>
              <button className="main-right__center-bottom-icon"><CopyIcon/></button>
            </div>
          </div>
         </div>
    </div>
  )
}

export default ProfilePageRight
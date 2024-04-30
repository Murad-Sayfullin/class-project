import React, { useState } from 'react'

function ProfileSidebar() {

  const [active,setActive] = useState(false)

  const handleActive = ()=>{
    setActive(true)
  }
  return (
        <div className="profile-page__wrapper-sidebar personal-menu">
            <div className="personal-menu__top">
                <p className="personal-menu__top-title">Личные данные:</p>
            </div>
            <ul className="personal-menu__list">
               <li className='personal-menu__active'>
                <a onClick={handleActive} href="" className="personal-menu__list-link">Персональные данные</a>
               </li>
               <li className='personal-menu__content'>
                <a href="" className="personal-menu__list-link">Персональные данные для рассрочки</a>
               </li>
               <li className='personal-menu__content'>
                <a href="" className="personal-menu__list-link">Мои заказы</a>
               </li>
               <li className='personal-menu__content'>
                <a href="" className="personal-menu__list-link">Отслеживать заказ</a>
               </li>
               <li className='personal-menu__content'>
                <a href="" className="personal-menu__list-link">Возврат и обмен товаров</a>
               </li>
               <li className='personal-menu__content'>
                <a href="" className="personal-menu__list-link">Уведомления</a>
               </li>
               <li className='personal-menu__content'>
                <a href="" className="personal-menu__list-link">Избранные товары</a>
               </li>
               <li className='personal-menu__content'>
                <a href="" className="personal-menu__list-link">Мои отзывы</a>
               </li>
               <li className='personal-menu__content'>
                <a href="" className="personal-menu__list-link">Помощь и Вопросы</a>
               </li>
            </ul>
        </div>    
  )
}

export default ProfileSidebar
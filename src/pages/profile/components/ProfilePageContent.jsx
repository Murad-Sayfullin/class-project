import React from 'react'

function ProfilePageContent() {
  return (
    <div className="profile-page__wrapper-content main-content">
        <div className="main-content__top">
            <p className="main-content__top-title">Персональные данные:</p>
        </div>
        <ul className="main-content__center">
            <li className="main-content__center-list">
                <strong className="main-content__center-list-strong">ID пользователя</strong>
                <span className="main-content__center-list-line"></span>
                <span className="main-content__center-list-text">345322</span>
            </li>
            <li className="main-content__center-list">
                <strong className="main-content__center-list-strong">Имя и фамилия</strong>
                <span className="main-content__center-list-line"></span>
                <span className="main-content__center-list-text">Murad-Sayfullin</span>
            </li>
            <li className="main-content__center-list">
                <strong className="main-content__center-list-strong">Номер телефона</strong>
                <span className="main-content__center-list-line"></span>
                <span className="main-content__center-list-text">99897-777-77-77</span>
            </li>
            <li className="main-content__center-list">
                <strong className="main-content__center-list-strong">Дата рождения</strong>
                <span className="main-content__center-list-line"></span>
                <span className="main-content__center-list-text">01-12-2004</span>
            </li>
            <li className="main-content__center-list">
                <strong className="main-content__center-list-strong">Электронная почта</strong>
                <span className="main-content__center-list-line"></span>
                <span className="main-content__center-list-text">examle@gmai.com</span>
            </li>
            <li className="main-content__center-list">
                <strong className="main-content__center-list-strong">Пороль</strong>
                <span className="main-content__center-list-line"></span>
                <span className="main-content__center-list-text">********</span>
            </li>

            <button className="main-content__center-button">
                Изменить данные
            </button>
        </ul>

        <div className="main-content__bottom">
            <p className="main-content__bottom-title">Местоположение:</p>

            <ul className="main-content__bottom-list">
                <li className="main-content__bottom-info">
                <strong className="main-content__bottom-info-strong">Область</strong>
                <span className="main-content__bottom-info-line"></span>
                <span className="main-content__bottom-info-text">Хорезм</span>
                </li>
                <li className="main-content__bottom-info">
                <strong className="main-content__bottom-info-strong">Город</strong>
                <span className="main-content__bottom-info-line"></span>
                <span className="main-content__bottom-info-text">Ургенч</span>
                </li>
                <li className="main-content__bottom-info">
                <strong className="main-content__bottom-info-strong">Улица</strong>
                <span className="main-content__bottom-info-line"></span>
                <span className="main-content__bottom-info-text">Амир-Темур</span>
                </li>
                <li className="main-content__bottom-info">
                <strong className="main-content__bottom-info-strong">Дом</strong>
                <span className="main-content__bottom-info-line"></span>
                <span className="main-content__bottom-info-text">3/7</span>
                </li>
                <li className="main-content__bottom-info">
                <strong className="main-content__bottom-info-strong">Квартира</strong>
                <span className="main-content__bottom-info-line"></span>
                <span className="main-content__bottom-info-text">№7</span>
                </li>

                <button className="main-content__bottom-button">
                Изменить данные
            </button>
            </ul>
        </div>
    </div>
  )
}

export default ProfilePageContent
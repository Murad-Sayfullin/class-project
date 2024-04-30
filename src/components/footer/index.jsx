import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon, CompanyIcon, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../../assets/icons'
import FooterBottom from './FooterBottom'

function Footer() {

    const list = [
        {
            id: 1,
            title: 'О нас',
            subtitle: 'Доп.инфо',
            subtitle1: 'Найти магазин',
            subtitle2: 'Категории',
            subtitle3: 'Блоги'
        },
        {
            id: 2,
            title: 'Партнеры',
            subtitle: 'Asaxiy.uz',
            subtitle1: 'ESavdo.uz',
            subtitle2: 'Goodzone.uz',
            subtitle3: 'Mediapark.uz    '
        },
        {
            id: 3,
            title: 'Информация',
            subtitle: 'Центр помощи',
            subtitle1: 'Возврат денег',
            subtitle2: 'Доставки',
            subtitle3: 'Связаться с нами'
        },
        {
            id: 4,
            title: 'Для пользователей',
            subtitle: 'Авторизоваться',
            subtitle1: 'Регистрация',
            subtitle2: 'Настройки',
            subtitle3: 'Избранное'
        },
    ]

    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-logo">
                        <Link to={'/'}>
                            <img className='footer-logo__img' src="https://cdn.freebiesupply.com/logos/large/2x/m-s-logo-png-transparent.png" alt="site logo" />
                        </Link>
                        <p className="footer-logo__subtitle">
                           Лучшая информация о компании находится здесь, свяжиетесь с нами!
                        </p>
                        <div className="footer-logo__links">
                            <Link className='footer-logo__icon'>
                                <FacebookIcon />
                            </Link>
                            <Link className='footer-logo__icon'>
                                <TwitterIcon />
                            </Link>
                            <Link className='footer-logo__icon'>
                                <CompanyIcon />
                            </Link>
                            <Link className='footer-logo__icon'>
                                <InstagramIcon />
                            </Link>
                            <Link className='footer-logo__icon'>
                                <YoutubeIcon />
                            </Link>
                        </div>
                    </div>

                    <div className="footer-main">
                        {list.map(item => (
                            <div className="footer-links" key={item.id}>
                                <h3 className="footer-links__title">{item.title}</h3>
                                <Link className="footer-links__subtitle">{item.subtitle}</Link>
                                <Link className="footer-links__subtitle">{item.subtitle1}</Link>
                                <Link className="footer-links__subtitle">{item.subtitle2}</Link>
                                <Link className="footer-links__subtitle">{item.subtitle3}</Link>
                            </div>
                        ))}
                    </div>

                    <div className="footer-apps">
                        <h2 className='footer-apps__title'>Скачать тут</h2>
                        <div className='footer-apps__store'>
                            <img src="/images/footer/app-store.png" alt="site logo" />
                        </div>
                        <div className='footer-apps__google'>
                            <img src="/images/footer/google-play.png" alt="site logo" />
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom/>
        </footer>
    )
}

export default Footer
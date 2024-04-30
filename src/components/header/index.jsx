import { ProfileIcon, CartIcon, HeartIcon } from '../../assets/icons'
import { Link, useNavigate } from 'react-router-dom'
import { MobileIcon, SearchIcon } from '../../assets/icons'
import { useDispatch, useSelector} from 'react-redux'
import { modalOpen } from '../../store/slices/modals'

function Header() {
    const { isAuth } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleProfile = () => {
        if (isAuth) {
            navigate('/profile')
        } else {
            dispatch(modalOpen('registerModal'))
        }
    }

    return (
        <header className='header'>
            <div className="header-top">
                <div className="container">
                    <div className="header-row">
                        <div className="header-logo">
                            <button className='header-mobile__btn'>
                                <MobileIcon />
                            </button>
                            <Link to='/'>
                                <img className='header-logo' src="https://cdn.freebiesupply.com/logos/large/2x/m-s-logo-png-transparent.png" />
                            </Link>
                        </div>

                        <form className="header-search">
                            <input type="text" placeholder='Что ищем?...' className="header-search__input" />
                            <button className="header-search__button">Искать</button>
                        </form>

                        <div className="header-buttons">
                            <button className="header-button profile">
                                <span className="header-button__icon" onClick={handleProfile}>
                                    <ProfileIcon />
                                </span>
                                <span className="header-button__text">{isAuth ? 'Мой профиль' : 'Регистрация'}</span>
                            </button>
                            <Link to='/favourites'>
                                <button className="header-button">
                                    <span className="header-button__icon">
                                        <HeartIcon />
                                    </span>
                                    <span className="header-button__text">Избранное</span>
                                </button>
                            </Link>
                            <Link to='/cart'>
                                <button className="header-button">
                                    <span className="header-button__icon">
                                        <CartIcon />
                                    </span>
                                    <span className="header-button__text">Моя корзинка</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <form className="header-search__mobile">
                <label htmlFor="search">
                    <SearchIcon />
                </label>
                <input type="text" id='search' placeholder='Search...' className="header-search__input" />
            </form>
        </header>
    )
}

export default Header
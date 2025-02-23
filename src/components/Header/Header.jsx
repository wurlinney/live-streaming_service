import { useState } from 'react';
import './Header.css';
import {useNavigate} from "react-router-dom";
import {LoginModal, RegisterModal, ResetPasswordModal} from "../AuthModal/AuthModal.jsx";

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const navigate = useNavigate();
    const [activeModal, setActiveModal] = useState('login'); // по умолчанию показываем окно для входа
    const [isModalActive, setIsModalActive] = useState(false); // Управляем видимостью модального окна

    const switchToRegister = () => setActiveModal('register');
    const switchToLogin = () => setActiveModal('login');
    const switchToReset = () => setActiveModal('resetPassword');

    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src="/logo.svg" className='logo' onClick={() => navigate('/')} />
            </div>
            <div className='buttonContainer'>
                <img
                    src="/searchIcon.svg"
                    className='searchIcon'
                    onClick={() => setShowSearch(!showSearch)}
                />
                <div className={`searchBox ${showSearch ? 'active' : ''}`}>
                    <input type="text" className='searchInput' placeholder="Поиск" />
                </div>
                <img src = '/profileIcon.svg' className='profileIcon' onClick={() => navigate('/persprof')}/>
                <img src = '/watchMoreIcon.svg' className='watchMoreIcon' onClick={() =>  setIsModalActive(true)}/>
            </div>
            <LoginModal active={showLoginModal} setActive={setShowLoginModal} />

            {isModalActive && activeModal === 'login' && (
                <LoginModal
                    active={isModalActive}
                    setActive={setIsModalActive}
                    switchToRegister={switchToRegister}
                    switchToReset={switchToReset}
                />
            )}
            {isModalActive && activeModal === 'register' && (
                <RegisterModal
                    active={isModalActive}
                    setActive={setIsModalActive}
                    switchToLogin={switchToLogin}
                />
            )}
            {isModalActive && activeModal === 'resetPassword' && (
                <ResetPasswordModal
                    active={isModalActive}
                    setActive={setIsModalActive}
                    switchToLogin={switchToLogin}
                />
            )}
        </div>
    );
}

export default Header;

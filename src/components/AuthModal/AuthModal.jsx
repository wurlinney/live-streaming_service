import Modal from '../Modal/Modal';
import './AuthModal.css';

function LoginModal({ active, setActive, switchToRegister, switchToReset }) {
    return (
        <Modal active={active} setActive={setActive}>
            <div className="auth-modal">
                <div className="left-side"></div>
                <div className="right-side">
                    <div className="modal-header">
                        <h2>Вход в <span className="highlight">"itsee"</span></h2>
                        <button className='closeModalButton' onClick={() => setActive(false)}>
                            <img src='/arrowRight.svg' alt="Close" />
                        </button>
                    </div>
                    <input type="email" placeholder="Почта" />
                    <input type="password" placeholder="Пароль" />
                    <div className="options">
                        <label><input type="checkbox" /> Запомнить меня</label>
                        <button onClick={switchToReset}>Забыли пароль?</button>
                    </div>
                    <button className='auth-button'>Войти</button>
                    <p>Нет аккаунта? <button onClick={switchToRegister}>Зарегистрируйтесь</button></p>
                </div>
            </div>
        </Modal>
    );
}

function RegisterModal({ active, setActive, switchToLogin }) {
    return (
        <Modal active={active} setActive={setActive}>
            <div className="auth-modal">
                <div className="left-side"></div>
                <div className="right-side">
                    <div className="modal-header">
                        <h2>Присоединяйтесь к нашему сообществу!</h2>
                        <button className='closeModalButton' onClick={() => setActive(false)}>
                            <img src='/arrowRight.svg' alt="Close" />
                        </button>
                    </div>
                    <input type="email" placeholder="Почта" />
                    <input type="text" placeholder="Имя пользователя" />
                    <div className="gender-options">
                        <label><input type="radio" name="gender" /> Женский</label>
                        <label><input type="radio" name="gender" /> Мужской</label>
                    </div>
                    <input type="password" placeholder="Пароль" />
                    <input type="password" placeholder="Повторите пароль" />
                    <button className='auth-button'>Зарегистрироваться</button>
                    <p>Уже есть аккаунт? <button onClick={switchToLogin}>Войти</button></p>
                </div>
            </div>
        </Modal>
    );
}

function ResetPasswordModal({ active, setActive, switchToLogin }) {
    return (
        <Modal active={active} setActive={setActive}>
            <div className="auth-modal">
                <div className="left-side"></div>
                <div className="right-side">
                    <div className="modal-header">
                        <h2>Сбросить пароль</h2>
                        <button className='closeModalButton' onClick={() => setActive(false)}>
                            <img src='/arrowRight.svg' alt="Close" />
                        </button>
                    </div>
                    <input type="email" placeholder="Почта" />
                    <input type="text" placeholder="Код подтверждения" />
                    <input type="password" placeholder="Новый пароль" />
                    <input type="password" placeholder="Подтвердите пароль" />
                    <button className='auth-button'>Сбросить пароль</button>
                    <button className='back-button' onClick={switchToLogin}>Назад</button>
                </div>
            </div>
        </Modal>
    );
}

export { LoginModal, RegisterModal, ResetPasswordModal };

import { useState } from "react";
import './Security.css'

function Security() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [repeatePassword, setRepeatePassword] = useState('')
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [lengthError, setLengthError] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(null);


    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleInputChange = (e) => {
      e.preventDefault();
      const newPassword = e.target.value;
      setPassword(newPassword);
      checkPasswordMatch(newPassword);
    };

    const handleRepeateInputChange = (e) => {
      e.preventDefault();
      const newRepeatePassword = e.target.value;
      setRepeatePassword(newRepeatePassword);
      checkPasswordMatch(newRepeatePassword);
    };

    const toggleCurrentPasswordVisibility = () => {
        setIsCurrentPasswordVisible(!isCurrentPasswordVisible);
    };

    const checkPasswordMatch = (newRepeatePassword) => {
      setPasswordMatchError(newRepeatePassword !== password)
    };

    /*const checkPasswordStrength = (newPassword) => {
      const minLength = 8;
      setLengthError (newPassword.length < minLength);
      const isLengthValid = newPassword.length >= minLength;
      const hasLetters = /[a-z]/.test(newPassword) || /[A-Z]/.test(newPassword);
      const hasNumber = /\d/.test(newPassword);
      const strength = isLengthValid + hasLetters + hasNumber
      setPasswordStrength(strength);

    }*/

    const savePassword = () => {
      const userData = { password };
      localStorage.setItem("userPassword", JSON.stringify(userData));
    };

    return (
        <div className="sectionsContainer">
            <div className="mainContainer">
                <h2>Сменить пароль</h2>
                <p>Надежный пароль повышает безопасность вашего аккаунта</p>
                <div className="inputContainer">
                    <div className="inputGroup">
                        <label>Текущий пароль</label>
                        <input
                            id="currentPasswordInput"
                            type={isCurrentPasswordVisible ? "text" : "password"}
                            value={currentPassword}
                            onChange={handleCurrentPasswordChange}
                        />
                        <label htmlFor="currentPasswordInput" className='eyeButton' onClick={toggleCurrentPasswordVisibility}>
                            <img src={isCurrentPasswordVisible ? '/eye_off.svg' : "/eye.svg"} className="eyeIcon" />
                        </label>
                    </div>
                    <div className="inputGroup">
                      <label>Новый пароль</label>
                      <input
                      type="password"
                      value={password}
                      onChange={handleInputChange}
                      />
                    </div>
                    <div className="inputGroup">
                      <label>Повторите новый пароль</label>
                      <input
                      type="password"
                      value={repeatePassword}
                      onChange={handleRepeateInputChange}
                      />
                    </div>
                    <div className="str-info ">
                      {lengthError && (
                        <p className="passwordAlert">Минимум 8 символов</p>
                      )}
                      {passwordMatchError && (
                        <p className="passwordAlert">Пароли не совпадают</p>
                      )}
                    </div>
                    <button onClick={savePassword}>Сохранить изменения</button>
                </div>
            </div>
            <div className="twofaContainer">
              <h2>Включение двухфакторной аутентификации</h2>
              <div className="inputContainer">
                <button>Активировать</button>
              </div>
            </div>
        </div>
    );
}

export default Security;

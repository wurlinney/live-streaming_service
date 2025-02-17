import './Information.css';
import {useState} from 'react';

function Information() {

  const [username, setUsername] = useState("user123");
  const [email, setEmail] = useState("user@mail.ru");
  const [location, setLocation] = useState("Россия, Санкт-Петербург");
  const [streamKey, setStreamKey] = useState("12345")
  const [maskedKey, setMaskedKey] = useState("*****")
  const [isKeyVisible, setIsKeyVisible] = useState(false)


  const handleSave = () => {
      const userData = { username, email, location };
    localStorage.setItem("userProfile", JSON.stringify(userData));
  };

  const handleKeyChange = (e) => {
    const value = e.target.value;
    if (value.length >= streamKey.length) {
      setStreamKey(prevKey => prevKey + value[value.length - 1]);
      setMaskedKey(prevMasked => prevMasked + '*');
    } else {

      setStreamKey(prevKey => prevKey.slice(0, value.length));
      setMaskedKey(prevMasked => prevMasked.slice(0, value.length));
    }
  };

  const toggleKeyVisibility = () => {
    setIsKeyVisible(!isKeyVisible);
  };

  const resetStreamKey = () => {
    setStreamKey("");
    setMaskedKey("");
  };

    return (
      <div className="sectionsContainer">
        <div className="avatarContainer">
          <h2>Аватар</h2>
          <div className="change">
            <h2>Изменить</h2>
            <img src='/bin.svg' className="binIcon"/>
          </div>
          <img src='/avatarPlaceholder.svg' className='avatarPlaceholder'/>
        </div>
        <div className='mainContainer'>
          <h2>Главное</h2>
          <p>Основная информация профиля</p>
          <div className='inputContainer'>
            <div className='inputGroup'>
            <label>Имя пользователя</label>
            <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className='inputGroup'>
            <label>Почта</label>
            <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className='inputGroup'>
            <label>Место проживания</label>
            <input
            type = "text"
            value = {location}
            onChange={(e) => setLocation(e.target.value)}
            />
            </div>
          </div>
          <button 
          onClick={handleSave}
          >
            Сохранить изменения
          </button>
        </div>
        <div className='keyContainer'>
          <h2>Ключ трансляции</h2>
          <div className='inputContainer'>
            <div className='inputGroup'>
              <label>Ключ трансляции</label>
              <input
              type = "text"
              value = {isKeyVisible ? streamKey : maskedKey}
              onChange={handleKeyChange}
              />
              <label htmlFor="streamKey" className='eyeButton' onClick={toggleKeyVisibility}>
                <img src={isKeyVisible ? '/eye_off.svg' : "/eye.svg"} className="eyeIcon"/>
              </label>
              </div>
          <button onClick={resetStreamKey}>Сбросить</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Information;
  
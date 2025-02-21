import './UserProfile.css'
import '../PersonalProfile/PersonalProfile.css'
import Header from "../Header/Header";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { useState } from 'react';
import MessageModal from '../MessageModal/MessageModal';


function UserProfile () {
    
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className='personalProfile'>
            <Header/>
            <div className='profileContainer'>
            <div className='profileHeader'>
                <div className='avatar-container'>
                    <div className='imagePlaceholder'/>
                    <div className='level'>
                        <p>level</p>
                    </div>
                </div>
                <div className='userInfo'>
                    <h2 className='userName'>user1000</h2>
                    <div className='userInfoSections'>
                    <div className='userInfoSection'>
                        <p className='userInfoCategory'>Дата регистрации</p>
                        <p className='userInfoData'>05.12.2020</p>
                    </div>
                    <div className='userInfoSection'>
                        <p className='userInfoCategory'>Страна, город</p>
                        <p className='userInfoData'>Россия, Москва</p>
                    </div>
                    <div className='userInfoSection'>
                        <p className='userInfoCategory'>Пол</p>
                        <p className='userInfoData'>Мужской</p>
                    </div>
                    <div className='userInfoSection'>
                        <p className='userInfoCategory'>Топ стримеров</p>
                        <p className='userInfoData'>#9</p>
                    </div>
                    </div>
                    <div className='buttonChannelContainer'>
                    <button className='profileButton'>Перейти в канал</button>
                    <button className='profileButton' onClick={() => setModalActive(true)}>Сообщение</button>
                    </div>
                </div>
            </div>
            <div className='sliderTitle'>
                <h3>Трофеи и достижения</h3>
            </div>
            <div className='sliderWrapper'>
                <Splide 
                hasTrack={false}
                options={{
                    type:"loop",
                    perPage: 3,
                    trimSpace: false,
                    start: 0,
                    wheel: true,
                    pagination: false,
                    gap: "35px",
                }}
                >
                        <SplideTrack>
                            <SplideSlide>
                                <img src='/trophy1.svg' className='userTrophyIcon'/>
                            </SplideSlide>
                            <SplideSlide>
                                <img src='/trophy2.svg' className='userTrophyIcon'/>
                            </SplideSlide>
                            <SplideSlide>
                                <img src='/trophy3.svg' className='userTrophyIcon'/>
                            </SplideSlide>
                            <SplideSlide>
                                <img src='/trophy4.svg' className='userTrophyIcon'/>
                            </SplideSlide>
                            <SplideSlide>
                                <img src='/trophy5.svg' className='userTrophyIcon'/>
                            </SplideSlide>
                            <SplideSlide>
                                <img src='/trophy6.svg' className='userTrophyIcon'/>
                            </SplideSlide>
                        </SplideTrack>
                </Splide>
            </div>
            <div className="photogalleryTitle">
                <h2>Фотогалереи(32)</h2>
                <button className='showAllButton'>
                    Показать всё
                    <img src='/showMoreIcon.svg' alt="Показать всё" className='showMoreIcon'/>
                </button>
            </div>
            <div className='galleryContainer'>
            <div className='gallery'>
                {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="gallery-item"></div>
                ))}
            </div>
            </div>
            </div>
            <MessageModal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default UserProfile;
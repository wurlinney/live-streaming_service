import './PersonalProfile.css'
import Header from "../Header/Header";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { useState } from 'react';

import SubscriptionModal from '../SubscriptionModal/SubscriptionModal';

function PersonalProfile () {
    
    const [modalActive, setModalActive] = useState(false)

    return(
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
                    <h2 className='userName'>user123</h2>
                    <div className='userInfoSections'>
                    <div className='userInfoSection'>
                        <p className='userInfoCategory'>Дата регистрации</p>
                        <p className='userInfoData'>01.02.2025</p>
                    </div>
                    <div className='userInfoSection'>
                        <p className='userInfoCategory'>Страна, город</p>
                        <p className='userInfoData'>Россия, Санкт-Петербург</p>
                    </div>
                    <div className='userInfoSection'>
                        <p className='userInfoCategory'>Пол</p>
                        <p className='userInfoData'>Мужской</p>
                    </div>
                    </div>
                    <button className='editButton'>Редактировать профиль</button>
                </div>
                <button className='subscriptionButton' onClick={() => setModalActive(true)}>
                    <div className='subscriptionContainer'>
                    <img src = '/subscriptionLogo.svg' className='subscriptionLogo'/>
                    <img src='/subscriptionEye.svg' className='subscriptionEye'/>
                    <h2>подписка</h2>
                    </div>
                </button>
            </div>
            <div className='sliderTitle'>
                <h3>Трофеи и достижения</h3>
            </div>
            <div className='sliderWrapper'>
                <Splide 
                hasTrack={false}
                options={{
                    type:"loop",
                    perPage: 5,
                    trimSpace: false,
                    start: 0,
                    wheel: true,
                    pagination: false,
                    gap: "30px",
                }}
                >
                        <SplideTrack>
                            <SplideSlide>
                                <div className='userTrophy'/>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='userTrophy'/>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='userTrophy'/>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='userTrophy'/>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='userTrophy'/>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='userTrophy'/>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='userTrophy'/>
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
            <SubscriptionModal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default PersonalProfile;
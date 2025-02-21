import Modal from '../Modal/Modal';
import './SubscriptionModal.css'

function SubscriptionModal ({ active, setActive }) {
    return (
        <Modal active={active} setActive={setActive}>
            <div className="subscription-modal">
                <div className="modal-title">
                    <h1>itsee+</h1>
                    <p>Стримьте вместе с нами – ваш захватывающий мир</p>
                    <p>визуального контента уже ждёт вас!</p>
                    <img src='/runningGuy.svg' className='runningGuyIcon'/>
                    <button className='closeModalButton' onClick={() => setActive(false)}><img src='/arrowRight.svg'/></button>
                </div>
                <div className='subscription-info'>
                    <div className="subscription-features">
                        <div className="subscription-feature">
                            <h1>Офлайн режим</h1>
                            <p>Режим офлайн для просмотра любимых шоу без интернета</p>
                        </div>
                        <div className="subscription-feature">
                            <h1>1000+</h1>
                            <p>сериалов и фильмов на любой вкус</p>
                        </div>
                        <div className="subscription-feature">
                            <h1>Эксклюзив</h1>
                            <p>Эксклюзивные премьеры и оригинальные шоу</p>
                        </div>
                    </div>
                    <button className='buySubButton'>Оформить за 1190 ₽ в год</button>
                </div>
            </div>
        </Modal>
    )
}

export default SubscriptionModal
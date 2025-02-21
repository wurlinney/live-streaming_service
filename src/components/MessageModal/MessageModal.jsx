import './MessageModal.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';

function MessageModal({ active, setActive }) {
    
     const [message, setMessage] = useState('');

    return (
        <Modal active={active} setActive={setActive}>
            <div className='messsage-modal'>
                <div className="message-modal-title">
                    <div className="message-modal-back-container">
                    <button className="close-message-modal-button" onClick={() => setActive(false)}>
                        <img src='/backIcon.svg' alt="back" />
                        <p>Назад</p>
                    </button>
                    </div>
                    <div className="messageAvatar">
                        <img src='/personAvatar.svg'/>
                        <p>user1000</p>
                    </div>
                </div>
                <div className='messengerContainer'>
                    <div className="inputBox">
                        <input
                        type="text"
                        placeholder='Message...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                        <img src='/emojiMessage.svg'/>
                        
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default MessageModal;

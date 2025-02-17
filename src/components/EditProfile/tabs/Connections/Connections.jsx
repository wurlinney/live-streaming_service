import './Connections.css'
function Connections() {
    return (
      <div className="sectionsContainer">
        <div className="connectionsContainer">
          <div className='titleContainer'>
          <h2>Социальные сети</h2>
          <p>Управление подключенными учетными записями</p>
          </div>
          <div className="socialNetworksContainer">
            <div className="socialNetwork">
              <img src="/vk.svg" className="vkIcon" alt="вк"/>
              <p>VK</p>
              <button className='connectionButton'>Подключить</button>
            </div>
            <div className="socialNetwork">
              <img src="/twitter.svg" className="twitterIcon" alt="вк"/>
              <p>Twitter</p>
              <button className='connectionButton'>Подключить</button>
            </div>
            <div className="socialNetwork">
              <img src="/telegram.svg" className="tgIcon" alt="вк"/>
              <p>Telegram</p>
              <button className='connectionButton'>Подключить</button>
            </div>
            <div className="socialNetwork">
              <img src="/google.svg" className="googleIcon" alt="вк"/>
              <p>Google</p>
              <button className='connectionButton'>Подключить</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Connections;
  
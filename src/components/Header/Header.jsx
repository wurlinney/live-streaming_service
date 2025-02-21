import { useState } from 'react';
import './Header.css';

function Header() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src="/logo.svg" className='logo' />
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
                <img src = '/profileIcon.svg' className='profileIcon'/>
                <img src = '/watchMoreIcon.svg' className='watchMoreIcon' />
            </div>
        </div>
    );
}

export default Header;

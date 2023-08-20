import { useState } from 'react';
import './style.css';
import Dropdown from '../dropdown/Dropdown';


const Option = () => {

    const [dropdownVisible, setDropDownVisible] = useState(false);
    const optionHandler = () => {
        setDropDownVisible(!dropdownVisible);
    };


    return(
        <>
            <div className="post-options" onClick={optionHandler}>...</div>
            {dropdownVisible && (
                <Dropdown />
            )}
        </>
        
    );
};

export default Option;
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div>
                <div>
                    Header
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/counter">counter</Link>
                        </li>
                        <li>
                            <Link to="/todo">todo</Link>
                        </li>
                        <li>
                            <Link to="/login">login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;
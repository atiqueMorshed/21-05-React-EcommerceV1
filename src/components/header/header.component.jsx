import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import CurrentUserContext from '../../contexts/current-user/current-user.context';
import {CartContext} from '../../providers/cart/cart.provider';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss';

const Header = () => {
    const {hidden} = useContext(CartContext);
    const currentUser = useContext(CurrentUserContext);
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/shop' className='option'>CONTACT</Link>
                {
                    currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : <Link to='/signin' className='option'>SIGN IN</Link>
                }

                <CartIcon/>
            </div>
            { hidden ? null : <CartDropdown/>}
        </div>
    );
}


export default Header;
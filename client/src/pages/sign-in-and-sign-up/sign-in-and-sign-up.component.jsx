import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import {SignInAndSignOutContainer} from './sign-in-and-sign-up.styles';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <SignInAndSignOutContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignOutContainer>
)

export default SignInAndSignUpPage;
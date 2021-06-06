import React from 'react';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {SignInContainer, SignInTitle, ButtonsContainer} from './sign-in.styles';
// import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <ButtonsContainer>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn >Sign in with google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;
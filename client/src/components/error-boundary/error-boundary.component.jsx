import React from 'react';

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundray.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        if(error) {
            return {
                hasError: true
            };
        }
    }

    componentDidCatch(error, info) {
        console.log('ERROR: ', error);
        console.log('Error Info: ', info);
    }

    render() {
        if(this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer />
                    <ErrorImageText>
                        AN ERROR HAS OCCURED
                    </ErrorImageText>
                </ErrorImageOverlay>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
/* eslint-disable react/display-name */
import React from 'react';

import Spinner from '../../components/spinner/spinner.component';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => (
    isLoading 
        ? <Spinner /> 
        : <WrappedComponent {...otherProps} />
);

export default WithSpinner;
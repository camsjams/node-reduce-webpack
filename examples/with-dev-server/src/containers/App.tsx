import React, {FC} from 'react';
import styled from 'styled-components';
import {hot} from 'react-hot-loader';

const Wrapper = styled.div`
	margin-top: 2.3em;
	text-align: right;
	padding-bottom: 1em;
	background-color: #ccc;
`;

const App: FC = () =>
	<Wrapper>Hello Reducers! Welcome to our Standalone Dev Server</Wrapper>;

/* istanbul ignore if  */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-ignore
if (module.hot) {
	/* eslint-disable @typescript-eslint/ban-ts-ignore */
	// @ts-ignore
	module.hot.accept();
}

export default hot(module)(App);

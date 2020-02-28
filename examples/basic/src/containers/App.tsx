import React, {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-top: 2.3em;
	text-align: right;
	padding-bottom: 1em;
`;

const App: FC = () =>
	<Wrapper>Hello Reducers! Welcome to {__SOME_VAR__}</Wrapper>;

export default App;

import React from 'react';
import { Container, HeaderBanner, Section } from './home.styles'

import Header from '../../components/header/header.component';
import Tasks from '../../components/tasks/tasks.components';

interface Props{
    toggleTheme(): void;
}

const Home: React.FC<Props> = ({toggleTheme}) => {
    return (
        <Section>
            <HeaderBanner/>
            <Container>
                <Header/>
                <Tasks/>
            </Container>
        </Section>  
    )
}

export default Home;
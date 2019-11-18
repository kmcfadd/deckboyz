import React, { Component } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import Content from '../components/Content/Content';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header'
class Home extends Component {

    render() {
        return (
            <Wrapper>
                <Header />
            </Wrapper>
        )
    }


}
{/* <Content>
                    <p>this is content piece one</p>
                </Content>
                <Content>
                    <p>this is content piece two</p>
                </Content>
                <Sidebar>
                    <h3>Welcome to Deck Boys</h3>
                    <h4>A one stop shop for all your Standard MTG deckbuilding needs</h4>
                    <br />
                    <h5>Browse creations at your leisure or register to start creating!</h5>
                </Sidebar> */}
export default Home;
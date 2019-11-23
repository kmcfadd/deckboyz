import React, { Component } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
// import Content from '../components/Content/Content';
// import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header'
import { userService, authenticationService } from '@/services';
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        return (
            <Wrapper>
                <Header />
            </Wrapper>
        )
    }
}
export default Home;
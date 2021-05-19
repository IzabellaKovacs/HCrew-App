import React from 'react';
import LoginScreen from '../app/screens/LoginScreen';

import { create } from 'react-test-renderer';
import renderer from 'react-test-renderer';

const tree = create(<LoginScreen />);

test('snapshot renders correctly', () => {
    expect(tree).toMatchSnapshot();
});

it('login: empty email test', () => {
    let data = renderer.create(<LoginScreen />).getInstance();

    window.alert = jest.fn();
    data.loginUser('','');
    
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("Write your email!");
})

it('login: empty password test', () => {
    let data = renderer.create(<LoginScreen />).getInstance();

    window.alert = jest.fn();
    data.setState({email: 'username@gmail.com'});
    data.loginUser(data.state.email,'');
    
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("Write your password!");
})
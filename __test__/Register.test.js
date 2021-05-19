import React from 'react';
import RegisterScreen from '../app/screens/RegisterScreen';

import { create } from 'react-test-renderer';
import renderer from 'react-test-renderer';

const tree = create(<RegisterScreen />);

test('snapshot renders correctly', () => {
    expect(tree).toMatchSnapshot();
});

it('register: empty email', () => {
    let data = renderer.create(<RegisterScreen />).getInstance();
    window.alert = jest.fn();
    data.signUpUser('','');
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Write your email!');
})

it('register: empty password', () => {
    let data = renderer.create(<RegisterScreen />).getInstance();
    window.alert = jest.fn();
    data.setState({email: 'username@yahoo.com'});
    data.signUpUser(data.state.email, '');
    
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Write your password!');
})

it('register: success', () => {
    let data = renderer.create(<RegisterScreen />).getInstance();
    data.setState({email: 'username@yahoo.com'});
    data.setState({password: '123456'});
    data.signUpUser(data.state.email, data.state.password);
    
    expect(data.state.signup).toEqual('success');
})

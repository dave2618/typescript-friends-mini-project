import { BrowserRouter } from 'react-router-dom';
import FriendCard from '../components/FriendCard';
import TestRenderer from 'react-test-renderer';

test('match the snapshot', () => {
    const person = {
            name: 'Andrew',
            city: 'London',
            job: 'Account Manager',
            phone: '0753212345',
            image: 'https://loremflickr.com/640/480/people?72705',
            likes: 0,
    }
    const tree = TestRenderer.create(<BrowserRouter><FriendCard person={person} /> </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});

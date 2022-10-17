export const generateMockFriends = () => {
    const friendsArray = Array.from(Array(3)).map((element) => (
        element = {
            name: 'Andrew',
            city: 'London',
            job: 'Account Manager',
            phone: '0753212345',
            image: 'https://loremflickr.com/640/480/people?72705',
            likes: 0,
        }
    ))
    return friendsArray;
}
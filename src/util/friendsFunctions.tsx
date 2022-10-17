import { createRandomPerson, createRandomPersonWith3 } from "../service/friendService";
import { FriendsType } from "../types/FriendsType";

export const generateFriends = () => {
    const friendsArray = Array.from(Array(3)).map((element) => (
        element = createRandomPerson()
    ))
    return friendsArray;
}

export const generateFriendsWith3 = () => {
    const friendsArray = Array.from(Array(3)).map((element) => (
        element = createRandomPersonWith3()
    ))
    return friendsArray;
}

export const getNumberOfLikes = (friends: Array<FriendsType>) => {
    let total: number = 0;
    friends.forEach((element) => {
        total += element.likes;
    })
    return total;
}
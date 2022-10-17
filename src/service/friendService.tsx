import { faker } from "@faker-js/faker";

export const createRandomPerson = () => {
    return {
        name: faker.name.fullName(),
        city: faker.address.city(),
        job: faker.name.jobTitle(),
        phone: faker.phone.number('+40 7## ### ###'),
        image: faker.image.people(640, 480, true),
        likes: 0
    };
}

export const createRandomPersonWith3 = () => {
    return {
        name: faker.name.fullName(),
        city: faker.address.city(),
        job: faker.name.jobTitle(),
        phone: faker.phone.number('+40 7## ### ###'),
        image: faker.image.people(640, 480, true),
        likes: 3
    };
}
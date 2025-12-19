import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    Promise.all([photoPromise, userPromise])
        .then(([{ body }, { firstName, lastName}]) => {
            console.log(`${body} ${firstName} ${lastName}`);
        })
        .catch(error => {
            console.log('Signup system offline');
        });
}

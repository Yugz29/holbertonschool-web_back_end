import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default function handleProfileSingup(firstName, lastName, fileName) {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    return Promise.allSettled([photoPromise, userPromise])
        .then(results => {
            return results.map(result => {
                if (result.status === 'rejected') {
                    return {
                        status: 'rejected',
                        value: result.reason
                    };
                }
                return result;
            })
        })
}

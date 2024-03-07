import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    Promise.all([photoPromise, userPromise])
      .then((values) => {
        const output = `${values[0].body} ${values[1].firstName} ${values[1].lastName}`;
        console.log(output);
        resolve(output);
      })
      .catch(() => {
        console.log('Signup system offline');
        reject(new Error('Signup system offline'));
      });
  });
}

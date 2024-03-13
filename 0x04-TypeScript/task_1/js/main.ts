interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    // Allow adding any additional attribute dynamically
    [key: string]: any;
}

/* const teacher: Teacher = {
    firstName: 'Gregg',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'Pretoria',
    // adding a new boolean attribute
    contract: true,
};

console.log(teacher);
 */
interface Directors extends Teacher {
    numberOfReports: number;
}
const director: Directors = {
    firstName: 'Jane',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'Cape Town',
    numberOfReports: 3,
    // adding a new boolean attribute
    contract: false,
};
console.log(director);

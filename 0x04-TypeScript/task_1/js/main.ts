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

console.log(teacher); */

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
// console.log(printTeacher('Jane', 'Doe'));

interface Directors extends Teacher {
    numberOfReports: number;
}
/* const director: Directors = {
    firstName: 'Jane',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'Cape Town',
    numberOfReports: 3,
    // adding a new boolean attribute
    contract: false,
};
console.log(director); */

class StudentClass {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework() {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

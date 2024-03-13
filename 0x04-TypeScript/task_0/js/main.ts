interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Cape Town'
};
const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    location: 'Pretoria'
};

const studentsList: Student[] = [student1, student2];

// Get the table element from html
const table = document.createElement('table');
document.body.appendChild(table);

// Loop through studentsList and create a row for each student
studentsList.forEach(student => {
    const row = table.insertRow();

    // Create cells for each student
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    // Fill the cells with student data
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

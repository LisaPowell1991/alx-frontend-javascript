export default function createIteratorObject(report) {
  function* iterator() {
    for (const department in report.allEmployees) {
      if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
        // Using Object.prototype.hasOwnProperty.call()
        for (const employee of report.allEmployees[department]) {
          yield employee;
        }
      }
    }
  }
  return iterator();
}

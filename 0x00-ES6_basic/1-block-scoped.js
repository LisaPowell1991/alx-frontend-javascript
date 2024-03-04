export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslink-disable-next-line no-unused-vars
    const task = true;
    // eslink-disable-next-line no-unused-vars
    const task2 = false;
  }

  return [task, task2];
}

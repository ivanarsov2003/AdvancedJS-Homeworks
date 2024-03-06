
let reminders = [];
function createReminder() {
   
    const title = document.getElementById('title').value;
    const priority = document.getElementById('priority').value;
    const color = document.getElementById('color').value;
    const description = document.getElementById('description').value;
    const reminder = document.getElementById('reminder').value;
    const Reminder = {title, priority, color, description, reminder}
    reminders.push(Reminder);
}
document.getElementById('title').value = '';
document.getElementById('priority').value = 'Low';
document.getElementById('color').value = '#000000';
document.getElementById('description').value = '';

function showReminders(){
    const table = document.getElementById('table');
    table.innerHTML = '';
    reminders.forEach(Reminder => {
        const row = table.insertRow();
        const titleCell = row.insertCell(0);
        const priorityCell = row.insertCell(1);
        const descriptionCell = row.insertCell(2);
        titleCell.textContent = Reminder.title;
        titleCell.style.color = Reminder.color;
        priorityCell.textContent = Reminder.priority;
        descriptionCell.textContent = Reminder.description;
    })
}


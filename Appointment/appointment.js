document.addEventListener('DOMContentLoaded', async () => {
    const appointmentsTableBody = document.querySelector('#appointmentsTable tbody');

    try {
        const response = await fetch('http://localhost:5000/appointments');
        if (response.ok) {
            const appointments = await response.json();
            
            appointments.forEach(appointment => {
                const newRow = `
                    <tr class="data-header" id="${appointment._id}">
                        <td>${appointment.doctor}</td>
                        <td>${appointment.name}</td>
                        <td>${appointment.mobile}</td>
                        <td>${appointment.date}</td>
                        <td>${appointment.time}</td>
                        <td>${appointment.symptom}</td>
                        <td><button onClick="deleteAppointment('${appointment._id}')">Delete</button></td>
                    </tr>
                `;
                appointmentsTableBody.innerHTML += newRow;
            });

        } else {
            console.error('Failed to fetch appointments');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

async function deleteAppointment(appointmentId) {
    try {
        const deleteResponse = await fetch(`http://localhost:5000/appointments/${appointmentId}`, {
            method: 'DELETE',
        });

        if (deleteResponse.ok) {
            document.getElementById(appointmentId).remove();
        } else {
            console.error('Failed to delete appointment');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

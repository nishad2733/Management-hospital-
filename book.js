
document.getElementById('appointmentForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const doctor = document.getElementById('doctor').value;
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('number').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const symptom = document.getElementById('symptom').value;

    const appointmentData = { doctor, name, mobile, date, time, symptom };

    try {
        const response = await fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
              },

            body: JSON.stringify(appointmentData)
        });

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Appointment Booked',
                text: 'Your appointment has been successfully booked.',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('appointmentForm').reset();
                }
            });
        } else {
            throw new Error('Failed to book appointment');
        }
    } 
    catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'There was an error booking your appointment.',
            confirmButtonText: 'OK'
        });
        // console.log(error) ;
    }
});

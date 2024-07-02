document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const doctor = document.getElementById('doctor').value;
    const number = document.getElementById('number').value;

    console.log('Appointment Details:');
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Doctor:', doctor);
    console.log('mobile number:', Number);

    // Display the SweetAlert success message
    Swal.fire({
        icon: 'success',
        title: 'Appointment Booked',
        text: 'Your appointment has been successfully booked.',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            // Reset the form after submission
            document.getElementById('appointmentForm').reset();
        }
    });

    // alert('Appointment booked successfully!');
    
});

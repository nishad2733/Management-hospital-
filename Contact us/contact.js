document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const fullName = document.querySelector('input[name="fullName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (fullName && email && message) {
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        // Reset the form fields
        document.getElementById('contact-form').reset();
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill out all fields.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});
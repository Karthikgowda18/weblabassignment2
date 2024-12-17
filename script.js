$(document).ready(function() {
    // Client-side form validation
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var gender = $('#gender').val();
        var dob = $('#dob').val();

        // Validate inputs
        if (!firstName || !lastName || !email || !gender || !dob) {
            alert("Please fill all fields.");
            return;
        }

        // Submit the form data using AJAX
        $.ajax({
            url: 'submit.php',
            type: 'POST',
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                dob: dob
            },
            success: function(response) {
                // Display the response (success message or error)
                $('body').html(response);
            }
        });
    });
});

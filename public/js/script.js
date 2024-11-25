const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signInContainer = document.querySelector('.sign-in-container');
const signUpContainer = document.querySelector('.sign-up-container');
const greenBack1 = document.querySelector('.Green-back1');
const greenBack2 = document.querySelector('.Green-back2');

signUpButton.addEventListener('click', () => {
    signInContainer.style.display = 'none';
    signUpContainer.style.display = 'flex';
    greenBack1.style.display = 'none';
    greenBack2.style.display = 'flex';
});

signInButton.addEventListener('click', () => {
    signUpContainer.style.display = 'none';
    signInContainer.style.display = 'flex';
    greenBack2.style.display = 'none';
    greenBack1.style.display = 'flex';
});


function showDetails(button) {
    // Find the parent course row of the clicked button
    const courseRow = button.closest('.course-row');

    // Find the course-details div inside this row
    const details = courseRow.querySelector('.course-details');

    // Toggle visibility
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}


function toggleRefundDetails(button) {
    // Find the parent refund row of the clicked button
    const refundRow = button.closest('.refund-row');

    // Find the refund-details div inside this row
    const details = refundRow.querySelector('.refund-details');

    // Toggle visibility
    if (details.style.display === 'block') {
        details.style.display = 'none';
        button.textContent = 'Show Details';
    } else {
        details.style.display = 'block';
        button.textContent = 'Hide Details';
    }
}



document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the input values
    const day = document.getElementById('dob-day').value;
    const month = document.getElementById('dob-month').value;
    const year = document.getElementById('dob-year').value;

    // Calculate the age
    const age = calculateAge(new Date(year, month - 1, day));

    // Display the result
    document.getElementById('result').textContent = `You are ${age} years old.`;
});

function calculateAge(dob) {
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    const dayDiff = now.getDate() - dob.getDate();

    // Adjust age if the current date is before the birth date
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}


document.getElementById('btn').addEventListener('click',calculateAge);
function calculateAge() {
    const birthday = document.getElementById('birthday').value;
    if (birthday) {
        const birthDate = new Date(birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const daysDifference = today.getDate() - birthDate.getDate();
        
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        document.getElementById('result').innerHTML = `You are ${age} years ${monthDifference} months and ${daysDifference} days old.`;
    } else {
        document.getElementById('result').innerHTML = "Please enter your birthday.";
    }
}
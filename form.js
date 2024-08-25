
function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').innerText = now.toLocaleString();
}


window.onload = updateDateTime;

function recommendPerfume() {
    const fullName = document.getElementById('fullName').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const scentNotes = document.querySelectorAll('input[name="scentNotes"]:checked');
    const mood = document.getElementById('mood').value;

    let errors = false;

    document.getElementById('fullNameError').innerText = '';
    document.getElementById('ageError').innerText = '';
    document.getElementById('genderError').innerText = '';
    document.getElementById('scentNotesError').innerText = '';
    document.getElementById('moodError').innerText = '';

    if (!fullName) {
        document.getElementById('fullNameError').innerText = 'Enter your full name!';
        errors = true;
    }

    if (!age || isNaN(age) || age <= 0) {
        document.getElementById('ageError').innerText = 'Enter a valid age!';
        errors = true;
    }

    if (!gender) {
        document.getElementById('genderError').innerText = 'Select your gender!';
        errors = true;
    }

    if (scentNotes.length === 0) {
        document.getElementById('scentNotesError').innerText = 'Select at least one scent note!';
        errors = true;
    }

    if (!mood) {
        document.getElementById('moodError').innerText = 'Select your mood or occasion!';
        errors = true;
    }

    if (!errors) {
        const scentPreferences = Array.from(scentNotes).map(el => el.value);
        let perfumeRecommendation = '';

        if (gender.value === 'male') {
            if (scentPreferences.includes('woody') && mood === 'formal') {
                perfumeRecommendation = 'Tom Ford Oud Wood';
            } else if (scentPreferences.includes('citrus') && mood === 'casual') {
                perfumeRecommendation = 'Acqua di Gio by Giorgio Armani';
            } else if (scentPreferences.includes('spicy') && mood === 'energetic') {
                perfumeRecommendation = 'Bleu de Chanel';
            } else {
                perfumeRecommendation = 'Dior Sauvage';
            }
        } else if (gender.value === 'female') {
            if (scentPreferences.includes('floral') && mood === 'romantic') {
                perfumeRecommendation = 'Chanel No. 5';
            } else if (scentPreferences.includes('citrus') && mood === 'casual') {
                perfumeRecommendation = 'Light Blue by Dolce & Gabbana';
            } else if (scentPreferences.includes('woody') && mood === 'formal') {
                perfumeRecommendation = 'Yves Saint Laurent Black Opium';
            } else {
                perfumeRecommendation = 'Lancôme La Vie Est Belle';
            }
        }

        document.getElementById('results').innerHTML = `
            <h3>We recommend you try: ${perfumeRecommendation}</h3>
            <p>Full Name: ${fullName}</p>
            <p>Age: ${age}</p>
            <p>Gender: ${gender.value.charAt(0).toUpperCase() + gender.value.slice(1)}</p>
            <p>Preferred Scent Notes: ${scentPreferences.join(', ')}</p>
            <p>Mood/Occasion: ${mood.charAt(0).toUpperCase() + mood.slice(1)}</p>
        `;
    }
}

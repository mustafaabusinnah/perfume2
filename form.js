function a1() {
    const b1 = new Date();
    document.getElementById('x1').innerText = b1.toLocaleString();
}

window.onload = a1;

function a2() {
    const b2 = document.getElementById('x2').value.trim();
    const c2 = document.getElementById('x3').value.trim();
    const d2 = document.querySelector('input[name="y1"]:checked');
    const e2 = document.querySelectorAll('input[name="y2"]:checked');
    const f2 = document.getElementById('x4').value;

    let g2 = false;

    document.getElementById('z1').innerText = '';
    document.getElementById('z2').innerText = '';
    document.getElementById('z3').innerText = '';
    document.getElementById('z4').innerText = '';
    document.getElementById('z5').innerText = '';

    if (!b2) {
        document.getElementById('z1').innerText = 'Enter your full name!';
        g2 = true;
    }

    if (!c2 || isNaN(c2) || c2 <= 0) {
        document.getElementById('z2').innerText = 'Enter a valid age!';
        g2 = true;
    }

    if (!d2) {
        document.getElementById('z3').innerText = 'Select your gender!';
        g2 = true;
    }

    if (e2.length === 0) {
        document.getElementById('z4').innerText = 'Select at least one scent note!';
        g2 = true;
    }

    if (!f2) {
        document.getElementById('z5').innerText = 'Select your mood or occasion!';
        g2 = true;
    }

    if (!g2) {
        const h2 = Array.from(e2).map(i2 => i2.value);
        let j2 = '';

        if (d2.value === 'male') {
            if (h2.includes('woody') && f2 === 'formal') {
                j2 = 'Tom Ford Oud Wood';
            } else if (h2.includes('citrus') && f2 === 'casual') {
                j2 = 'Acqua di Gio by Giorgio Armani';
            } else if (h2.includes('spicy') && f2 === 'energetic') {
                j2 = 'Bleu de Chanel';
            } else {
                j2 = 'Dior Sauvage';
            }
        } else if (d2.value === 'female') {
            if (h2.includes('floral') && f2 === 'romantic') {
                j2 = 'Chanel No. 5';
            } else if (h2.includes('citrus') && f2 === 'casual') {
                j2 = 'Light Blue by Dolce & Gabbana';
            } else if (h2.includes('woody') && f2 === 'formal') {
                j2 = 'Yves Saint Laurent Black Opium';
            } else {
                j2 = 'Lancôme La Vie Est Belle';
            }
        }

        document.getElementById('w1').innerHTML = `
            <h3>We recommend you try: ${j2}</h3>
            <p>Full Name: ${b2}</p>
            <p>Age: ${c2}</p>
            <p>Gender: ${d2.value.charAt(0).toUpperCase() + d2.value.slice(1)}</p>
            <p>Preferred Scent Notes: ${h2.join(', ')}</p>
            <p>Mood/Occasion: ${f2.charAt(0).toUpperCase() + f2.slice(1)}</p>
        `;
    }
}

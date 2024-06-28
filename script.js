document.addEventListener('DOMContentLoaded', function() {
    // Data for mental health disorders
    const disorders = [
        {
            name: "Depression",
            symptoms: ["Persistent sad or empty mood", "Loss of interest in activities", "Fatigue"],
            description: "A common mental disorder characterized by persistent sadness and a lack of interest or pleasure in previously rewarding or enjoyable activities."
        },
        {
            name: "Anxiety",
            symptoms: ["Excessive worry", "Restlessness", "Difficulty concentrating"],
            description: "A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one's daily activities."
        },
        // Add more disorders as needed
    ];

    // Populate disorders list
    const disorderList = document.getElementById('disorder-list');
    disorders.forEach(disorder => {
        const disorderElement = document.createElement('div');
        disorderElement.className = 'disorder';
        disorderElement.innerHTML = `
            <h3>${disorder.name}</h3>
            <p>${disorder.description}</p>
            <ul>
                ${disorder.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
            </ul>
        `;
        disorderList.appendChild(disorderElement);
    });

    // Self-Assessment form submission
    const assessmentForm = document.getElementById('assessment-form');
    const assessmentResult = document.getElementById('assessment-result');

    assessmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const symptomInput = document.getElementById('symptom').value.toLowerCase();
        let matchedDisorders = disorders.filter(disorder =>
            disorder.symptoms.some(symptom => symptom.toLowerCase().includes(symptomInput))
        );

        if (matchedDisorders.length > 0) {
            assessmentResult.innerHTML = "Possible disorders based on your symptom:";
            const resultList = document.createElement('ul');
            matchedDisorders.forEach(disorder => {
                const listItem = document.createElement('li');
                listItem.textContent = disorder.name;
                resultList.appendChild(listItem);
            });
            assessmentResult.appendChild(resultList);
        } else {
            assessmentResult.textContent = "No matching disorders found. Please consult a healthcare professional for a proper diagnosis.";
        }
    });
});

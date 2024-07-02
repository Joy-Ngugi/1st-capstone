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
        {
            name: "bipolar disorder",
            symptoms: ["Increased energy", "restlessness", 'Extreme irritability', 'Poor concentration', 'fast talking', 'sleeplessness', 'Heightened sense of self-importance', 'Increased sexual behavior', 'Abuse of drugs', 'intrusive or aggressive behavior', 'feeling of Sadness', 'anxiety', 'hopelessness and guilt',
                     'Loss of interest','or pleasure in activities once enjoyed', 'Decreased energy', 'fatigue'],
            description: "Bipolar disorder is a serious mental illness that causes unusual shifts in mood, ranging from extreme highs (mania or “manic” episodes) to lows (depression or “depressive” episode). A person who has bipolar disorder also experiences changes in their energy, thinking, behavior, and sleep"       

           
        },
        {
            name: "bipolar disorder",
            symptoms: ["Increased energy", "restlessness", 'Extreme irritability', 'Poor concentration', 'fast talking', 'sleeplessness', 'Heightened sense of self-importance', 'Increased sexual behavior', 'Abuse of drugs', 'intrusive or aggressive behavior', 'feeling of Sadness', 'anxiety', 'hopelessness and guilt',
                     'Loss of interest','or pleasure in activities once enjoyed', 'Decreased energy', 'fatigue'],
            description: "Bipolar disorder is a serious mental illness that causes unusual shifts in mood, ranging from extreme highs (mania or “manic” episodes) to lows (depression or “depressive” episode). A person who has bipolar disorder also experiences changes in their energy, thinking, behavior, and sleep"       

           
        }
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

    // Tracking form submission
    const trackingForm = document.getElementById('tracking-form');
    const trackingResult = document.getElementById('tracking-result');

    trackingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const sleep = document.getElementById('sleep').value;
        const stress = document.getElementById('stress').value;
        const mood = document.getElementById('mood').value;

        const today = new Date().toLocaleDateString();

        let trackingData = JSON.parse(localStorage.getItem('trackingData')) || [];
        trackingData.push({ date: today, sleep, stress, mood });
        localStorage.setItem('trackingData', JSON.stringify(trackingData));

        displayTrackingData(trackingData);
    });

    function displayTrackingData(data) {
        trackingResult.innerHTML = "<h3>Tracking Data</h3>";
        data.forEach(entry => {
            const entryElement = document.createElement('div');
            entryElement.className = 'tracking-entry';
            entryElement.innerHTML = `
                <p>Date: ${entry.date}</p>
                <p>Sleep: ${entry.sleep} hours</p>
                <p>Stress: ${entry.stress}/10</p>
                <p>Mood: ${entry.mood}/10</p>
            `;
            trackingResult.appendChild(entryElement);
        });
    }

    // Display existing tracking data on load
    const existingTrackingData = JSON.parse(localStorage.getItem('trackingData')) || [];
    displayTrackingData(existingTrackingData);
});

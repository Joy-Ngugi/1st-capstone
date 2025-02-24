document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('homeButton');
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});


// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("assessment-form");
//     const symptomInput = document.getElementById("symptom");
//     const resultDiv = document.getElementById("assessment-result");

//     // Symptom Database (Sample Data)
//     const symptomData = {
//         anxiety: "Anxiety is a feeling of worry, nervousness, or unease. If persistent, consider seeking professional help.",
//         insomnia: "Insomnia refers to difficulty falling or staying asleep. Relaxation techniques may help improve sleep.",
//         fatigue: "Fatigue is a state of physical and mental exhaustion. Regular rest and hydration can assist recovery.",
//         sadness: "Persistent sadness could be a sign of depression. Consider reaching out to a mental health professional.",
//         headache: "Frequent headaches may be caused by stress or dehydration. Regular breaks and hydration help.",
//     };

//     // Form Submission Event
//     form.addEventListener("submit", (event) => {
//         event.preventDefault(); // Prevent form from reloading the page

//         const userSymptom = symptomInput.value.trim().toLowerCase();

//         // Check if the symptom exists in the database
//         if (userSymptom in symptomData) {
//             resultDiv.textContent = symptomData[userSymptom];
//             resultDiv.style.color = "green";
//         } else {
//             resultDiv.textContent = "Symptom not recognized. Please consult a healthcare professional.";
//             resultDiv.style.color = "red";
//         }

//         // Clear input field after assessment
//         symptomInput.value = "";
//     });
// });

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("assessment-form");
    const symptomInput = document.getElementById("symptom");
    const resultDiv = document.getElementById("assessment-result");

    // Form Submission Event
    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent form from reloading the page

        const userSymptom = symptomInput.value.trim();
        console.log("Symptom entered:", userSymptom);

        if (!userSymptom) {
            resultDiv.textContent = "Please enter a symptom.";
            resultDiv.style.color = "red";
            return;
        }

        
        searchSymptomOnGoogle(userSymptom);

        
        symptomInput.value = "";
    });

    
    async function searchSymptomOnGoogle(symptom) {
        try {
            
            const searchQuery = `https://www.google.com/search?q=${encodeURIComponent(symptom + " mental health")}`;
            
            
            resultDiv.innerHTML = `
                <p>Click the link below to view more details on Google:</p>
                <a href="${searchQuery}" target="_blank">Search "${symptom}" on Google</a>
            `;

        } catch (error) {
            resultDiv.textContent = "Error fetching results. Please try again.";
            console.error("Error fetching Google search:", error);
        }
    }
});

// Symptom-to-page mapping
const symptomToPage = {
    "depersonalization": "dpdr.html",
    "derealization": "dpdr.html",
    "anxiety": "anxiety.html",
    "depression": "depression.html",
    "insomnia": "insomnia.html"
};

// Function to handle symptom input
function handleSymptom() {
    const symptomInput = document.getElementById("symptom").value.toLowerCase();

    // Check if symptom matches a page
    const matchedPage = Object.keys(symptomToPage).find(symptom =>
        symptom.includes(symptom)
    );

    if (matchedPage) {
        // Redirect to the corresponding page
        window.location.href = symptomToPage[matchedPage];
    } else {
        alert("Symptom not found. Please try again.");
    }
}


document.getElementById("button1").addEventListener("click", handleSymptom);

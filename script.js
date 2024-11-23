let currentCarouselIndex = 0;
const carousels = document.querySelectorAll('.carousel');

function moveCarousel(step) {
    carousels[currentCarouselIndex].classList.remove('active');
    currentCarouselIndex += step;
    if (currentCarouselIndex < 0) currentCarouselIndex = carousels.length - 1;
    if (currentCarouselIndex >= carousels.length) currentCarouselIndex = 0;
    carousels[currentCarouselIndex].classList.add('active');
}

// Constants for emission factors
const EMISSION_FACTORS = {
    electricity: 0.85,  // kg CO2/kWh
    water: 0.15,        // kg CO2/liter
    car: 0.25,          // kg CO2/km
    domestic: 0.2,  // kg CO2 per km for domestic flights (200 grams)
    international: 0.32,  // kg CO2 per km for international flights (320 grams)
    car: 0.01,  // kg CO2 per km for driving (10 grams)
    train: 0.02,  // kg CO2 per km for train (20 grams)
    domesticFlight: 0.2, 
    water: 0.0025, // kg CO2 per international flight (per trip)         // kg CO2/km
};

const TRAVEL_FREQUENCY = {
    monthly: 12, // 12 trips per year
    quarterly: 4, // 4 trips per year
    annually: 1, // 1 trip per year
    rarely: 1, // Assuming 1 trip every 2 years
    never: 0, // No trips
    occasionally: 2, // 2 trips per year
    multiple: 6 // 6 trips per year (for "multiple" international trips)
};

// Utility functions to calculate individual footprints
function calculateElectricityFootprint(consumption) {
    const consumptionMapping = {
        '0-100': 100,
        '101-200': 150,
        '201-300': 250,
        '300+': 350
    };
    return (consumptionMapping[consumption] || 0) * EMISSION_FACTORS.electricity * 12;
}

function calculateFoodFootprint(meat, dairy) {
    const meatMapping = { daily: 1500, weekly: 700, occasionally: 300, never: 0 };
    const dairyMapping = { daily: 500, weekly: 200, occasionally: 100, never: 0 };
    return (meatMapping[meat] || 0) + (dairyMapping[dairy] || 0);
}

function calculateTravelFootprint() {
    // Get the values from the select inputs
    const domesticTravel = document.getElementById('domesticTravel').value;
    const internationalTravel = document.getElementById('internationalTravel').value;

    const domesticTrips = TRAVEL_FREQUENCY[domesticTravel] || 0;
    const internationalTrips = TRAVEL_FREQUENCY[internationalTravel] || 0;

    // Calculate the footprint for domestic and international travel (in kg CO2)
    const domesticFootprint = domesticTrips * EMISSION_FACTORS.domestic;
    const internationalFootprint = internationalTrips * EMISSION_FACTORS.international;

    // Calculate the total footprint (in kg CO2)
    const totalFootprint = domesticFootprint + internationalFootprint;

    console.log(`Domestic Travel Footprint: ${domesticFootprint} kg CO2`);
    console.log(`International Travel Footprint: ${internationalFootprint} kg CO2`);
    console.log(`Total Travel Footprint: ${totalFootprint} kg CO2`);

    return totalFootprint*12;
}

function calculateWasteFootprint(recycling) {
    return recycling === 'yes' ? -200 : +200; // kg CO2 reduction per year
}

function calculateWaterFootprint() {
    const waterUsage = parseInt(document.getElementById("waterUsage").value, 10) || 0; // Get input value
    const waterSavingDevices = document.getElementById("waterSavingDevices").value;

    const adjustmentFactor = waterSavingDevices === "yes" ? 0.8 : 1.0; // Adjust factor for saving devices
    const waterFootprint = Math.max(0, waterUsage * EMISSION_FACTORS.water * 365 * adjustmentFactor); // Calculate footprint

    console.log(`Water Footprint: ${waterFootprint} kg CO2/year`); // Debugging output
    return waterFootprint; // Return the calculated footprint
}
// Main function to log and calculate the carbon footprint
function logFormData(event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(document.getElementById("carbonFootprintForm"));
    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Log the input data for testing
    console.log("User Inputs:", data);

    // Calculate each component of the footprint
    const energyFootprint = calculateElectricityFootprint(data.electricityConsumption);
    const foodFootprint = calculateFoodFootprint(data.meatConsumption, data.dairyConsumption);
    const waterFootprint = calculateWaterFootprint();
    const travelFootprint = calculateTravelFootprint();
    const wasteFootprint = calculateWasteFootprint(data.recyclingHabits);

    // Total carbon footprint
    const totalCarbonFootprint = energyFootprint + foodFootprint + waterFootprint + travelFootprint + wasteFootprint;

    // Log the total footprint
    console.log("Total Carbon Footprint (kg CO2 per year):", totalCarbonFootprint);
    console.log("FOOD:",foodFootprint);
    console.log("WATER:",waterFootprint);
    console.log("TRAVEL:",travelFootprint);
    console.log("WASTE:",wasteFootprint);
    console.log("ENERGY:",energyFootprint)

    // Update Results Section
    document.getElementById('resultsSection').style.display = 'block';
    document.getElementById('totalFootprint').innerText = totalCarbonFootprint.toFixed(2);
    document.getElementById('energyFootprint').innerText = energyFootprint.toFixed(2);
    document.getElementById('foodFootprint').innerText = foodFootprint.toFixed(2);
    document.getElementById('waterFootprint').innerText = waterFootprint.toFixed(2);
    document.getElementById('travelFootprint').innerText = travelFootprint.toFixed(2);
    document.getElementById('wasteFootprint').innerText = wasteFootprint.toFixed(2);
}

// Function to reset the form and hide results
function resetForm() {
    document.getElementById('carbonFootprintForm').reset();
    document.getElementById('resultsSection').style.display = 'none';
}


const tips = document.querySelectorAll('.tip');
let activeTipIndex = 0;

setInterval(() => {
  // Remove the active class from the current tip
  tips[activeTipIndex].classList.remove('active');
  
  // Move to the next tip
  activeTipIndex = (activeTipIndex + 1) % tips.length;
  
  // Add the active class to the new tip
  tips[activeTipIndex].classList.add('active');
}, 3000); // Change tip every 3 seconds


    async function downloadPDF() {
      const { jsPDF } = window.jspdf;

      // Capture the certificate as an image
      const certificate = document.getElementById('certificate');
      const canvas = await html2canvas(certificate);

      // Convert canvas to image
      const imgData = canvas.toDataURL('image/png');

      // Create PDF
      const pdf = new jsPDF('l', 'mm', [canvas.width * 0.264583, canvas.height * 0.264583]); // Landscape mode and dimensions in mm
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width * 0.264583, canvas.height * 0.264583);

      // Download the PDF
      pdf.save('Certificate.pdf');
    }

    function generateCertificate() {
        const name = document.getElementById("cert_name").value.trim();
        /* const footCount=totalCarbonFootprint; */
        if (!name) {
            alert("Please enter your name to generate the certificate.");
            return;
        }
    
        // Open the certificate window and inject the name into the certificate
        const certificateWindow = window.open('./cert.html', '_blank');
        certificateWindow.onload = function () {
            const certNameElement = certificateWindow.document.getElementById("cert_own");
            /* const footprintCount= certificateWindow.document.getElementById("ftp"); */
            certNameElement.textContent = name; 
           /*  footprintCount.textContent=footCount;  */// Dynamically update the name

        };
    }
    
  
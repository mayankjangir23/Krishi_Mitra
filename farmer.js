document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const cropTypeSelect = document.getElementById('cropType');
    const searchResults = document.getElementById('searchResults');

    if (searchBtn && cropTypeSelect && searchResults) {
        searchBtn.addEventListener('click', function () {
            const cropType = cropTypeSelect.value;
            if (cropType) {
                if (cropType === 'rice') {
                    // Show dummy contract for rice
                    searchResults.innerHTML = `
                        <h2>Available Contract</h2>
                        <p><strong>Crop:</strong> Rice</p>
                        <p><strong>Quantity:</strong> 500 kg</p>
                        <p><strong>Price:</strong> ₹30 per kg</p>
                        <p><strong>Total Value:</strong> ₹15,000</p>
                        <p><strong>Advance Payment:</strong> 20% (₹3,000)</p>
                        <p><strong>Delivery Date:</strong> Within 3 months</p>
                        <img src="rice.png" alt="Rice" style="max-width: 100%; height: auto; margin-top: 20px;">
                    `;
                } else {
                    searchResults.innerHTML = `<p>Searching for contracts for ${cropType}...</p>`;
                    // Here you would typically make an API call to fetch actual contract data
                }
            } else {
                searchResults.innerHTML = '<p>Please select a crop type.</p>';
            }
        });
    }
});

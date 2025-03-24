document.addEventListener('DOMContentLoaded', function() {
    const contractForm = document.getElementById('contractForm');
    const contractDetails = document.getElementById('contractDetails');
    const cropImage = document.getElementById('cropImage');
    const quantityInput = document.getElementById('quantity');
    const priceInput = document.getElementById('price');
    const totalValueInput = document.getElementById('totalValue');
    const advancePaymentInput = document.getElementById('advancePayment');
    const advanceAmountInput = document.getElementById('advanceAmount');
    const paymentBtn = document.getElementById('paymentBtn');
    const advancePaymentBtn = document.getElementById('advancePaymentBtn');

    function calculateTotalValue() {
        const quantity = parseFloat(quantityInput.value) || 0;
        const price = parseFloat(priceInput.value) || 0;
        const totalValue = quantity * price;
        totalValueInput.value = totalValue.toFixed(2);
    }

    function calculateAdvanceAmount() {
        const totalValue = parseFloat(totalValueInput.value) || 0;
        const advancePercentage = parseFloat(advancePaymentInput.value) || 0;
        const advanceAmount = (totalValue * advancePercentage) / 100;
        advanceAmountInput.value = advanceAmount.toFixed(2);
    }

    quantityInput.addEventListener('input', calculateTotalValue);
    priceInput.addEventListener('input', calculateTotalValue);
    advancePaymentInput.addEventListener('input', calculateAdvanceAmount);

    if (contractForm && contractDetails && cropImage) {
        contractForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const cropType = document.getElementById('cropType').value;
            const quantity = quantityInput.value;
            const price = priceInput.value;
            const totalValue = totalValueInput.value;
            const advancePayment = advancePaymentInput.value;
            const advanceAmount = advanceAmountInput.value;
            const deliveryDate = document.getElementById('deliveryDate').value;

            contractDetails.innerHTML = `
                <h3>Contract Details:</h3>
                <p>Crop: ${cropType}</p>
                <p>Quantity: ${quantity} kg</p>
                <p>Price: ₹${price} per kg</p>
                <p>Total Value: ₹${totalValue}</p>
                <p>Advance Payment: ${advancePayment}%</p>
                <p>Advance Amount: ₹${advanceAmount}</p>
                <p>Delivery Date: ${deliveryDate}</p>
            `;

            if (cropType === 'rice') {
                cropImage.src = 'rice.png';
                cropImage.style.display = 'block';
            } else {
                cropImage.style.display = 'none';
            }
        });
    }

    paymentBtn.addEventListener('click', function() {
        alert('Full payment processed successfully!');
    });

    advancePaymentBtn.addEventListener('click', function() {
        const advanceAmount = parseFloat(advanceAmountInput.value) || 0;
        alert(`Advance payment of ₹${advanceAmount.toFixed(2)} processed successfully!`);
    });
});

function calculateEMI() {
    let loanAmount = document.getElementById("loanAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let loanTenure = document.getElementById("loanTenure").value;

    let monthlyRate = (interestRate / 100) / 12;
    let numberOfPayments = loanTenure * 12;
    let emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
              (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    document.getElementById("emiResult").innerText = emi.toFixed(2);
}

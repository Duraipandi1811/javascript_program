function calculateTip() 
{
    const bill = parseFloat(document.getElementById("billAmount").value);
    const tipPercent = parseFloat(document.getElementById("tipPercent").value);
    const people = parseInt(document.getElementById("people").value) || 1;
  
    if (isNaN(bill) || isNaN(tipPercent) || bill <= 0 || tipPercent < 0 || people <= 0) 
    {
      document.getElementById("result").innerHTML = "Please enter valid values.";
      return;
    }
  
    const tip = (bill * tipPercent) / 100;
    const total = bill + tip;
    const perPerson = total / people;
  
    document.getElementById("result").innerHTML = `
      Tip: $${tip.toFixed(2)}<br/>
      Total: $${total.toFixed(2)}<br/>
      Per Person: $${perPerson.toFixed(2)}
    `;
  }
  
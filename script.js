function generatePlan(){

  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let goal = document.getElementById("goal").value;

  if(age == "" || weight == "" || height == "" || goal == ""){
    alert("Please fill all fields");
    return;
  }

  // BMI Calculation
  let heightMeter = height / 100;

  let bmi = weight / (heightMeter * heightMeter);

  bmi = bmi.toFixed(2);

  let bmiStatus = "";
  let color = "";

  if(bmi < 18.5){
    bmiStatus = "Underweight";
    color = "orange";
  }

  else if(bmi >= 18.5 && bmi < 24.9){
    bmiStatus = "Normal Weight";
    color = "lightgreen";
  }

  else if(bmi >= 25 && bmi < 29.9){
    bmiStatus = "Overweight";
    color = "yellow";
  }

  else{
    bmiStatus = "Obese";
    color = "red";
  }

  // Fitness Suggestions
  let suggestion = "";

  if(goal == "weightloss"){

    suggestion = `
      <h3>🔥 Weight Loss Plan</h3>
      <p>• 30 mins cardio daily</p>
      <p>• Avoid junk food</p>
      <p>• Drink more water</p>
      <p>• Eat high protein meals</p>
    `;
  }

  else if(goal == "musclegain"){

    suggestion = `
      <h3>💪 Muscle Gain Plan</h3>
      <p>• Strength training 5 days/week</p>
      <p>• Increase protein intake</p>
      <p>• Sleep 8 hours daily</p>
      <p>• Progressive overload workouts</p>
    `;
  }

  else{

    suggestion = `
      <h3>🏃 Fitness Plan</h3>
      <p>• Daily stretching</p>
      <p>• Jogging 20 mins</p>
      <p>• Balanced diet</p>
      <p>• Regular workouts</p>
    `;
  }

  // Show Result
  document.getElementById("result").innerHTML = `

    <h2>Your BMI: ${bmi}</h2>

    <h3 class="status" style="color:${color}">
      Status: ${bmiStatus}
    </h3>

    ${suggestion}
  `;
}
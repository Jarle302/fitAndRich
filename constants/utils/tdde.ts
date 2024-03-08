function calculateTDEE(age, weight, height, gender, activityLevel) {
    let bmr;
  
    // Calculate BMR using the Mifflin-St Jeor Equation
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      return "Gender must be either 'male' or 'female'.";
    }
  
    // Apply the activity multiplier
    let activityMultiplier = 1.2; // Default to sedentary
    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'lightly active':
        activityMultiplier = 1.375;
        break;
      case 'moderately active':
        activityMultiplier = 1.55;
        break;
      case 'very active':
        activityMultiplier = 1.725;
        break;
      case 'super active':
        activityMultiplier = 1.9;
        break;
      default:
        return "Invalid activity level. Choose from 'sedentary', 'lightly active', 'moderately active', 'very active', or 'super active'.";
    }
  
    // Calculate TDEE
    const tdee = bmr * activityMultiplier;
    return tdee;
  }
  
  // Example usage:
  const tdee = calculateTDEE(30, 65, 165, 'female', 'moderately active');
  console.log(`Total Daily Energy Expenditure: ${tdee.toFixed(2)} calories.`);
  
// 2. 🌡 Weather Advisor
// Function:
// function isShortsWeather(temp)
// Expand it into:
// getClothingAdvice(temp, isRaining)
// getActivitySuggestion(temp)

// 👉 Concepts:
// Return values
// Multiple arguments
// Decision logic

const isShortsWeather = (temp) => {
    if(temp > 30){
        return "Wear Shorts"
    }
    else {
        return "Wear Pajamas"
    }
    
}

const getClothingAdvice = (isRaining, temp) => {
        if(isRaining === true && temp >=30 ){
            return "Carry Umbrella and wear shorts"
        }
        else if(isRaining===true && temp < 30){
            return "Carry Umbrella and wear Pajamas"
        }
        else if(isRaining === false && temp > 30){
            return "No Need for Umbrella,  you can wear shorts"
        }
        else {
            return "No Need for Umbrella, Wear Pajamas"
        }
    }
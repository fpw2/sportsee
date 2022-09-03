/**
 * Tranform datas into right format for the cards
 * @param {object} user
 * @returns object
 */
export default function userData(user) {
    const firstName = user.userInfos.firstName
    const score = user.todayScore * 100
    const calories = user.keyData.calorieCount
    const protein = user.keyData.proteinCount
    const carbs = user.keyData.carbohydrateCount
    const fat =  user.keyData.lipidCount
    
    return {firstName, score, calories, protein, carbs, fat}
}


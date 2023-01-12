import userData from "../functions/userData"
import userActivity from "../functions/userActivity"
import userAverageSessions from "../functions/userAverageSessions"
import userPerformance from "../functions/userPerformance"

/**
 * Recover fullname, age, score, calories of the user
 * @param {string} userId 
 * @returns object
 */
const fetchUser = async (userId) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`)
        const data = await response.json()
        const user = data.data
        
        return userData(user)
    }
    catch (error){
        throw error
    }

}

/**
 * Recover calories burned per day of the user
 * @param {string} userId 
 * @returns object
 */
const fetchActivity = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
    const data = await response.json()
    const user = data.data

    return userActivity(user)   
}

/**
 * Recover session duration per day of the user
 * @param {string} userId 
 * @returns object
 */
const fetchAverageSessions = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    const data = await response.json()
    const user = data.data

    return userAverageSessions(user)
}

/**
 * Recover cardio, energy, endurance, strength, speed, intensity of the user
 * @param {string} userId 
 * @returns object
 */
const fetchPerformance = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
    const data = await response.json()
    const user = data.data

    return userPerformance(user)
}

export {fetchUser, fetchActivity, fetchAverageSessions, fetchPerformance}






import mockUserMainData from "../mocks/mockUserMainData.json"
import mockUserActivity from "../mocks/mockUserActivity.json"
import mockUserAverageSessions from "../mocks/mockUserAverageSessions.json"
import mockUserPerformance from "../mocks/mockUserPerformance.json"
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
        const user = mockUserMainData.find(user => user.id === userId)
        return userData(user)
}

/**
 * Recover calories burned per day of the user
 * @param {string} userId 
 * @returns object
 */
const fetchActivity = async (userId) => {
        const user = mockUserActivity.find(user => user.userId === userId)
        return userActivity(user)
}

/**
 * Recover session duration per day of the user
 * @param {string} userId 
 * @returns object
 */
const fetchAverageSessions = async (userId) => {
        const user = mockUserAverageSessions.find(user => user.userId === userId)
        return userAverageSessions(user)
}

/**
 * Recover cardio, energy, endurance, strength, speed, intensity of the user
 * @param {string} userId 
 * @returns object
 */
const fetchPerformance = async (userId) => {
        const user = mockUserPerformance.find(user => user.userId === userId) 
        return userPerformance(user)
}

export {fetchUser, fetchActivity ,fetchAverageSessions, fetchPerformance }
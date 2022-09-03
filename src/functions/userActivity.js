/**
 * Tranform datas of activity into right format for the graph
 * @param {object} user
 * @returns object
 */
export default function userActivity(user) {
    const data = user.sessions.map((session,index) => {
        return {
            day: index + 1,
            kilogram: session.kilogram,
            calories: session.calories
        }
    })
    
    return data     
}

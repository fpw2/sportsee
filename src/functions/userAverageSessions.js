/**
 * Tranform datas of average sessions into right format for the graph
 * @param {object} user
 * @returns object
 */
export default function userAverageSessions(user) {
    const day = {1:"L",2:"M",3:"M",4:"J",5:"V",6:"S",7:"D"}
    let data = JSON.parse(JSON.stringify(user.sessions))
    data = data.map(session => {
            session.day = day[session.day]
            return session
    })

    return data
}
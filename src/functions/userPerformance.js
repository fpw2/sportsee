/**
 * Tranform datas of performance into right format for the graph
 * @param {object} user
 * @returns object
 */
export default function userPerformance(user) {
    const data = user.data.map(data => {
        return {
            value: data.value,
            kind: user.kind[data.kind],
        }
    })

    return data.reverse()
}
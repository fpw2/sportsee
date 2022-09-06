/**
 * Tranform datas of performance into right format for the graph
 * @param {object} user
 * @returns object
 */
export default function userPerformance(user) {
    const abilities = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"]
    const data = user.data.map(data => {
        console.log(data.kind)
        return {
            value: data.value,
            kind: abilities[data.kind - 1],
            // kind: user.kind[data.kind],
        }
    })
    console.log(data)
    
    
    // reverse() : inverse l'ordre des données
    return data.reverse()
}
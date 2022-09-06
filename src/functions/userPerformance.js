/**
 * Tranform datas of performance into right format for the graph
 * @param {object} user
 * @returns object
 */
export default function userPerformance(user) {
    const language = "fr"
    const abilitiesFr = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"]
    const data = user.data.map(data => {
        if(language === "fr"){
            return {
                value: data.value,
                kind: abilitiesFr[data.kind - 1],
            }
        }else if(language === "en"){
            return {
                value: data.value,
                kind: user.kind[data.kind],
            }
        }
        return null
    })
    
    // reverse() : inverse l'ordre des données
    return data.reverse()
}
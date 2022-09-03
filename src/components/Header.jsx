/**
 * Display the header of the dashboard
 * @param {string}  
 * @returns html
 */
export default function Header({firstName}) {
    return (<>
        <h1 className="header">Bonjour <span className="firstName">{firstName}</span></h1>
        <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </>)
}
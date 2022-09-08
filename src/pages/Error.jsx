/**
 * Display the error page for a bad url
 * @returns null
 */
export default function Error() {
    return (
    <div className="error">
        <p className="error-title">404</p>
        <h2 className="error-describe">
            Oups! La page que vous demandez n'existe pas.
        </h2>
    </div>
    )
}
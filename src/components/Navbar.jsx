import Logo from "./Logo";

/**
 * Display the horizontal menu
 */
export default function Navbar() {
    return (
    <div className="navbar-header">
        <Logo />
        <nav className="navbar">
            <ul>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </nav>
    </div>
    )
}
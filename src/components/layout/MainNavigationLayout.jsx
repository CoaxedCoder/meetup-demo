import { Link } from "react-router-dom";
import classes from './MainNavigationLayout.module.css'

export default function MainNavigationLayout() {
    return (
        <header className = {classes.header}>
            <div className = {classes.logo}>
                React Meetups
            </div>
            <nav>
                <ul className>
                    <li>
                        <Link to = '/'>All Mettups</Link>
                    </li>
                      <li>
                        <Link to = '/new-meetup'>New Mettup</Link>
                    </li>
                      <li>
                        <Link to = '/favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

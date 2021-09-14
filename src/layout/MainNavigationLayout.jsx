import { Link } from "react-router-dom";

export default function MainNavigationLayout() {
    return (
        <header>
            <div>
                React Meetups
            </div>
            <nav>
                <ul>
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

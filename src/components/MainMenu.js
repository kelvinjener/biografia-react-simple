import { Link } from "react-router-dom"
import { MainMenuContainer } from "../styles/MainMenuContainer"

export const MainMenu = () => (
    <MainMenuContainer>
        <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/description">Descrição</Link></li>
        </ul>
    </MainMenuContainer>
);
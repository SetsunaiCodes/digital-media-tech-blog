import { Button } from "@/components/ui/button"
import "./Footer.css"
import { FaCode, FaGithub } from "react-icons/fa";


export default function Footer(){
    return(
        <footer>
            <Button variant="outline" size="icon">
                    <a href="https://nico-puelacher-dev.vercel.app/" target="_blank"><FaCode className="nav-icon"/></a>
                </Button>
                <Button variant="outline" size="icon">
                    <a href="https://github.com/SetsunaiCodes" target="_blank"><FaGithub className="nav-icon"/></a>
                </Button>
        </footer>
    )
}
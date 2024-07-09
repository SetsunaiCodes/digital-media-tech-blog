import { FaCode, FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import "./Navbar.css"


export default function Navbar(){
    return(
       <nav>
            <div className="nav-branding-group">
               <h1 className="branding">👨🏻‍💻Digital Media Technologien - Nico Puelacher</h1>
            </div>
            <div className="nav-button-group">
                <Button variant="outline" size="icon">
                    <a href="https://nico-puelacher-dev.vercel.app/" target="_blank"><FaCode className="nav-icon"/></a>
                </Button>
                <Button variant="outline" size="icon">
                    <a href="https://github.com/SetsunaiCodes" target="_blank"><FaGithub className="nav-icon"/></a>
                </Button>
            </div>
       </nav>
    )
}
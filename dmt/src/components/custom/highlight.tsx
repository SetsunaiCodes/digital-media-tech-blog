import { ModeToggle } from "@/components/ui/themebutton";

export default function Highlight(){

    return(
        <div>

            
            {
            //TODO: Add simple Branding (2 Reihen, Ein Schloss Icon Links und dann eine Column Rechts, wo dann untereinander "Digital Media" steht oder so)
            //TODO: Statt des IMG kann da ein kleiner Container rein, wo du dich dann kurz vorstellen kannst und deine Socials verlinken kannst.
            }


            <nav className="h-8vh flex items-center p-2 bg-white dark:bg-slate-900">
                <ModeToggle/>
            </nav>
            <div className="h-60vh">
                <img className="h-60vh w-100p object-cover" src="/Header.jpeg" alt="Schloss Moyland" />
            </div>
        </div>

    )
}
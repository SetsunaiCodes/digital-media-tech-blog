import "./QuickLinks.css";

// ShadCN UI
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface QLCardsProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

export default function QuickLinks() {
    return (
        <div className="quick-link-container">
            <QLCards
                image="/FigmaLogo.jpeg"
                title="Erster Figma Prototyp"
                description="Der erste Figma Prototyp, den wir auch dem Schloss Moyland präsentieren konnten."
                link="https://www.figma.com/design/PAUjy91WIjkzKzML0z1msV/App?node-id=0-1&t=0CoXhrRvnAph6Wll-1"
            />
            <QLCards
                image="/FigmaLogo.jpeg"
                title="Figma Prototyp Redesign"
                description="Der Figma Prototyp meines Redesigns, den wir ebenfalls in die Abschlusspräsentation einbringen konnten."
                link="https://www.figma.com/design/caMPntHFITZkKUX9F24rqe/Redesign-Moyland?node-id=0-1&t=NyG5ilneluUBKKNm-1"
            />
            <QLCards
                image="/Whiteboard.jpeg"
                title="Verwendungskontexte"
                description="Ein Microsoft Whiteboard, das wir dazu benutzt haben unseren Verwendungskontext, sowie die Präsentationsfunktion zu definieren."
                link="https://wbd.ms/share/v2/aHR0cHM6Ly93aGl0ZWJvYXJkLm1pY3Jvc29mdC5jb20vYXBpL3YxLjAvd2hpdGVib2FyZHMvcmVkZWVtLzU4OWU2YmJjZjFkMzQzMzliYmExMjVjZmRkZDlmMDc4X0JCQTcxNzYyLTEyRTAtNDJFMS1CMzI0LTVCMTMxRjQyNEUzRF8xM2UwMWY3Mi0zNDUyLTQ2N2EtYWViNS01ZjY1Nzc5NmU1Mjk="
            />
            <QLCards
                image="/Whiteboard.jpeg"
                title="Erstes Layout"
                description="Ein Microsoft Whiteboard über unsere erste Konzeption der Anwendunung."
                link="https://wbd.ms/share/v2/aHR0cHM6Ly93aGl0ZWJvYXJkLm1pY3Jvc29mdC5jb20vYXBpL3YxLjAvd2hpdGVib2FyZHMvcmVkZWVtLzMzOTVmYTEyN2FhMzQ0OWQ5YzAwMzcxNGEyN2I0MDgzX0JCQTcxNzYyLTEyRTAtNDJFMS1CMzI0LTVCMTMxRjQyNEUzRF85MTQ3NmM5MC0xNGM3LTRkYmYtYWNiMS00OGJjM2JlZjBjMjY="
            />
            <QLCards
                image="/Whiteboard.jpeg"
                title="User Stories"
                description="Ein Microsoft Whiteboard über unsere erste Konzeption der Anwendunung."
                link="https://wbd.ms/share/v2/aHR0cHM6Ly93aGl0ZWJvYXJkLm1pY3Jvc29mdC5jb20vYXBpL3YxLjAvd2hpdGVib2FyZHMvcmVkZWVtLzMzYjExNzBiZDdhYjQ3ODI4NGU3NzhkOWMzMzMxYmQyX0JCQTcxNzYyLTEyRTAtNDJFMS1CMzI0LTVCMTMxRjQyNEUzRF82MjEwZGJjZi0yODNhLTQ3YjUtYTE4Yy0xODU5YjUxYzIwM2Q="
            />
        </div>
    );
}

function QLCards({ image, title, description, link }: QLCardsProps) {
    return (
        <Card className="ql-card">
            <a href={link} className="ql-card-link">
                <img src={image} alt={title} />
                <div>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                </div>
            </a>
        </Card>
    );
}

export default function Projects() {
    const projects = [
        {
            title: "MicroTwitter",
            githubLink: "https://github.com/WhyNaught/MicroTwitter",
            thumbnail: "/assets/image.png", // Replace with actual image URL
        },
        {
            title: "TaskFlow",
            githubLink: "https://github.com/WhyNaught/TaskFlow",
            thumbnail: "/assets/image copy.png", // Replace with actual image URL
        },
        {
            title: "Portfolio",
            githubLink: "https://github.com/WhyNaught/Portfolio",
            thumbnail: "/assets/Screenshot 2025-03-05 at 12.27.06 AM.png", // Replace with actual image URL
        }
        // Add more projects here
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>My Projects</h1>
            <ul style={{
                listStyleType: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                {projects.map((project, index) => (
                    <li key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: '20px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '10px',
                        backgroundColor: '#f9f9f9'
                    }}>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                            <img 
                                src={project.thumbnail} 
                                alt={project.title} 
                                style={{
                                    width: '300px',
                                    height: '150px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    padding: '20px'
                                }} 
                            />
                            <span style={{
                                fontSize: '18px',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                color: '#333',
                            }}>
                                {project.title}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

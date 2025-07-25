import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/Projects';

const BrowseProjectsTest = () => {
    return (
        <div>
            {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
            ))}
            <hr/>
        </div>
    )
}

export default BrowseProjectsTest;

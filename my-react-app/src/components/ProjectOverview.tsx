type ProjectType = {
    tags: string[];
    postedDate: string;
    title: string;
    description: string;
    keyRequirements: string[];
    technicalSpecs: string[];
    deliverables: string[];
};

interface Props {
    project: ProjectType;
}

export default function ProjectOverview({ project }: Props) {
    return (
        <div className="bg-white p-6 rounded-md border">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span className="bg-gray-100 px-2 py-1 rounded">{project.tags[0]}</span>
                <span className="bg-green-100 px-2 py-1 rounded">{project.tags[1]}</span>
                <span>Posted {project.postedDate}</span>
            </div>
            <h1 className="text-xl font-semibold">{project.title}</h1>
            <p className="mt-4 text-gray-700">{project.description}</p>

            <div className="mt-6 space-y-4 text-gray-700 text-sm">
                <div>
                    <h3 className="font-semibold">Key Requirements:</h3>
                    <ul className="list-disc ml-6">
                        {project.keyRequirements.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold">Technical Specifications:</h3>
                    <ul className="list-disc ml-6">
                        {project.technicalSpecs.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold">Deliverables:</h3>
                    <ul className="list-disc ml-6">
                        {project.deliverables.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

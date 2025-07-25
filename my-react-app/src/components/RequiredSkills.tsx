type Skill = {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced'; // Optional: restrict to known values
};

type Props = {
  skills: readonly  Skill[];
};

export default function RequiredSkills({ skills }: Props) {
    return (
        <div className="bg-white p-4 rounded-md border">
            <h2 className="text-md font-semibold mb-3">Required Technologies & Skills</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                    <div key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        {skill.name}
                        <span className="bg-gray-300 text-gray-700 px-2 py-0.5 text-xs rounded">
                            {skill.level}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

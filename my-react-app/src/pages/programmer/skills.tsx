import { PlusCircle, Trash2 } from 'lucide-react';
import { useState } from 'react';

type Skill = {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
};

const ManageSkills = () => {
    const [currentSkills, setCurrentSkills] = useState<Skill[]>([
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'MySQL', level: 'Intermediate' },
    ]);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTechnology, setSelectedTechnology] = useState('');
    const [selectedLevel, setSelectedLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');

    const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Mobile'];

    const technologiesByCategory: Record<string, string[]> = {
        Frontend: ['JavaScript', 'TypeScript', 'React', 'Angular', 'Vue'],
        Backend: ['Node.js', 'Python', 'Java', 'Ruby'],
        Database: ['MySQL', 'PostgreSQL', 'MongoDB'],
        DevOps: ['Docker', 'Kubernetes', 'AWS'],
        Mobile: ['React Native', 'Flutter'],
    };

    const handleAddSkill = () => {
        if (selectedTechnology && selectedLevel) {
            if (!currentSkills.some((skill) => skill.name === selectedTechnology)) {
                setCurrentSkills([...currentSkills, { name: selectedTechnology, level: selectedLevel }]);
                setSelectedTechnology('');
                setSelectedLevel('Intermediate');
            }
        }
    };

    const handleRemoveSkill = (skillName: string) => {
        setCurrentSkills(currentSkills.filter((skill) => skill.name !== skillName));
    };

    const handleUpdateLevel = (skillName: string, newLevel: Skill['level']) => {
        setCurrentSkills(
            currentSkills.map((skill) =>
                skill.name === skillName ? { ...skill, level: newLevel } : skill
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 text-black font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-10">
                {/* Header */}
                <header>
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        Manage Skills
                    </h1>
                    <p className="text-gray-600 text-sm mt-1">Add and manage your technical skills</p>
                </header>

                {/* Current Skills */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Current Skills</h2>
                    <div className="space-y-3">
                        {currentSkills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border hover:shadow-sm transition"
                            >
                                <div>
                                    <div className="text-gray-900 font-medium">{skill.name}</div>
                                    <select
                                        value={skill.level}
                                        onChange={(e) => handleUpdateLevel(skill.name, e.target.value as Skill['level'])}
                                        className="mt-1 text-sm border border-gray-300 rounded-md px-2 py-1 text-gray-700"
                                    >
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>
                                <button
                                    onClick={() => handleRemoveSkill(skill.name)}
                                    className="text-red-500 hover:text-red-700 transition"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Add New Skill */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Skill</h2>
                    <div className="space-y-4">
                        {/* Category */}
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Select Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => {
                                    setSelectedCategory(e.target.value);
                                    setSelectedTechnology('');
                                }}
                                className="w-full p-2 border border-gray-300 rounded-md text-black"
                            >
                                <option value="">Choose category</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        {/* Technology */}
                        {selectedCategory && (
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Select Technology</label>
                                <select
                                    value={selectedTechnology}
                                    onChange={(e) => setSelectedTechnology(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md text-black"
                                >
                                    <option value="">Choose technology</option>
                                    {technologiesByCategory[selectedCategory]?.map((tech) => (
                                        <option
                                            key={tech}
                                            value={tech}
                                            disabled={currentSkills.some((s) => s.name === tech)}
                                        >
                                            {tech} {currentSkills.some((s) => s.name === tech) && "(already added)"}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Proficiency */}
                        {selectedTechnology && (
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Select Level</label>
                                <div className="flex gap-6">
                                    {(['Beginner', 'Intermediate', 'Advanced'] as const).map((level) => (
                                        <label key={level} className="flex items-center gap-2 text-gray-700 text-sm">
                                            <input
                                                type="radio"
                                                name="proficiency"
                                                checked={selectedLevel === level}
                                                onChange={() => setSelectedLevel(level)}
                                            />
                                            {level}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Add Button */}
                        <div>
                            <button
                                onClick={handleAddSkill}
                                disabled={!selectedTechnology}
                                className={`flex items-center gap-2 mt-3 px-4 py-2 text-white font-medium rounded-md transition ${selectedTechnology
                                        ? 'bg-gray-800 hover:bg-gray-600'
                                        : 'bg-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <PlusCircle size={18} /> Add Skill
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ManageSkills;
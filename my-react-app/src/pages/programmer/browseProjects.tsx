// pages/BrowseProjects.tsx
import { Input } from "@/components/ui/input"
import { projects } from "@/data/Projects"
import { Listbox } from "@headlessui/react"
import { ChevronDown, Coins, Eye, Hourglass, SearchIcon, Send } from "lucide-react"
import { useState } from "react"

export default function BrowseProjects() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All categories")
  const [selectedBudget, setSelectedBudget] = useState("All budgets")
  const [selectedDuration, setSelectedDuration] = useState("All durations")

  const categories = ["All categories", ...new Set(projects.map(p => p.category))]
  const budgets = ["All budgets", ...new Set(projects.map(p => p.budget))]
  const durations = ["All durations", ...new Set(projects.map(p => p.duration))]

  const filteredProjects = projects.filter(p => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      selectedCategory === "All categories" || p.category === selectedCategory
    const matchesBudget = selectedBudget === "All budgets" || p.budget === selectedBudget
    const matchesDuration =
      selectedDuration === "All durations" || p.duration === selectedDuration

    return matchesSearch && matchesCategory && matchesBudget && matchesDuration
  })

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-1">Browse Projects</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Find projects that match your skills and interests.
      </p>

      {/* Filter Panel */}
      <div className="border rounded-md p-4 bg-white space-y-4 mb-8">
  <div className="flex items-center gap-2">
    <SearchIcon className="w-4 h-4 text-blue-500" />
    <span className="text-sm font-medium text-gray-700">Search Projects:</span>
    <Input
      type="text"
      placeholder="Search projects by title or description..."
      value={search}
      onChange={e => setSearch(e.target.value)}
      className="w-full max-w-md"
    />
  </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Dropdown
            label="Category"
            options={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
          <Dropdown
            label="Budget Range"
            options={budgets}
            value={selectedBudget}
            onChange={setSelectedBudget}
          />
          <Dropdown
            label="Duration"
            options={durations}
            value={selectedDuration}
            onChange={setSelectedDuration}
          />
        </div>
      </div>

      {/* Results */}
      <p className="text-sm mb-4 text-muted-foreground">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      <div className="space-y-6">
        {filteredProjects.map(p => (
          <div
            key={p.id}
            className="border rounded-md p-6 bg-white shadow-sm hover:shadow transition"
          >
            <h2 className="text-lg font-semibold mb-1">{p.title}</h2>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-2">
              <span className="flex items-center gap-1">
                <span className="inline-block w-4 h-4 bg-gray-300 rounded-full" />
                {p.companyName}
              </span>
              <Coins className="w-4 h-4 text-yellow-500" /><span> {p.budget}</span>
              <Hourglass className="w-4 h-4 text-blue-500" /><span> {p.duration}</span>
            </div>

            <span className="bg-gray-100 text-xs px-2 py-1 rounded mb-2 inline-block font-medium">
              {p.category}
            </span>

            <p className="text-sm mt-2 mb-4 text-gray-700">{p.description}</p>

            <div className="mb-4">
              <p className="text-sm font-medium">Required Skills:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {p.skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-gray-200 text-xs px-2 py-1 rounded font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-sm text-muted-foreground border-t pt-3 flex justify-between flex-wrap gap-3">
              <div className="flex gap-2 flex-wrap">
                <span>{p.proposals} proposals</span>
                <span>• Posted {p.postedDate}</span>
                <span>• Deadline: {p.deadline}</span>
              </div>

              <div className="flex gap-2 mt-2 sm:mt-0">
                <button className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100">
                  <Eye size={16} />
                  View Details
                </button>
                <button className="flex items-center gap-1 px-3 py-1 text-sm bg-black text-white rounded hover:bg-gray-800">
                  <Send size={16} />
                  Submit Proposal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Filter Dropdown Component
function Dropdown({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (val: string) => void
  options: string[]
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="w-full border rounded-md bg-white px-3 py-2 text-left text-sm shadow-sm flex justify-between items-center">
            {value}
            <ChevronDown size={16} />
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg border text-sm max-h-60 overflow-auto">
            {options.map(option => (
              <Listbox.Option key={option} value={option}>
                {({ active }) => (
                  <div
                    className={`px-4 py-2 cursor-pointer ${
                      active ? "bg-gray-100" : ""
                    }`}
                  >
                    {option}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}

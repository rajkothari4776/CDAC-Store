import { useState } from "react"
import { Input } from "./Input"
import { Listbox } from "@headlessui/react"
import { ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { cn } from "@/lib/utils"

const categories = ["All", "Web Application", "Mobile App", "API Development"]
const budgets = ["All", "< $1000", "$1000-$3000", "$3000-$5000", "> $5000"]
const durations = ["All", "< 1 month", "1-3 months", "3-6 months", "> 6 months"]

export function FilterBar({ onFilter }: {
  onFilter: (filters: { search: string, category: string, budget: string, duration: string }) => void
}) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [budget, setBudget] = useState("All")
  const [duration, setDuration] = useState("All")

  const handleFilter = () => {
    onFilter({ search, category, budget, duration })
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 p-4 bg-white shadow rounded-lg">
      <Input
        placeholder="Search projects..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        onBlur={handleFilter}
      />

      {[{ label: "Category", value: category, setValue: setCategory, options: categories },
        { label: "Budget", value: budget, setValue: setBudget, options: budgets },
        { label: "Duration", value: duration, setValue: setDuration, options: durations }].map((dropdown) => (
        <Listbox key={dropdown.label} value={dropdown.value} onChange={(val) => { dropdown.setValue(val); handleFilter(); }}>
          <div className="relative">
            <Listbox.Button className="w-full border px-3 py-2 rounded-md text-left flex justify-between">
              {dropdown.value}
              <ChevronUpDownIcon className="h-5 w-5 text-gray-500" />
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 w-full mt-1 bg-white shadow-md rounded-md border max-h-60 overflow-auto">
              {dropdown.options.map(option => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className={({ active }) =>
                    cn("px-4 py-2 cursor-pointer", active ? "bg-gray-100" : "")
                  }
                >
                  {option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      ))}
    </div>
  )
}

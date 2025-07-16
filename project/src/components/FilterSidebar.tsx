import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

interface FilterOption {
  name: string;
  count: number;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
}

interface FilterSidebarProps {
  filters: FilterSection[];
}

const FilterSidebar = ({ filters }: FilterSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Price', 'Brand']);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 text-gray-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
      </div>

      <div className="space-y-6">
        {filters.map((section) => (
          <div key={section.title} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="font-medium text-gray-900">{section.title}</span>
              {expandedSections.includes(section.title) ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>

            {expandedSections.includes(section.title) && (
              <div className="mt-3 space-y-2">
                {section.options.map((option) => (
                  <label key={option.name} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(option.name)}
                      onChange={() => toggleFilter(option.name)}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {option.name} ({option.count})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
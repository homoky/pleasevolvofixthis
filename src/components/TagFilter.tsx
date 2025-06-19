import { match } from "ts-pattern";
import { Tag } from "./Tag";
import { IssueType, IssuePriority, IssueScope } from "@/utils/parseIssues";

interface TagFilterProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export const TagFilter = ({
  selectedTags,
  setSelectedTags,
}: TagFilterProps) => {
  const typeLabels: Record<IssueType, string> = {
    bug: "Bug",
    feature: "Feature",
    enhancement: "Enhancement",
    design: "Design",
  };

  const priorityLabels: Record<IssuePriority, string> = {
    critical: "Critical",
    high: "High",
    medium: "Medium",
    low: "Low",
  };

  const scopeLabels: Record<IssueScope, string> = {
    infotainment: "Infotainment",
    safety: "Safety",
    drivetrain: "Drivetrain",
    climate: "Climate",
    "mobile-app": "Mobile App",
    connectivity: "Connectivity",
    interior: "Interior",
    ux: "UX",
  };

  const getTypeColor = (type: IssueType, isSelected: boolean) => {
    const baseColor = match(type)
      .with("bug", () => "bg-red-100 text-red-800")
      .with("feature", () => "bg-green-100 text-green-800")
      .with("enhancement", () => "bg-blue-100 text-blue-800")
      .with("design", () => "bg-purple-100 text-purple-800")
      .exhaustive();

    return isSelected ? `${baseColor} ring-2 ring-blue-500` : baseColor;
  };

  const getPriorityColor = (priority: IssuePriority, isSelected: boolean) => {
    const baseColor = match(priority)
      .with("critical", () => "bg-rose-500 text-white")
      .with("high", () => "bg-orange-100 text-orange-800")
      .with("medium", () => "bg-yellow-100 text-yellow-800")
      .with("low", () => "bg-teal-100 text-teal-600")
      .exhaustive();

    return isSelected ? `${baseColor} ring-2 ring-blue-500` : baseColor;
  };

  const getScopeColor = (isSelected: boolean) => {
    const baseColor = "bg-gray-100 text-gray-800";
    return isSelected ? `${baseColor} ring-2 ring-[#1C6EBA]` : baseColor;
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="mb-6 p-4 bg-gray-50 border-l-[#1C6EBA] border-l-4">
      <h3 className="text-lg font-medium mb-4">Filter by Tags</h3>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Type</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(typeLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => toggleTag(key)}
                className="transition-all hover:scale-105"
              >
                <Tag
                  className={getTypeColor(
                    key as IssueType,
                    selectedTags.includes(key)
                  )}
                >
                  {label}
                </Tag>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Priority</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(priorityLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => toggleTag(key)}
                className="transition-all hover:scale-105"
              >
                <Tag
                  className={getPriorityColor(
                    key as IssuePriority,
                    selectedTags.includes(key)
                  )}
                >
                  {label}
                </Tag>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Scope</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(scopeLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => toggleTag(key)}
                className="transition-all hover:scale-105"
              >
                <Tag className={getScopeColor(selectedTags.includes(key))}>
                  {label}
                </Tag>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedTags.length > 0 && (
        <button
          onClick={() => setSelectedTags([])}
          className="mt-4 text-sm text-[#1C6EBA] underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
};

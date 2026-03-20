import ProjectList from "@/components/project-list";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 px-4">
      <div className="max-w-screen-sm mx-auto text-lg flex flex-col gap-6 py-24">
        <ProjectList />
      </div>
    </div>
  );
}
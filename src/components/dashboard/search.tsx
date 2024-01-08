import { Input } from "@/components/ui/input"

export function Search({className}: any) {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="sm:w-[200px] md:w-[200px] lg:w-[300px]"
      />
    </div>
  )
}
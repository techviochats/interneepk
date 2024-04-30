import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InternshipSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] focus:outline-internee-theme focus:ring-internee-theme">
        <SelectValue placeholder="All Categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Cloud</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default InternshipSelect;

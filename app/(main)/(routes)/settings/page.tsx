import React from "react";
import SettingForm from "./_components/setting-form";
import { Settings, Settings2 } from "@/constant";
const SettingPage = () => {
  return (
    <div className="px-14 space-y-6 flex flex-col">
      <h1 className="text-4xl font-semibold flex items-center gap-x-2">
        <Settings className="w-10 h-10 text-internee-theme" />
        Settings
      </h1>
      <SettingForm />
    </div>
  );
};

export default SettingPage;

import React from "react";
import { HeroScroll } from "@/components/ui/hero-scroll";
import OurTaskPortal from "@/components/works/our-task-portal";
import LmsPortal from "@/components/works/lms-portal";
import CourseCreate from "@/components/works/course-create";
import JobPortal from "@/components/works/job-portal";
import InterneeFeature from "@/components/works/internee-feature";

const IntroSection = () => {
  return (
    <div className="space-y-40">
      <HeroScroll />
      <OurTaskPortal />
      {/* <LmsPortal />
      <CourseCreate />
      <JobPortal />
      <InterneeFeature /> */}
    </div>
  );
};

export default IntroSection;

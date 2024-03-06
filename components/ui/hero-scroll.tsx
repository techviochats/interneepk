
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";


export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <div className="mb-8 flex justify-center items-center ">
            <h1 className="sm:text-4xl text-2xl font-semibold sm:w-[60%] w-full text-black dark:text-white flex flex-col justify-center items-center">
              Who is internee.pk? <br />
              <span className="text-sm mt-1 leading-tight font-normal">
                The ultimate platform designed to turbocharge the IT sector in
                Pakistan! We recognize the immense potential of talented
                individuals in the country and aim to bridge the gap between
                them and the thriving IT industry. Internee.pk offers a
                comprehensive range of virtual internship opportunities
                exclusively in the IT field.
              </span>
            </h1>
          </div>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Video Editing Internship",
    designation: "/webdevelopment",
    image: "/assets/portrait-woman-customer-service-worker.jpg",
    badge: "Mentor",
  },
  {
    name: "Frontend Internship",
    designation: "/webdevelopment",
    image: "/assets/FrontEnd.jpeg",
    badge: "Mentor",
  },
  {
    name: "Cloud Computing Internship",
    designation: "/webdevelopment",
    image: "/assets/cloud.jpg",
    badge: "Mentor",
  },
  {
    name: "Graphic Designing Internships",
    designation: "/webdevelopment",
    image: "/assets/logo-designer-working-computer-desktop.jpg",
    badge: "Mentor",
  },
  {
    name: "Backend Internship",
    designation: "/webdevelopment",
    image: "/assets/BackendDevelopment.jpeg",
    badge: "Mentor",
  },
  {
    name: "Chatbot Development Internship",
    designation: "/webdevelopment",
    image: "/assets/chatbotDevelopment.jpeg",
    badge: "Mentor",
  },
  {
    name: "Mobile App Development Internship",
    designation: "/webdevelopment",
    image: "/assets/app.jpeg",
    badge: "Mentor",
  },
  {
    name: "Digital Marketing Internship",
    designation: "/webdevelopment",
    image: "/assets/marketing-assistant.jpg",
    badge: "Mentor",
  },
  {
    name: "Cyber Security Intership",
    designation: "/webdevelopment",
    image: "/assets/hack.jpeg",
    badge: "Mentor",
  },
  {
    name: "Machine Learning Internship",
    designation: "/webdevelopment",
    image: "/assets/Machine-Learning.jpeg",
    badge: "Mentor",
  },
  {
    name: "Technical Writing Internship",
    designation: "/webdevelopment",
    image: "/assets/young-woman-teaching-english-lessons.jpg",
    badge: "Mentor",
  },
  {
    name: "Devops Internship",
    designation: "/webdevelopment",
    image: "/assets/DataScience.jpeg",
    badge: "Mentor",
  },
];

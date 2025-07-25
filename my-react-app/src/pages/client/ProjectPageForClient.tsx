import React from "react";
import ProjectCard from "../../components/Client/ProjectCardForClient";

const ProjectsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ProjectCard
        title="E-commerce Website for Electronics Store"
        category="E-commerce"
        budget="45,000 – 65,000"
        duration="45 days"
        proposals={12}
        description="Need a complete online store with product catalog, shopping cart, payment gateway integration, and admin panel."
        assignedTo="Priya Sharma"
        status="In Progress"
        postedDate="1/20/2024"
        deadline="3/15/2024"
        showManage={true}
      />

      <ProjectCard
        title="Mobile App for Restaurant Management"
        category="Mobile Apps"
        budget="80,000 – 1,20,000"
        duration="60 days"
        proposals={8}
        description="Develop a mobile application for restaurant management including order management, inventory tracking, and customer management."
        status="Open for Proposals"
        postedDate="1/18/2024"
        deadline="4/1/2024"
      />
    </div>
  );
};

export default ProjectsPage;

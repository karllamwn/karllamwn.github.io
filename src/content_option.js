const logotext = "KARL";
const meta = {
    title: "Karl Lam",
    description: "I’m Karl Lam, a Master of Architecture student and Architectural Graduate.",
};

const introdata = {
    title: "I’m Karl Lam",
    animated: {
        first: "I am an Architecture Student",
        second: "I design spaces",
        third: "I create 3D visualizations",
    },
    description: "Educated in the UK and with professional experience in Hong Kong, I am currently a 3rd-year M.Arch student at UBC SALA. I bring an adaptable and thoughtful perspective shaped by varied educational and professional contexts.",
    your_img_url: "/image/Homepage/hero_image.jpg", // Image size is often dynamic, but Unsplash images can be any size. The container usually controls display size.
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Master of Architecture graduate from UBC SALA (2026), with 3 years of practice experience across Aedas, ALKF+, and Atelier Pacific in Hong Kong, delivering large-scale retail, healthcare, and alteration-and-addition projects. UK-trained at Newcastle (BA in Architecture and Urban Planning), bringing a cross-cultural perspective shaped by Asia and North America. Currently, I am focused on integrating AI-augmented design workflows to optimize early-stage design for commercial delivery with a thoughtful and collaborative approach.",
};
const education = [    {
        title: "Master of Architecture",
        where: "The University of British Columbia",
        date: "2023 - 2026",
    },
    {
        title: "Bachelor of Architecture and \nUrban Planning",
        where: "Newcastle University",
        date: "2016 - 2019",
        description: "Major: Architecture and Urban Planning",
    },
];

const worktimeline = [{
        jobtitle: "Architectural Graduate",
        where: "Aedas Ltd. (Hong Kong)",
        date: "2021 - 2023",
    },
    {
        jobtitle: "Year-out Architectural Trainee",
        where: "ALKF+ (Hong Kong)",
        date: "2020 - 2021",
    },
    {
        jobtitle: "Assistant Designer",
        where: "Atelier Pacific Ltd. (Hong Kong)",
        date: "2019 - 2020",
    },
    {
        jobtitle: "Architectural Intern",
        where: "Sensearchitects Ltd. (Hong Kong)",
        date: "2017",
    },
];

const skills = [{
        name: "Rhino / Grasshopper",
        value: 90,
    },
    {
        name: "AutoCAD",
        value: 90,
    },
    {
        name: "Adobe Suite (Ps, Ai, Id)",
        value: 90,
    },
    {
        name: "Revit",
        value: 85,
    },
    {
        name: "SketchUp",
        value: 80,
    },
    {
        name: "Enscape / V-ray",
        value: 80,
    },
    {
        name: "Premiere Pro",
        value: 70,
    },
];

const services = [{
        title: "Architectural Design",
        description: "Comprehensive design development from feasibility studies to construction details, ensuring clarity and creativity in every project.",
    },
    {
        title: "3D Modeling & Visualization",
        description: "Creating detailed 3D models and high-quality renderings using Rhino, Revit, and V-ray to visualize design concepts effectively.",
    },
    {
        title: "Project Coordination",
        description: "Coordinating with clients and contractors to ensure design processes stay on track and meet project requirements.",
    },
];

const dataportfolio = [
    {
        img: "/image/Who Design/TopImage.jpg",
        description: "Who Design (2026)",
        link: "/portfolio/who-design",
    },
    {
        img: "/image/Soak Up the Atmosphere/Thumbnail.jpg",
        description: "Soak Up the Atmosphere (2026)",
        link: "/portfolio/soak-up-the-atmosphere",
    },
    {
        img: "/image/Concept C/ConceptC_logo_new.jpg",
        description: "Concept C (2025)",
        link: "/portfolio/concept-c",
    },
    {
        img: "/image/Cork/thumbnail.jpg",
        description: "The Block (2025)",
        link: "/portfolio/the-block",
    },
    {
        img: "/image/Museum of Emotion/Thumbnail.jpg",
        description: "Museum of Emotion (2025)",
        link: "/portfolio/museum-of-emotion",
    },
    {
        img: "/image/Cocoon/Thumbnail.jpg",
        description: "The Cocoon (2024)",
        link: "/portfolio/the-cocoon",
    },
    {
        img: "/image/Lungomare strip/project_thumbnail.jpg",
        description: "Lungomare (S)trip (2024)",
        link: "/portfolio/lungomare-strip",
    },
    {
        img: "/image/Lighting Park/project_thumbnail.jpg",
        description: "Lighting Park (2024)",
        link: "/portfolio/lighting-park",
    },
    {
        img: "/image/Spine/Thumbnail.jpg",
        description: "The Spine (2024)",
        link: "/portfolio/the-spine",
    },
    {
        img: "/image/Megabox/Thumbnail.jpg",
        description: "Megabox (2023)",
        link: "/portfolio/megabox",
    },
    {
        img: "/image/Laundromat/Thumbnail.jpg",
        description: "The Laundromat (2023)",
        link: "/portfolio/the-laundromat",
    },
    {
        img: "/image/Langham Place/Thumbnail.jpg",
        description: "Langham Place (2022)",
        link: "/portfolio/langham-place",
    },
    {
        img: "/image/HASSC/Thumbnail.jpg",
        description: "HASSC (2022)",
        link: "/portfolio/hassc",
    },
    {
        img: "/image/Ideal/Thumbnail.jpg",
        description: "The Ideal (2019)",
        link: "/portfolio/the-ideal",
    },
    {
        img: "/image/Radication/Thumbnail.jpg",
        description: "字駅 Radic-a-tion (2019)",
        link: "/portfolio/radic-a-tion",
    },
];

const projects = [
    {
        id: "who-design",
        title: "Who Design",
        subtitle: "Multi-Agent AI for Schematic Design Negotiation",
        date: "2026",
        time: "Sep. 2025 - Apr. 2026",
        projectType: "Master's Thesis",
        location: "Vancouver, Canada",
        workType: "Individual Work\nPart 1 Mentor: Matthew Soules\nPart 2 Supervisor: Xun Liu",
        description: "Architecture is not the work of a single mind. Every building emerges from invisible negotiations between structure and cost, daylight and form, code and program. Yet the computational tools of the past two decades have treated design as a single body optimizing for a brief, collapsing this multiplicity into one voice.\n\nThis thesis explores the paradigm of multi-agent negotiation. Using artificial intelligences to represent the disciplines that surround the architect, deliberate, disagree, and resolve the parameters of a building round by round. Through ArchSim, a generative design collaborator grounded in real engineering data, this project proposes a new workflow for schematic design in order to make the invisible negotiation between architects, consultants, and machines visible, transparent, and auditable.",
        video: "/videos/who-design-demo.mp4",
        img: "/image/Who Design/TopImage.jpg",
        images: [
            { img: "/image/Who Design/01_Choices.jpg", caption: "" },
            { img: "/image/Who Design/05_DataGrounding.png", caption: "" },
            { img: "/image/Who Design/03_SystemOverview.png", caption: "" },
            { img: "/image/Who Design/04_MultiAgent.png", caption: "" },
            { img: "/image/Who Design/02_Workflow.png", caption: "" },
            { img: "/image/Who Design/06_NegotiationRound.png", caption: "" },
            { img: "/image/Who Design/08_WorkspaceUI.png", caption: "" },
            { img: "/image/Who Design/09_Surveillance.png", caption: "" },
            { img: "/image/Who Design/07_RealTimeSimulation.jpg", caption: "" },
            { img: "/image/Who Design/10_DesignOutcome.jpg", caption: "" },
            { img: "/image/Who Design/11_EvolutionChart.jpg", caption: "" },
            { img: "/image/Who Design/12_RationaleLog.jpg", caption: "" },
        ],
    },
    {
        id: "soak-up-the-atmosphere",
        title: "Soak Up the Atmosphere",
        subtitle: "Competition",
        date: "2026",
        time: "Mar. 2026",
        projectType: "Architectural Competition",
        location: "Kitsilano Beach, Vancouver, Canada",
        workType: "Collaborate with Amo Chou and Edriane Maglinte",
        description: "Located at Kitsilano Pool in Vancouver—the longest swimming pool in North America—this competition entry reimagines a site at risk of becoming a 'non-place' (Marc Augé) when the beach is closed due to E. coli advisories and the pool shutters outside summer months. Responding to the exclusionary history of swimming culture, often bounded by ticketed gates that can be bypassed with wealth, the project asks: what if we deconstruct the ways we hold, contain, and envision water itself? The installation activates at dusk, synchronized with the automated street lights along Kitsilano Beach, and indicates the varying abundance of rain in the city as the source of its steam. Glass wall panels chilled by the ocean breeze democratize access to water in the form of vapour and harness the condensation process to form water droplets onto the beach. The street lights become the skeletal structure of the steam, an architecture the public swims through at and after dark. Acting as a liminal space between the commercial strip at Cornwall Avenue and the beach, Soak Up the Atmosphere revives a collective memory amidst the threats that prevent a thriving nightlife culture in Vancouver—creating an alternative to conventional swimming where the blurring of sightlines under low-light conditions heightens the tactile experience of the ground material and the lightness of water itself.",
        video: "",
        img: "/image/Soak Up the Atmosphere/TopImage.jpg",
        images: [
            {
                img: "/image/Soak Up the Atmosphere/Misty_Per.jpg",
                caption: "",
            },
            {
                img: "/image/Soak Up the Atmosphere/Glass_Shower_Per.jpg",
                caption: "",
            },
            {
                img: "/image/Soak Up the Atmosphere/Section.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "concept-c",
        title: "Concept C",
        subtitle: "AI-Powered Carbon Evaluation Platform",
        date: "2025",
        time: "Sep. 2025 - Dec. 2025",
        projectType: "Architectural Workflow Prototype",
        location: "Vancouver, Canada",
        workType: "Collaborate with Amo Chou,\nKelvin Han, and Dorothy He\nTutor: Xun Liu",
        description: "Concept C represents a paradigm shift in architectural design workflows, addressing the critical need for carbon accountability in the early design stages. Developed as a collaborative studio project, this AI-powered platform redefines how architects assess and mitigate carbon impact. By integrating real-time carbon evaluation directly into the creative process, Concept C empowers designers to make data-driven decisions that prioritize sustainability without compromising aesthetic or functional integrity. The tool bridges the gap between technical analysis and creative intuition, offering instantaneous feedback on embodied carbon implications as form and material choices evolve.",
        video: "/videos/video.mp4", // Path to your video in public folder
        img: "https://picsum.photos/1200/600/?grayscale",
        images: [
            {
                img: "/image/Concept C/AI_Tool_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/Concept C/AI_Tool_Dia2.jpg",
                caption: "",
            },
            {
                img: "/image/Concept C/Arch540_Current_Workflow.jpg",
                caption: "",
            },
            {
                img: "/image/Concept C/Importance_of_Material_Analysis.jpg",
                caption: "",
            },
            {
                img: "/image/Concept C/Arch540_Future_Workflow.jpg",
                caption: "",
            },
            {
                img: "/image/Concept C/Prototype_Workflow_Diagram.png",
                caption: "",
            },
            {
                img: "/image/Concept C/ARCH540-applogic_3D_architrace.jpg",
                caption: "",
                link: "https://architrace-final-431015735923.us-west1.run.app",
            },
            {
                img: "/image/Concept C/ARCH540-applogic_3D_archidraft.jpg",
                caption: "",
                link: "https://copy-of-archidraft-3d-final-431015735923.us-west1.run.app",
            },
            {
                img: "/image/Concept C/ARCH540-applogic_archiestimator.png",
                caption: "",
                link: "https://archiestimatoru-final-431015735923.us-west1.run.app",
            },
        ],
    },
    {
        id: "the-block",
        title: "The Block",
        subtitle: "",
        date: "2025",
        time: "Jan. 2025 - Apr. 2025",
        projectType: "Architectural Design",
        location: "Vancouver, Canada",
        workType: "Collaborate with Cheryl Wong\nTutor: Matthieu Grady and\nJason Heinrich",
        description: "Located on Granville Island, 'The Block' acts as a physical and acoustic buffer between the site's louder public zones and quieter working areas. The design employs a solid-and-void strategy where a compact mass absorbs sound while carved voids introduce daylight and circulation. A public-to-private gradient organizes the program: event and maker spaces at the base, ascending to galleries, classrooms, and quiet design studios. Cork is utilized as the primary façade material for its superior acoustic absorption and thermal insulation properties. Integrated with passive strategies like natural ventilation and exposed timber structure, the building creates a resilient, comfortable environment that responds to the sensory dynamics of its industrial context.",
        video: "", 
        img: "/image/Cork/TopImage.jpg",
        images: [
            {
                img: "/image/Cork/site_analysis.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/Parti.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/Context-Plan.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/ALL_PLAN.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/Section.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/elevation.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/ESAC_Section.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/SectionPer_Edited.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/ISO.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/material_assembly.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/material_assembly_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/Image3.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/Staircase.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/Staircase_Detail.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/Image2.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/per1.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/per2.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/per3.jpg",
                caption: "",
            },
            {
                img: "/image/Cork/Image.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "the-spine",
        title: "The Spine",
        subtitle: "",
        date: "2024",
        time: "Sep. 2024 - Dec. 2024",
        projectType: "Urban Design",
        location: "Vancouver, Canada",
        workType: "Individual Work\nTutor: Inge Roecker",
        description: "Located in False Creek South, this project reimagines the area's potential through a mixed-use artist community. Informed by an analysis of land ownership, housing types, and flood data, the design focuses on the middle section of Site D, proposing a transition from single-family homes to integrated mid-rise and high-rise structures with internal courtyards and communal spaces. The concept evolves from a 'picture frame' connection between False Creek and downtown Vancouver into a vibrant community hub. Key features include two-story residential lofts and workshops, a three-story gallery with a café and retail, an event amphitheater, and a rooftop playground. The zoning strategy defines clear frontage, furnishing, and shared zones, with a slender planter creating community seating that preserves the site's axis and a ramp linking the amphitheater to the rooftop.",
        video: "", 
        img: "/image/Spine/TopImage.jpg",
        images: [
            {
                img: "/image/Spine/Site_Analysis.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/Hidden_Delight.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/Vision_Collage.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/Concept_Collage.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/Concept_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/Future_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/Parti.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/Design_Collage.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/ISO2.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/ISO.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/Programme.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/GF.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/1F.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/per2.jpg",
                caption: "",
            },
            {
                img: "/image/Spine/per3.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "the-cocoon",
        title: "The Cocoon",
        subtitle: "",
        date: "2024",
        time: "Jan. 2024 - Apr. 2024",
        projectType: "Architectural Design",
        location: "Vancouver, Canada",
        workType: "Collaborate with Amo Chou\nTutor: Matthew Soules",
        description: "This project is the culmination of a three-part exploration into architectural form, light, and experience. It began with an analysis of the Vancouver Central Library, where we studied the relationship between building and wall, using sketch models to understand the 'rules of the game' regarding mass, void, and inhabited walls. Next, we analyzed Therme Vals to understand how lighting apertures sculpt space and create sensory experiences. Finally, applying these insights, we designed 'The Cocoon' on a residential site in Grandview Woodland, East Vancouver. The design features a protective inhibition wall that wraps around the main block, creating a quiet transition from the street. Strategically placed apertures control light to foster a calming atmosphere suitable for a spa. The journey guides visitors through a peaceful exterior, into a welcoming reception, up a grand staircase, and into distinct indoor and outdoor spa experiences, offering a hidden sanctuary for the community.",
        video: "", 
        img: "/image/Cocoon/TopImage.jpg",
        images: [
            {
                img: "/image/Cocoon/Part1.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/Part1_Exploration.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/Part1_Model.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/Part2.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/Part2_Model.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/Prototype_Model.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/Sun_Analysis.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/Diagram.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/GF.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/1F.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/Section.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/Final_Model.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/per2.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/per3.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/per4.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/per5.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/per6.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/per7.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/per8.jpg",
                caption: "",
            },
            {
                img: "/image/Cocoon/per9.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "the-laundromat",
        title: "The Laundromat",
        subtitle: "",
        date: "2023",
        time: "Sep. 2023 - Dec. 2023",
        projectType: "Architectural Design",
        location: "Vancouver, Canada",
        workType: "Individual Work\nTutor: Nelly Goodarzi",
        description: "This project, located in the Mount Pleasant neighbourhood of Vancouver, reimagines the laundromat as a vibrant community hub. Situated on Main Street, the design responds to the need for spaces that not only serve functional necessities but also foster social connection. The concept transforms the mundane routine of laundry into an opportunity for interaction, collaboration, and relaxation. By analyzing different washing cycles—speed wash (15 mins), normal wash (30 mins), and heavy wash (60+ mins)—the program integrates tailored amenities for diverse users. Short-term visitors like student travelers can grab essentials and coffee; mid-term users like startup workers can utilize reading corners; and long-term residents can engage in the common hall or gym. The Laundromat thus becomes a dynamic social anchor, connecting temporary and stable residents through shared daily rituals.",
        video: "", 
        img: "/image/Laundromat/TopImage.jpg",
        images: [
            {
                img: "/image/Laundromat/Context_Plan.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/Concept_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/Concept_Dia2.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/Parti_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/Site_Plan.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/iso_plan.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/Section.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/Site_Elevation.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/Per1.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/Per2.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/Per3.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/Per4.jpg",
                caption: "",
            },
            {
                img: "/image/Laundromat/Per5.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "museum-of-emotion",
        title: "Museum of Emotion",
        subtitle: "Competition",
        date: "2025",
        time: "Mar. 2025 - Apr. 2025",
        projectType: "Architectural Design",
        location: "N.A.",
        workType: "Collaborate with Shuchi Liu",
        description: "This project explores the emotional journey of a woman during pregnancy and childbirth. Inspired by documentaries and real-life interviews, this museum aims to bring attention to the often overlooked emotional and physical experiences of the mother. The design uses architectural tools—spatial form, lighting, and materiality—to guide visitors through contrasting emotional states, from hope to hardship. The concept begins with a warm, bright space representing the joy of discovering pregnancy, gradually transitioning into darker, narrower forms that symbolize the anxiety and physical struggles of childbirth. The museum's layout is inspired by the female reproductive system, creating a one-way path that mimics the journey of birth. Warm tones and soft textures at the start evoke protection, while the negative hall becomes sharp and challenging to navigate, reflecting pain and resilience. Lighting at the end symbolizes new life and strength. By walking through this womb-like tunnel, visitors physically and emotionally connect with the intense, complex journey of bringing life into the world.",
        video: "", 
        img: "/image/Museum of Emotion/TopImage.jpg",
        images: [
            {
                img: "/image/Museum of Emotion/concept.jpg",
                caption: "",
            },
            {
                img: "/image/Museum of Emotion/Positive.jpg",
                caption: "",
            },
            {
                img: "/image/Museum of Emotion/Negative.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "lungomare-strip",
        title: "Lungomare (S)trip",
        subtitle: "Competition",
        date: "2024",
        time: "Dec. 2023 - Feb. 2024",
        projectType: "Urban Design",
        location: "Lignano Sabbiadoro, Italy",
        workType: "Collaborate with Ho Chun Au-Yeng, Tsz Ching Cheng",
        description: "Our design for the Golden Sand reimagines the coastal journey by creating new experiences along the public axis. A central cycling lane revitalizes the Lungomare Riccardo Riva, with various programs branching out as strips from the main road. The master plan integrates wild landscapes, vehicular access, the beach, an enhanced UNICEF Park, and transformed boat crossings. Raised walkways soften the flood wall boundary, framing stunning ocean views. Gradual inclines elevate perspectives, leading to wave-like removable staircases equipped with kiosks and amenities. The redesigned UNICEF Park becomes a hub for water sports and marine exploration. Sustainable mobility is promoted by converting the existing road into a one-way thoroughfare, creating space for dedicated cycling paths that connect site elements. Using eco-friendly materials and landscaping, the design enhances the journey while preserving the site’s ecological integrity. The project starts at the Passo Barca, where the trip embarks. The spatial experience of Passo Barca is characterised by strips of masses, extruding from the ground, creating undulating roofs as viewing decks. The main axis start at this point and lead to a multitude of programs along the way.",
        video: "", 
        img: "/image/Lungomare strip/pier_Passo_Barca.jpg",
        images: [
            {
                img: "/image/Lungomare strip/Concept_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/Lungomare strip/MLP.jpg",
                caption: "",
            },
            {
                img: "/image/Lungomare strip/Park_zoom_in_plan.jpg",
                caption: "",
            },
            {
                img: "/image/Lungomare strip/bridge_per.jpg",
                caption: "",
            },
            {
                img: "/image/Lungomare strip/Bridge_Section.jpg",
                caption: "",
            },
            {
                img: "/image/Lungomare strip/Pier_Plan.jpg",
                caption: "",
            },
            {
                img: "/image/Lungomare strip/Pier_Per.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "lighting-park",
        title: "Lighting Park",
        subtitle: "",
        date: "2024",
        time: "Feb. 2024 - Mar. 2024",
        projectType: "Landscape Design",
        location: "Vancouver, Canada",
        workType: "Collaborate with Feng Mui",
        description: "In this project, we designed a three-story tower and a parametric pedestrian bridge linking Dusty Greenwell Park with the future park. Using GID data (LiDAR, shapefiles, orthographic images) in Grasshopper, we created an integrated site model. The bridge meets strict criteria: over 2 m wide, more than 1.5 m deep, with a guard taller than 1.5 m, a maximum slope of 10%, and at least 8 m clearance below. Integrated lighting guides pedestrians to the future park. The tower, connected by stairs and ramps, accommodates at least five patrons per level and features an industrial design with a twisting, illuminated facade that offers expansive views of North Vancouver’s shoreline. Overall, the project uses light to revitalize Dusty Greenwell Park and transform the area into a vibrant, inviting destination.",
        video: "", 
        img: "/image/Lighting Park/project_top_image.jpg",
        images: [
            {
                img: "/image/Lighting Park/Isometric_View.jpg",
                caption: "",
            },
            {
                img: "/image/Lighting Park/Perspective_1.jpg",
                caption: "",
            },
            {
                img: "/image/Lighting Park/Perspective_2.jpg",
                caption: "",
            },
            {
                img: "/image/Lighting Park/Section.jpg",
                caption: "",
            },
            {
                img: "/image/Lighting Park/Roof_Floor_Plan.jpg",
                caption: "",
            },
            {
                img: "/image/Lighting Park/East_Elevation.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "the-ideal",
        title: "The Ideal",
        subtitle: "",
        date: "2019",
        time: "Sep. 2018 - Feb. 2019",
        projectType: "Creative Practices",
        location: "Hong Kong",
        workType: "Individual Work\nTutor: Prue Chiles",
        description: "Over 200,000 people live in subdivided flats in Hong Kong, where poor design often leads to uncomfortable and unhygienic living conditions. This project is a creative practice dissertation analyzing the Hong Kong housing crisis and proposing better living solutions. By studying the limitations of typical subdivided units—such as lack of ventilation, extreme heat, and poor hygiene—the design aims to improve quality of life. The proposal defines a 'liveable unit' as having at least 9.5 sqm per person, including essential amenities like a standard toilet, storage, and ideally a balcony. The design explores modular unit combinations (e.g., for singles, couples, or small families) that incorporate shared kitchens and living areas to foster social connection. The final proposal adapts the Twin Tower public rental housing layout, redeveloping it with these new unit typologies to ensure decent living standards for all residents.",
        video: "", 
        img: "/image/Ideal/TopImage.jpg",
        images: [
            {
                img: "/image/Ideal/Concept_Info.jpg",
                caption: "",
            },
            {
                img: "/image/Ideal/Cocenpt_Programma_Iso.jpg",
                caption: "",
            },
            {
                img: "/image/Ideal/Concept_Trial.jpg",
                caption: "",
            },
            {
                img: "/image/Ideal/Typical_layout.jpg",
                caption: "",
            },
            {
                img: "/image/Ideal/double_layout.jpg",
                caption: "",
            },
            {
                img: "/image/Ideal/triple_layout.jpg",
                caption: "",
            },
            {
                img: "/image/Ideal/Typical_Public_Rental_Housing_Layout.jpg",
                caption: "",
            },
            {
                img: "/image/Ideal/Design_Development.jpg",
                caption: "",
            },
            {
                img: "/image/Ideal/Formation_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/Ideal/Programma_Dia.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "megabox",
        title: "Megabox",
        subtitle: "Alterations and Additions Works",
        date: "2023",
        time: "Feb. 2022 - Jun. 2023",
        projectType: "Architectural Design",
        location: "Kowloon Bay, Hong Kong",
        workType: "Collaborate with Aedas\nEd Lam (Executive Director)\nGeoffrey Hung (Senior Associate)\nPatrick Chan (Assistant)\nWillis Leung (Assistant)",
        description: "This Alterations and Additions (A&A) project involves major renovation works for Megabox, the largest retail mall in Kowloon East, Hong Kong. In response to new luxurious residential developments in the adjacent Kai Tak district and the evolving demands of young families and couples, the design aims to create a simpler, more elegant, and welcoming atmosphere. Key interventions include re-arranging the atrium voids and relocating entry escalators to improve circulation and arrival experience. A brand new interior style utilizing streamlines, soft lighting, and transparent shopfronts creates a cozy, bright mood. A significant feature is the transformation of the rooftop (17/F-19/F). By demolishing an existing swimming pool and elevated level, the design levels up the outdoor roof to create an iconic sky garden terrace. This new landscape maximizes Victoria Harbour views and integrates indoor-outdoor activities, featuring alfresco dining areas, an artist plaza, event spaces, a four-season garden, and four featured staircases.",
        video: "", 
        img: "/image/Megabox/TopImage.jpg",
        images: [
            {
                img: "/image/Megabox/GF_per.jpg",
                caption: "",
            },
            {
                img: "/image/Megabox/RF_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/Megabox/RF_Plan.jpg",
                caption: "",
            },
            {
                img: "/image/Megabox/RF_per1.jpg",
                caption: "",
            },
            {
                img: "/image/Megabox/RF_per2.jpg",
                caption: "",
            },
            {
                img: "/image/Megabox/RF_per3.jpg",
                caption: "",
            },
            {
                img: "/image/Megabox/RF_interior.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "langham-place",
        title: "Langham Place",
        subtitle: "Alterations and Additions Works",
        date: "2022",
        time: "Oct. 2021 - Feb. 2022",
        projectType: "Feasibility Study",
        location: "Mong Kok, Hong Kong",
        workType: "Collaborate with Aedas\nGeoffrey Hung (Senior Associate)\nWillis Leung (Assistant)",
        description: "This Alterations and Additions project for Langham Place, Hong Kong, focuses on refreshing a major local retail mall. The primary challenge involves navigating fire engineering constraints within the spiral retail section, which significantly impacts design possibilities. To improve accessibility for the elderly and people with disabilities, the design proposes replacing most ramps with two new lift connections, ensuring barrier-free access. Due to fire safety regulations preventing structural changes to the void edges, the renovation focuses on upgrading finishes for flooring, walls, and ceilings, as well as redesigning atrium spandrels for a brighter aesthetic. My role also involved designing the L4 large atrium, exhibition installations, the L5 office tower lift lobby, and specific level lift lobbies. The L4 atrium features a 'Forest Park' theme with petal-shaped structures and flower-lighting installations. The L5 office lobby aims for a classic, modern, and grand atmosphere, catering to the medical and lifestyle tenants by creating a VIP experience.",
        video: "", 
        img: "/image/Langham Place/TopImage.jpg",
        images: [
            {
                img: "/image/Langham Place/Section_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/Langham Place/Proposed_Detail.jpg",
                caption: "",
            },
            {
                img: "/image/Langham Place/L4_Atrium.jpg",
                caption: "",
            },
            {
                img: "/image/Langham Place/L5_Lift_Lobby.jpg",
                caption: "",
            },
            {
                img: "/image/Langham Place/Medical.jpg",
                caption: "",
            },
            {
                img: "/image/Langham Place/Lifestyle.jpg",
                caption: "",
            },
            {
                img: "/image/Langham Place/Well-being.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "hassc",
        title: "Hospital Authority Supporting Services Centre",
        subtitle: "Design and Build",
        date: "2022",
        time: "Apr. 2021 - Feb. 2022",
        projectType: "Architectural Design",
        location: "North Lantau, Hong Kong",
        workType: "Collaborate with ALKF+\nVenus Wong (Senior Architect)\nKatherine Ng (Assistant)\nAlice Choy (Assistant)",
        description: "This Design and Build project, located in North Lantau, Hong Kong, involves the development of a new central laundry centre, a central food production unit for patient food service, an IT corporate data centre, and a central emergency store for personal protective equipment. The project was awarded on November 24, 2020, with construction beginning in 2021 and an estimated completion date of late 2023. I was responsible for preparing presentation diagrams and building the 3D model for outsourcing rendering within a tight timeframe. The design concept is categorized into three main hierarchical elements: soft, medium, and hard. 'Soft' zones are communal spaces designed to maximize natural daylight. 'Medium' zones serve as working environments that require sufficient natural light without overexposure, utilizing a balanced facade transparency. 'Hard' zones are high-security facilities with minimal facade openings or transparency.",
        video: "", 
        img: "/image/HASSC/TopImage.jpg",
        images: [
            {
                img: "/image/HASSC/Design_Development.jpg",
                caption: "",
            },
            {
                img: "/image/HASSC/Programma_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/HASSC/Flow_Dia.jpg",
                caption: "",
            },
            {
                img: "/image/HASSC/Section.jpg",
                caption: "",
            },
            {
                img: "/image/HASSC/Detail.jpg",
                caption: "",
            },
            {
                img: "/image/HASSC/per1.jpg",
                caption: "",
            },
            {
                img: "/image/HASSC/per2.jpg",
                caption: "",
            },
        ],
    },
    {
        id: "radic-a-tion",
        title: "字駅 Radic-a-tion",
        subtitle: "Competition",
        date: "2019",
        time: "Nov. 2019 - Dec. 2019",
        projectType: "Temporary Installation",
        location: "Suzu, Japan",
        workType: "Collaborate with Atelier Pacific\nHenry Jim (Associate)\nKaren Kwong (Designer)",
        description: "Chinese characters (Kanji) serve as a common heritage across East Asia, yet language barriers often limit deep communication despite shared roots. This project, 字駅 Radic-a-tion, explores this connection by deconstructing characters into their radical components. Using traditional Hong Kong iron-smithing and Japanese paper crafts from the Noto Peninsula, we created new, unique 'words'—characters with no pronunciation or defined meaning but recognizable through their radicals. These abstract forms hang within the station, fluttering in the wind and casting evolving shadows, inviting visitors from different cultures to find shared understanding through visual interpretation rather than spoken language.",
        video: "", 
        img: "/image/Radication/TopImage.jpg",
        images: [
            {
                img: "/image/Radication/DayTime.jpg",
                caption: "",
            },
            {
                img: "/image/Radication/Noon.jpg",
                caption: "",
            },
            {
                img: "/image/Radication/Sunset.jpg",
                caption: "",
            },
            {
                img: "/image/Radication/conept_1.jpg",
                caption: "",
            },
            {
                img: "/image/Radication/conept_2.jpg",
                caption: "",
            },
        ],
    },
];


const contactConfig = {
    YOUR_EMAIL: "karllamwn@gmail.com",
    YOUR_FONE: "+1 672 673 7036",
    description: "I am eager to contribute my experience in an intern architect, co-op, or architectural assistant role. Feel free to contact me for collaborations.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_vvl16gd",
    YOUR_TEMPLATE_ID: "template_mdz2jrx",
    YOUR_USER_ID: "Aw_TVrcWNIVfBfl_x",
};

const socialprofils = {
    github: "https://github.com/karllamwn",
    linkedin: "https://www.linkedin.com/in/lkwn24/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    education,
    contactConfig,
    socialprofils,
    logotext,
    projects,
};

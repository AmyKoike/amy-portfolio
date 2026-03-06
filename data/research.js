export const researchProjects = [
  
  //morph
  {
    slug: "morphology",
    title: "Elements of Robot Morphology: Supporting Designers in Robot Form Exploration",
    author: [
      "Amy Koike",
      "Serena(Ge) Guo",
      "Xinning Hu",
      "Callie Yejin Kim",
      "Dakota Sullivan",
      "Bilge Mutlu"
    ],
    conference: "ACM/IEEE International Conference on Human-Robot Interaction",
    thumbnail: "/images/research/morph/designwithMEB.jpg",
    images: [
      "/images/art/morph/designwithMEB.jpg",
      "/images/art/sample3.jpg",
    ],
    pdf: "/pdf/Sprout-HRI.pdf",
    description: `
      Robot morphology--the form, shape, and structure of robots--is a key design space in human–robot interaction (HRI), shaping how robots function, express themselves, and interact with people. Yet, despite its importance, little is known about how design frameworks can guide systematic form exploration.
      To address this gap, we introduce Elements of Robot Morphology, a framework that identifies five fundamental elements: perception, articulation, end effectors, locomotion, and structure. Derived from an analysis of existing robots, the framework supports structured exploration of diverse robot forms.
      To operationalize the framework, we developed Morphology Exploration Blocks (MEB)} a set of tangible blocks that enable hands-on, collaborative experimentation with robot morphologies.
    We evaluate the framework and toolkit through a case study and design workshops, showing how they support analysis, ideation, reflection, and collaborative robot design.
    `,
    year: 2026
  },

  //voiceparameters
  {
    slug: "voiceparameters",
    title: "Practical Insights into Designing Context-Aware Robot Voice Parameters in the Wild",
    author: [
      "Amy Koike",
      "Yuki Okafuji",
      "Sichao Song"
    ],
    conference: "ACM/IEEE International Conference on Human-Robot Interaction",
    thumbnail: "/images/research/voiceparameters/Sota.jpg",
    images: [
      "/images/art/sample2.jpg",
      "/images/art/sample3.jpg",
    ],
    pdf: "/pdf/Sprout-HRI.pdf",
    description: `
      Voice is an essential modality for human-robot interaction (HRI). The way a robot "sounds" plays a central role in shaping how humans perceive and engage with it, influencing factors such as intelligibility, understandability, and likability. 
      Although prior work has examined voice design, most studies occur in controlled labs, leaving uncertainty about how results translate to real-world settings. To address this gap, we conducted two naturalistic deployment studies with a guidance robot in a shopping mall: (1) in-depth interviews with six participants, and (2) an eight-day field deployment using a 3×3 design varying speech rate and volume, yielding 725 survey responses. Our results show how real-world context shapes voice perception and inform adaptive, context-aware voice design for social robots in public spaces.
    `,
    year: 2026
  },

  //bandit
  {
    slug: "bandit",
    title: "What You Reward Is What You Learn: Comparing Rewards for Online Speech Policy Optimization in Public HRI",
    author: [
      "Sichao Song",
      "Yuki Okafuji",
      "Kaito Ariu",
      "Amy Koike"
    ],
    conference: "ACM/IEEE International Conference on Human-Robot Interaction",
    thumbnail: "/images/research/bandit/system_revised.png",
    cover: "/images/research/bandit/system_revised.png",
    images: [
      "/images/art/sample2.jpg",
      "/images/art/sample3.jpg",
    ],
    pdf: "/pdf/Sprout-HRI.pdf",
    description: `
      Designing policies that are both efficient and acceptable for conversational service robots in open and diverse environments is non-trivial. Unlike fixed, hand-tuned parameters, online learning can adapt to non-stationary conditions. In this paper, we study how to adapt a social robot’s speech policy in the wild. During a 12-day in-situ deployment with over 1,400 public encounters, we cast online policy optimization as a multi-armed bandit problem and use Thompson sampling to select among six actions defined by speech rate (slow/normal/fast) and verbosity (concise/detailed). We compare three complementary binary rewards--user rating, conversation closure, and turn counts--and show that each induces distinct arm distributions and interaction behaviors. We complement the online results with offline evaluations that analyze contextual factors (e.g., crowd level, group size) using video-annotated data. Taken together, we distill ready-to-use design lessons for deploying online optimization of speech policies in real public HRI settings.
    `,
    year: 2026
  },

  //sprout
  {
    slug: "sprout-2024",
    title: "Sprout: Designing Expressivity for Robots Using Fiber-Embedded Actuator",
    author:[
      "Amy Koike",
      "Michael Wehner",
      "Bilge Mutlu"
    ],
    conference: "ACM/IEEE International Conference on Human-Robot Interaction",
    thumbnail: "/images/research/sprout/Sprout.png",
    images: [
      "/images/art/sample2.jpg",
      "/images/art/sample3.jpg",
    ],
    pdf: "/pdf/Sprout-HRI.pdf",
    description: `
      In this project, we explore how techniques from soft robotics can help create a new form of robot expression. We present Sprout, a soft expressive robot that conveys its internal states by changing its body shape. Sprout can extend, bend, twist, and expand using fiber-embedded actuators integrated into its construction. These deformations enable Sprout to express its internal states, for example, by expanding to express anger and bending its body sideways to express curiosity. Through two user studies, we investigated how users interpreted Sprout's expressions, their perceptions of Sprout, and their expectations from future iterations of Sprout's design. We argue that the use of soft actuators opens a novel design space for robot expressions to convey internal states, emotions, and intent.
    `,
    year: 2024
  },

  //tangible
  {
    slug: "task-2024",
    title: "TaSK: Tangible Scenography as a Holistic Design Method for Human-Robot Interaction",
    author: [
      "Amy Koike",
      "Bengisu Cagiltay",
      "Bilge Mutlu"
    ],
    conference: "ACM International Conference on Designing Interactive Systems",
    thumbnail: "/images/research/task/TaSK-thumbnail.png",
    cover: "/images/research/task/TaSK-teaser.png",
    images: [
      "/images/art/sample2.jpg",
      "/images/art/sample3.jpg",
    ],
    pdf: "/pdf/Tangible-Scenography-Kit.pdf",
    description: `
      Traditional approaches to human-robot interaction design typically examine robot behaviors in controlled environments and narrow tasks. These methods are impractical for designing robots that interact with diverse user groups in complex human environments. Drawing from the field of theater, we present the construct of scenes—individual environments consisting of specific people, objects, spatial arrangements, and social norms—and tangible scenography, as a holistic design approach for human-robot interactions. We created a design tool, Tangible Scenography Kit (TaSK), with physical props to aid in design brainstorming. We conducted design sessions with eight professional designers to generate exploratory designs. Designers used tangible scenography and TaSK components to create multiple scenes with specific interaction goals, characterize each scene’s social environment, and design scene-specific robot behaviors. From these sessions, we found that this method can encourage designers to think beyond a robot’s narrow capabilities and consider how they can facilitate complex social interactions.
    `,
    year: 2024
  },

  //usermotivation
  {
    slug: "what-drives-you-to-interact-2025",
    title: "What Drives You to Interact?: The Role of User Motivation for a Robot in the Wild",
    author:[
      "Amy Koike",
      "Yuki Okafugi",
      "Kenya Hoshimure",
      "Jun Baba"
    ],
    conference: "ACM/IEEE International Conference on Human-Robot Interaction",
    thumbnail: "/images/research/usermotivation/Teaser.png",
    cover: "/images/art/sample1.jpg",
    images: [
      "/images/art/sample2.jpg",
      "/images/art/sample3.jpg",
    ],
    pdf: "/pdf/What-Drives-You-to-Interact.pdf",
    description: `
      In this project, we aim to understand how user motivation shapes human-robot interaction (HRI) in the wild. To explore this, we conducted a field study by deploying a fully autonomous conversational robot in a shopping mall over two days. Through sequential video analysis, we identified five patterns of interaction fluency (Smooth, Awkward, Active, Messy, and Quiet), four types of user motivation for interacting with the robot (Function, Experiment, Curiosity, and Education), and user positioning towards the robot. We further analyzed how these motivations and positioning influence interaction fluency. Our findings suggest that incorporating users' motivation types into the design of robot behavior can enhance interaction fluency, engagement, and user satisfaction in real-world HRI scenarios.
    `,
    year: 2025
  },

  //manpu
  {
    slug: "manpu-2023",
    title: "Exploring the Design Space of Extra-Linguistic Expression for Robots",
    author: [
      "Amy Koike",
      "Bilge Mutlu"
    ],
    conference: "ACM International Conference on Designing Interactive Systems",
    thumbnail: "/images/research/manpu/manpu.png",
    images: [
      "/images/art/sample2.jpg",
      "/images/art/sample3.jpg",
    ],
    pdf: "/pdf/Manpu.pdf",
    description: `
      In this project, we explore the new design space of extra-linguistic cues inspired by graphical tropes used in graphic novels and animation to enhance the expressiveness of social robots. We identified a set of cues that can be used to generate expressions, including smoke/steam/fog, water droplets, and bubbles, and prototyped devices that can generate these fluid expressions for a robot. We conducted design sessions where eight designers explored the use and utility of these expressions in conveying the robot’s internal states in various design scenarios. Our analysis of the 22 designs, the associated design justifications, and the interviews with designers revealed patterns in how each form of expression was used, how they were combined with nonverbal cues, and where the participants drew their inspiration from. These findings informed the design of an integrated module called EmoPack, which can be used to augment the expressive capabilities of any robot platform.
    `,
    year: 2023
  },

  //mermaid
  {
    slug: "redesign-of-cardesian-diver",
    title: "Syringe-worked Mermaid",
    author: [
      "Amy Koike",
      "Kazuki Takazawa",
      "Mose Sakashita",
      "Daitetsu Sato",
      "Yoich Ochiai"
    ],
    conference: "",
    thumbnail: "/images/research/mermaid/swm_mat.png",
    images: [
      "/images/art/sample2.jpg",
      "/images/art/sample3.jpg",
    ],
    pdf: "/pdf/CV_October2025.pdf",
    description: `
      In this project, we aim to combine dynamic fabrication with non-contact manipulation system applying the mechanism of Cartesian Diver. To achieve this, we propose the design method for underwater objects and non-contact manipulation technique using water pressure with PID control. We successfully designed and manipulate the object by our method. We discussed the principles and methods to create a digitally designed and fabricated the diver and to stabilize it in the middle of water.
    `,
    year: 2018
  },

  //yadori
  {
    slug: "you-as-a-puppet",
    title: "Transformed Human Presence for Puppetry",
    author: [
      "Mose Sakashita",
      "Tatsuya Minagawa",
      "Amy Koike",
      "Ippei Suzuki",
      "Keisuke Kawahara",
      "Yoich Ochiai"
    ],
    conference: "UIST '17: Proceedings of the 30th Annual ACM Symposium on User Interface Software and Technology",
    thumbnail: "/images/research/yadori/transform_key.jpg",
    images: [
      "/images/art/sample2.jpg",
      "/images/art/sample3.jpg",
    ],
    pdf: "/pdf/CV_October2025.pdf",
    description: `
      We propose an immersive telepresence system for puppetry that transmits a human performer's body and facial movements into a puppet with audiovisual feedback to the performer. The cameras carried in place of puppet's eyes stream live video to the HMD worn by the performer, so that performers can see the images from the puppet's eyes with their own eyes and have a visual understanding of the puppet's ambience. In conventional methods to manipulate a puppet (a hand-puppet, a string-puppet, and a rod-puppet), there is a need to practice manipulating puppets, and there is difficulty carrying out interactions with the audience. Moreover, puppeteers must be positioned exactly where the puppet is. The proposed system addresses these issues by enabling a human performer to manipulate the puppet remotely using his or her body and facial movements. We conducted several user studies with both beginners and professional puppeteers. The results show that, unlike the conventional method, the proposed system facilitates the manipulation of puppets especially for beginners. Moreover, this system allows performers to enjoy puppetry and fascinate audiences.
    `,
    year: 2017
  },

  //sonovortex
  {
    slug: "sonovortex",
    title: "Sonovortex: Aerial Haptic Layer Rendering by Aerodynamic Vortex and Focused Ultrasound",
    author: [
      "Satoshi Hashizume",
      "Amy Koike",
      "Takayuki Hoshi",
      "Yoichi Ochiai"
    ],
    conference: "",
    thumbnail: "/images/research/sonovortex/sonovortex.jpg",
    images: [
      "/images/art/sample2.jpg",
      "/images/art/sample3.jpg",
    ],
    pdf: "/pdf/CV_October2025.pdf",
    description: `
      In this paper, a method of rendering aerial haptics that uses an aerodynamic vortex and focused ultrasound is presented. Significant research has been conducted on haptic applications based on multiple phenomena such as magnetic and electric fields, focused ultrasound, and laser plasma. By combining multiple physical quantities; the resolution, distance, and magnitude of force are enhanced. To combine multiple tactile technologies, basic experiments on resolution and discrimination threshold are required. Separate user studies were conducted using aerodynamic and ultrasonic haptics. Moreover, the perception of their superposition, in addition to their resolution, was tested. Although these fields cause no direct interference, the system enables the simultaneous perception of the tactile feedback of both stimuli. The results of this study are expected to contribute to expanding the expression of aerial haptic displays based on several principles.
    `,
    year: 2017
  },

  //crossfieldhaptics
  {
    slug: "cross-field-haptics",
    title: "Cross-field haptics: Multiple direction haptics combined with magnetic and electrostatic fields",
    author: [
      "Satoshi Hashizume",
      "Kazuki Takazawa",
      "Amy Koike",
      "Yoichi Ochiai"
    ],
    conference: "",
    thumbnail: "/images/research/crossfieldhaptics/crossfieldhaptics.jpg",
    images: [
      "/images/art/sample2.jpg",
      "/images/art/sample3.jpg",
    ],
    pdf: "/pdf/CV_October2025.pdf",
    description: `
      The representation of texture is a major concern during fabrication and manufacture in many industries. Although it is easy to change the texture of objects in the digital world (i.e., just setting texture parameters), it is difficult to achieve this in the real world. Tactile feedback allows displaying texture and affordance. In conventional research, a single physical quantity is used to render haptic textures. In contrast, Our proposed system physically deforms and changes the physical force between the finger and the device. To achieve this, we combine magnetic and electrostatic fields.We use ferrofluid which is flexible liquid from the magnetic field, and electrovibration with adsorption force from the electrostatic field to develop this device.
    `,
    year: 2016
  },
];
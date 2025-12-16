import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  Server,
  Globe,
} from 'lucide-react'

export const skills = [
  { name: 'React', level: 'Advanced', icon: Code2 },
  { name: 'Express.js', level: 'Advanced', icon: Server },
  { name: 'JavaScript', level: 'Advanced', icon: Code2 },
  { name: 'MongoDB', level: 'Advanced', icon: Database },
  { name: 'Firebase', level: 'Intermediate', icon: Database },
  { name: 'SQL', level: 'Intermediate', icon: Database },
  { name: 'Github', level: 'Advanced', icon: GitBranch },
  { name: 'AWS', level: 'Intermediate', icon: Cloud },
  { name: 'GCP', level: 'Intermediate', icon: Cloud },
]

export const projects = [
  {
    title: 'Kaviyam Healthcare Services',
    description:
      'The project included the development of an intuitive and user-friendly appointment booking system. Patients could access the system through a web portal or mobile application, allowing them to schedule appointments with doctors based on their availability and specialization. The system provided real-time updates on appointment availability and confirmation. To efficiently manage staff members, the system incorporated an employee management module. This allowed administrators to add, update, and track information about healthcare professionals and support staff. It included features for maintaining their credentials, roles, and contact details. The project enabled the addition of doctors\' profiles to the system.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80',
    link: '#',
  },
  {
    title: 'Ozzon-(Best Container Homes)',
    description:
      'I completed a static website project for a container house company, creating an engaging online presence. The website showcases the innovative concept of container-based living through captivating visuals and informative content. It incorporates responsive design principles, ensuring seamless user experiences across various devices. My work includes implementing smooth navigation and user-friendly interfaces, encouraging exploration and interaction.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    link: '#',
  },
  {
    title: 'HCL - CSR (WOMAN EMPOWERMENT TAILORING)',
    description:
      'This application was created for the HCL Company as part of their CSR initiative to empower women by giving them access to tailoring equipment and tracking how much the beneficiaries profit from the project. This program is used to track tailors, manage products, track attendance, and generate invoices. The QR code scanning system has been used to track attendance. This online application has been created for administrators and managers.',
    tech: ['React', 'Node.js', 'MongoDB', 'QR Code'],
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    link: '#',
  },
  {
    title: 'PSX Electronics',
    description:
      'This software effectively organizes employee tasks while enhancing communication and operational effectiveness. A user-friendly interface for adding personnel and defining responsibilities was created and developed, facilitating the assignment of tasks to administrators, technicians, and helpers. A sophisticated task tracking system was put in place, providing real-time updates on task statuses, from pending to finished. created a feature for integrated spare parts inventory management that will simplify resource distribution and cut down on downtime. created a secure work completion verification method that is validated by both employees and administrators and guarantees accuracy and quality control. At PSX Electronics, this ground-breaking solution greatly boosted cross functional cooperation and operational procedures.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    link: '#',
  },
]

export const education = [
  {
    institution: 'St.Mother Theresa Engineering College',
    degree: 'B.E (CSE)',
    percentage: '78%',
    period: '2018-2022',
  },
  {
    institution: 'C.M Higher Secondary School',
    degree: 'HSC',
    percentage: '72%',
    period: '2017-2018',
  },
  {
    institution: 'C.M Higher Secondary School',
    degree: 'SSLC',
    percentage: '84%',
    period: '2015-2016',
  },
]

export const experience = [
  {
    company: 'Digisailor',
    position: 'MERN Stack Developer',
    period: 'Feb 2023 - Present',
    description: 'Developed and maintained cross-platform Web applications with a strong focus on React, delivering visually captivating and high-performance user interfaces platforms. Implemented the Model-View-Controller (MVC) pattern to ensure clean and efficient project architecture, fostering robust, scalable, and easily maintainable codebases. Leveraged Node.js to create scalable backend solutions, crafting APIs and server-side applications to facilitate seamless data flow and application logic. Utilized MongoDB as a NoSQL database solution, enabling flexible data management and accommodating complex data requirements while upholding high performance and scalability standards.',
  },
]


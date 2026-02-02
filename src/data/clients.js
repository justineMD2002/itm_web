export const clients = {
  introduction: 'We\'re proud to partner with industry leaders across diverse sectors. Together, we drive innovation and achieve remarkable results.',

  industries: [
    {
      id: 1,
      name: 'Financial Services',
      icon: 'Banknote',
      description: 'Empowering banks, fintech companies, and investment firms with secure, scalable technology solutions.',
      clientCount: 45,
      projects: 180,
      technologies: ['Blockchain', 'AI/ML', 'Cloud Security', 'RegTech'],
      clients: [
        { name: 'Global Finance Corp', logo: 'placeholder' },
        { name: 'SecureBank', logo: 'placeholder' },
        { name: 'FinTech Innovations', logo: 'placeholder' },
        { name: 'Investment Partners LLC', logo: 'placeholder' }
      ]
    },
    {
      id: 2,
      name: 'Healthcare',
      icon: 'Heart',
      description: 'Supporting healthcare providers with HIPAA-compliant solutions that improve patient care and operational efficiency.',
      clientCount: 38,
      projects: 125,
      technologies: ['Telemedicine', 'EHR Systems', 'Healthcare Analytics', 'Mobile Health'],
      clients: [
        { name: 'HealthCare Plus', logo: 'placeholder' },
        { name: 'Medical Solutions Group', logo: 'placeholder' },
        { name: 'Wellness Network', logo: 'placeholder' },
        { name: 'City Hospital System', logo: 'placeholder' }
      ]
    },
    {
      id: 3,
      name: 'E-Commerce & Retail',
      icon: 'ShoppingCart',
      description: 'Helping retailers deliver seamless omnichannel experiences that drive sales and customer loyalty.',
      clientCount: 52,
      projects: 210,
      technologies: ['E-commerce Platforms', 'Mobile Apps', 'Analytics', 'Payment Integration'],
      clients: [
        { name: 'ShopNow Online', logo: 'placeholder' },
        { name: 'Retail Giant Co', logo: 'placeholder' },
        { name: 'Fashion Forward', logo: 'placeholder' },
        { name: 'Marketplace Pro', logo: 'placeholder' }
      ]
    },
    {
      id: 4,
      name: 'Education',
      icon: 'GraduationCap',
      description: 'Transforming education through innovative learning platforms and administrative solutions.',
      clientCount: 30,
      projects: 95,
      technologies: ['LMS Systems', 'Virtual Classrooms', 'Student Analytics', 'Mobile Learning'],
      clients: [
        { name: 'University Alliance', logo: 'placeholder' },
        { name: 'EduTech Solutions', logo: 'placeholder' },
        { name: 'Learning Platform Inc', logo: 'placeholder' },
        { name: 'School District Network', logo: 'placeholder' }
      ]
    },
    {
      id: 5,
      name: 'Manufacturing',
      icon: 'Factory',
      description: 'Driving Industry 4.0 transformation with IoT, automation, and smart factory solutions.',
      clientCount: 28,
      projects: 110,
      technologies: ['IoT', 'Automation', 'Predictive Maintenance', 'Supply Chain'],
      clients: [
        { name: 'Manufacturing Solutions Inc', logo: 'placeholder' },
        { name: 'Industrial Tech Corp', logo: 'placeholder' },
        { name: 'Smart Factory Group', logo: 'placeholder' },
        { name: 'Production Systems Ltd', logo: 'placeholder' }
      ]
    },
    {
      id: 6,
      name: 'Transportation & Logistics',
      icon: 'Truck',
      description: 'Optimizing supply chains and fleet management with data-driven solutions.',
      clientCount: 25,
      projects: 88,
      technologies: ['Fleet Management', 'Route Optimization', 'Tracking Systems', 'Warehouse Automation'],
      clients: [
        { name: 'Logistics Pro', logo: 'placeholder' },
        { name: 'Transport Solutions LLC', logo: 'placeholder' },
        { name: 'Supply Chain Partners', logo: 'placeholder' },
        { name: 'Global Shipping Co', logo: 'placeholder' }
      ]
    }
  ],

  testimonials: [
    {
      id: 1,
      quote: 'Working with ITM has been transformative for our business. Their collaborative approach and technical expertise helped us modernize our entire infrastructure.',
      author: 'Sarah Johnson',
      position: 'CTO',
      company: 'Global Finance Corp',
      industry: 'Financial Services'
    },
    {
      id: 2,
      quote: 'The team at ITM truly understands the power of collaboration. They worked seamlessly with our internal teams to deliver a solution that exceeded our expectations.',
      author: 'Michael Chen',
      position: 'VP of Technology',
      company: 'HealthCare Plus',
      industry: 'Healthcare'
    },
    {
      id: 3,
      quote: 'ITM\'s innovative solutions and inclusive approach made all the difference. They listened to our needs and delivered a platform that our customers love.',
      author: 'Emily Rodriguez',
      position: 'Chief Digital Officer',
      company: 'ShopNow Online',
      industry: 'E-Commerce'
    },
    {
      id: 4,
      quote: 'The diversity of perspectives on the ITM team brought fresh ideas to our project. Their commitment to excellence is evident in every interaction.',
      author: 'David Thompson',
      position: 'Director of IT',
      company: 'University Alliance',
      industry: 'Education'
    }
  ],

  stats: [
    { value: '200+', label: 'Active Clients', description: 'Across 6 key industries' },
    { value: '98%', label: 'Client Satisfaction', description: 'Average rating across all projects' },
    { value: '850+', label: 'Projects Completed', description: 'Successfully delivered solutions' },
    { value: '45+', label: 'Countries', description: 'Global reach and impact' }
  ],

  caseStudies: [
    {
      id: 1,
      title: 'Digital Transformation for Global Finance Corp',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing inefficiencies and security vulnerabilities',
      solution: 'Cloud migration and microservices architecture implementation',
      results: [
        '60% improvement in system performance',
        '99.99% uptime achieved',
        '$2M annual cost savings',
        'Enhanced security posture'
      ],
      technologies: ['AWS', 'Kubernetes', 'React', 'Node.js']
    },
    {
      id: 2,
      title: 'Telemedicine Platform for HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Need for secure, scalable telemedicine solution',
      solution: 'HIPAA-compliant platform with real-time video and patient portal',
      results: [
        '500K+ patients served',
        '40% reduction in wait times',
        '95% patient satisfaction',
        'Seamless EHR integration'
      ],
      technologies: ['React Native', 'WebRTC', 'Azure', 'FHIR']
    }
  ]
}

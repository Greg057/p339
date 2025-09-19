import UserInfo4Static from '@/components/userInfo/static/UserInfo4Static'
import Skills1Static from '@/components/skills/static/Skills1Static'
import Projects1Static from '@/components/projects/static/Projects1Static'
import CustomSection3Static from '@/components/custom/static/CustomSection3Static'
import CustomSectionListStatic from '@/components/custom/static/CustomSectionListStatic'
import CustomSectionTimelineStatic from '@/components/custom/static/CustomSectionTimelineStatic'

const portfolioData = {
  "personal": {
    "full_name": "john",
    "title": "Software Engineer",
    "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, and cloud DevOps tools.",
    "location": "San Francisco, CA",
    "avatarUrl": null,
    "cvUrl": "/p339/user-files/2547cc8f-d92f-4bf6-b05b-e06fce348363/cv.pdf",
    "custom_links": [
      {
        "icon": "linkedin",
        "title": "LinkedIn",
        "url": "https://linkedin.com/in/janedoe"
      },
      {
        "icon": "github",
        "title": "GitHub",
        "url": "https://github.com/janedoe"
      }
    ]
  },
  "selectedComponents": {
    "userInfo": "userInfo4",
    "skills": "skills1",
    "projects": "projects1",
    "workExperience": "card",
    "education": "card"
  },
  "skills": [
    {
      "name": "Java",
      "logo": "/p339/icons/java/java-original.svg"
    },
    {
      "name": "Python",
      "logo": "/p339/icons/python/python-original.svg"
    },
    {
      "name": "JavaScript",
      "logo": "/p339/icons/javascript/javascript-original.svg"
    },
    {
      "name": "React",
      "logo": "/p339/icons/react/react-original.svg"
    },
    {
      "name": "Node.js",
      "logo": "/p339/icons/nodejs/nodejs-original.svg"
    },
    {
      "name": "TypeScript",
      "logo": "/p339/icons/typescript/typescript-original.svg"
    },
    {
      "name": "C++",
      "logo": "/p339/icons/cplusplus/cplusplus-original.svg"
    },
    {
      "name": "Next.js",
      "logo": "/p339/icons/nextjs/nextjs-original.svg"
    },
    {
      "name": "Spring Boot",
      "logo": "/p339/icons/spring/spring-original.svg"
    },
    {
      "name": "Express.js",
      "logo": "/p339/icons/express/express-original.svg"
    },
    {
      "name": "Django",
      "logo": "/p339/icons/django/django-plain.svg"
    },
    {
      "name": "PostgreSQL",
      "logo": "/p339/icons/postgresql/postgresql-original.svg"
    },
    {
      "name": "MongoDB",
      "logo": "/p339/icons/mongodb/mongodb-original.svg"
    },
    {
      "name": "MySQL",
      "logo": "/p339/icons/mysql/mysql-original.svg"
    },
    {
      "name": "Redis",
      "logo": "/p339/icons/redis/redis-original.svg"
    },
    {
      "name": "AWS",
      "logo": "/p339/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
    {
      "name": "Docker",
      "logo": "/p339/icons/docker/docker-original.svg"
    },
    {
      "name": "Kubernetes",
      "logo": "/p339/icons/kubernetes/kubernetes-original.svg"
    },
    {
      "name": "Git",
      "logo": "/p339/icons/git/git-original.svg"
    },
    {
      "name": "Jenkins",
      "logo": "/p339/icons/jenkins/jenkins-original.svg"
    },
    {
      "name": "CI/CD pipelines",
      "logo": null
    },
    {
      "name": "REST APIs",
      "logo": null
    },
    {
      "name": "GraphQL",
      "logo": "/p339/icons/graphql/graphql-plain.svg"
    },
    {
      "name": "Unit Testing",
      "logo": null
    },
    {
      "name": "Agile/Scrum",
      "logo": null
    },
    {
      "name": "Test-Driven Development (TDD)",
      "logo": null
    },
    {
      "name": "GitHub Actions",
      "logo": "/p339/icons/githubactions/githubactions-original.svg"
    },
    {
      "name": "Supabase",
      "logo": "/p339/icons/supabase/supabase-original.svg"
    },
    {
      "name": "Vercel",
      "logo": "/p339/icons/vercel/vercel-original.svg"
    },
    {
      "name": "scikit-learn",
      "logo": "/p339/icons/scikitlearn/scikitlearn-original.svg"
    },
    {
      "name": "Flask",
      "logo": "/p339/icons/flask/flask-original.svg"
    },
    {
      "name": "React Native",
      "logo": "/p339/icons/reactnative/reactnative-original.svg"
    },
    {
      "name": "SQLite",
      "logo": "/p339/icons/sqlite/sqlite-original.svg"
    }
  ],
  "projects": [
    {
      "name": "Portfolio Builder Web App",
      "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
      "picUrl": null,
      "technologies": [],
      "custom_links": []
    },
    {
      "name": "Movie Recommendation System",
      "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
      "picUrl": null,
      "technologies": [],
      "custom_links": []
    },
    {
      "name": "Task Manager Mobile App",
      "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
      "picUrl": null,
      "technologies": [],
      "custom_links": []
    }
  ],
  "workExperience": [
    {
      "company": "TechWave Solutions",
      "position": "Software Engineer",
      "location": "San Francisco, CA",
      "start_date": "Jan 2021",
      "end_date": "Present",
      "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
      "logoUrl": null,
      "custom_links": []
    },
    {
      "company": "BrightApps Inc.",
      "position": "Junior Software Engineer",
      "location": "San Jose, CA",
      "start_date": "Jun 2019",
      "end_date": "Dec 2020",
      "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
      "logoUrl": null,
      "custom_links": []
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Computer Science",
      "university": "University of California, Berkeley",
      "location": "Berkeley, CA",
      "start_year": "2015",
      "end_year": "2019",
      "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
      "logoUrl": null,
      "custom_links": []
    }
  ]
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <UserInfo4Static personal={portfolioData.personal} />
        {portfolioData.skills && <Skills1Static skills={portfolioData.skills} />}
        {portfolioData.projects && <Projects1Static projects={portfolioData.projects} />}
        {portfolioData.workExperience && <CustomSection3Static section={{
          section_name: "Work Experience",
          layout_type: "card",
          items: portfolioData.workExperience.map((exp, index) => ({
            primaryTitle: exp.company,
            secondaryTitle: exp.position,
            dateInfo: `${exp.start_date || ''} - ${exp.end_date || 'Present'}`.trim(),
            location: exp.location,
            description: exp.description,
            logoUrl: exp.logoUrl,
            customLinks: exp.custom_links
          }))
        }} />}
        {portfolioData.education && <CustomSection3Static section={{
          section_name: "Education",
          layout_type: "card",
          items: portfolioData.education.map((edu, index) => ({
            primaryTitle: edu.university,
            secondaryTitle: edu.degree,
            dateInfo: `${edu.start_year || ''} - ${edu.end_year || 'Present'}`.trim(),
            location: edu.location,
            description: edu.description,
            logoUrl: edu.logoUrl,
            customLinks: edu.custom_links
          }))
        }} />}
      </div>
    </main>
  )
}
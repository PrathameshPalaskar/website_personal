import React from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Left Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-white shadow-lg flex flex-col items-center py-8 space-y-6">
        <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
          <FileText size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
          <Github size={24} />
        </a>
      </div>

      {/* Main Content */}
      <div className="ml-16 p-8">
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-4 animate-fade-in">
            Hello, I'm
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              {' '}Prathamesh
            </span>
            <span className="block text-2xl text-gray-600 mt-2">
              My friends call me Prat
            </span>
          </h1>
          
          {/* Profile Photos */}
          <div className="grid grid-cols-2 gap-4 my-8">
            <img 
              src="/api/placeholder/400/300" 
              alt="Profile photo 1" 
              className="rounded-lg shadow-md"
            />
            <img 
              src="/api/placeholder/400/300" 
              alt="Profile photo 2" 
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Introduction */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              Data Engineer with expertise in building scalable data pipelines and 
              implementing efficient data solutions. Passionate about transforming 
              complex data challenges into actionable insights.
            </p>
          </div>
        </header>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Data Engineering</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Apache Spark</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Airflow</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">SQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">ETL Pipeline Design</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">AWS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Docker</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Kubernetes</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Terraform</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Big Data Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Hadoop</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Kafka</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Hive</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">MongoDB</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Tools & Methods</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Git</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">CI/CD</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Agile</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Data Modeling</span>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Work Experience</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700">Senior Data Engineer</h3>
                  <p className="text-gray-600">Example Company</p>
                </div>
                <span className="text-gray-500">2020 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Designed and implemented data pipelines processing 1TB+ daily</li>
                <li>Led team of 5 engineers in modernizing data infrastructure</li>
                <li>Reduced processing costs by 40% through optimization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700">Data Engineer</h3>
                  <p className="text-gray-600">Previous Company</p>
                </div>
                <span className="text-gray-500">2018 - 2020</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Built real-time analytics dashboard for 100K+ daily users</li>
                <li>Implemented automated data quality monitoring system</li>
                <li>Collaborated with data science team on ML pipeline deployment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer className="max-w-4xl mx-auto pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600" size={20} />
              <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
                your.email@example.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <ExternalLink className="text-blue-600" size={20} />
              <a href="#" className="text-blue-600 hover:underline">
                www.yourwebsite.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
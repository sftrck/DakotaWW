import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Clock, Users, Award, BookOpen, Video, FileText } from 'lucide-react';
import { trainingPrograms } from '../data/mock';

const Training = () => {
  const trainingFeatures = [
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from Dakota's senior consultants and technology experts with decades of industry experience."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Structured learning paths covering all aspects of Dakota systems and revenue optimization methodologies."
    },
    {
      icon: Video,
      title: "Multiple Formats",
      description: "Choose from online, on-site, hybrid, and self-paced learning options to fit your schedule."
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Earn recognized certifications that validate your expertise in Dakota systems and revenue optimization."
    },
    {
      icon: FileText,
      title: "Resource Library",
      description: "Access extensive documentation, case studies, and best practice guides for ongoing reference."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Training programs designed to minimize disruption to your business operations."
    }
  ];

  const certifications = [
    {
      name: "Dakota Systems Associate",
      level: "Entry Level",
      duration: "40 hours",
      description: "Fundamental understanding of all Dakota tools and basic implementation principles.",
      prerequisites: "None"
    },
    {
      name: "Dakota Systems Professional",
      level: "Intermediate",
      duration: "80 hours",
      description: "Advanced proficiency in system configuration, data analysis, and optimization strategies.",
      prerequisites: "Associate certification or equivalent experience"
    },
    {
      name: "Dakota Systems Expert",
      level: "Advanced",
      duration: "120 hours",
      description: "Master-level expertise in complex implementations, custom development, and strategic consulting.",
      prerequisites: "Professional certification and 2+ years experience"
    },
    {
      name: "Revenue Optimization Specialist",
      level: "Specialized",
      duration: "60 hours",
      description: "Specialized focus on revenue optimization strategies and cross-departmental coordination.",
      prerequisites: "Professional certification recommended"
    }
  ];

  const learningPaths = [
    {
      title: "Business Analyst Track",
      description: "For professionals focused on data analysis and business intelligence",
      modules: ["Data Analysis Fundamentals", "Consumer View Deep Dive", "Reporting & Visualization", "Strategic Analysis"]
    },
    {
      title: "Technical Implementation Track", 
      description: "For IT professionals and system administrators",
      modules: ["System Architecture", "Database Management", "API Integration", "Security & Compliance"]
    },
    {
      title: "Executive Leadership Track",
      description: "For senior leaders and decision makers",
      modules: ["Strategic Revenue Management", "ROI Optimization", "Change Management", "Performance Metrics"]
    },
    {
      title: "Consultant Track",
      description: "For external consultants and implementation specialists",
      modules: ["Client Engagement", "Implementation Methodology", "Training Delivery", "Advanced Troubleshooting"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Professional Development
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Training & Certification
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master Dakota systems and revenue optimization methodologies through our comprehensive training programs designed for all skill levels and roles.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>  
            </Button>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of training programs designed to build expertise in Dakota systems and revenue optimization strategies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold">{program.name}</CardTitle>
                    <Badge variant="outline">{program.duration}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {program.format}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                  <Button 
                    asChild
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white group-hover:bg-slate-800 transition-colors duration-300"
                  >
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dakota Training?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our training programs are designed by industry experts and delivered by experienced practitioners who understand real-world implementation challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-md bg-white group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certification Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certification Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progress through our structured certification levels to validate your expertise and advance your career in revenue optimization.
            </p>
          </div>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div>
                      <Badge className="mb-2">{cert.level}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900">{cert.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{cert.duration}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-gray-700 mb-3">{cert.description}</p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Prerequisites:</span> {cert.prerequisites}
                      </p>
                    </div>
                    <div className="text-right">
                      <Button 
                        asChild
                        variant="outline"
                        className="border-slate-300 text-slate-700 hover:bg-slate-50"
                      >
                        <Link to="/contact">
                          Get Started
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Learning Paths
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a learning path tailored to your role and career objectives for the most relevant and impactful training experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{path.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {path.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Modules</h4>
                  <div className="space-y-2">
                    {path.modules.map((module, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                        <span className="text-gray-700">{module}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild
                    className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white"
                  >
                    <Link to="/contact">
                      Start This Path
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ongoing Support & Resources
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Learning doesn't stop after certification. We provide comprehensive ongoing support and resources to ensure your continued success with Dakota systems.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "24/7 access to online learning portal",
                  "Regular webinars and updates",
                  "Community forums and peer networking",
                  "Refresher courses and advanced workshops",
                  "Direct access to subject matter experts"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button 
                asChild
                className="bg-slate-900 hover:bg-slate-800 text-white"
              >
                <Link to="/contact">
                  Access Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Training Investment</h3>
              <div className="space-y-4">
                {[
                  { program: "Individual Certification", price: "$2,500 - $7,500", description: "Per person, per certification level" },
                  { program: "Team Training Package", price: "$15,000 - $45,000", description: "Up to 10 participants, all materials included" },
                  { program: "Enterprise Program", price: "Custom Pricing", description: "Tailored curriculum and dedicated support" },
                  { program: "Annual Support Plan", price: "$5,000 - $25,000", description: "Ongoing access to resources and updates" }
                ].map((option, idx) => (
                  <div key={idx} className="border-l-4 border-slate-300 pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-gray-900">{option.program}</h4>
                      <span className="text-slate-700 font-medium">{option.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </div>
                ))}
              </div>
              <Button 
                asChild
                size="sm"
                className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white"
              >
                <Link to="/contact">
                  Get Training Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Invest in Your Team's Success
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empower your organization with the knowledge and skills needed to maximize the value of Dakota systems and drive revenue optimization success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Plan Your Training
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-gray-300 text-white hover:bg-slate-800 px-8 py-6 text-lg"
            >
              <Link to="/about">
                Meet Our Experts
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Award, Target, Users, Lightbulb, CheckCircle } from 'lucide-react';
import { companyInfo, teamMembers, stats } from '../data/mock';
import QuoteComponent from '../components/QuoteComponent';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Practical Solutions",
      description: "We provide straightforward tools that solve real departmental coordination problems affecting revenue."
    },
    {
      icon: Users,
      title: "Coordination Focus", 
      description: "Our primary goal is helping departments work together rather than at cross-purposes."
    },
    {
      icon: Lightbulb,
      title: "Clear Intelligence",
      description: "We measure competitor activities across all departments to provide actionable business intelligence."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Organizations use our tools to successfully coordinate activities and manage revenue more effectively."
    }
  ];

  const milestones = [
    { year: "2010", event: "Founded with National Vision", description: "Started with a focus on helping organizations coordinate departmental activities" },
    { year: "2012", event: "McDonald's Development Work", description: "Developed Quintillion computer modeling system during enterprise consulting at McDonald's" },
    { year: "2015", event: "Major Retail Clients", description: "Expanded client base with organizations needing cross-departmental coordination" },
    { year: "2018", event: "National Market Expansion", description: "Expanded service delivery to serve clients across diverse regional markets nationwide" },
    { year: "2020", event: "Enhanced Competitor Monitoring", description: "Expanded capability to measure virtually every department of every competitor" },
    { year: "2022", event: "Comprehensive Platform", description: "Full suite of tools for coordinating organizational silo activities" },
    { year: "2024", event: "Proven Track Record", description: "500+ organizations successfully coordinating activities with Dakota tools" }
  ];

  const awards = [
    { title: "Best Revenue Coordination Platform", organization: "Retail Analytics Awards", year: "2023" },
    { title: "Innovation in Departmental Coordination", organization: "Austin Business Excellence", year: "2023" },
    { title: "Top Business Intelligence Provider", organization: "Revenue Management Institute", year: "2022" },
    { title: "Excellence in Organizational Solutions", organization: "Business Software Review", year: "2022" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              {companyInfo.founded} - Present
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Dakota Worldwide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {companyInfo.description} For over a decade, we've been helping organizations solve the fundamental problem of departmental silos affecting revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Bob Dylan Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteComponent className="mb-16" />
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Adapting to Organizational Change
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              In rapidly changing business environments, organizations that can coordinate their departmental activities succeed. Those with departments working in silos struggle with revenue management and fall behind.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Problem Statement */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Silo Problem
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We often see silos in an organization that all have an effect on revenues. Many times a department's goals are out of sync with other departments, creating inefficiencies and missed opportunities.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Dakota has tools that help organizations coordinate the various silo activities and manage revenue. All activities from building a new store to investing in marketing and advertising requires clear knowledge and management of revenues.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Credentials</h3>
              <div className="space-y-3">
                {[
                  "Enterprise-scale development work at McDonald's",
                  "Proven tools tested at Fortune 500 operational scale",
                  "National presence across diverse regional markets", 
                  "15+ years coordinating organizational silo activities"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dakota by the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record of helping organizations coordinate departmental activities and manage revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-slate-50 p-6 rounded-lg">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach to helping organizations coordinate departmental activities and manage revenue effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 shadow-md bg-white text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-slate-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals who understand how to coordinate organizational activities for revenue management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-700">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-slate-600 mb-3">{member.title}</p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.slice(0, 2).map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in developing tools for organizational coordination and revenue management.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-12">
                    <div className="flex items-center mb-2">
                      <Badge variant="outline" className="mr-3">{milestone.year}</Badge>
                      <h3 className="text-lg font-semibold text-gray-900">{milestone.event}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry recognition for our tools and approach to organizational coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="border-0 shadow-md bg-white text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{award.organization}</p>
                  <Badge variant="secondary" className="text-xs">{award.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Coordinate Your Organization?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join organizations that use Dakota tools to coordinate departmental activities and manage revenue effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-gray-300 text-white hover:bg-slate-800 px-8 py-6 text-lg"
            >
              <Link to="/services">
                View Our Tools
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
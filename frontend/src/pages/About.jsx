import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Award, Target, Users, Lightbulb, CheckCircle } from 'lucide-react';
import { companyInfo, teamMembers, stats } from '../data/mock';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes and tangible business impact for every client engagement."
    },
    {
      icon: Users,
      title: "Collaborative Approach", 
      description: "We work as an extension of your team, breaking down silos and fostering cross-departmental alignment."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We continuously evolve our methodologies and tools to stay ahead of industry trends and challenges."
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "We maintain the highest standards of quality in everything we do, from consulting to technology delivery."
    }
  ];

  const milestones = [
    { year: "2010", event: "Founded in Austin, Texas", description: "Dakota Worldwide established with vision to revolutionize revenue optimization" },
    { year: "2012", event: "Locus System Launch", description: "First proprietary tool for site location modeling and analysis" },
    { year: "2015", event: "Major Enterprise Clients", description: "Partnerships with Fortune 500 retailers and service companies" },
    { year: "2018", event: "Synergos Partnership", description: "Strategic data partnership expanding our analytics capabilities" },
    { year: "2020", event: "Cloud Platform Launch", description: "Full migration to cloud-native architecture and modern technology stack" },
    { year: "2022", event: "Open Source Initiative", description: "Launch of open-source business systems philosophy" },
    { year: "2024", event: "Global Expansion", description: "International operations and multi-region deployment capabilities" }
  ];

  const awards = [
    { title: "Best Analytics Platform", organization: "Retail Technology Awards", year: "2023" },
    { title: "Innovation in Business Intelligence", organization: "Austin Tech Excellence", year: "2023" },
    { title: "Top Consulting Firm", organization: "Revenue Management Institute", year: "2022" },
    { title: "Customer Success Excellence", organization: "Business Software Review", year: "2022" }
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
              {companyInfo.description} For over a decade, we've been helping organizations coordinate departmental activities and maximize revenue potential through innovative analytics and strategic consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To break down organizational silos that hinder revenue optimization and empower businesses with the tools, insights, and strategies needed to achieve sustainable growth in an ever-changing marketplace.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We believe that when departments work in harmony toward unified revenue goals, organizations unlock their true potential and create lasting competitive advantages.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To be the global leader in revenue optimization solutions, recognized for our innovative technology, proven methodologies, and commitment to client success.
              </p>
              <div className="space-y-3">
                {[
                  "Industry-leading innovation in revenue analytics",
                  "Trusted partner for enterprise-scale transformations", 
                  "Open-source pioneer in business systems",
                  "Global standard for revenue optimization"
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dakota by the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks to our commitment to delivering measurable results and exceptional value.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
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

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from client relationships to technology development and team collaboration.
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive Dakota Worldwide's vision and deliver exceptional results for our clients.
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to industry leader, discover the key milestones that have shaped Dakota Worldwide's growth and success.
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and organizations worldwide.
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
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how Dakota Worldwide can help your organization break down silos and achieve unprecedented revenue optimization success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Start Your Journey
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
                Explore Our Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
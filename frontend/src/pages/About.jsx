import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Award, Target, Users, Lightbulb, CheckCircle, Mail, Phone } from 'lucide-react';
import { companyInfo, teamMembers, stats, industries, pressReleases } from '../data/mock';
import QuoteComponent from '../components/QuoteComponent';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Field Work by Professionals",
      description: "Our analyst/consultants personally perform field work to ensure accurate, firsthand market intelligence."
    },
    {
      icon: Users,
      title: "Client Partnership", 
      description: "Strategic Planning requires confidential sharing of information and close working relationships."
    },
    {
      icon: Lightbulb,
      title: "Innovative Tools",
      description: "Continuously enhanced software since 1975, including Quintillion developed at McDonald's."
    },
    {
      icon: Award,
      title: "Proven Methodology",
      description: "Proprietary bottom-up methodology for greater accuracy in population estimates and market analysis."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Since {companyInfo.founded}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Dakota Worldwide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {companyInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Bob Dylan Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteComponent className="mb-8" />
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Marketing Research Consulting Group
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dakota Worldwide Corporation is a marketing research consulting group comprised of professionals who have spent their careers in the areas of marketing, retail operations, research, training, management, strategic planning, and site location.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many of the key members of the corporation, both management and consultants, have worked closely together as a group for many years. {companyInfo.founder}, the Chairman of Dakota Worldwide, originally founded Retail Systems in {companyInfo.founded}.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Projects include determining sales projections for stores and networks, macro overviews for planning and expert testimony.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Decision Support Software</h3>
              <p className="text-gray-700 mb-6">
                Dakota has internally developed decision support software including:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Quintillion - geographical executive information system (developed at McDonald's)",
                  "Locus Pro - supermarket site location system",
                  "QSL - quick serve restaurant site location system",
                  "Octane - network planning for retail petroleum",
                  "Shipping - postal & overnight delivery systems",
                  "LocusPharm - drug store site location system"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
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

      {/* Industries Served */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clients include the nation's greatest retailers, manufacturers, developers, bankers and health care providers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-base px-4 py-2"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
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
              Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-slate-700">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-slate-600 mb-3">{member.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                      
                      {member.contact && (
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Phone className="h-4 w-4 mr-2" />
                            {member.contact.phone}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Mail className="h-4 w-4 mr-2" />
                            {member.contact.email}
                          </div>
                        </div>
                      )}
                      
                      {member.expertise && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {member.expertise.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              News & Updates
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pressReleases.map((news, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{news.date}</Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm">{news.summary}</p>
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
            Contact Dakota Worldwide
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our market analysis and research services can help your business make confident investment decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Contact Us
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
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

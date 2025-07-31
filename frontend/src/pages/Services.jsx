import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CheckCircle, ArrowRight, Target, TrendingUp, Users, Eye, Calculator } from 'lucide-react';
import { services } from '../data/mock';

const Services = () => {
  const serviceIcons = {
    'locus': Target,
    'price-defender': TrendingUp,
    'consumer-view': Users,
    'website-monitoring': Eye,
    'quintillion': Calculator
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Departmental Coordination Tools
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tools for Managing Revenue Across Departments
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              All activities from building a new store to investing in marketing and advertising requires clear knowledge and management of revenues. Our tools help coordinate departmental activities that affect organizational revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.id];
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                        <Icon className="h-8 w-8 text-slate-700" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{service.name}</h2>
                        <p className="text-lg text-gray-600">{service.title}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Results</h3>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      asChild
                      className="bg-slate-900 hover:bg-slate-800 text-white"
                    >
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-xl">Core Capabilities</CardTitle>
                        <CardDescription>
                          Tools for coordinating departmental activities
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* McDonald's Credential Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              Enterprise Validation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven at McDonald's Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship tool, Quintillion, was originally developed at McDonald's - one of the world's largest retail operations. This enterprise-scale validation demonstrates our capability to handle complex organizational coordination challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md bg-white text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-slate-900 mb-2">Global Scale</div>
                <div className="text-gray-600">Tested across McDonald's worldwide operations</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md bg-white text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-slate-900 mb-2">Enterprise Proven</div>
                <div className="text-gray-600">Validated by Fortune 500 operational complexity</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md bg-white text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-slate-900 mb-2">Real-World Results</div>
                <div className="text-gray-600">Not theoretical - proven in actual business environment</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solving the Department Coordination Problem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many times a department's goals are out of sync with other departments. Our tools help coordinate these various silo activities to manage revenue effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Identify Silos",
                description: "We help you identify where departments are working at cross-purposes and affecting overall revenue."
              },
              {
                step: "02", 
                title: "Measure Activities",
                description: "Dakota measures virtually every department of every competitor to provide comparative intelligence."
              },
              {
                step: "03",
                title: "Coordinate Goals",
                description: "Our tools help align departmental goals and coordinate activities for better revenue management."
              },
              {
                step: "04",
                title: "Manage Revenue",
                description: "From site selection to marketing spend, coordinate all activities that affect organizational revenue."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Analysis Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Measure Every Department of Every Competitor
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dakota measures virtually every department of every competitor, providing detailed consumer perceptions and avenues for sales growth. This comprehensive intelligence helps coordinate your departmental responses.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Competitor pricing and promotional strategies across departments",
                  "Site selection and expansion patterns",
                  "Marketing campaigns and customer targeting",
                  "Operational changes and service modifications",
                  "Cross-departmental competitive intelligence"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button 
                asChild
                className="bg-slate-900 hover:bg-slate-800 text-white"
              >
                <Link to="/contact">
                  Get Competitive Intelligence
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Monitor</h3>
              <div className="space-y-3">
                {[
                  { department: "Pricing Departments", activity: "Rate changes, promotional strategies" },
                  { department: "Marketing Teams", activity: "Campaign launches, targeting changes" },
                  { department: "Operations", activity: "Service changes, capacity adjustments" },
                  { department: "Real Estate", activity: "Location decisions, expansion plans" },
                  { department: "Customer Service", activity: "Policy changes, service offerings" }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-slate-300 pl-4">
                    <h4 className="font-semibold text-gray-900">{item.department}</h4>
                    <p className="text-gray-600 text-sm">{item.activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Letting Silos Hurt Your Revenue
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get the tools you need to coordinate departmental activities and manage revenue across your entire organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Start Coordinating Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-gray-300 text-white hover:bg-slate-800 px-8 py-6 text-lg"
            >
              <Link to="/tools">
                View Our Technology
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
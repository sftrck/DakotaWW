import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge'; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowRight, Zap, Cloud, Shield, Smartphone, Globe, BarChart } from 'lucide-react';
import { services } from '../data/mock';

const Tools = () => {
  const techFeatures = [
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Scalable, secure cloud infrastructure with 99.9% uptime guarantee and enterprise-grade security."
    },
    {
      icon: Zap,
      title: "Real-Time Analytics",
      description: "Process millions of data points instantly with advanced algorithms and machine learning capabilities."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, SOC 2 compliance, and comprehensive data protection protocols."
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Access all Dakota tools from any device with our responsive web applications and mobile interfaces."
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Multi-region deployment capabilities with localized data processing and compliance standards."
    },
    {
      icon: BarChart,
      title: "Advanced Reporting",
      description: "Customizable dashboards, automated reports, and interactive visualizations for data-driven decisions."
    }
  ];

  const integrations = [
    { name: "Salesforce", category: "CRM" },
    { name: "Microsoft Dynamics", category: "ERP" },
    { name: "SAP", category: "Enterprise" },
    { name: "Oracle", category: "Database" },
    { name: "Tableau", category: "Analytics" },
    { name: "Power BI", category: "Business Intelligence" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Magento", category: "E-commerce" },
    { name: "HubSpot", category: "Marketing" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Enterprise Technology Platform
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Tools & Technology
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Powered by cutting-edge technology and open-source philosophy, our integrated platform delivers unprecedented insights and capabilities for revenue optimization.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>  
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="locus" className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Technology Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Explore each component of our integrated platform designed to optimize different aspects of your revenue operations.
              </p>
              
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 lg:grid-cols-5">
                {services.map((service) => (
                  <TabsTrigger key={service.id} value={service.id} className="text-sm">
                    {service.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold">{service.name}</CardTitle>
                    <CardDescription className="text-lg">{service.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                        <div className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Features</h3>
                        <div className="space-y-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern architecture and best practices to deliver superior performance, security, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techFeatures.map((feature, index) => {
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

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect Dakota tools with your existing technology stack through our comprehensive integration capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-0 shadow-sm bg-slate-50 hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="font-semibold text-gray-900 mb-1">{integration.name}</div>
                  <Badge variant="secondary" className="text-xs">
                    {integration.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your system? We support custom integrations and API connections.
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              <Link to="/contact">
                Discuss Custom Integration
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Open Source Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Source Philosophy
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Dakota Worldwide, we believe in the power of open collaboration and transparency. Our open-source approach to business systems ensures you're never locked into proprietary solutions.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Full access to system code and methodologies",
                  "Customizable solutions that grow with your business",
                  "Community-driven improvements and innovations",
                  "No vendor lock-in or proprietary restrictions"
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
                <Link to="/about">
                  Learn About Our Approach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leasing Options Available</h3>
              <p className="text-gray-700 mb-6">
                Make Dakota tools accessible to your organization with flexible leasing options designed for retailers and consultants.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Basic Package</span>
                  <span className="font-semibold">Starting at $2,500/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Professional Package</span>
                  <span className="font-semibold">Starting at $7,500/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Enterprise Package</span>
                  <span className="font-semibold">Custom pricing</span>
                </div>
              </div>
              <Button 
                asChild
                size="sm"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white"
              >
                <Link to="/contact">
                  Get Pricing Quote
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
            Experience Dakota Technology
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See our tools in action with a personalized demo tailored to your business needs and objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Schedule Demo
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
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
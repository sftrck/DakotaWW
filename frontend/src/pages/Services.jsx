import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CheckCircle, ArrowRight, Target, BarChart2, Compass, Map, Users } from 'lucide-react';
import { services } from '../data/mock';

const Services = () => {
  const serviceIcons = {
    'market-analysis': Target,
    'consumer-research': Users,
    'strategic-planning': Compass,
    'mapping-services': Map,
    'demographic-information': BarChart2
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Dakota Worldwide Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Market Analysis & Research Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Businesses invest heavily in the development of new or the redevelopment of existing outlets. You need to be confident of your returns before you invest. Market Analysis is more than just looking at the demographics around a site.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.id] || Target;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
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

                    {service.requirements && (
                      <div className="mb-6 p-4 bg-slate-50 rounded-lg border-l-4 border-slate-400">
                        <p className="text-gray-700 italic">{service.requirements}</p>
                      </div>
                    )}

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
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
                        <CardTitle className="text-xl">Service Capabilities</CardTitle>
                        <CardDescription>
                          Professional analysis and research services
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

                        {service.subServices && (
                          <div className="mt-6 pt-6 border-t">
                            <h4 className="font-semibold text-gray-900 mb-4">Specialized Services</h4>
                            <div className="space-y-4">
                              {service.subServices.map((subService, idx) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                                  <h5 className="font-medium text-gray-900">{subService.name}</h5>
                                  <p className="text-sm text-gray-600 mt-1">{subService.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {service.products && (
                          <div className="mt-6 pt-6 border-t">
                            <h4 className="font-semibold text-gray-900 mb-4">Products</h4>
                            <div className="space-y-4">
                              {service.products.map((product, idx) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                                  <h5 className="font-medium text-gray-900">{product.name}</h5>
                                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consumer View Highlight */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                Consumer Research
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Measure Every Department of Every Competitor
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Consumer View measures virtually every department of every competitor and provides detailed consumer and customer perceptions, showing you how well you're meeting your customers' needs and where you could improve.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Knowing the strengths and weaknesses of your competition, you can leverage your strengths against your competition's weaknesses.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Consumer sensitivities, images and customer demographics for every major competitor",
                  "Determine what market positions are serviceable",
                  "Identify where competition is vulnerable",
                  "Compare information to previous surveys to demonstrate trends"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Consumer Research Products</h3>
              <div className="space-y-4">
                {[
                  { name: "Consumer View™", desc: "Store Positioning Survey" },
                  { name: "800 Consumer View™", desc: "Automated Customer Survey" },
                  { name: "Online Consumer View™", desc: "Digital survey platform" },
                  { name: "Image Wave™", desc: "Brand perception studies" },
                  { name: "Consumer Needs Analysis™", desc: "Deep customer insights" },
                  { name: "Sales Enhancer", desc: "Revenue optimization tool" }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-slate-400 pl-4">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
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
            Be Confident of Your Returns Before You Invest
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact Dakota Worldwide for professional market analysis, site location studies, and consumer research services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Request a Consultation
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
                View Our Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

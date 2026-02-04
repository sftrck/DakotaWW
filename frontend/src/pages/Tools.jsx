import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge'; 
import { ArrowRight, Monitor, Map, Database, FileText, Download } from 'lucide-react';
import { products, dataProducts } from '../data/mock';

const Tools = () => {
  const productIcons = {
    'quintillion': Monitor,
    'locus-pro': Map,
    'qsl': Map,
    'octane': Database,
    'shipping': FileText,
    'locuspharm': Map
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Dakota Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Decision Support Software
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Dakota has internally developed decision support software including Quintillion - a geographical executive information system developed at McDonald's, Locus Pro, and specialized site location systems for various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Quintillion Feature Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge variant="secondary" className="mb-4">
                Developed at McDonald's
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quintillion 4.50
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                The Ultimate Decision Support System
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {products.find(p => p.id === 'quintillion')?.description}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {products.find(p => p.id === 'quintillion')?.history}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quintillion can be used as:</h3>
                <div className="space-y-3">
                  {products.find(p => p.id === 'quintillion')?.uses.map((use, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                asChild
                className="bg-slate-900 hover:bg-slate-800 text-white"
              >
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div>
              <Card className="border-0 shadow-lg mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Information Sources</CardTitle>
                  <CardDescription>
                    Quintillion provides access to a variety of information sources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {products.find(p => p.id === 'quintillion')?.dataSources.map((source, idx) => (
                      <div key={idx} className="bg-slate-50 p-3 rounded-lg text-sm text-gray-700">
                        {source}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">System Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {products.find(p => p.id === 'quintillion')?.components.map((component, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-slate-50 rounded-lg">
                        <Monitor className="h-5 w-5 text-slate-600 mr-3" />
                        <span className="text-gray-700 font-medium">{component}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locus Pro Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <Badge variant="secondary" className="mb-4">
                Since 1975
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Locus Pro
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Supermarket Site Location System
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {products.find(p => p.id === 'locus-pro')?.description}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{products.find(p => p.id === 'locus-pro')?.history}"
              </p>
              <p className="text-gray-600 mb-6 text-sm">
                {products.find(p => p.id === 'locus-pro')?.credits}
              </p>

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
            
            <div className="lg:order-1">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Locus Features</CardTitle>
                  <CardDescription>
                    Advanced gravity modeling and analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {products.find(p => p.id === 'locus-pro')?.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start p-3 bg-slate-50 rounded-lg">
                        <Map className="h-5 w-5 text-slate-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Site Location Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific solutions for various retail and service sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => !['quintillion', 'locus-pro'].includes(p.id)).map((product) => {
              const Icon = productIcons[product.id] || Map;
              return (
                <Card key={product.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.title}</p>
                    <p className="text-gray-700 text-sm">{product.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Products */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enhanced by Synergos Technologies Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All of Dakota's modeling systems are enhanced by the use of Synergos Technologies data sets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dataProducts.map((data, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{data.name}</h3>
                      <p className="text-sm text-gray-500">{data.provider}</p>
                    </div>
                    {data.updateFrequency && (
                      <Badge variant="secondary">{data.updateFrequency}</Badge>
                    )}
                  </div>
                  <p className="text-gray-700">{data.description}</p>
                  {data.details && (
                    <p className="text-gray-600 text-sm mt-3 italic">{data.details}</p>
                  )}
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
            Request a Product Demonstration
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See our decision support software in action with a personalized demonstration tailored to your industry and business needs.
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
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;

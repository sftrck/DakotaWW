import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Database, Download, RefreshCw, MapPin, Users, TrendingUp } from 'lucide-react';
import { dataProducts } from '../data/mock';

const DataSolutions = () => {
  const dataFeatures = [
    {
      icon: Database,
      title: "Comprehensive Datasets",
      description: "Access to rich demographic, economic, and competitive intelligence data from trusted sources."
    },
    {
      icon: RefreshCw,
      title: "Regular Updates",
      description: "Continuously updated data ensures you're always working with the most current market information."
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Data available in various formats including CSV, JSON, XML, and direct API integration."
    },
    {
      icon: MapPin,
      title: "Geographic Coverage",
      description: "National, regional, and local data coverage with detailed geographic segmentation."
    },
    {
      icon: Users,
      title: "Demographic Insights",
      description: "Detailed population demographics, consumer behavior patterns, and market characteristics."
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Competitive landscape analysis, industry trends, and market opportunity identification."
    }
  ];

  const useCases = [
    {
      title: "Site Selection",
      description: "Use demographic and geographic data to identify optimal locations for new retail outlets or service centers.",
      benefits: ["Reduce location risk", "Improve ROI predictions", "Accelerate expansion decisions"]
    },
    {
      title: "Market Analysis",
      description: "Comprehensive market intelligence to understand competitive landscape and identify growth opportunities.",
      benefits: ["Competitive positioning", "Market share analysis", "Trend identification"]
    },
    {
      title: "Customer Segmentation",
      description: "Detailed demographic data enables precise customer segmentation and targeted marketing strategies.",
      benefits: ["Improved targeting", "Higher conversion rates", "Personalized experiences"]
    },
    {
      title: "Performance Benchmarking",
      description: "Compare your performance against industry standards and competitive benchmarks.",
      benefits: ["Performance insights", "Gap analysis", "Strategic planning"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Premium Data Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data Solutions & Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access comprehensive datasets and market intelligence through our partnership with Synergos Technologies, providing the foundation for data-driven decision making.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Explore Data Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>  
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Strategic Partnership
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Powered by Synergos Technologies
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our data solutions are powered by our strategic partnership with Synergos Technologies, based in Austin, Texas. This collaboration ensures access to premium, regularly updated datasets that drive accurate analysis and informed decision-making.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Austin, Texas-based data intelligence leader",
                  "Over 15 years of market data expertise",
                  "Trusted by Fortune 500 companies",
                  "Comprehensive quality assurance processes"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Quality Guarantee</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Data Accuracy</span>
                  <Badge>99.5%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Update Frequency</span>
                  <Badge>Monthly/Quarterly</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Coverage</span>
                  <Badge>National + Regional</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Support Response</span>
                  <Badge>&lt; 24 Hours</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Data Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive catalog of data products designed to support various business intelligence and analytics needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {dataProducts.map((product, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
                    <Badge variant="outline">{product.provider}</Badge>
                  </div>
                  <CardDescription className="text-lg">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Coverage</h4>
                      <p className="text-gray-700">{product.coverage}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Update Frequency</h4>
                      <p className="text-gray-700">{product.updateFrequency}</p>
                    </div>
                    <Button 
                      asChild
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white mt-6"
                    >
                      <Link to="/contact">
                        Request Access
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Data Solution Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data solutions provide comprehensive capabilities to support your analytics and business intelligence requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataFeatures.map((feature, index) => {
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

      {/* Use Cases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Data-Driven Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our data solutions can be applied across various business scenarios to drive better outcomes and strategic decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Data Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Custom Data Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Need specific data not available in our standard packages? We offer custom data collection, processing, and integration services tailored to your unique business requirements.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Custom data collection and aggregation",
                  "Proprietary dataset development",
                  "Real-time data feeds and APIs",
                  "Data integration and transformation services",
                  "Ongoing data maintenance and updates"
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
                  Discuss Custom Requirements
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Data Integration Options</h3>
              <div className="space-y-4">
                {[
                  { method: "API Integration", description: "Real-time data access via RESTful APIs" },
                  { method: "Bulk Downloads", description: "Scheduled exports in your preferred format" },
                  { method: "Database Connection", description: "Direct database connections for seamless access" },
                  { method: "Cloud Storage", description: "Secure cloud-based data repositories" }
                ].map((option, idx) => (
                  <div key={idx} className="border-l-4 border-slate-300 pl-4">
                    <h4 className="font-semibold text-gray-900">{option.method}</h4>
                    <p className="text-gray-600 text-sm">{option.description}</p>
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
            Access Premium Data Intelligence
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your decision-making with comprehensive, accurate, and timely data from our trusted partners at Synergos Technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Get Data Package Quote
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
                Explore Our Technology
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataSolutions;
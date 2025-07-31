import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, TrendingUp, Target, Users, BarChart3, Zap, Shield } from 'lucide-react';
import { companyInfo, services, testimonials, stats } from '../data/mock';
import QuoteComponent from '../components/QuoteComponent';

const Home = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Organizational Coordination Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Coordinate Silo Activities,
              <br />
              <span className="text-slate-700">Manage Revenue</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We often see silos in an organization that all have an effect on revenues. Many times a department's goals are out of sync with other departments. Dakota has tools that help organizations coordinate the various silo activities and manage revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg"
              >
                <Link to="/contact">
                  Coordinate Your Organization
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg"
              >
                <Link to="/services">
                  View Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bob Dylan Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteComponent />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tools for Coordinating Organizational Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All activities from building a new store to investing in marketing and advertising requires clear knowledge and management of revenues. Our tools help coordinate these various departmental activities, including Quintillion - originally developed at McDonald's.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const icons = [Target, TrendingUp, Users];
              const Icon = icons[index];
              
              return (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-100"
            >
              <Link to="/services">
                View All Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Silo Problem in Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many times a department's goals are out of sync with other departments, affecting overall revenue performance. Dakota provides practical solutions to coordinate these activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Measure Every Department</h3>
              <p className="text-gray-600">
                Dakota measures virtually every department of every competitor, providing comprehensive intelligence for coordinated decision-making.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Coordinate Activities</h3>
              <p className="text-gray-600">
                Our tools help organizations coordinate the various silo activities, ensuring departments work together rather than at cross-purposes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Manage Revenue</h3>
              <p className="text-gray-600">
                From building new stores to marketing investments, every activity requires clear knowledge and management of revenues across departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Organizations That Coordinate Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Dakota has helped organizations break down silos and coordinate departmental activities for better revenue management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.results}
                    </Badge>
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
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
            Stop letting departmental silos hurt your revenue. Join organizations that use Dakota tools to coordinate activities and manage revenue effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Get Started Today
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
                Explore Our Tools
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
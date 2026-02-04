import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, Clock, Send, MapPin } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      inquiryType: '',
      message: ''
    });
  };

  const inquiryTypes = [
    "General Inquiry",
    "Market Analysis",
    "Site Location Study",
    "Consumer Research",
    "Strategic Planning",
    "Product Demo Request",
    "Training Programs",
    "Data Solutions"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Dakota Worldwide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us for market analysis, site location studies, consumer research, and strategic planning services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        className="mt-1"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              {/* Elliott Olson Contact */}
              <Card className="border-0 shadow-lg mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">{contactInfo.name}</CardTitle>
                  <CardDescription>
                    Chairman & CEO
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-slate-600 mr-3" />
                    <div>
                      <p className="font-medium">{contactInfo.phone}</p>
                      <p className="text-sm text-gray-600">Toll Free: {contactInfo.tollFree}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-slate-600 mr-3" />
                    <div>
                      <p className="font-medium">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-slate-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Corporate Office</p>
                      <p className="text-gray-600">{contactInfo.address.street}</p>
                      <p className="text-gray-600">{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-slate-600 mr-3" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">Weekdays: {contactInfo.hours.weekdays}</p>
                      <p className="text-gray-600">Weekends: {contactInfo.hours.weekends}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services Available */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Services Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Market Analysis & Site Location Studies",
                      "Consumer Research & Surveys",
                      "Strategic Planning",
                      "Mapping Services & Demographics",
                      "Quintillion & Locus Pro Demonstrations",
                      "Training & Support Programs"
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
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

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Supermarkets & Grocery",
              "Quick Serve Restaurants",
              "Retail Petroleum",
              "Drug Stores & Pharmacy",
              "Banking & Financial",
              "Mass Merchandising",
              "Health Care Providers",
              "Real Estate Developers",
              "Manufacturers",
              "Postal & Delivery",
              "Food Cooperatives",
              "Convenience Stores"
            ].map((industry, idx) => (
              <Card key={idx} className="border-0 shadow-sm bg-white">
                <CardContent className="p-4 text-center">
                  <span className="text-gray-700 font-medium">{industry}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What types of market analysis do you provide?",
                answer: "We provide Site Location Analysis, Sales Projections, Acquisition Analysis, Network Strategies, and Competitive Analysis services."
              },
              {
                question: "What is Quintillion and how was it developed?",
                answer: "Quintillion is a Decision Support and Executive Information System that was originally developed at McDonald's Corporation. Dakota obtained ownership in 1994 and has since moved it to the PC platform."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We serve retailers, manufacturers, developers, bankers, health care providers, and have specialized tools for supermarkets, quick serve restaurants, retail petroleum, and pharmacy/drug stores."
              },
              {
                question: "Do you provide training for your software products?",
                answer: "Yes, we offer training programs including the annual Locus Professional Conference and customized training for Quintillion and other Dakota systems."
              },
              {
                question: "What data sources do your systems use?",
                answer: "All of Dakota's modeling systems are enhanced by Synergos Technologies data sets including PopStats, LandScape, WorkPlace, and Spending Patterns data."
              },
              {
                question: "How long has Dakota Worldwide been in business?",
                answer: "Dakota Worldwide was originally founded as Retail Systems in 1975 by Elliott W. Olson, giving us over 50 years of experience in market analysis and site location."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md bg-slate-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

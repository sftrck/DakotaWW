import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Users } from 'lucide-react';
import { contactInfo, officeLocations } from '../data/mock';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    subject: '',
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
    // Mock form submission
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      inquiryType: '',
      subject: '',
      message: ''
    });
  };

  const inquiryTypes = [
    "General Inquiry",
    "Request Demo",
    "Pricing Information",
    "Technical Support",
    "Partnership Opportunities", 
    "Training Programs",
    "Data Solutions",
    "Consulting Services"
  ];

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Chat with Sales",
      description: "Get immediate answers to your questions",
      action: "Start Chat",
      available: "Available now"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "See Dakota tools in action",
      action: "Book Demo",
      available: "Next available: Today"
    },
    {
      icon: Users,
      title: "Speak with Expert",
      description: "Discuss your specific requirements",
      action: "Request Call",
      available: "Response within 2 hours"
    }
  ];

  const offices = officeLocations;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Dakota Worldwide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your revenue operations? Our experts are here to help you understand how Dakota solutions can drive growth for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="border-0 shadow-md group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{method.description}</p>
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {method.available}
                    </Badge>
                    <Button 
                      size="sm"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
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
                          required
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
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                        className="mt-1"
                      />
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
                        placeholder="Tell us about your needs and how we can help..."
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
                Get in Touch
              </h2>
              
              {/* Primary Contact Info */}
              <Card className="border-0 shadow-md mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-slate-600 mr-3" />
                    <div>
                      <p className="font-medium">{contactInfo.phone}</p>
                      <p className="text-sm text-gray-600">Monday - Friday, {contactInfo.hours.weekdays}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-slate-600 mr-3" />
                    <div>
                      <p className="font-medium">{contactInfo.email}</p>
                      <p className="text-sm text-gray-600">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-slate-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p className="text-gray-600">{contactInfo.address.street}</p>
                      <p className="text-gray-600">{contactInfo.address.suite}</p>
                      <p className="text-gray-600">
                        {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                      </p>
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

              {/* Office Locations */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Office Locations</CardTitle>
                  <CardDescription>
                    Multiple offices across Texas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="border-l-4 border-slate-300 pl-4">
                        <div className="flex items-center mb-2">
                          <h4 className="font-semibold text-gray-900">{office.city}</h4>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {office.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          {office.address.street}, {office.address.suite}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          {office.address.city}, {office.address.state} {office.address.zip}
                        </p>
                        <p className="text-sm text-gray-600">{office.phone}</p>
                        <p className="text-sm text-gray-600">{office.email}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about Dakota Worldwide services and solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does implementation typically take?",
                answer: "Implementation timelines vary based on scope and complexity, but most clients see initial value within 4-6 weeks, with full deployment completed in 12-16 weeks."
              },
              {
                question: "Do you offer training for our team?",
                answer: "Yes, we provide comprehensive training programs including online courses, on-site workshops, and certification programs for all Dakota systems."
              },
              {
                question: "What industries do you serve?",
                answer: "We primarily serve retail, hospitality, healthcare, and service industries, with expertise in both B2B and B2C revenue optimization."
              },
              {
                question: "Can Dakota systems integrate with our existing tools?",
                answer: "Absolutely. Our platform supports integration with most major CRM, ERP, and analytics platforms including Salesforce, SAP, Microsoft Dynamics, and more."
              },
              {
                question: "What support options are available?",
                answer: "We offer 24/7 technical support, dedicated customer success managers, regular health checks, and ongoing optimization consulting."
              },
              {
                question: "How do you ensure data security?",
                answer: "We maintain SOC 2 compliance, use bank-level encryption, and follow strict data governance protocols to ensure your information remains secure."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
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
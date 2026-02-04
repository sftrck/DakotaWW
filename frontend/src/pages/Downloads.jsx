import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { FileText, Download, Calendar, BookOpen, FileSpreadsheet, Users } from 'lucide-react';

const Downloads = () => {
  const downloads = [
    {
      category: "Locus Pro Documentation",
      icon: BookOpen,
      files: [
        {
          name: "Locus ProView Quick Guide",
          description: "Quick start guide for Locus ProView software",
          filename: "Locus ProView Quick Guide.pdf",
          size: "367 KB",
          type: "User Guide"
        },
        {
          name: "Locus ProView Quick Guide (January 2011)",
          description: "Updated quick guide with new features",
          filename: "Locus ProView Quick Guide Jan 2011.pdf",
          size: "559 KB",
          type: "User Guide"
        },
        {
          name: "Locus 2000 R2 Manual",
          description: "Complete reference manual for Locus 2000 Release 2",
          filename: "Locus2000_R2.pdf",
          size: "5.8 MB",
          type: "Reference Manual"
        }
      ]
    },
    {
      category: "Conference Materials",
      icon: Users,
      files: [
        {
          name: "Locus Conference June 2016",
          description: "Information about the 2016 Locus Professional Conference",
          filename: "Locus Conference June 2016.pdf",
          size: "56 KB",
          type: "Conference Info"
        },
        {
          name: "2015 Locus Conference Agenda",
          description: "Detailed agenda for the 2015 Locus Professional Conference",
          filename: "Locus Conference Agenda 2015.pdf",
          size: "17 KB",
          type: "Agenda"
        },
        {
          name: "2015 Locus Agenda Letter",
          description: "Welcome letter and overview for the 2015 conference",
          filename: "2015 Locus Agenda Letter.pdf",
          size: "196 KB",
          type: "Conference Letter"
        },
        {
          name: "Locus Conference Registration Form",
          description: "Registration form for Locus Professional Conference",
          filename: "Locus Conference Registration form.pdf",
          size: "17 KB",
          type: "Registration"
        }
      ]
    },
    {
      category: "Research & Reports",
      icon: FileSpreadsheet,
      files: [
        {
          name: "Center Store 2000",
          description: "Syndicated report describing market trends affecting center-store sales in retail and supermarket industries",
          filename: "Center Store 2000.pdf",
          size: "1.2 MB",
          type: "Syndicated Study"
        },
        {
          name: "Grocery Food Deserts 2010",
          description: "Analysis of food desert opportunities and solutions for retailers",
          filename: "GROCERY FOOD DESERTS 2010.pdf",
          size: "10 KB",
          type: "Research Report"
        }
      ]
    },
    {
      category: "Product Updates & Release Notes",
      icon: Calendar,
      files: [
        {
          name: "New Features - December 2001",
          description: "Release notes and new features added in December 2001",
          filename: "New FeaturesDecember2001.pdf",
          size: "2.2 MB",
          type: "Release Notes"
        },
        {
          name: "New Features - February 2001",
          description: "Release notes and new features added in February 2001",
          filename: "New FeaturesFebruary2001.pdf",
          size: "127 KB",
          type: "Release Notes"
        },
        {
          name: "New Features - October 2000",
          description: "Release notes and new features added in October 2000",
          filename: "New FeaturesOctober2000.pdf",
          size: "202 KB",
          type: "Release Notes"
        },
        {
          name: "New Features - August 2000",
          description: "Release notes and new features added in August 2000",
          filename: "New FeaturesAugust2000.pdf",
          size: "137 KB",
          type: "Release Notes"
        }
      ]
    },
    {
      category: "Forms & Orders",
      icon: FileText,
      files: [
        {
          name: "Order Form",
          description: "Product and service order form",
          filename: "WM_order.pdf",
          size: "103 KB",
          type: "Order Form"
        }
      ]
    }
  ];

  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Downloads & Documentation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access product documentation, user guides, research reports, conference materials, and other resources from Dakota Worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {downloads.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                      <CategoryIcon className="h-6 w-6 text-slate-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.files.map((file, fileIndex) => (
                      <Card key={fileIndex} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg leading-tight">{file.name}</CardTitle>
                              <CardDescription className="mt-1">
                                {file.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="text-xs">
                                {file.type}
                              </Badge>
                              <span className="text-sm text-gray-500">{file.size}</span>
                            </div>
                          </div>
                          <Button 
                            onClick={() => handleDownload(file.filename)}
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                            data-testid={`download-${file.filename.replace(/\s/g, '-').toLowerCase()}`}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Additional Resources?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you need access to additional documentation, software updates, or training materials, please contact us directly.
            </p>
            <Button 
              asChild
              className="bg-slate-900 hover:bg-slate-800 text-white"
            >
              <a href="/contact">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;

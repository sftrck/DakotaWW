// Mock data for Dakota Worldwide website - Authentic content from original website

export const companyInfo = {
  name: "Dakota Worldwide",
  tagline: "Analysis of Return and Quantification of Risk for Capital Investments",
  description: "Dakota Worldwide Inc. is primarily involved in the analysis of return and the quantification of risk for capital investments with a spatial dimension. Clients include the nation's greatest retailers, manufacturers, developers, bankers and health care providers.",
  philosophy: "Bob Dylan said \"The times they are a-changing.\" Your customer's wants and needs, your competition's style, diversity and intensity are also a-changing. Through various tools such as Consumer View, and website monitoring, Dakota measures virtually every department of every competitor providing detailed consumer perceptions and avenues for sales growth.",
  founded: "1975",
  founder: "Elliott W. Olson",
  credentials: "Originally founded as Retail Systems in 1975. Quintillion was developed at McDonald's Corporation.",
  presence: "Nationwide service delivery from Minneapolis, Minnesota"
};

export const services = [
  {
    id: "market-analysis",
    name: "Market Analysis",
    title: "Site Location Analysis & Sales Projections",
    description: "Businesses invest heavily in the development of new or the redevelopment of existing outlets. You need to be confident of your returns before you invest. Market Analysis is more than just looking at the demographics around a site.",
    features: [
      "Field work performed personally by our professional analyst/consultants",
      "Quantifying the trade area",
      "Carefully assessing competition",
      "Evaluating the site",
      "Accurately projecting sales using the most sophisticated techniques"
    ],
    subServices: [
      {
        name: "Network Strategies",
        description: "How can sales, market share and profit be optimized for the entire marketplace and network of stores? Consider current effectiveness, new site locations, expansions of existing stores, and upgrading (without expanding) facilities."
      },
      {
        name: "Site Analysis",
        description: "Where should a store be located to maximize sales? What is the impact on your other stores?"
      },
      {
        name: "Sales Forecasting",
        description: "What are the potential sales to be realized from opening a new retail store? What if we expand or change the format? What are the effects on your sales performances should a new competitor enter the market?"
      },
      {
        name: "Acquisition & Investment Analysis",
        description: "Will a particular acquisition or investment produce the sales levels necessary to achieve the desired return? What is the sales potential today and in the future?"
      }
    ],
    benefits: [
      "Demonstrates sales potential in trade areas",
      "Projects sales for various operational options",
      "Provides site/location comparisons",
      "Develop market-wide strategies or single-site analysis"
    ]
  },
  {
    id: "consumer-research",
    name: "Consumer Research",
    title: "Consumer View™ & Related Services",
    description: "Consumer Research offers several products to fit your specific needs. Consumer View measures virtually every department of every competitor and provides detailed consumer and customer perceptions, showing you how well you're meeting your customers' needs and where you could improve.",
    features: [
      "Consumer View™ Store Positioning Survey",
      "800 Consumer View™ Automated Customer Survey",
      "Online Consumer View™",
      "Image Wave™ Studies",
      "Consumer Needs Analysis™",
      "Sales Enhancer"
    ],
    highlights: [
      "Knowing the strengths and weaknesses of your competition, you can leverage your strengths against your competition's weaknesses",
      "Provides consumer sensitivities, images and customer demographics for every major competitor",
      "Helps determine what market positions are serviceable and where the competition is vulnerable"
    ],
    benefits: [
      "Measure every department of every competitor",
      "Detailed consumer perceptions and avenues for sales growth",
      "Compare information to previous surveys to demonstrate trends and market changes"
    ]
  },
  {
    id: "strategic-planning",
    name: "Strategic Planning",
    title: "In-Depth Analysis for Optimal Results",
    description: "Strategic planning is an in-depth analysis of real estate, operational and marketing issues tempered by the realistic capabilities of the client.",
    features: [
      "Current and desired sales analysis",
      "Current and desired profitability assessment",
      "Lease amounts and lengths evaluation",
      "Age of facilities and improvement possibilities",
      "Changing population characteristics analysis",
      "Current and desired format assessment",
      "Current and expected competitive positions",
      "Current and desired operational levels",
      "Capital expenditure requirements and capabilities",
      "Personnel capabilities evaluation"
    ],
    requirements: "Strategic Planning requires the confidential sharing of information, combining the proper mix of our various capabilities with those of the client. Together, we build the overall strategy and prioritize tactics as parts of the strategy.",
    benefits: [
      "Comprehensive real estate analysis",
      "Operational optimization strategies",
      "Marketing issue resolution",
      "Customized planning based on client capabilities"
    ]
  },
  {
    id: "mapping-services",
    name: "Mapping Services",
    title: "Geographic Information Services",
    description: "The business world is turning to business mapping for comprehensive answers to complex issues. Business mapping (geographical information services) integrates information with geography providing you with visual solutions to the most complex issues.",
    features: [
      "Locate your competitors throughout your market, an entire region or the country",
      "Display the demographic characteristics of a market to find optimal site location",
      "Formulate merchandising strategies by researching the history of demographic trends in your market",
      "Analyze your customers shopping habits by locating their home or place of work"
    ],
    products: [
      {
        name: "Customer Origin Studies",
        description: "Customer origin studies show where a store's customers live or work. Identifying the extent of a store's trade area is just one of many possible benefits. When combined with demographic characteristics, economic profiles can be exposed providing insight into social fences that may be constricting your trade area."
      }
    ],
    benefits: [
      "Understand the extent of your trade area",
      "Recognize social fences that block market penetration",
      "Reduce advertising costs by identifying where your core customers are located",
      "Analyze entire metro areas or regions for a fraction of traditional research costs"
    ]
  },
  {
    id: "demographic-information",
    name: "Demographic Information",
    title: "Census Data & Reports",
    description: "With hundreds of traditional Census demographic variables, business decisions can be arrived at with confidence and clarity. Several pre-designed reports in mile ring increments or spreadsheet form facilitate extensive analysis.",
    features: [
      "Custom variable listings made-to-order to your specifications",
      "Data available at national, state, county, MSA, place, or Census block group levels",
      "Import into most spreadsheet and mapping software packages",
      "Population forecasts by block group"
    ],
    benefits: [
      "Confidence and clarity in business decisions",
      "Extensive analysis capabilities",
      "Flexible data formats",
      "Custom reporting options"
    ]
  }
];

export const products = [
  {
    id: "quintillion",
    name: "Quintillion",
    title: "The Ultimate Decision Support System (Developed at McDonald's)",
    description: "Quintillion was initially developed by the McDonald's Corporation to automate the evaluation of market potential, market opportunities, store performance, trade area delineation and market promotions. In 1994, Dakota Marketing obtained ownership of Quintillion.",
    version: "4.50",
    history: "Quintillion is a Decision Support and Executive Information System allowing you to manage and analyze all your company data. Dakota Worldwide has moved Quintillion from a workstation to the PC platform, thus significantly reducing its cost.",
    uses: [
      "A general delivery tool to display mapping information across an enterprise",
      "A well-focused Executive Information System (EIS) tool customized for a specific group of executives",
      "A site location tool to help you find those hard to get locations",
      "An advertising and promotion manager",
      "A micro planner",
      "A frequent shopper administrator"
    ],
    dataSources: [
      "Maps",
      "Photographs",
      "Video",
      "Sound",
      "CAD Drawings",
      "Business or Scientific Charts",
      "Satellite Imagery",
      "ASCII Files",
      "dBase, Lotus, Excel",
      "Any database server supported by QELIB or ODBC (Oracle, Sybase, etc.)"
    ],
    components: [
      "Quintillion VDB",
      "Map Administrator",
      "MapInfo®"
    ]
  },
  {
    id: "locus-pro",
    name: "Locus Pro",
    title: "Supermarket Site Location System",
    description: "Locus Pro is a supermarket site location system that has been continuously enhanced since its creation in 1975. It uses a gravity model for trade area analysis.",
    features: [
      "Google Maps integration through Locus™ ProView",
      "Trade areas displayed from Google Map's map, satellite, hybrid, and terrain views",
      "Interactive placemarks for retail store locations",
      "Lifestyle data segmentation capability",
      "Gravity modeling for accurate trade area delineation"
    ],
    history: "While we have continually enhanced Locus since its creation in 1975 and added the ability to segment the market four years ago using lifestyle data, the ability to interface with Google Maps has caused the most buzz.",
    credits: "Carol Murphy, the system czar since 1998, has been the most innovative and creative force behind gravity modeling since Locus was developed."
  },
  {
    id: "qsl",
    name: "QSL",
    title: "Quick Serve Restaurant Site Location System",
    description: "A specialized site location system designed specifically for quick serve restaurants, providing accurate sales projections and market analysis."
  },
  {
    id: "octane",
    name: "Octane",
    title: "Network Planning System for Retail Petroleum",
    description: "A comprehensive network planning system designed for the retail petroleum industry."
  },
  {
    id: "shipping",
    name: "Shipping",
    title: "Site Location for Postal & Overnight Delivery",
    description: "A site location program specifically designed for postal and overnight delivery systems."
  },
  {
    id: "locuspharm",
    name: "LocusPharm",
    title: "Drug Store Site Location System",
    description: "A specialized site location system designed for drug stores and pharmacy locations."
  }
];

export const dataProducts = [
  {
    name: "STI: PopStats",
    provider: "Synergos Technologies",
    description: "Population estimates and projections by block group for the United States",
    details: "Greater accuracy achieved with a proprietary bottom-up methodology starting at ZIP+4 level with over 28 million records",
    updateFrequency: "Quarterly"
  },
  {
    name: "STI: LandScape",
    provider: "Synergos Technologies",
    description: "Competitive landscape and market intelligence data",
    updateFrequency: "Monthly"
  },
  {
    name: "STI: WorkPlace",
    provider: "Synergos Technologies",
    description: "Employment and workplace data for market analysis"
  },
  {
    name: "STI: Spending Patterns",
    provider: "Synergos Technologies",
    description: "Consumer spending pattern data for retail analysis"
  }
];

export const syndicatedStudies = [
  {
    name: "The Center Store",
    description: "Syndicated report describing the market trends that are eroding center-store sales in the retail and supermarket industries."
  },
  {
    name: "The Natural Foods Report",
    description: "National telephone, internet and omnibus survey on the Natural Foods Industry. Subjects covered include natural and organic foods/products, dietary and botanical supplements, health issues/concerns, motivations in purchasing natural products, demographics, media and Internet use."
  }
];

export const trainingPrograms = [
  {
    name: "Locus Professional Conference",
    description: "Annual conference for Locus Professional users featuring training, updates, and networking opportunities",
    location: "Minneapolis, Minnesota area"
  },
  {
    name: "Quintillion Training",
    description: "Comprehensive training on the Quintillion Decision Support System"
  },
  {
    name: "Market Analysis Workshops",
    description: "Professional training on market analysis methodologies and tools"
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    title: "VP of Operations",
    company: "National Retailer",
    quote: "Dakota's tools helped us coordinate our site selection, pricing, and marketing teams. The Consumer View analysis provided insights we couldn't get anywhere else.",
    results: "Improved market positioning"
  },
  {
    name: "Michael Chen",
    title: "Chief Revenue Officer", 
    company: "Regional Supermarket Chain",
    quote: "Using Locus Pro for site selection has been invaluable. The gravity modeling provides accurate trade area projections that have proven reliable time after time.",
    results: "Better site selection accuracy"
  },
  {
    name: "Lisa Rodriguez",
    title: "Director of Strategy",
    company: "Quick Service Restaurant Group",
    quote: "Quintillion gives us the enterprise-wide view we needed to make coordinated decisions across our organization. The McDonald's pedigree shows in its sophistication.",
    results: "Enterprise-wide coordination"
  }
];

export const teamMembers = [
  {
    name: "Elliott W. Olson",
    title: "Chairman & CEO",
    bio: "Elliott Olson originally founded Retail Systems in 1975 and has built Dakota Worldwide into the nation's foremost authority in market analysis. He leads a team of professionals who have spent their careers in marketing, retail operations, research, training, management, strategic planning, and site location.",
    contact: {
      phone: "800-465-4505 ext 204",
      email: "e.olson@dakotaww.com"
    }
  },
  {
    name: "Carol Murphy",
    title: "System Czar",
    bio: "Carol Murphy has been the system czar since 1998 and has been the most innovative and creative force behind gravity modeling since Locus was developed.",
    expertise: ["Locus Professional", "Gravity Modeling", "System Development"]
  }
];

export const stats = [
  {
    number: "50+",
    label: "Years Experience",
    description: "Serving retailers since 1975"
  },
  {
    number: "Nation's",
    label: "Greatest Clients",
    description: "Retailers, manufacturers, developers, bankers, health care providers"
  },
  {
    number: "Complete",
    label: "Market Coverage",
    description: "Nationwide service delivery"
  },
  {
    number: "McDonald's",
    label: "Proven Technology",
    description: "Quintillion developed at McDonald's"
  }
];

export const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/tools" },
  { name: "Data Solutions", path: "/data" },
  { name: "Training", path: "/training" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

export const contactInfo = {
  name: "Elliott Olson",
  phone: "952-835-4505",
  tollFree: "800-465-4505",
  email: "e.olson@dakotaww.com",
  address: {
    street: "4801 West 81st Street, Suite 105",
    city: "Minneapolis",
    state: "MN",
    zip: "55437"
  },
  hours: {
    weekdays: "8:00 AM - 5:00 PM CST",
    weekends: "Closed"
  }
};

export const industries = [
  "Retailers",
  "Manufacturers",
  "Developers",
  "Bankers",
  "Health Care Providers",
  "Petroleum",
  "Restaurants",
  "Pharmacy/Drug Stores",
  "Grocery/Supermarkets",
  "Banking",
  "Mass Merchandising"
];

export const pressReleases = [
  {
    date: "January 17, 2011",
    title: "Dakota Worldwide announces introduction of Locus™ ProView",
    summary: "Dakota Worldwide links Locus™ Professional with Google Maps bringing the full array of maps and aerials to a gravity model.",
    content: "Dakota Worldwide Corporation has successfully completed its trial runs of the new Locus™ ProView which links Google Maps to their gravity model. Trade areas can now be displayed from Google Map's map, satellite, hybrid, and terrain views."
  },
  {
    date: "July 1, 2010",
    title: "Dakota Worldwide Announces Quarterly Population Estimates",
    summary: "Dakota Worldwide in conjunction with Synergos Technologies has announced the release of the 2010 2nd quarter population forecasts by block group for the US."
  },
  {
    date: "April 12, 2010",
    title: "Food Deserts: The New Opportunity",
    summary: "Analysis of food desert opportunities and solutions for retailers and supermarket operators.",
    content: "Dakota Worldwide has been instrumental in placing successful big box supermarkets, neighborhood stores, food cooperatives, and limited assortment stores in food deserts."
  }
];

// Bob Dylan Quote Component Data
export const quoteData = {
  quote: "The times they are a-changing.",
  author: "Bob Dylan",
  context: "Your customer's wants and needs, your competition's style, diversity and intensity are also a-changing. Through various tools such as Consumer View, and website monitoring, Dakota measures virtually every department of every competitor providing detailed consumer perceptions and avenues for sales growth."
};

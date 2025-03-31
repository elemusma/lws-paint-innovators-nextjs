/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      // ... your turbo configurations
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: "/jobs", destination: "/careers", permanent: false },
      { source: "/reviews", destination: "/about/reviews", permanent: false },
      { source: "/brandresources", destination: "/about/brandresources", permanent: false },
      { source: "/our-story", destination: "/about", permanent: false },
      { source: "/deck-coating", destination: "/services/deck-coating", permanent: false },
      { source: "/interior-painting", destination: "/services/interior-painting", permanent: false },
      { source: "/drywall-repair", destination: "/services/drywall-repair", permanent: false },
      { source: "/arkansas-location", destination: "/locations/arkansas", permanent: false },
      { source: "/covid19-sanitation", destination: "/services/covid19-sanitation", permanent: false },
      { source: "/service-feedback", destination: "/about/service-feedback", permanent: false },
      { source: "/website-feedback", destination: "/about/website-feedback", permanent: false },
      { source: "/wallpaper-removal", destination: "/services/wallpaper-removal", permanent: false },
      { source: "/commercial-painting", destination: "/services/commercial-painting", permanent: false },
      { source: "/epoxy-floors", destination: "/services/epoxy-floors", permanent: false },
      { source: "/exterior-painting", destination: "/services/exterior-painting", permanent: false },
      { source: "/pressure-washing", destination: "/services/pressure-washing", permanent: false },
      { source: "/oklahoma-location", destination: "/locations/oklahoma", permanent: false },
      { source: "/industrial-coating", destination: "/services/industrial-coating", permanent: false },
      { source: "/el-pintor-masero", destination: "/careers/pintor-masero", permanent: false },
      { source: "/meet-the-team", destination: "/about/team", permanent: false },
      { source: "/office-associate-job", destination: "/careers/office-associate", permanent: false },
      { source: "/completed-po-feedback", destination: "/thank-you/po-submittal", permanent: false },
      { source: "/new-construction-painting", destination: "/services/new-construction-painting", permanent: false },
      { source: "/popcorn-ceiling-removal", destination: "/services/popcorn-ceiling-removal", permanent: false },
      { source: "/internal-po-submittal", destination: "http://localhost:3000/about/po-submittal", permanent: false },
      { source: "/commercial-painting-projects", destination: "/projects/commercial-painting", permanent: false },
      { source: "/residential-painting-projects", destination: "/projects/residential-painting", permanent: false },
      { source: "/painting-contractor-services", destination: "/services", permanent: false },
      { source: "/project-manager-job", destination: "/careers/project-manager", permanent: false },
      { source: "/project-estimator-job", destination: "/careers/project-estimator", permanent: false },
      { source: "/residential-painting-home-painter", destination: "/services/residential-painting", permanent: false },
      { source: "/painter-drywall-finisher-job", destination: "/careers/painter-drywall-finisher", permanent: false },
      { source: "/color-consultation-custom-paint", destination: "/services/color-consultation-custom-painting", permanent: false },
      { source: "/other-contractor-services-projects", destination: "/projects/other-contractor-services", permanent: false },
      { source: "/thank-you-for-contacting-us", destination: "/thank-you", permanent: false },
    ];
  },
};

module.exports = nextConfig;

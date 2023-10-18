export const loader = () => {
  const content = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.akilaanalytics.com/api/payment/payment-confirmation</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/company/overview</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/contact-us</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/enterprise/by-role</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/enterprise/data-science</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/enterprise/use-cases</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/legal/privacy-policy</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/legal/terms-and-conditions</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/platform/end-to-end-solutions</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/platform/governance</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/platform/integrate-data</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/platform/leverage-the-cloud</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/platform/overview</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/platform/security</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/platform/visualize-data</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/positions/business-analyst</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/positions/data-scientist</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/positions/it-operation</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/positions/product-manager</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/pricing</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/product/data-exploration</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/product/data-processing</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/product/machine-learning</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/product/recurring-jobs</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/product/talk-to-sales</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/product/try-free</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/product/watch-demo</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/resources/blog</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/resources/documentation</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/resources/training</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/use-cases/customer-profitability</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/use-cases/marketing-analytics</loc>
  </url>
  <url>
    <loc>https://www.akilaanalytics.com/use-cases/private-equity</loc>
  </url>
</urlset>


</urlset>

  `.trim()

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8'
    }
  })
}

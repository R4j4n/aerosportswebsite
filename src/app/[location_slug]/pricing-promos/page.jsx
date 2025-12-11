import React from "react";
import "../../styles/subcategory.css";
import "../../styles/kidsparty.css";
import { generateMetadataLib, generateSchema, fetchPricingTableData, fetchPageData } from "@/lib/sheets";

export async function generateMetadata({ params }) {
  const metadata = await generateMetadataLib({
    location: params.location_slug,
    category: '',
    page: 'pricing-promos'
  });

  // Customize the metadata for the pricing page
  return {
    ...metadata,
    title: `Pricing & Promos - ${params.location_slug} | AeroSports`,
    description: `View our pricing and promotions for ${params.location_slug} location. Compare packages and find the best deal for your adventure.`,
  };
}

const page = async ({ params }) => {
  const { location_slug } = params;

  const [pricingData, locationData] = await Promise.all([
    fetchPricingTableData(location_slug),
    fetchPageData(location_slug, 'home'),
  ]);

  // Safely prepare header and footer HTML - ensure they're always strings
  let headerHTML = '';
  let footerHTML = '';

  if (pricingData && pricingData.header && typeof pricingData.header === 'string') {
    headerHTML = pricingData.header;
  }

  if (pricingData && pricingData.footer && typeof pricingData.footer === 'string') {
    footerHTML = pricingData.footer.replace(/\n/g, '<br />');
  }

  return (
    <main>
      <section className="subcategory_main_section-bg aero_bp_main_bg">
        <section className="aero-max-container">
          {/* Header Section */}
          {headerHTML && (
            <div className="aero_bp_title_wrapper">
              <div className="aero_bp_title_floating_bg">
                <div className="aero_bp_float_emoji" style={{ top: '8%', left: '5%', animationDelay: '0s' }}>💰</div>
                <div className="aero_bp_float_emoji" style={{ top: '15%', right: '10%', animationDelay: '2s' }}>🎟️</div>
                <div className="aero_bp_float_emoji" style={{ top: '25%', left: '8%', animationDelay: '4s' }}>🎉</div>
                <div className="aero_bp_float_emoji" style={{ top: '35%', right: '5%', animationDelay: '1s' }}>⭐</div>
                <div className="aero_bp_float_emoji" style={{ top: '50%', left: '3%', animationDelay: '2.5s' }}>🎪</div>
                <div className="aero_bp_float_emoji" style={{ bottom: '30%', left: '12%', animationDelay: '3s' }}>🦘</div>
                <div className="aero_bp_float_emoji" style={{ bottom: '20%', right: '15%', animationDelay: '5s' }}>🌟</div>
                <div className="aero_bp_float_emoji" style={{ top: '60%', right: '8%', animationDelay: '1.5s' }}>🎊</div>
              </div>

              <div className="aero_bp_gradient_orb aero_bp_gradient_orb_1"></div>
              <div className="aero_bp_gradient_orb aero_bp_gradient_orb_2"></div>
              <div className="aero_bp_gradient_orb aero_bp_gradient_orb_3"></div>

              <div className="aero_bp_title_content">
                <div
                  className="aero_bp_title_description"
                  dangerouslySetInnerHTML={{ __html: headerHTML }}
                />
              </div>
            </div>
          )}

          {/* Pricing Table */}
          {pricingData?.table && (
            <article className="aero_bp_pricing_table_wrapper">
              <div className="aero_bp_section_header">
                <div className="aero_bp_section_icon">🎯</div>
                <h3 className="aero_bp_section_title">{pricingData.table.title || 'Pricing & Packages'}</h3>
              </div>

              <div className="aero_bp_pricing_table_container">
                {Object.entries(pricingData.table.categories).map(([categoryName, packages]) => {
                  const packageNames = Object.keys(packages);
                  const allFeaturesSet = new Set();

                  // Collect all unique features
                  Object.values(packages).forEach(packageData => {
                    Object.keys(packageData).forEach(feature => allFeaturesSet.add(feature));
                  });

                  const allFeatures = Array.from(allFeaturesSet);

                  return (
                    <div key={categoryName} style={{ marginBottom: '3em' }}>
                      <h4 className="aero_bp_section_subtitle" style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#fff',
                        marginBottom: '1.5em',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {categoryName}
                      </h4>

                      <div
                        className="aero_bp_grid_table"
                        style={{
                          gridTemplateColumns: `minmax(200px, 1fr) repeat(${packageNames.length}, minmax(150px, 1fr))`
                        }}
                      >
                        {/* Header Row */}
                        <div className="aero_bp_grid_header aero_bp_grid_header_feature">
                          FEATURES
                        </div>
                        {packageNames.map((packageName, index) => (
                          <div
                            key={packageName}
                            className="aero_bp_grid_header aero_bp_grid_header_package"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {packageName}
                          </div>
                        ))}

                        {/* Data Rows */}
                        {allFeatures.map((feature, rowIndex) => (
                          <React.Fragment key={feature}>
                            {/* Feature Name Cell */}
                            <div
                              className="aero_bp_grid_cell aero_bp_grid_cell_feature"
                              style={{ animationDelay: `${rowIndex * 0.05}s` }}
                            >
                              {feature}
                            </div>

                            {/* Package Value Cells */}
                            {packageNames.map((packageName) => {
                              const value = packages[packageName][feature];

                              return (
                                <div
                                  key={`${feature}-${packageName}`}
                                  className="aero_bp_grid_cell aero_bp_grid_cell_value"
                                  style={{ animationDelay: `${rowIndex * 0.05}s` }}
                                >
                                  {value === undefined || value === null ? (
                                    <span className="aero_bp_na">—</span>
                                  ) : value === 'X' || value === '✗' ? (
                                    <span className="aero_bp_cross">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                      </svg>
                                    </span>
                                  ) : value === '✓' || value === '✔' ? (
                                    <span className="aero_bp_check">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                      </svg>
                                    </span>
                                  ) : (
                                    <span className="aero_bp_text_value">{value}</span>
                                  )}
                                </div>
                              );
                            })}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          )}

          {/* No Pricing Data Message */}
          {!pricingData?.table && (
            <div className="aero_bp_pricing_table_wrapper">
              <div className="aero_bp_section_header">
                <h3 className="aero_bp_section_title">Pricing Table</h3>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                color: '#fff',
                fontSize: '1.2rem'
              }}>
                <p>Pricing information is currently being updated.</p>
                <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#ccc' }}>
                  Please contact us for the latest pricing details.
                </p>
              </div>
            </div>
          )}

          {/* Footer Section */}
          {footerHTML && (
            <div className="aero_bp_footer_section">
              <div className="aero_bp_footer_content">
                {/* <div className="aero_bp_footer_icon">📋</div> */}
                <div
                  className="aero_bp_footer_text"
                  dangerouslySetInnerHTML={{ __html: footerHTML }}
                />
              </div>
            </div>
          )}
        </section>
      </section>
    </main>
  );
};

export default page;

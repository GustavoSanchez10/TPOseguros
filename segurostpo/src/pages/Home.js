import * as React from 'react';
import ProductCategories from '../pages/modules/views/ProductCategories';
import ProductSmokingHero from '../pages/modules/views/ProductSmokingHero';
import AppFooter from '../pages/modules/views/AppFooter';
import ProductHero from '../pages/modules/views/ProductHero';
import ProductValues from '../pages/modules/views/ProductValues';
import ProductHowItWorks from '../pages/modules/views/ProductHowItWorks';
import ProductCTA from '../pages/modules/views/ProductCTA';
import AppAppBar from '../pages/modules/views/AppAppBar';
import withRoot from '../pages/modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);

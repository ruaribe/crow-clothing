import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForOverview } from '../../redux/shop/shop.selector';

import { CollectionsOverviewContainer } from './collection-overview.styles';

const CollectionOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...othorCollectionProps }) => (
      <CollectionPreview key={id} {...othorCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForOverview,
});

export default connect(mapStateToProps)(CollectionOverview);

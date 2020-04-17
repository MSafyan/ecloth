import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../Collection-Preview/Collection-Preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const collectionsOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(collectionsOverview);

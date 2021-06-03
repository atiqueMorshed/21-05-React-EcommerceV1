import React from 'react';

import {connect} from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({directorySections: {sections}}) => (

  <div className="directory-menu">
    {
      sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/> /* Here id is separated because the argument that it is passed under is not same as 'id', it is passed under 'key' */
      ))
    }
  </div>
);

const mapStateToProps = state => ({
  directorySections: state.directory
});

export default connect(mapStateToProps)(Directory);
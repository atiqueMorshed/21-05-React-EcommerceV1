import React from 'react';

import {connect} from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';

import {DirectoryMenu} from '../directory/directory.styles';
// import './directory.styles.scss';

const Directory = ({directorySections: {sections}}) => (

  <DirectoryMenu>
    {
      sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/> /* Here id is separated because the argument that it is passed under is not same as 'id', it is passed under 'key' */
      ))
    }
  </DirectoryMenu>
);

const mapStateToProps = state => ({
  directorySections: state.directory
});

export default connect(mapStateToProps)(Directory);
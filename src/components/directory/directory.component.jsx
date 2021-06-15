import React, {useContext} from 'react';

import DirectoryContext from '../../contexts/directory/directory.context';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
  const directories = useContext(DirectoryContext);
  return (
    <div className="directory-menu">
      {
        directories.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/> /* Here id is separated because the argument that it is passed under is not same as 'id', it is passed under 'key' */
        ))
      }
    </div>
  );
};

export default Directory;
import React from 'react'


const Submenu = ({classes}) => {
    console.log(classes);
  return <div 
  className={classes.classes}
  style={{left: classes.center}}
  >Submenu</div>;
}

export default Submenu;
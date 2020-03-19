import React from 'react';

function HomepageImage() {
  const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
  return (
    <div>
      <div class = "myDiv">
      </div>
      <img src={url} style={{width: 650}} alt='Image of Golden Gate Bridge' class="myImage" />
    </div>
  );
}

export default HomepageImage;

import React from 'react';
// import axios from 'axios';

class Thumbnails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  render () {
    return (
      <div>
        <img
          src='https://www.newsmax.com/CMSPages/GetFile.aspx?guid=7b87c9cf-647e-4092-961d-282cddd1a205&SiteName=Newsmax&maxsidesize=600'
          alt="Description"
          width="90"
          height="90"
        />{' '}
        <img
          src='https://www.newsmax.com/CMSPages/GetFile.aspx?guid=7b87c9cf-647e-4092-961d-282cddd1a205&SiteName=Newsmax&maxsidesize=600'
          alt="Description"
          width="90"
          height="90"
        />{' '}
        <img
          src='https://www.newsmax.com/CMSPages/GetFile.aspx?guid=7b87c9cf-647e-4092-961d-282cddd1a205&SiteName=Newsmax&maxsidesize=600'
          alt="Description"
          width="90"
          height="90"
        />{' '}
        <img
          src='https://www.newsmax.com/CMSPages/GetFile.aspx?guid=7b87c9cf-647e-4092-961d-282cddd1a205&SiteName=Newsmax&maxsidesize=600'
          alt="Description"
          width="90"
          height="90"
        />{' '}
        <img
          src='https://www.newsmax.com/CMSPages/GetFile.aspx?guid=7b87c9cf-647e-4092-961d-282cddd1a205&SiteName=Newsmax&maxsidesize=600'
          alt="Description"
          width="90"
          height="90"
        /><br />
      </div>
    );
  }
}

export default Thumbnails;
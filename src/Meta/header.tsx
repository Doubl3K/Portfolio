import React from 'react';
import { Helmet } from 'react-helmet';

const Header : React.FC = () => {
  return (
      <Helmet>
        <title>Kevin Kinner</title>
        <meta name="description" content="WebDev who makes code go brr, until exceptions and beyond" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
  );
};

export default Header;
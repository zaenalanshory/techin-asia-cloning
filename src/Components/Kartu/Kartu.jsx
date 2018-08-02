import React, { Component } from 'react';
import KartuBanyak from './KartuBanyak/KartuBanyak';

const kartu = props => {
  console.log(props);
  return <KartuBanyak {...props} />;
};

export default kartu;

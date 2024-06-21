// src/components/Square.js
import React from 'react';
import PropTypes from 'prop-types';
import { ContainerQuadrado } from './style';

export default function Celula({ value, onClick, celulaVencedora }) {
  return (
    <ContainerQuadrado
      className={`${value} ${celulaVencedora ? 'celulaVencedora' : ''}`}
      onClick={onClick}
    />
  );
}

Celula.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  celulaVencedora: PropTypes.bool,
};

Celula.defaultProps = {
  value: null,
  celulaVencedora: false,
};

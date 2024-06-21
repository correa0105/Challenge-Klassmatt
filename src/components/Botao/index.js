import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './style';

export default function Botao({ text, onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      {text}
    </Button>
  );
}

Botao.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

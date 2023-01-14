import React from 'react';
import PropTypes from 'prop-types';

import { SectionStyled, SectionTitleStyled } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <SectionTitleStyled>{title}</SectionTitleStyled>
      {children}
    </SectionStyled>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
}
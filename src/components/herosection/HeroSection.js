import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import './HeroSection.css';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Bitter&display=swap');
`;

const HeroSection = () => {
    return (
        <>
            <GlobalStyles />
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-card">
                        <h1 className="hero-title">SNUSY.cl</h1>
                        <p className="hero-subtitle">Próximamente</p>
                    </div>
                </div>
            </div>
        </>
    );
};



export default HeroSection;
import React from  'react';

import {render , screen} from "@testing-library/react";

import '@testing-library/jest-dom';

import Hero from "../landing_page/home/Hero";

// Test Suite

describe('Hero Component', ()=> {
    test ("Renders hero image", () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();         // To check presence
        expect(heroImage).toHaveAttribute("src","Media/images/homeHero.png");
    });

    test ("Renders Signup Button", () => {
        render(<Hero/>);
        const SignupButton = screen.getByRole("button",{name :"Let's Dive in!!!"});
        expect(SignupButton).toBeInTheDocument();         // To check presence
        expect(SignupButton).toHaveClass("btn-primary");
    });
});
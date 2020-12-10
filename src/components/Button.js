import React from 'react';
import cv from '../assets/cv.pdf';

export const Button = () => {
    return (
        <div>
            <a
                className="btn-pdf"
                type="button"
                rel="noopener norefererr"
                target="_blank"
                href={ cv }
            >
                Obten mi Cv
            </a>
        </div>
    )
}

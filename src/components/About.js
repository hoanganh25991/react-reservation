function _pugFlattenInnerHelper(arr, val) {
    return arr.concat(Array.isArray(val) ? _pugFlatten(val) : val);
}

function _pugFlatten(arr) {
    return arr.reduce(_pugFlattenInnerHelper, []);
}

import React from 'react';

const About = () => React.createElement(
    'h1',
    null,
    'About'
);

export default About;


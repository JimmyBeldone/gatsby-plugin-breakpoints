import React from 'react';

import { useBreakpoint } from './BreakpointProvider';

export const withBreakpoints = Component => {
    return props => {
        const breakpoints = useBreakpoint();

        return <Component breakpoints={breakpoints} {...props} />;
    };
};

import React from 'react';

import { useBreakpoint } from './BreakpointProvider';

export const withBreakpoints = Component => {
    // eslint-disable-next-line react/display-name
    return props => {
        const breakpoints = useBreakpoint();

        return <Component breakpoints={breakpoints} {...props} />;
    };
};

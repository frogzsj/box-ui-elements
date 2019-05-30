// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconWorkflow = ({ className = '', color = '#999999', height = 32, title, width = 32 }: Props) => (
    <AccessibleSVG
        className={`icon-watermark ${className}`}
        height={height}
        title={title}
        viewBox="0 0 32 32"
        width={width}
    >
        <path
            d="M6,2H26a4.01176,4.01176,0,0,1,4,4V26a4.01176,4.01176,0,0,1-4,4H6a4.01176,4.01176,0,0,1-4-4V6A4.01176,4.01176,0,0,1,6,2Zm9,14h4.5a3.5,3.5,0,0,0,0-7H14a.94477.94477,0,0,0-1,1,.94477.94477,0,0,0,1,1h5.5a1.5,1.5,0,0,1,0,3H13a4,4,0,0,0,0,8h3a1,1,0,0,0,0-2H13a2,2,0,0,1,0-4Zm-5-5a.94477.94477,0,0,0,1-1,.94477.94477,0,0,0-1-1,.94477.94477,0,0,0-1,1A.94477.94477,0,0,0,10,11ZM21,23a2,2,0,1,0-2-2A2.00588,2.00588,0,0,0,21,23Z"
            fill={color}
        />
    </AccessibleSVG>
);

export default IconWorkflow;

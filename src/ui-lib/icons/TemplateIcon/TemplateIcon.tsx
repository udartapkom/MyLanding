import React, {FC} from 'react';

type TTemplateIcon = {
    icon: any;
    width?: string | number;
    alt?: string;
    height?: string | number;
    className?: string;
};

const TemplateIcon: FC<TTemplateIcon> = ({
                                             icon,
                                             alt = 'картинка',
                                             width = '16',
                                             height = '16',
                                             className = '',
                                         }) => (

    <img
        className={className}
        style={{width: `${String(width)}px`, height: `${String(height)}px`, borderRadius: 5}}
        src={icon}
        alt={alt}
    />
);
export default TemplateIcon;
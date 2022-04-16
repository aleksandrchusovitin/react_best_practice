import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import dictonary from './dictionary';

type IconProps = {
  name: string;
};

const Icon: FC<IconProps & SvgIconProps> = ({ name, ...props }) => {
  const { viewBox, width, height, id } = dictonary[name];
  return (
    <SvgIcon viewBox={viewBox} width={width} height={height} {...props}>
      <use xlinkHref={id} />
    </SvgIcon>
  );
};

export default Icon;

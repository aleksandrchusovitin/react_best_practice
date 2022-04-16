import { takeLast } from 'ramda';

import blackHorse from './images/blackHorse.svg';

type IconDimensions = {
  width: string;
  height: string;
};

const getIconDimensions = (viewbox: string): IconDimensions => {
  const [width, height] = takeLast(2, viewbox.split(' '));

  return {
    width,
    height,
  };
};

interface BrowserSpriteSymbol {
  id: string;
  viewBox: string;
  content: string;
  node: SVGSymbolElement;
}

type IconAttributes = {
  src: BrowserSpriteSymbol;
  viewBox: string;
  id: string;
  width: string;
  height: string;
};

const getIconAttributes = (name: BrowserSpriteSymbol): IconAttributes => {
  const { width, height } = getIconDimensions(name.viewBox);

  return {
    src: name,
    viewBox: name.viewBox,
    id: `#${name.id}`,
    width,
    height,
  };
};

export default {
  blackHorse: getIconAttributes(blackHorse),
};

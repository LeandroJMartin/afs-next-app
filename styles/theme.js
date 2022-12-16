import devices from './devices';

const theme = {
  colors: {
    black: '#393939',
    grey: '#3A3A3A',
    greyDarker: '#3b3b3b',
    lightGrey: '#E1E1E1',
    lighterGrey: '#7b7b7b',
    lessLighterGrey: '#9e9e9e',
    moreLessLighterGrey: '#f0f0f0',
    link: '#0074de',
    highlightGreen: '#71d946',
    red: '#f22323',
    gold: '#FFD700',
  },
  boxShadows: {
    normal: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
    stronger: '0 12px 24px 12px rgba(0, 0, 0, 0.09)',
    lighter: '0 3px 4px 0 rgba(0, 0, 0, 0.04)',
  },
  borderRadius1: '10px',
  borderRadius2: '5px',
  client: {
    colors: {
      laranjaMaisEscuro: '#C94B03',
      laranjaEscuro: '#4d1a03',
      verdeSucesso: '#42d472',
      laranja: '#ed7221',
      verdeFolha: '#76b08c',
      verdeEscuro: '#396349',
      verdeClaro: '#76b08c',
      cinza: '#4b4b4d',
    },
  },
  devices,
};

export default theme;

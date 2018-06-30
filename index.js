exports.decorateConfig = config => {
  const bezel = 40
  return Object.assign({}, config, {
    fontSize: config.fontSize || 18,
    foregroundColor: '#18FF62',
    cursorColor: '#18FF62',
    padding: bezel,
    css: `
      ${config.css || ''}

      .terms_terms {
        background: #1D1D1D;
        box-shadow: inset 0px 0px 1px 10px #000;
        border-radius: 20px;
      }

      .terms_terms:before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 2;
        background: linear-gradient(135deg, rgba(149,149,149,0.5) 0%,rgba(13,13,13,0.55) 19%,rgba(1,1,1,0.64) 50%,rgba(10,10,10,0.69) 69%,rgba(51,51,51,0.73) 84%,rgba(22,22,22,0.76) 93%,rgba(27,27,27,0.78) 100%);
        border-radius: 20px;
        opacity: .5;
        pointer-events: none;
      }

      .terms_terms:after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: #ddd;
        opacity: .1;
        border-radius: 20px;
        z-index: 1;
      }

      .term_active {
        position: relative;
      }

      .term_active:before {
        content : '';
        position : absolute;
        background: #00ff00;
        left: ${bezel / 1.5}px;
        bottom: ${bezel / 1.5}px;
        box-shadow : 0px 0px 2px 2px #00ff00;
        border-radius : 5px;
        width: 5px;
        height: 5px;
        opacity: 0.8;
        pointer-events: none;
      }

      .term_wrapper {
        position: relative;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0px 0px 1px 3px rgba(10, 10, 10, .5);
        background: #000;
        overflow: hidden;
        z-index: 3;
      }

      .term_wrapper:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;

        background-color: #000;
        background: linear-gradient(#fff 50%, #000 50%);
        background-size: 100% 4px;
        background-repeat: repeat-y;

        opacity: .14;
        box-shadow: inset 0px 0px 10px 10px rgba(0, 0, 0, .8);
        border-radius: 20px;
        z-index: 10;
      }

      .term_wrapper:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        background-color: #00ff77;
        background: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%,rgba(0,0,0,0.62) 45%,rgba(0,9,4,0.6) 47%,rgba(0,255,119,1) 100%); /* W3C */
        box-shadow: inset 0px 0px 40px 40px rgba(100, 100, 100, .5);
        border-radius: 20px;
        opacity: .1;
        z-index: 11;
        pointer-events: none;
      }
    `,
  })
}

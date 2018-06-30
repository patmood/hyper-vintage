exports.decorateConfig = config => {
  return Object.assign({}, config, {
    fontSize: config.fontSize || 18,
    foregroundColor: '#18FF62',
    cursorColor: '#18FF62',
    padding: 40,
    css: `
      ${config.css || ''}

      .term_active {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 20px;
        box-shadow: 0px 0px 1px 3px rgba(10, 10, 10, .7);
        background: #000;
        overflow: hidden;
        z-index: 3;
      }

      .term_active:before {
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

        opacity : .14;
        box-shadow : inset 0px 0px 10px 10px rgba(0, 0, 0, .8);
        border-radius : 20px;
        z-index : 10;
      }

      .term_active:after {
        content : '';
        position : absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        background-color : #00ff77;
        background: -moz-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%, rgba(0,0,0,0.62) 45%, rgba(0,9,4,0.6) 47%, rgba(0,255,119,1) 100%); /* FF3.6+ */
        background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(0,0,0,1)), color-stop(45%,rgba(0,0,0,0.62)), color-stop(47%,rgba(0,9,4,0.6)), color-stop(100%,rgba(0,255,119,1))); /* Chrome,Safari4+ */
        background: -webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%,rgba(0,0,0,0.62) 45%,rgba(0,9,4,0.6) 47%,rgba(0,255,119,1) 100%); /* Chrome10+,Safari5.1+ */
        background: -o-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%,rgba(0,0,0,0.62) 45%,rgba(0,9,4,0.6) 47%,rgba(0,255,119,1) 100%); /* Opera 12+ */
        background: -ms-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%,rgba(0,0,0,0.62) 45%,rgba(0,9,4,0.6) 47%,rgba(0,255,119,1) 100%); /* IE10+ */
        background: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%,rgba(0,0,0,0.62) 45%,rgba(0,9,4,0.6) 47%,rgba(0,255,119,1) 100%); /* W3C */
        box-shadow : inset 0px 0px 40px 40px rgba(100, 100, 100, .5);
        border-radius : 20px;
        opacity : .1;
        z-index : 11;
      }
    `,
  })
}

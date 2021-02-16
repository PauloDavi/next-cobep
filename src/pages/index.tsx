import React from 'react';

import { withTranslation } from '../../i18n';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Index = () => {
  return (
    <div className="mb-20 py-10">
      <AutoplaySlider play={true} interval={4000} animation="cubeAnimation">
        <div data-src="https://s2.glbimg.com/HqOu1Nq3WLip_5j1Q9rg4ZQEFgg=/0x0:1118x566/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/R/H/5ODJRwTiuFPPUfPAMFLw/amojampa-joaopessoa-julianasantossecom2.jpg" />
        <div data-src="https://s2.glbimg.com/HqOu1Nq3WLip_5j1Q9rg4ZQEFgg=/0x0:1118x566/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/R/H/5ODJRwTiuFPPUfPAMFLw/amojampa-joaopessoa-julianasantossecom2.jpg" />
        <div data-src="https://s2.glbimg.com/HqOu1Nq3WLip_5j1Q9rg4ZQEFgg=/0x0:1118x566/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/R/H/5ODJRwTiuFPPUfPAMFLw/amojampa-joaopessoa-julianasantossecom2.jpg" />
      </AutoplaySlider>
    </div>
  );
};
Index.getInitialProps = async () => ({
  namespacesRequired: ['index', 'common'],
});

export default withTranslation('index')(Index);

<script>
  import { onMount } from 'svelte';
  import { moveImagesOnMouseMove } from '../../utils/moveImagesOnMouseMove';
  import Picture from '../atoms/Picture.svelte';

  import bota from '../../assets/img/uvod/bota.png';
  import jack from '../../assets/img/uvod/jack.png';
  import klobouk from '../../assets/img/uvod/klobouk.png';
  import kun from '../../assets/img/uvod/kun.png';
  import oko from '../../assets/img/uvod/oko.png';
  import zirafa from '../../assets/img/uvod/zirafa.png';

  import headerDatum2022Webp from '../../assets/img/uvod/header_datum2022.webp';
  import uvodDesktop from '../../assets/img/uvod/uvod-d.png';
  import uvodMobileWebp from '../../assets/img/uvod/uvod-m.webp';

  import './Header.scss';

  onMount(() => {
    moveImagesOnMouseMove(
      document.querySelector('.moving-img-wrapper'),
      '.moving-obj-header',
      '#uvod'
    );
  });
</script>

<header
  class="h-screen flex justify-center items-center pb-6 md:pb-12 lg:pb-16 relative"
>
  <a href="/">
    <div class="moving-img-wrapper hidden xl:block">
      <img
        id="bota"
        class="moving-obj-header"
        data-value="-2"
        src={bota}
        alt="bota"
      />
      <img
        id="jack"
        class="moving-obj-header"
        data-value="-6"
        src={jack}
        alt="jack"
      />
      <img
        id="klobouk"
        class="moving-obj-header"
        data-value="-3"
        src={klobouk}
        alt="klobouk"
      />
      <img
        id="kun"
        class="moving-obj-header"
        data-value="-5"
        src={kun}
        alt="kun"
      />
      <img
        id="oko"
        class="moving-obj-header"
        data-value="-7"
        src={oko}
        alt="oko"
      />
      <img
        id="zirafa"
        class="moving-obj-header"
        data-value="-4"
        src={zirafa}
        alt="žirafa"
      />
      <img id="uvod" src={uvodDesktop} alt="SUdoma Gomora datum 2022" />
    </div>
    <div class="medium-banner hidden sm:block xl:hidden">
      <Picture imgSrc={headerDatum2022Webp} imgAlt="SUdoma Gomora datum 2022" />
    </div>
    <div class="mobile-banner sm:hidden my-12">
      <Picture imgSrc={uvodMobileWebp} imgAlt="SUdoma Gomora datum 2022" />
    </div>
  </a>
</header>

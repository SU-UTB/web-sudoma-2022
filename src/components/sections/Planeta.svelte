<script>
  import ImgCol from '../atoms/ImgCol.svelte';
  import Picture from '../atoms/Picture.svelte';
  import Row from '../atoms/Row.svelte';
  import TextCol from '../atoms/TextCol.svelte';

  import './Planeta.scss';

  import bordelDesktop from '../../assets/img/planeta/bordel.png';
  import letadloDesktop from '../../assets/img/planeta/letadlo.png';
  import planetaMobile from '../../assets/img/planeta/planeta-m.webp';
  import planetaSaturnDesktop from '../../assets/img/planeta/planeta-saturn.png';
  import planetaDesktop from '../../assets/img/planeta/planeta.png';
</script>

<Row>
  <ImgCol class="sm:w-3/5 xl:pr-16 relative">
    <div class="moving-img-wrapper-planeta hidden xl:block">
      <img
        src={bordelDesktop}
        alt="bordel"
        data-value="-3"
        id="planeta-bordel"
        class="moving-obj-planeta"
      />
      <img
        src={letadloDesktop}
        alt="letadlo"
        data-value="-3"
        id="planeta-letadlo"
        class="moving-obj-planeta"
      />
      <img
        src={planetaSaturnDesktop}
        alt="planeta-saturn"
        data-value="-3"
        id="planeta-planeta-saturn"
        class="moving-obj-planeta"
      />

      <img
        src={planetaDesktop}
        alt="planeta"
        data-value="-3"
        id="planeta-planeta"
        class="moving-obj-planeta"
      />
    </div>
    <Picture
      imgSrc={planetaMobile}
      imgAlt="planeta Zlin"
      class="block xl:hidden"
    />
  </ImgCol>
  <TextCol>
    <p class="mb-4">
      Čas vrátit se na místo. Místo, kde to všechno začalo. Místo, kde je půda
      nasáklá prachem z Baťových cihel, vzduchem čpí Continental pneumatiky a
      řeka Dřevnice zůstává zakalená nejedním pohozeným košíkem z Kauflandu.
    </p>
    <p />
    <p>Planeta <span class="txt-bold">Zl.1n!</span></p>
  </TextCol>
</Row>

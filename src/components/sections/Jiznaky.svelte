<script>
  import ImgCol from '../atoms/ImgCol.svelte';
  import Picture from '../atoms/Picture.svelte';
  import Row from '../atoms/Row.svelte';
  import TextCol from '../atoms/TextCol.svelte';

  import './Jiznaky.scss';

  import barakDesktop from '../../assets/img/jiznaky/barak.png';
  import jiznakyMobile from '../../assets/img/jiznaky/jiznaky-m.webp';
  import jiznakyDesktop from '../../assets/img/jiznaky/jiznaky.png';
</script>

<div class="jiznaky">
  <Row>
    <TextCol>
      <p>
        V onom prostoru jakoby se dříve život zastavil. A to hlavně v létě, kdy
        se tam nedělo fakt ty vole vůbec nic. Naštěstí, díky několika aktivním
        povstalcům proti systému, se zrodilo řešení. Jen díky tomuto řešení se
        okolím začala linout hlasitá hudba a veselý smích, jinak deprivovaných
        studentů. Z hlasu lidu, začalo se tomuto řešení pravit Studentská unie
        UTB!
      </p>
    </TextCol>
  </Row>
  <Row>
    <ImgCol>
      <div class="moving-img-wrapper-jiznaky hidden xl:block relative">
        <img
          src={barakDesktop}
          alt="barak"
          data-value="-3"
          id="jiznaky-barak"
          class="moving-obj-jiznaky"
        />
        <img
          src={jiznakyDesktop}
          alt="jiznaky"
          data-value="-5"
          class="moving-obj-jiznaky"
          id="jiznaky-jiznaky"
        />
      </div>
      <Picture
        imgSrc={jiznakyMobile}
        class="block xl:hidden"
        imgAlt="jižní svahy"
      />
    </ImgCol>
  </Row>
</div>

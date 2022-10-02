<script>
  import ImgCol from '../atoms/ImgCol.svelte';
  import Picture from '../atoms/Picture.svelte';

  import Row from '../atoms/Row.svelte';
  import TextCol from '../atoms/TextCol.svelte';

  import obyvakMobile from '../../assets/img/obyvak/obyvak-m.webp';
</script>

<Row>
  <ImgCol class="sm:w-3/5 xl:pr-16">
    <Picture imgSrc={obyvakMobile} imgAlt="gauc a stul" />
  </ImgCol>
  <TextCol>
    <p>
      Potomci těchto zakladatelů se pářili a množili dále mezi sebou natolik, že
      organizace vytrvala, bojující proti vysokoškolskému řádu Korektnosti
      dodnes. Po šesti letech bylo rozhodnuto, že rok 2022 je tím výjimečným
      letopočtem, kdy je potřeba otřást oním působištěm v základech –
      propuknutím <span class="txt-bold">SUDOMY GOMORY</span>. Proslýchá se, že
      slovo hřích zde bylo již zapomenuto. Co se stane na
      <span class="txt-bold">Sudomě</span>, zůstane na...
    </p>
  </TextCol>
</Row>

<script>
  import ImgCol from '../atoms/ImgCol.svelte';
  import Link from '../atoms/Link.svelte';
  import MailLink from '../atoms/MailLink.svelte';
  import Picture from '../atoms/Picture.svelte';
  import Row from '../atoms/Row.svelte';
  import TextCol from '../atoms/TextCol.svelte';

  import dopis from '../../assets/img/dopis.webp';
</script>

<Row>
  <ImgCol class="sm:w-3/5 xl:pr-16">
    <Picture imgSrc={dopis} imgAlt="dopis" class=".moving-obj" />
  </ImgCol>
  <TextCol class="mt-12">
    <p class="mb-4">A teď vážně</p>
    <p class="mb-4">
      <span class="txt-bold">Sudoma Gomora</span> je setkání současných a
      bývalých členů <span class="txt-bold">Studentské unie UTB</span>. Nesmíš
      proto chybět a nesmí chybět ani Tví staří přátelé, které všechny pozveš!
    </p>
    <p class="mb-4">
      Zaregistruj se prosím, ať víme, že s Tebou můžeme počítat. Průběžně Ti
      také budeme zasílat informace.
    </p>
    <p class="mb-4">
      Jakékoliv otázky a připomínky napiš na
      <Link linkTo="https://www.facebook.com/events/718622459337362">
        <span class="txt-bold">facebookovou událost</span>,
      </Link>
      nebo zašli na
      <MailLink email="sudoma@sutb.cz" />
      <br />
      <span class="txt-bold">Těšíme se 7.–9. října 2022 ve Zlíně.</span>
    </p>
    <p class="mb-4">Tvá <span class="txt-bold">Studentská unie UTB</span></p>
  </TextCol>
</Row>

<script>
  import ImgCol from '../atoms/ImgCol.svelte';
  import Picture from '../atoms/Picture.svelte';
  import Row from '../atoms/Row.svelte';
  import TextCol from '../atoms/TextCol.svelte';

  import portalMobile from '../../assets/img/portal/portal-m.webp';
</script>

<Row>
  <TextCol>
    <p class="italic">
      Vydej se napříč celým kosmem, včetně spoje přes Otrokovice, na to největší
      dobrodružství této dimenze! Přidej se ke svým souputníkům, kteří zde byli
      před tebou, s tebou i po tobě. Všichni, jeden vedle druhého, jsme ze
      stejného multipunk těsta.
    </p>
  </TextCol>
  <ImgCol class="sm:w-2/5">
    <Picture imgSrc={portalMobile} imgAlt="portal" />
  </ImgCol>
</Row>

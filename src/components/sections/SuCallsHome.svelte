<script>
  import { onMount } from 'svelte';

  import { moveImagesOnMouseMove } from '../../utils/moveImagesOnMouseMove';
  import ImgCol from '../atoms/ImgCol.svelte';
  import Picture from '../atoms/Picture.svelte';
  import Row from '../atoms/Row.svelte';
  import TextCol from '../atoms/TextCol.svelte';

  import napisDesktop from '../../assets/img/su-calls-home/napis.png';
  import rukaMobile from '../../assets/img/su-calls-home/ruka-m.webp';
  import rukaDesktop from '../../assets/img/su-calls-home/ruka.png';

  onMount(() => {
    moveImagesOnMouseMove(
      document.querySelector('.moving-img-wrapper-su-calls'),
      '.moving-obj-su-calls',
      '#su-calls-napis'
    );
  });
</script>

<Row class="xl:mb-32">
  <TextCol class="mt-12">
    <p class="mb-4">
      Jedna polovina z nás to už ani nečekala, druhá zapomněla a třetí neví, co
      to vlastně je. Nicméně, nastal čas. Historie se opakuje. Aliance rebelů,
      která si říká Studentská unie, pro mnohé zazděná hluboko v těch
      nejšílenějších vzpomínkách, vysílá svolávací signál do celého vesmíru. Do
      těch nejzapadlejších koutů, kde by se život jen sotva hledal.
    </p>
    <p>Tedy i na Slovensko a FLKŘ.</p>
  </TextCol>
  <ImgCol class="sm:w-3/5">
    <div class="moving-img-wrapper-su-calls hidden xl:block">
      <img
        src={rukaDesktop}
        alt="ruka"
        data-value="-3"
        id="su-calls-ruka"
        class="moving-obj-su-calls"
      />
      <img
        src={napisDesktop}
        alt="su calls home"
        data-value="-5"
        class="moving-obj-su-calls"
        id="su-calls-napis"
      />
    </div>
    <Picture
      imgSrc={rukaMobile}
      imgAlt="ruka"
      class="block xl:hidden"
      dataVal="-5"
    />
  </ImgCol>
</Row>

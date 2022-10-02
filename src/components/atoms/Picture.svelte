<script>
  export let imgSrc, imgAlt;
  export let dataVal = '0';
</script>

<img
  class="block object-contain sm:object-cover object-center w-full h-full z-1 {$$props.class}"
  src={imgSrc}
  alt={imgAlt}
  data-value={dataVal}
/>

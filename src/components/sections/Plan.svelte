<script>
  import Link from '../atoms/Link.svelte';
  import Row from '../atoms/Row.svelte';
</script>

<section id="plan" class="w-full lg:w-3/4 xl:w-4/5 py-32">
  <h2 class="text-4xl txt-bold">Plán</h2>
  <Row>
    <ul class="program xl:w-9/12">
      <li class="day mb-4">
        <p class="text-orange font-rooneyB">Pátek: DEN NULTÝ</p>
        <ul class="activities">
          <li class="activity">Neoficiální ťuknutí krýglů pro nedočkavce.</li>
        </ul>
      </li>
      <li class="day mb-4">
        <p class="text-orange font-rooneyB">Sobota: DEN D</p>
        <ul class="activities">
          <li class="activity">
            Hlavní program celého víkendu, jehož průběh upřesníme na&nbsp;<Link
              linkTo="https://www.facebook.com/events/718622459337362"
              ><span class="txt-bold">FB události</span></Link
            >
            a přijde emailem.
          </li>
        </ul>
      </li>
      <li class="day mb-4">
        <p class="text-orange font-rooneyB">Neděle: DEN POTÉ</p>
        <ul class="activities">
          <li class="activity">Přežít. Neblít.</li>
        </ul>
      </li>
    </ul>
  </Row>
</section>

<style>
  .activity {
    list-style-image: url('../../assets/img/activity-disc.png');
    list-style-position: inside;
  }
</style>

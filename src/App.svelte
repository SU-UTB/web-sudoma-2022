<script>
  import Header from './components/moleculs/Header.svelte';
  import Stars from './components/moleculs/Stars.svelte';

  import Dopis from './components/sections/Dopis.svelte';
  import Form from './components/sections/Form.svelte';
  import Info from './components/sections/Info.svelte';
  import Jiznaky from './components/sections/Jiznaky.svelte';
  import Obyvak from './components/sections/Obyvak.svelte';
  import Plan from './components/sections/Plan.svelte';
  import Planeta from './components/sections/Planeta.svelte';
  import Portal from './components/sections/Portal.svelte';
  import SuCallsHome from './components/sections/SuCallsHome.svelte';
</script>

<Stars />
<Header />
<main class="w-full flex flex-col items-center h-full">
  <SuCallsHome />
  <Planeta />
  <Jiznaky />
  <Obyvak />
  <Portal />
  <Info />
  <Dopis />
  <Form />
  <Plan />
</main>

<script>
  import { fly } from 'svelte/transition'
  export let toastMsg
</script>

<div
  transition:fly={{ x: 100, duration: 800 }}
  class="alert-toast bg-orange rounded-2xl fixed flex z-20 bottom-12 right-4 ease-in-out transition-all text-dark_blue"
>
  {#if toastMsg}
    <p class="px-6 py-2">{toastMsg}</p>
  {/if}
</div>

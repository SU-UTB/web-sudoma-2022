<script>
  import { onMount } from 'svelte';
  import { addGuest, getData } from '../../utils/getSheet';
  import AlertToast from '../atoms/AlertToast.svelte';
  import ImgCol from '../atoms/ImgCol.svelte';
  import Picture from '../atoms/Picture.svelte';
  import Row from '../atoms/Row.svelte';

  import rickMobile from '../../assets/img/rick/rick-m.webp';

  onMount(async () => {
    const { guests, error } = await getData();
    console.log(guests);
  });

  const OK_MSG = 'Tvoje účast byla stvrzena krvavým packetem.';
  const NOK_MSG = 'Neco nešlo podle plánu, zkus to znova pls.';

  let alertToastMsg = null;

  let firstLastName;
  let nickname;
  let email;
  let president;
  let favProject;
  let inviteFrom;

  let firstLastNameError = '';
  let emailError = '';

  const hideAlertMsg = () => {
    setTimeout(() => {
      alertToastMsg = null;
    }, 8000);
  };

  const resetFormData = () => {
    firstLastName = '';
    nickname = '';
    email = '';
    president = '';
    favProject = '';
    inviteFrom = '';
    hideAlertMsg();
  };

  const submitForm = async (e) => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    firstLastNameError =
      firstLastName.length > 1 ? '' : 'Aspoň dvě písmena na jméno';

    emailError = emailPattern.test(email)
      ? ''
      : 'Email musí být v platném tvaru';

    if (firstLastNameError.length < 1 && emailError.length < 1) {
      const { data, error } = await addGuest(
        firstLastName,
        nickname,
        email,
        president,
        favProject,
        inviteFrom
      );
      if (error) {
        console.log(
          `Error while trying to upload guest to db: ${error.message}`
        );
        alertToastMsg = NOK_MSG;
      }
      alertToastMsg = OK_MSG;
    }

    resetFormData();
  };
</script>

<Row>
  <form
    on:submit|preventDefault={submitForm}
    method="POST"
    class="mb-8 relative"
  >
    <div class="mb-4">
      <label for="firstLastName">Jméno a příjmení</label>
      <input
        class="text-input"
        type="text"
        id="firstLastName"
        required
        name="firstLastName"
        bind:value={firstLastName}
      />
      <span class="text-sm">{firstLastNameError}</span>
    </div>
    <div class="mb-4">
      <label for="nickname">Jaká je tvoje přezdívka?</label>
      <input
        class="text-input"
        type="text"
        id="nickname"
        name="nickname"
        bind:value={nickname}
      />
    </div>
    <div class="mb-4">
      <label for="email">E-mail</label>
      <input
        class="text-input"
        type="text"
        id="email"
        required
        name="email"
        bind:value={email}
      />
      <span class="text-sm">{emailError}</span>
    </div>
    <div class="mb-4">
      <label for="president"
        >Za jakého prezidenta jsi nastoupil/a do unie?</label
      >
      <input
        class="text-input"
        type="text"
        id="president"
        name="president"
        bind:value={president}
      />
    </div>
    <div class="mb-4">
      <label for="favProject">Jaký je/byl tvůj oblíbený SU projekt?</label>
      <input
        class="text-input"
        type="text"
        id="favProject"
        name="favProject"
        bind:value={favProject}
      />
    </div>
    <div class="mb-4">
      <label for="inviteFrom">Kdo tě pozval na SUdomu?</label>
      <input
        class="text-input"
        type="text"
        id="inviteFrom"
        name="inviteFrom"
        bind:value={inviteFrom}
      />
      <span class="text-sm"
        >Pokud pozveš nejvíce známých, kolega Jack tě přivítá.</span
      >
    </div>
    <div class="flex justify-end mt-12">
      <input class="cursor-pointer" type="submit" value="" />
    </div>
  </form>
  {#if alertToastMsg}
    <AlertToast toastMsg={alertToastMsg} />
  {/if}

  <ImgCol class="sm:w-2/5">
    <Picture imgSrc={rickMobile} imgAlt="rick" />
  </ImgCol>
</Row>

<style>
  input[type='submit'] {
    background: url('../../assets/form/button.png') no-repeat center;
    background-size: contain;
    width: 164px;
    height: 47px;
  }
  label {
    display: block;
    margin-bottom: 0.2rem;
  }
  .text-input {
    display: block;
    width: 100%;
    border-radius: 12px;
    padding: 0.5rem;
    outline: none;
    background: #1d1d4c;
  }
</style>

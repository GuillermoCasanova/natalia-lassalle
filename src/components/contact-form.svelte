<script>
import { trapFocus } from "$lib/trapFocus";
import { onMount } from "svelte";
let formPromise = false;
let receivers = "hello@maisonmatador.com";
let modal;
let modalContainer;
let succesfullySubmitted = false;
let modalIsOpen = false;
let modalId = "contact-modal";
let modal_copy = {
  default_state: {},
  success_state: {},
};
import { client } from "$lib/sanity";

async function loadData() {
  const formRequest = `*[_type == 'modal' && handle.current == "${modalId}" ][0] {
			...
    	}`;

  const content = await client.fetch(formRequest);

  return {
    content,
  };
}

async function sendMail(event) {
  const formData = new FormData(event.target);
  const recipients = receivers;

  const data = {};

  for (let field of formData) {
    const [key, value] = field;
    data[key] = value;
  }

  const response = await fetch("/api/send-mail", {
    method: "POST",
    body: JSON.stringify({
      formData: data,
      receivers: recipients,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let res = await response.json();

  if (res.accepted) {
    succesfullySubmitted = true;
    return true;
  } else {
    throw new Error("error");
  }
}

function closeModal(event) {
  let modal = event.target.closest("dialog");
  let fields = modal.querySelectorAll("input, textarea");

  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.style.display = "none";
  }

  modalIsOpen = false;

  setTimeout(() => {
    succesfullySubmitted = false;
    formPromise = false;
  }, 400);

  fields.forEach((elem) => {
    elem.value = "";
  });
}

loadData()
  .then((response) => {
    modal_copy = response.content;
    return true;
  })
  .catch(() => {
    console.log("There has been an error loading the site. Please refresh.");
  });

onMount(() => {
  document.addEventListener("modal open", (event) => {
    if (event.detail.name === "contact-modal") {
      modalIsOpen = true;
    }
  });
});
</script>

<div
  class="contact-modal"
  class:is-visible={modalIsOpen}
  bind:this={modalContainer}
>
  <dialog
    id="contact-modal"
    aria-label="Contact modal"
    bind:this={modal}
    on:cancel={closeModal}
  >
    <div class="contact-modal__inner">
      <h1
        class="contact-modal__headline"
        class:is-hidden={succesfullySubmitted}
      >
        {modal_copy.default_state.headline}
      </h1>

      {#if modal_copy.default_state.body}
        <p>
          {modal_copy.default_state.body}
        </p>
      {/if}

      {#await formPromise then value}
        {#if value !== false}
          <alert>
            <h1 class="contact-modal__headline">
              {modal_copy.success_state.headline}
            </h1>
            {modal_copy.success_state.body || ""}
          </alert>
        {/if}
      {/await}

      {#await formPromise catch error}
        <alert>
          <p>There was an error submitting your form. Please try again.</p>
        </alert>
      {/await}

      <form
        class:is-hidden={succesfullySubmitted}
        on:submit|preventDefault={(event) => {
          formPromise = sendMail(event);
        }}
        aria-label="Contact Maison Matador for inquiries"
        class="contact-modal__form"
      >
        <div class="contact-form__body">
          <div class="form-section">
            <label for="full_name"
              >Full Name <span aria-hidden="true">*</span></label
            >
            <input
              type="text"
              id="full_name"
              name="full_name"
              value=""
              required
            />
          </div>

          <div class="form-section">
            <label for="email">Email <span aria-hidden="true">*</span></label>
            <input type="email" id="email" name="email" value="" required />
          </div>

          <div class="form-section">
            <label for="message"
              >Message <span aria-hidden="true">*</span></label
            >
            <textarea
              type="text"
              name="message"
              id="message"
              rows="1"
              required
            />
          </div>

          <div class="form-section">
            <label for="referral">Referred By (Optional)</label>
            <input type="text" name="referral" id="referral" />
          </div>
        </div>

        <div class="contact-form__footer">
          <button
            type="submit"
            aria-label="Submit your inquiry to Maison Matador"
            class="button button--primary button--medium"
          >
            {#if formPromise}
              {#await formPromise}
                <alert>Submitting query...</alert>
              {:catch error}
                Submit
              {/await}
            {:else}
              Submit
            {/if}
          </button>
        </div>
      </form>

      <div class="contact-modal__close-btn-container">
        <button
          class="contact-modal__close-btn"
          on:click|preventDefault={(event) => {
            closeModal(event);
          }}
          aria-label="Close contact modal"
        >
          <span class="close-btn__icon" />
          <span class="visually-hidden">Close Modal</span>
        </button>
      </div>
    </div>
  </dialog>
  <div class="contact-modal__overlay" on:click={closeModal} />
</div>

<style>
.contact-modal {
  display: flex;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  opacity: 0;
  transition: all var(--duration-long) cubic-bezier(0.5, 1, 0.89, 1);
  pointer-events: none;
  border: none;
  justify-content: center;
}

.contact-modal.is-visible {
  opacity: 1;
  pointer-events: all;
}

.contact-modal__headline {
  margin-bottom: var(--level4);
  font-family: var(--tertiary-font-family);
}

.is-hidden {
  display: none;
}

dialog {
  border-radius: 6px;
  z-index: 1;
  width: 90%;
  padding: var(--level5);
  max-width: 35rem;
  border: 1px solid black;
  overflow: hidden;
  background-color: white;
  position: relative;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.189);
}

@media screen and (min-width: 975px) {
  dialog {
    padding: var(--level6);
  }
}

dialog:not([open]) {
  display: none;
}

.contact-modal__overlay {
  background-color: black;
  z-index: 0;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: absolute;
}

.contact-modal__close-btn-container {
  position: absolute;
  top: var(--level2);
  right: var(--level3);
}

.contact-modal__close-btn {
  height: 2.5rem;
  width: 2.5rem;
  background-color: transparent;
  border: none;
  position: relative;
  transition: all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1);
}

.contact-modal__close-btn:hover,
.contact-modal__close-btn:focus {
  cursor: pointer;
  transform: rotate(90deg);
  opacity: 0.5;
}

.close-btn__icon {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.close-btn__icon:before,
.close-btn__icon:after {
  content: " ";
  background-color: black;
  height: 1px;
  width: 100%;
  position: absolute;
  z-index: 1;
}

.close-btn__icon:before {
  transform: rotate(45deg);
}

.close-btn__icon:after {
  transform: rotate(-45deg);
}
.contact-form__body {
  margin-bottom: var(--level4);
}
</style>

<script>
  export let variant,
    checked = false,
    onChange;
</script>

<style>
  .switch {
    position: relative;
    display: inline-block;
  }
  .switch-input {
    display: none;
  }
  .switch-label {
    display: block;
    width: 48px;
    height: 24px;
    text-indent: -150%;
    clip: rect(0 0 0 0);
    color: transparent;
    user-select: none;
  }
  .switch-label::before,
  .switch-label::after {
    content: "";
    display: block;
    position: absolute;
    cursor: pointer;
  }
  .switch-label::before {
    width: 100%;
    height: 100%;
    background-color: #dedede;
    border-radius: 9999em;
    -webkit-transition: background-color 0.25s ease;
    transition: background-color 0.25s ease;
  }
  .switch-label::after {
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
    -webkit-transition: left 0.25s ease;
    transition: left 0.25s ease;
  }
  .switch-input:checked + .switch-label::before {
    background-color: #888;
  }
  .switch-input.primary:checked + .switch-label.primary::before {
    background-color: #0053ba;
  }
  .switch-input.secondary:checked + .switch-label.secondary::before {
    background-color: #3a8f15;
  }
  .switch-input:checked + .switch-label::after {
    left: 24px;
  }
</style>

<svelte:options tag="custom-switch" />
<div class="switch">
  <input
    id="switch-1"
    type="checkbox"
    class="switch-input {variant}"
    bind:checked
    on:change={onChange} />
  <label for="switch-1" class="switch-label {variant}" />
</div>

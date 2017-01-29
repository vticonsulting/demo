<template>
  <div class="Grid Grid--guttersLg Grid--full med-Grid--fit">
    <div class="Grid-cell">
      <h2>Add-on Prepended</h2>
      <div class="InputAddOn">
        <span class="InputAddOn-item">Amount</span>
        <input class="InputAddOn-field">
      </div>
      <div class="InputAddOn">
        <button class="InputAddOn-item"><span class="icon icon-search"></span></button>
        <input class="InputAddOn-field">
      </div>
    </div>
    <div class="Grid-cell">
      <h2>Add-on Appended</h2>
      <div class="InputAddOn">
        <input class="InputAddOn-field">
        <button class="InputAddOn-item">Go</button>
      </div>
      <div class="InputAddOn">
        <input class="InputAddOn-field">
        <button class="InputAddOn-item"><span class="icon icon-star"></span></button>
      </div>
    </div>
  </div>
</template>
<style>
  .InputAddOn {
    display: flex;
    margin-bottom: 1.5em;
  }

  .InputAddOn-field {
    flex: 1;
  }
  .InputAddOn-field:not(:first-child) {
    border-left: 0;
  }
  .InputAddOn-field:not(:last-child) {
    border-right: 0;
  }

  .InputAddOn-item {
    background-color: rgba(147, 128, 108, 0.1);
    color: #666666;
    font: inherit;
    font-weight: normal;
  }

  .InputAddOn-field,
  .InputAddOn-item {
    border: 1px solid rgba(147, 128, 108, 0.25);
    padding: 0.5em 0.75em;
  }
  .InputAddOn-field:first-child,
  .InputAddOn-item:first-child {
    border-radius: 2px 0 0 2px;
  }
  .InputAddOn-field:last-child,
  .InputAddOn-item:last-child {
    border-radius: 0 2px 2px 0;
  }
</style>

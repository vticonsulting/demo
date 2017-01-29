<template>

  <div class="Grid Grid--guttersLg Grid--full large-Grid--fit">
    <div class="Grid-cell">
      <div class="Demo Demo--spaced">
        <div class="Media">
          <img class="Media-figure Image" src="{{ site.baseUrl }}images/kitten.jpg" alt="Kitten">
          <div class="Media-body">
            <h3 class="Media-title">Standard Media Object</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl quis massa vulputate adipiscing. Vivamus sit amet risus ligula. Nunc eu pulvinar augue.</p>
          </div>
        </div>
      </div>
      <div class="Demo Demo--spaced">
        <div class="Media">
          <img class="Media-figure Image" src="{{ site.baseUrl }}images/kitten.jpg" alt="Kitten">
          <div class="Media-body">
            <h3 class="Media-title">Standard Media Object</h3>
            <p>Donec imperdiet sem leo, id rutrum risus aliquam vitae. Cras tincidunt porta mauris, vel feugiat mauris accumsan eget.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="Grid-cell">
      <div class="Demo Demo--spaced">
        <div class="Media Media--reverse">
          <img class="Media-figure Image" src="{{ site.baseUrl }}images/kitten.jpg" alt="Kitten">
          <div class="Media-body">
            <h3 class="Media-title">Media Object Reversed</h3>
            <p>Phasellus vel felis purus. Aliquam consequat pellentesque dui, non mollis erat dictum sit amet. Curabitur non quam dictum, consectetur arcu in, vehicula justo. Donec tortor massa, eleifend nec viverra in, aliquet at eros. Mauris laoreet condimentum mauris, non tempor massa fermentum ut. Integer gravida pharetra cursus. Nunc in suscipit nunc.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .Media {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1em;
  }

  .Media-figure {
    margin-right: 1em;
  }

  .Media-body {
    flex: 1;
  }
  .Media-body,
  .Media-body :last-child {
    margin-bottom: 0;
  }

  .Media-title {
    margin: 0 0 .5em;
  }

  .Media--center {
    align-items: center;
  }

  .Media--reverse > .Media-figure {
    order: 1;
    margin: 0 0 0 1em;
  }
</style>

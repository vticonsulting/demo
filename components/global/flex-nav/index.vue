<template>
  <nav class="flex-nav">
    <ul>
      <li><a href="#">Item 01</a></li>
      <li><a href="#">Item 02</a></li>
      <li><a href="#">Item 03</a></li>
      <li><a href="#">Item 04</a></li>
      <li><a href="#">Item 05</a></li>
      <li><a href="#">Item 06</a></li>
      <li class="social">
        <a href="#">
          <icon name="twitter-square">
        </a>
      </li>
      <li class="social">
        <a href="#">
          <icon name="facebook-square">
        </a>
      </li>
      <li class="social">
        <a href="#">
          <icon name="github-square">
        </a>
      </li>
      <li class="social">
        <a href="#">
          <icon name="github-square">
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  a {
    color: white;
    font-weight: 100;
    letter-spacing: 2px;
    text-decoration: none;
    background: rgba(0,0,0,0.2);
    padding: 20px 5px;
    display: inline-block;
    width: 100%;
    text-align: center;
    transition: all 0.5s;

  }
  a:hover {
    background: rgba(0,0,0,0.3);
  }

  .wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: 50px;
  }

  /*Flex Container*/
  .flex-nav ul {
    border: 1px solid black;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .flex-nav li {
    flex: 3;
  }
  .flex-nav .social {
    flex: 1;
  }

  @media all and (max-width: 1000px) {

    .flex-nav ul {
      flex-wrap: wrap;
    }

    .flex-nav li {
      flex: 1 1 50%;
    }

    .flex-nav .social {
      flex: 1 1 25%;
    }

  }
  @media all and (max-width: 500px) {
    .flex-nav li {
      flex-basis: 100%;
    }
  }

</style>

<template lang="pug">
  .vui-time(:class="{'on-invalid': isTimeInvalid}")
    .vui-input(:class="{'ng-invalid': (markAsInvalid)}", @click='focus')
      input.hour(type='text', name='hour', maxlength='2', v-model='hour')
      span :
      input.minute(type='text', name='minute', maxlength='2', v-model='minute')
    span hh:mm
    .vui-select_container
      select.vui-select(name='mode', v-model='mode')
        option(value='AM') AM
        option(value='PM') PM
</template>

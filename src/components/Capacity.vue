<template>
  <div>
    <h2>Attending</h2>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <!-- <p>Spaces Left: {{ event.spacesLeft }} out of {{ event.capacity }}</p> -->

    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
    <!-- <ul>
      <li v-for="(name, index) in event.attending" :key="index">
        {{ name }}
      </li>
    </ul> -->

    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
// // import {ref, computed} from '@vue/composition-api'
// // import {reactive, computed, toRefs} from '@vue/composition-api'
// import {ref, computed} from '@vue/composition-api'
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
} from '@vue/composition-api'

import useEventSpace from '@/composables/use-event-space'

export default {
  setup() {
    // more code to write
    // context.attrs;
    // context.slots;
    // context.parent;
    // context.root;
    // context.emit;

    // // const capacity = ref(3)
    // // const attending = ref(['Tim', 'Bob', 'Joe'])

    // // const spacesLeft = computed(() => {
    // //   return capacity.value - attending.value.length
    // // })

    // const event = reactive({
    //   capacity: 4,
    //   attending: ['Tim', 'Bob', 'Joe'],
    //   spacesLeft: computed(() => {
    //     return event.capacity - event.attending.length
    //   }),
    // })

    // // function increaseCapacity() {
    // //   capacity.value++
    // // }

    // function increaseCapacity() {
    //   event.capacity++
    // }

    // // return {capacity, attending, spacesLeft, increaseCapacity}
    // return {...toRefs(event), increaseCapacity}

    onBeforeMount(() => {
      console.log('Before Mount!')
    })
    onMounted(() => {
      console.log('Mounted!')
    })
    onBeforeUpdate(() => {
      console.log('Before Update!')
    })
    onUpdated(() => {
      console.log('Updated!')
    })
    onBeforeUnmount(() => {
      console.log('Before Unmount!')
    })
    onUnmounted(() => {
      console.log('Unmounted!')
    })
    onActivated(() => {
      console.log('Activated!')
    })
    onDeactivated(() => {
      console.log('Deactivated!')
    })
    onErrorCaptured(() => {
      console.log('Error Captured!')
    })

    const {capacity, attending, spacesLeft, increaseCapacity} = useEventSpace()

    return {capacity, attending, spacesLeft, increaseCapacity}
  },
}

// function useEventSpace() {
//   const capacity = ref(4)
//   const attending = ref(['Tim', 'Bob', 'Joe'])
//   const spacesLeft = computed(() => {
//     return capacity.value - attending.value.length
//   })
//   function increaseCapacity() {
//     capacity.value++
//   }
//   return {capacity, attending, spacesLeft, increaseCapacity}
// }
</script>

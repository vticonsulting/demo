import {ref, computed} from '@vue/composition-api'

export default function useEventSpace() {
  const capacity = ref(4)
  const attending = ref(['Tim', 'Bob', 'Joe'])
  const spacesLeft = computed(() => {
    return capacity.value - attending.value.length
  })
  function increaseCapacity() {
    capacity.value++
  }
  return {capacity, attending, spacesLeft, increaseCapacity}
}

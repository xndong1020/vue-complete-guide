export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filter: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(
        fruit => fruit.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1
      )
    }
  }
}

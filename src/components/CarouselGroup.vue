<template>
  <div ref='carousel' class="carousel-wrapper">
    <div class="carousel" :style="carouselStyle">
        <div ref='carouselItems'
          
          :style="`width:${this.carousel.w_content}px;`"
          class="carousel-items-wrapper">
          <div class="carousel-item" v-for="item in itemVisible" :key='item._id'>
            <Group :group='item'/>
          </div>
        </div>
      
        <button id="carousel-btn-prev" @click="prevPage()">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
          </svg>
        </button>

        <button id="carousel-btn-next" @click="nextPage()">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
          </svg>
        </button>
    </div>
  </div>
</template>

<script>
import Group from '../components/Group.vue';

// import axios from 'axios';

export default {
  props: ['list_group'],
  components: {
    Group,
  },
  data() {
    return {
      list: [],
      carousel: {
        w_origin: 0,
        w_use: 0,
        w_content: 0,
        n_item: 1,
        w_item: 296,
        padding_x: 48,
        outline: 8,
        page: 0,
        n_page: 0,
      },
      direction: {
        prev: 0,
        next: 1,
      }
    };
  },
  computed: {
    carouselStyle () {
      return `width:${this.carousel.w_use}px;` + 
              `padding-left:${this.carousel.padding_x}px;` +
              `padding-right:${this.carousel.padding_x}px;`;
    },
    itemVisible () {
      let start = 0;
      let end = this.carousel.n_item;
      return this.list.slice(start, end);
    }
  },
  created() {
    this.list = this.list_group;
    window.addEventListener("resize", this.getCarouselSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.getCarouselSize);
  },
  mounted() {
    this.getCarouselSize();
  },
  methods: {
    getCarouselSize() {
      console.log("---------------------------");
      this.carousel.w_origin = this.$refs.carousel.clientWidth;
      console.log("Carousel width: " + this.carousel.w_origin);
      if (this.carousel.w_origin < 400) {
        console.log("Less 400 ");
        this.carousel.padding_x = 0;
      } else {
        console.log("More 400 ");
        this.carousel.padding_x = 48;
      }
      let content_width = this.carousel.w_origin - 2*this.carousel.padding_x - 2*this.carousel.outline;
      console.log("Carousel content_width: " + content_width);
      this.carousel.n_item = Math.floor(content_width / this.carousel.w_item);
      if (this.carousel.n_item < 1) {
        this.carousel.n_item = 1;
      }
      console.log("Carousel number of items: " + this.carousel.n_item);

      this.carousel.w_content = this.carousel.w_item * this.carousel.n_item;
      console.log("Carousel content width: " + this.carousel.w_content);

      this.carousel.w_use = this.carousel.w_content + 2*this.carousel.padding_x;
      console.log("Carousel use width: " + this.carousel.w_use);

      this.carousel.n_page = Math.ceil(this.list.length / this.carousel.n_item);
      console.log("Carousel number of page: " + this.carousel.n_page);
    },
    prevPage() {
      this.rotateList(this.direction.prev, this.carousel.n_item);
      // console.log("New Next List: " + this.list.toString());
    },
    nextPage() {
      this.rotateList(this.direction.next, this.carousel.n_item);
      // console.log("New Prev List: " + this.list.toString());
    },
    rotateList(direction, index) {
      if (direction == 1) {
        const cut_items = this.list.slice(0, index);
        this.list = this.list.slice(index);
        this.list = this.list.concat(cut_items);
      } else {
        const cut_items = this.list.slice(0, this.list.length - index);
        this.list = this.list.slice(0 - index);
        this.list = this.list.concat(cut_items);
      }
    }
  },
};
</script>
<style lang="postcss" scoped>
.carousel-wrapper {
  @apply w-full;
  /* @apply p-4; */
}

.carousel {
  @apply relative w-auto mx-auto bg-transparent;
  /* @apply px-4 py-4 ; */
}

.carousel-items-wrapper {
  @apply flex flex-row justify-center overflow-hidden w-full bg-transparent relative;
}

.carousel-item {
  @apply flex-shrink-0;
  @apply p-4;
  animation: myCarousel 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes myCarousel {
  from { 
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

button#carousel-btn-prev {
  @apply absolute top-1/2 left-0;
  @apply transform -translate-y-1/2;
  @apply p-2 rounded-full;
  @apply bg-transparent;
  @apply text-gold-500;

  @apply invisible opacity-0;
}

button#carousel-btn-next {
  @apply absolute top-1/2 right-0;
  @apply transform -translate-y-1/2;
  @apply p-2 rounded-full ;
  @apply bg-transparent;
  @apply text-gold-500;
  
  @apply invisible opacity-0;
}

button#carousel-btn-prev:hover, button#carousel-btn-next:hover {
  @apply bg-gold-500;
  @apply text-white;
}

.carousel-wrapper:hover button#carousel-btn-prev {
  @apply opacity-100 visible;
  /* transition: all 0.3s ease 0s; */

	animation: slide-left 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-left {
  from { 
    @apply transform -translate-y-1/2 left-12;
  }
  to {
    @apply transform -translate-y-1/2 left-0;
  }
}

.carousel-wrapper:hover button#carousel-btn-next {
  @apply opacity-100 visible;
  /* transition: all 0.3s ease 0s; */

	animation: slide-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-right {
  from { 
    @apply transform -translate-y-1/2 right-12;
  }
  to {
    @apply transform -translate-y-1/2 right-0;
  }
}


</style>

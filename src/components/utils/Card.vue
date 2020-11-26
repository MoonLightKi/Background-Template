<template>
  <div>
      <a-card :title="title"  :style="'width:' + width1 * 100 + '%'">
      <a slot="extra" href="#">保存</a>
      <p></p>
      <p>{{width1}}</p>
    </a-card>
  </div>
</template>

<script>
export default {
  props: ['width1', 'height1', 'title1'],
  data() {
    return {
        width: "200px",
        height: "70px",
        title: 'Defalut size Card',
        cardWidth: {
          width: this.width1 * 6 + '%'
        }
    }   
  },
  mounted() {
    this.width = this.width1,
    this.height = this.height1
    this.title = this.title1
  }
}
</script>
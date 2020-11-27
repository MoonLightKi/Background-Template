<template>
  <div>
    <a-modal
      title="Title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      :maskClosable="maskClosable"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>{{ ModalText }}</p>
    </a-modal>
  </div>
</template>
<script>
export default {
    props: ['visible1'],
  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      maskClosable: false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
        console.log(e)
        this.visible = false;
    },
    handleCancel(e) {
      console.log(e);
      this.visible = false;
    },
  },
  watch: {
      visible1(newVal) {
        console.log(newVal)
        this.visible = true
      }
  }
};
</script>

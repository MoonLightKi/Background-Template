<template>
  <div>
    <a-time-picker :open="open" @openChange="handleOpenChange">
      <a-button slot="addon" slot-scope="panel" size="small" type="primary" @click="handleClose">
        Ok {{ panel.prefixCls }}
      </a-button>
    </a-time-picker>
    <a-time-picker :open.sync="open2">
      <a-button slot="addon" size="small" type="primary" @click="handleClose">
        Ok
      </a-button>
    </a-time-picker>
  </div>
</template>
<script>
// import moment from 'moment';
export default {
  data() {
    return {
      open: false,
      open2: false,
    };
  },
  methods: {
    handleOpenChange(open) {
      console.log('open', open);
      this.open = open;
    },
    handleClose() {
      this.open = false;
      this.open2 = false;
    },
  },
};
</script>
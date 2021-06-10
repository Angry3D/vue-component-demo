<template>
  <div class="component-demo">
    <input class="input" type="text" v-model="content" />
    <p class="text-tip" v-show="content">hello, {{ content }}!</p>
  </div>
</template>

<script>
export default {
  name: "ComponentDemo",
  data() {
    return {
      content: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.component-demo {
  color: #333;
}
.input {
  border: 1px solid #00bfff;
  border-radius: 4px;
  padding: 2px 5px;
  font-size: 20px;
  outline: none;
}
.text-tip {
  font-size: 24px;
  font-weight: bold;
}
</style>

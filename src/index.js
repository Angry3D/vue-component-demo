import ComponentDemo from "./components/index.vue";

ComponentDemo.install = vue => {
  vue.component(ComponentDemo.name, ComponentDemo);
};

export default ComponentDemo;

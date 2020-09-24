import { Component, Vue } from 'vue-property-decorator';

interface ButtonProps {
    callback: Function;
}

@Component({
  props: {
    callback: Function,
  },
})

export default class Button<ButtonProps> extends Vue {
  render() {
    return (
      <button onClick={this.$props.callback}>
        Test
      </button>
    );
  }
}

import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import Progressbar from "../../custom/Progressbar.component";
import "../Checkout/Checkout.extension.style.scss";

export class Checkout extends SourceCheckout {
  renderProgressbar(currentStep) {
    return <Progressbar currentStep={currentStep} steps={this.stepMap} />;
  }

  render() {
    const { checkoutStep } = this.props;
    const currentStep = Object.keys(this.stepMap).indexOf(checkoutStep);
    return (
      <>
        {this.renderProgressbar(currentStep)}
        {super.render()}
      </>
    );
  }
}

export default Checkout;

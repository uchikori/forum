import Micromodal from "micromodal";
import "./scss/style.scss";

window.addEventListener('load', () => {
  Micromodal.show('modal')
})
Micromodal.init({
  disableScroll: true,
});
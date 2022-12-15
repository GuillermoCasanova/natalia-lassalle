import { c as create_ssr_component, f as escape, d as add_attribute } from './index-7de6220d.js';

const Modal_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modalIsOpen;
  let { label } = $$props;
  let { buttonText } = $$props;
  let { modalId } = $$props;
  let { classes } = $$props;
  console.log(classes);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  if ($$props.modalId === void 0 && $$bindings.modalId && modalId !== void 0)
    $$bindings.modalId(modalId);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  modalIsOpen = false;
  return `<button aria-label="${"Open " + escape(label, true)}"${add_attribute("aria-expanded", modalIsOpen, 0)}${add_attribute("class", classes, 0)}${add_attribute("data-target-id", modalId, 0)}>${escape(buttonText)}</button>`;
});

export { Modal_trigger as M };
//# sourceMappingURL=modal-trigger-58f6b1df.js.map

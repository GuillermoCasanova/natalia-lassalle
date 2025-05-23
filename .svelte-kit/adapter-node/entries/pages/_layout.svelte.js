import { c as create_ssr_component, e as escape, b as add_attribute, s as subscribe, a as each, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { L as Loader } from "../../chunks/loader.js";
const Modal_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modalIsOpen;
  let { label } = $$props;
  let { buttonText } = $$props;
  let { modalId } = $$props;
  let { classes } = $$props;
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
const header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'header.svelte-b89d23.svelte-b89d23{z-index:1;width:100%;left:0;right:0;top:0;z-index:5;position:relative;background-color:white;transition:all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1)}header.is-transparent.svelte-b89d23.svelte-b89d23{background-color:transparent;position:absolute}@media screen and (min-width: 940px){header.svelte-b89d23.svelte-b89d23,header.is-transparent.svelte-b89d23.svelte-b89d23{position:relative;background-color:var(--secondary-color)}}header.menu-opening.svelte-b89d23.svelte-b89d23{background:transparent}@media screen and (min-width: 900px){header.menu-opening.svelte-b89d23.svelte-b89d23{background:transparent}header.svelte-b89d23.svelte-b89d23{border-bottom:1px solid black}}.header__inner.svelte-b89d23.svelte-b89d23{display:grid;grid-template-areas:"logo navigation";grid-template-columns:2fr 1fr;margin-bottom:0;padding-left:var(--level2);padding-right:var(--level2);padding-top:var(--level2);padding-bottom:var(--level2)}@media screen and (min-width: 900px){.header__inner.svelte-b89d23.svelte-b89d23{margin-right:auto;margin-left:auto;padding-left:var(--level4);padding-right:var(--level4);grid-template-columns:1fr 2fr;padding-top:var(--level1);padding-bottom:var(--level1)}}.header__logo.svelte-b89d23.svelte-b89d23{position:relative;max-width:15rem;grid-area:logo;justify-self:start;width:100%;display:flex;align-items:center;z-index:1}@media screen and (min-width: 900px){.header__logo.svelte-b89d23.svelte-b89d23{max-width:14rem}}header.menu-opening .header__logo svg{fill:#fff}.header__logo.svelte-b89d23 a.svelte-b89d23{display:block;width:100%;transition:all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1)}.header__logo__inner.svelte-b89d23.svelte-b89d23{position:relative;overflow:hidden;padding-bottom:20%;width:100%;margin-bottom:0}.header__logo__inner.svelte-b89d23 svg.svelte-b89d23{position:absolute;top:0;left:0;right:0;bottom:0;object-fit:cover;height:100%;width:100%}header.is-transparent .header__logo__inner svg{fill:white}@media screen and (min-width: 900px){header.is-transparent .header__logo__inner svg{fill:black}}.header__menu-drawer.svelte-b89d23.svelte-b89d23{grid-area:navigation;justify-self:end}@media only screen and (min-width: 900px){.header__menu-drawer.svelte-b89d23.svelte-b89d23{display:none}}@keyframes svelte-b89d23-headerDrawerOpen{0%{opacity:0}100%{opacity:1}}@keyframes svelte-b89d23-headerDrawerClose{0%{opacity:1}100%{opacity:0}}.header-menu-drawer.menu-opening.svelte-b89d23.svelte-b89d23{animation:svelte-b89d23-headerDrawerOpen 0.3s cubic-bezier(0.5, 1, 0.89, 1) forwards;pointer-events:all}.header-menu-drawer.menu-closing.svelte-b89d23.svelte-b89d23{animation:svelte-b89d23-headerDrawerClose var(--duration-default)\n    cubic-bezier(0.11, 0, 0.5, 0) forwards;pointer-events:none}.header-menu-drawer.menu-closing.svelte-b89d23 .svelte-b89d23{transition-delay:0 !important}.header-menu-drawer.svelte-b89d23.svelte-b89d23{position:absolute;width:100%;overflow:hidden;left:0;right:0;background:black;z-index:0;height:100vh;opacity:0;top:0;will-change:opacity}.menu-drawer__inner.svelte-b89d23.svelte-b89d23{padding-left:var(--level5);padding-right:var(--level5);padding-top:calc(var(--level8) + var(--level8))}.menu-drawer__item.svelte-b89d23.svelte-b89d23{font-size:var(--h4);margin-bottom:var(--level3);flex-basis:0;opacity:0;will-change:opacity;transition:all 0.4s cubic-bezier(0.5, 1, 0.89, 1);text-align:right}.menu-drawer__items.show-nav-items.svelte-b89d23 .menu-drawer__item.svelte-b89d23{opacity:1}.menu-drawer__link.svelte-b89d23.svelte-b89d23{position:relative;display:inline-block;text-align:center;background-color:transparent;border:none;color:white;text-transform:uppercase;font-size:var(--h1);font-weight:bold;padding:var(--level1);line-height:1}.menu-drawer__link.svelte-b89d23.svelte-b89d23:hover,.menu-drawer__link.svelte-b89d23.svelte-b89d23:focus{color:black}button.menu-drawer__link{padding-top:var(--level1);padding-bottom:var(--level1)}.menu-drawer__link:hover:before,.menu-drawer__link:focus:before,.menu-drawer__link:active:before{opacity:1}.menu-drawer__link:before{content:" ";width:100%;height:100%;background:white;left:0;bottom:0;position:absolute;opacity:0;z-index:-1;transition:all 0 cubic-bezier(0.5, 1, 0.89, 1)}.menu-drawer__link:hover:before,.menu-drawer__link:focus:before{opacity:1}.menu-list__items.svelte-b89d23.svelte-b89d23{display:flex;align-items:center}.header__menu-list.svelte-b89d23.svelte-b89d23{align-items:center;justify-content:space-between;grid-area:navigation;justify-self:end;justify-self:end;min-width:38rem;display:none}@media screen and (min-width: 900px){.header__menu-list.svelte-b89d23.svelte-b89d23{display:flex}}.menu-list.svelte-b89d23.svelte-b89d23{width:86%;margin-right:0;margin-left:auto}.menu-list__inner.svelte-b89d23.svelte-b89d23,.menu-list__items.svelte-b89d23.svelte-b89d23{width:100%}.menu-list__items.svelte-b89d23.svelte-b89d23{display:flex;justify-content:flex-end}.menu-list__item.svelte-b89d23.svelte-b89d23{margin-right:var(--level5)}.menu-list__items.svelte-b89d23 .menu-list__item.svelte-b89d23:last-child{margin-right:0}.menu-list__link.svelte-b89d23.svelte-b89d23{padding-left:var(--level1);padding-right:var(--level1);padding-bottom:0.15rem;font-size:var(--h5);position:relative;background:transparent;border:none;text-transform:uppercase;line-height:1}.menu-list__link:before{content:" ";width:1.5rem;height:2px;background:black;left:0;bottom:-1px;right:0;margin:auto;position:absolute;opacity:0;z-index:-1;transition:all 0 cubic-bezier(0.5, 1, 0.89, 1)}.menu-list__link:hover:before,.menu-list__link:focus:before{opacity:1}.menu-list__link[aria-current].svelte-b89d23.svelte-b89d23:before{opacity:1}.header__menu-icon.svelte-b89d23.svelte-b89d23{background:transparent;position:relative;border:none;outline:0;z-index:1;position:relative;display:flex;align-items:center;justify-content:center;width:2.5rem;height:3rem;transition:all var(--duration-long) ease}.header__menu-icon.svelte-b89d23.svelte-b89d23:hover{cursor:pointer}.header__menu-icon-top-bar.svelte-b89d23.svelte-b89d23,.header__menu-icon-middle-bar.svelte-b89d23.svelte-b89d23,.header__menu-icon-bottom-bar.svelte-b89d23.svelte-b89d23{width:70%;height:2px;display:block;position:absolute;top:0;bottom:0;right:0;left:0;background-color:black;margin:auto;transition:all var(--duration-default) ease;will-change:transform opacity}header.is-transparent .header__menu-icon .header__menu-icon-top-bar,header.is-transparent .header__menu-icon .header__menu-icon-middle-bar,\n    header.is-transparent .header__menu-icon .header__menu-icon-bottom-bar\n  {background-color:white}@media screen and (min-width: 940px){header.is-transparent .header__menu-icon .header__menu-icon-top-bar,\n      header.is-transparent .header__menu-icon .header__menu-icon-middle-bar\n    ,\n      header.is-transparent .header__menu-icon .header__menu-icon-bottom-bar\n    ,.header__menu-icon.svelte-b89d23 .header__menu-icon-top-bar.svelte-b89d23,.header__menu-icon.svelte-b89d23 .header__menu-icon-middle-bar.svelte-b89d23,.header__menu-icon.svelte-b89d23 .header__menu-icon-bottom-bar.svelte-b89d23{background-color:black}}.header__menu-icon.svelte-b89d23 .header__menu-icon-top-bar.svelte-b89d23{transform:translateY(-0.6rem)}.header__menu-icon.svelte-b89d23 .header__menu-icon-bottom-bar.svelte-b89d23{transform:translateY(0.6rem)}.header__menu-icon[aria-expanded="true"].svelte-b89d23 .header__menu-icon-middle-bar.svelte-b89d23{opacity:0;background:white}.header__menu-icon[aria-expanded="true"].svelte-b89d23 .header__menu-icon-top-bar.svelte-b89d23{transform:rotate(45deg);top:0;background:white}.header__menu-icon[aria-expanded="true"].svelte-b89d23 .header__menu-icon-bottom-bar.svelte-b89d23{transform:rotate(-45deg);top:0;background:white}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathName;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { main_nav } = $$props;
  let navLinks = main_nav.items;
  let container;
  let currentPage;
  let isHomePage = true;
  let navIsOpen = false;
  let drawerMenuContainer;
  let menuDrawerToggle;
  if ($$props.main_nav === void 0 && $$bindings.main_nav && main_nav !== void 0)
    $$bindings.main_nav(main_nav);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        currentPage = $page.url.pathname;
        isHomePage = currentPage.length == 1 ? true : false;
      }
    }
    pathName = $page.url.pathname;
    $$rendered = `<header class="${[
      "svelte-b89d23",
      " " + (isHomePage ? "is-transparent" : "")
    ].join(" ").trim()}"${add_attribute("this", container, 0)}><div class="header__inner svelte-b89d23"><div class="header__logo svelte-b89d23">${pathName == "/" ? `<a href="/" title="Natalia Lassalle Morillo home" rel="internal" data-sveltekit-noscroll class="svelte-b89d23"><h1 class="header__logo__inner svelte-b89d23"><span class="visually-hidden">Natalia Lassalle Morillo </span>
            <svg role="presentation" aria-hidden="true" class="svelte-b89d23"><use xlink:href="#logo"></use></svg></h1></a>` : `<a class="header__logo__inner svelte-b89d23" href="/" title="Natalia Lassalle Morillo home" rel="internal" data-sveltekit-noscroll><span class="visually-hidden">Natalia Lassalle Morillo </span>
          <svg role="presentation" aria-hidden="true" class="svelte-b89d23"><use xlink:href="#logo"></use></svg></a>`}</div>

    <div class="header__menu-drawer svelte-b89d23"><details id="menu-drawer-container" class="header-menu-drawer-container"${add_attribute("this", drawerMenuContainer, 0)}><summary class="header__menu-icon svelte-b89d23" aria-label="Main navigation"${add_attribute("aria-expanded", navIsOpen, 0)} data-header-drawer-toggle role="button"${add_attribute("this", menuDrawerToggle, 0)}><span class="header__menu-icon-top-bar svelte-b89d23"></span>
          <span class="header__menu-icon-middle-bar svelte-b89d23"></span>
          <span class="header__menu-icon-bottom-bar svelte-b89d23"></span>

          <span class="header__icon__text visually-hidden" data-toggle-text>${`Open Menu`}</span></summary>
        <aside tabindex="-1" class="${[
      "header-menu-drawer svelte-b89d23",
      " menu-closing"
    ].join(" ").trim()}"><nav class="menu-drawer svelte-b89d23"><div class="menu-drawer__inner svelte-b89d23"><ul class="${["menu-drawer__items svelte-b89d23", ""].join(" ").trim()}">${each(navLinks, (navItem, index) => {
      return `<li class="menu-drawer__item svelte-b89d23" style="${"transition-delay: " + escape(0.1 * index + "s", true)}">${navItem.navigationItemUrl.linkType == "external" ? `<a class="menu-drawer__link svelte-b89d23"${add_attribute("href", navItem.navigationItemUrl.href, 0)}${add_attribute("target", navItem.navigationItemUrl.blank ? "_blank" : null, 0)} rel="external" title="${"Go to external link at " + escape(navItem.navigationItemUrl.href, true)}">${escape(navItem.text)}
                      </a>` : ``}

                    ${navItem.navigationItemUrl.linkType == "internal" ? `<a data-sveltekit-noscroll class="${[
        "menu-drawer__link svelte-b89d23",
        pathName == navItem.navigationItemUrl.href ? "is-active" : ""
      ].join(" ").trim()}"${add_attribute("href", navItem.navigationItemUrl.internalLink.handle.current, 0)} rel="internal" title="${"Go to " + escape(navItem.text.toLowerCase(), true) + " page"}">${escape(navItem.text)}
                      </a>` : ``}

                    ${navItem.navigationItemUrl.linkType == "anchor" ? `${"contact us".indexOf(navItem.text.toLowerCase()) >= 0 ? `${validate_component(Modal_trigger, "ModalTrigger").$$render(
        $$result,
        {
          modalId: "contact-modal",
          label: "contact modal",
          classes: "menu-drawer__link",
          buttonText: navItem.text
        },
        {
          buttonText: ($$value) => {
            navItem.text = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `<a class="menu-drawer__link svelte-b89d23"${add_attribute("href", navItem.navigationItemUrl.anchorLink, 0)} rel="internal" title="${"Go to " + escape(navItem.text.toLowerCase(), true) + " section"}">${escape(navItem.text)}
                        </a>`}` : ``}
                  </li>`;
    })}</ul></div></nav></aside></details></div>

    <div class="header__menu-list svelte-b89d23"><nav class="menu-list svelte-b89d23"><div class="menu-list__inner svelte-b89d23"><ul class="${["menu-list__items svelte-b89d23", ""].join(" ").trim()}">${each(navLinks, (navItem, index) => {
      return `<li class="menu-list__item svelte-b89d23" style="${"transition-delay: " + escape(0.1 * index + "s", true)}">${navItem.navigationItemUrl.linkType == "external" ? `<a class="menu-list__link svelte-b89d23"${add_attribute("href", navItem.navigationItemUrl.href, 0)}${add_attribute("target", navItem.navigationItemUrl.blank ? "_blank" : null, 0)} rel="external" title="${"Go to external link at " + escape(navItem.navigationItemUrl.href, true)}">${escape(navItem.text)}
                  </a>` : ``}

                ${navItem.navigationItemUrl.linkType == "internal" ? `<a data-sveltekit-noscroll class="${[
        "menu-list__link svelte-b89d23",
        pathName == "/" + navItem.navigationItemUrl.internalLink.handle.current ? "is-active" : ""
      ].join(" ").trim()}" href="${"/" + escape(navItem.navigationItemUrl.internalLink.handle.current, true)}" rel="internal" title="${"Go to " + escape(navItem.text.toLowerCase(), true) + " page"}"${add_attribute(
        "aria-current",
        pathName == "/" + navItem.navigationItemUrl.internalLink.handle.current ? "page" : null,
        0
      )}>${escape(navItem.text)}
                  </a>` : ``}

                ${navItem.navigationItemUrl.linkType == "anchor" ? `${"contact us".indexOf(navItem.text.toLowerCase()) >= 0 ? `${validate_component(Modal_trigger, "ModalTrigger").$$render(
        $$result,
        {
          modalId: "contact-modal",
          label: "contact modal",
          classes: "menu-list__link",
          buttonText: navItem.text
        },
        {
          buttonText: ($$value) => {
            navItem.text = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `<a class="menu-list__link svelte-b89d23"${add_attribute("href", navItem.navigationItemUrl.anchorLink, 0)} rel="internal" title="${"Go to " + escape(navItem.text.toLowerCase(), true) + " section"}">${escape(navItem.text)}
                    </a>`}` : ``}
              </li>`;
    })}</ul></div></nav></div></div>
</header>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const Svg_graphics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" class="visually-hidden hidden" aria-hidden="true"><symbol id="logo" viewBox="0 0 191.9 20.7"><title>Natalia Lasalle Morillo </title><path d="M1.1,15.7V3.2h2.5c2.6,6.9,3.1,8.2,3.2,8.8h0c-.1-1.5-.1-3.3-.1-5.4v-3.5h2v12.5h-2.4C3.7,8.3,3.2,7,3,6.4h0c0,1.5,0,3.4,0,5.6v3.6H1.1Z"></path><path d="M12.9,12.5l-.6,3.1h-2.2l2.9-12.5h2.9l2.9,12.5h-2.4l-.6-3.1h-2.9ZM15.4,10.6c-.5-2.4-.8-4.1-1-5.3h0c-.2,1.2-.5,3-1,5.3h2.1Z"></path><path d="M20.7,5.1h-2.7v-2h7.6v2h-2.7v10.6h-2.2V5.1Z"></path><path d="M27.8,12.5l-.6,3.1h-2.2l2.9-12.5h2.9l2.9,12.5h-2.4l-.6-3.1h-2.9ZM30.3,10.6c-.5-2.4-.8-4.1-1-5.3h0c-.2,1.2-.5,3-1,5.3h2.1Z"></path><path d="M34.9,3.2h2.2v10.6h4.3l-.2,1.9h-6.3V3.2Z"></path><path d="M44.8,3.2v12.5h-2.2V3.2h2.2Z"></path><path d="M49,12.5l-.6,3.1h-2.2l2.9-12.5h2.9l2.9,12.5h-2.4l-.6-3.1h-2.9ZM51.5,10.6c-.5-2.4-.8-4.1-1-5.3h0c-.2,1.2-.5,3-1,5.3h2.1Z"></path><path d="M59.7,3.2h2.2v10.6h4.3l-.2,1.9h-6.3V3.2Z"></path><path d="M69.9,12.5l-.6,3.1h-2.2l2.9-12.5h2.9l2.9,12.5h-2.4l-.6-3.1h-2.9ZM72.4,10.6c-.5-2.4-.8-4.1-1-5.3h0c-.2,1.2-.5,3-1,5.3h2.1Z"></path><path d="M78.9,12.2c.1,1,.5,2,1.7,2s1.5-.7,1.5-1.6-.5-1.6-2.1-2.4c-2.1-1-3-1.9-3-3.8s1.3-3.4,3.6-3.4,3.5,1.9,3.5,3.5h-2.2c0-.7-.3-1.8-1.4-1.8s-1.3.6-1.3,1.4.4,1.3,1.9,2c2.2,1,3.3,2,3.3,4.1s-1.2,3.6-3.9,3.6-3.8-1.8-3.8-3.7h2.2Z"></path><path d="M87.7,12.2c.1,1,.5,2,1.7,2s1.5-.7,1.5-1.6-.5-1.6-2.1-2.4c-2.1-1-3-1.9-3-3.8s1.3-3.4,3.6-3.4,3.5,1.9,3.5,3.5h-2.2c0-.7-.3-1.8-1.4-1.8s-1.3.6-1.3,1.4.4,1.3,1.9,2c2.2,1,3.3,2,3.3,4.1s-1.2,3.6-3.9,3.6-3.8-1.8-3.8-3.7h2.2Z"></path><path d="M97,12.5l-.6,3.1h-2.2l2.9-12.5h2.9l2.9,12.5h-2.4l-.6-3.1h-2.9ZM99.5,10.6c-.5-2.4-.8-4.1-1-5.3h0c-.2,1.2-.5,3-1,5.3h2.1Z"></path><path d="M104,3.2h2.2v10.6h4.3l-.2,1.9h-6.3V3.2Z"></path><path d="M111.8,3.2h2.2v10.6h4.3l-.2,1.9h-6.3V3.2Z"></path><path d="M125.7,10.1h-4v3.6h4.5l-.3,1.9h-6.4V3.2h6.4v2h-4.2v3h4v1.9Z"></path><path d="M131.3,9.9v1.9h-4.1v-1.9h4.1Z"></path><path d="M140.5,11c0-2.1,0-4.6,0-6h0c-.4,2.4-1.1,6.6-1.9,10.6h-2c-.6-3.8-1.3-8.3-1.7-10.7h0c0,1.5.1,4.1.1,6.2v4.4h-2V3.2h3.3c.7,3.5,1.2,7,1.5,8.8h0c.3-1.7,1-5.5,1.7-8.8h3.3v12.5h-2.1v-4.7Z"></path><path d="M152.6,9.3c0,4.6-1.2,6.6-4.1,6.6s-4-2-4-6.6,1.5-6.3,4.1-6.3,4,2,4,6.4ZM146.8,9.3c0,3,.5,4.7,1.8,4.7s1.8-1.6,1.8-4.7-.4-4.4-1.8-4.4-1.8,1.6-1.8,4.4Z"></path><path d="M156.7,10.4v5.3h-2.2V3.2h3.8c2.3,0,3.6,1.2,3.6,3.4s-1,2.6-1.6,2.8c1,.5,1.4,1.3,1.4,3.1v.5c0,1.4,0,2,.2,2.6h-2.2c-.2-.6-.2-1.6-.2-2.6v-.5c0-1.7-.4-2.2-1.8-2.2h-1ZM156.7,8.5h1.1c1.4,0,1.9-.6,1.9-1.8s-.5-1.7-1.7-1.7h-1.3v3.5Z"></path><path d="M165.9,3.2v12.5h-2.2V3.2h2.2Z"></path><path d="M168.2,3.2h2.2v10.6h4.3l-.2,1.9h-6.3V3.2Z"></path><path d="M175.9,3.2h2.2v10.6h4.3l-.2,1.9h-6.3V3.2Z"></path><path d="M191.1,9.3c0,4.6-1.2,6.6-4.1,6.6s-4-2-4-6.6,1.5-6.3,4.1-6.3,4,2,4,6.4ZM185.2,9.3c0,3,.5,4.7,1.8,4.7s1.8-1.6,1.8-4.7-.4-4.4-1.8-4.4-1.8,1.6-1.8,4.4Z"></path></symbol><symbol id="spiral" viewBox="0 0 175 175"><path d="M95.5 165.9c-4-1.3-7.9-2.6-11.8-4-.6 1.1-1 1.8-1.5 2.6-.5-.1-1-.1-1.4-.3-3.9-2-8.3-2.3-12.5-3.1-9.7-1.7-19.3-3.7-27.1-10.2-.8-.6-1.6-1.2-2.1-2.1-3.3-6-9.3-9.1-14.2-13.4-4.4-3.9-9.3-7.1-11.6-12.8-1.1-2.7-3.1-4.9-4.6-7.1-1-5.9-.2-11.9-3.9-17-2.6-3.6-3-7.9-3.8-12.5.9-6.5 4.3-13.2 1.9-20.7 2.8-3.1 4.6-7 8.1-9.7 1.3-1 2.2-3 2.4-4.7 1-8.6 5.4-15.6 10.8-21.7 4.1-4.7 8.7-9.2 15.6-11 5.8-1.5 11.1-5.4 15.7-7.7 4.9.5 9 .9 13.1 1.3 1.2-.9 2.2-1.7 3.2-2.6 5 .8 10.1 1.4 15 2.3 3.2.6 6.3 1.8 10.2 3 .6-.1 2-.5 3.3-.7 2.4 2.3 4.6 4.4 6.6 6.3 1.6-.1 2.7-.2 4.8-.4.9 1.1 2.2 2.7 3.4 4.3 3.7 4.8 7.8 9.4 10.9 14.5 3 4.9 5.1 10.5 5.3 16.4.2 5 .7 10.1.9 15.1.1 1.9-.5 3.9-.6 5.9-.1 1.3.2 2.5.3 4.4-4.9 8.7-10 18-15 27-5.1 3.5-10.2 6.5-14.6 10.4-2.8 2.5-5.1 5.4-8.8 6.8-1.7.6-3.2 1.6-5.1 2.6-2.3-1.2-4.6-.4-6.9 1.2-2.7 1.9-5.5 2.6-8.8 1.2-2.4-1-4.8-1.6-7.7-.7-1.7.5-3.8-.5-4.8-.6-3.8-2.1-6.7-3.8-9.7-5.4-.6-.3-1.3-.5-1.7-.9-3.9-4-7.7-8-11.5-12.1s-4.7-9.7-6.7-14.6c-1-2.5-1.7-5.2-2.5-8.2.9-6 1.9-12.4 2.8-18.1 1.5-3 2.8-5.5 3.9-8 1.5-3.3 3.3-6.5 6.8-8.2 1.5-.7 3-1.7 4-2.9 4.5-5.5 11-7.5 17.4-8.1 6.9-.7 13.7 1.5 19.4 5.9.7.5 1.2 1.2 1.9 1.6 2.6 1.1 3.6 3.2 3.6 6 4.7 2.2 5.3 6.7 6.3 11.1 1 4.5 0 8.4-2.5 12 .4 1.4.7 2.7 1 3.8-.9 2.2-1.7 4.2-2.5 6.3-1 .9-2.1 1.8-3.2 2.8-2 .4-4 .8-5.8 1.2-2.3-.4-4.6-.7-7.5-1.2-3.6-3-4.6-7.5-4.2-12.8 1.3-2.3 2.8-4.9 4.7-8.2v-7.9c-5.8-.9-11.1-1.8-17-2.7-2.4 2.5-4.9 5-6.9 7-1.3 6.1-2.4 11.3-3.5 16.6.4 2.1.9 4.2 1.3 6.3 5.6 11.1 15.2 16.9 27 19.7 1.4-.6 2.7-1.2 4.3-1.9.7.4 1.5.9 2.1 1.2 3-1 5.7-1.9 8-2.6 5-4 7.4-9.6 11.9-13.4 2.3-1.9 4.7-3.7 6.7-5.8 2-2.1 3.8-4.4 4-7.7.2-2.4 1-4.9 2.2-7 4.3-7.4 2.1-14.2-1.5-20.9-.2-.4-.5-.8-.7-1.3.3-1 .5-1.9.7-2.7-.2-.5-.2-.9-.4-1.1-4-5-8.5-9.5-14-12.9-1.3-.8-2.6-1.7-4-1.9-3.6-.4-6.1-2.3-8.2-4.7-4.1-1.9-8.2-.8-12.2-1.2-4.5-.4-8 .7-11.9 2.5-1.2-.3-2.6-.7-4-1-2.8.8-4.7 4.2-7.9 2.6-3 1.7-6.2 3-9.2 4.6-2.9 1.5-5.7 3.3-8.1 4.7-2.9 4.9-5.5 9.4-8.1 13.9-1.3 2.3-2.1 4.6-2.3 7.3-.1 2.6-.6 5.5-2.1 7.5-2.9 3.8-2.7 7.7-1.9 11.9.6 3.2 1 6.3.7 9.6-.2 3.2.7 6.5 1.2 9.9 3.6 4.8 8.3 9.2 7.5 16.7 3.8 3.3 6.5 7.9 11.2 10.7 1.7 1 2.9 2.7 4.4 4 2.8 2.5 5.6 5.1 8.7 7.3 1.7 1.2 3.8 1.8 5.8 2.5 2.7 1.1 5.5 2.1 8.3 3.1 1.4.5 2.8 1.1 4.2 1.5 3.8 1.1 7.6 2.1 11 3 2.4.2 4.7-.1 6.7.6 6.2 2.1 12.7 1.2 18 2.6 4.3-2 7.9-3.2 11.1-5.2 6.3-4 13.8-6.2 18.9-12.2 2.9-3.4 6.4-6 10.6-7.9 2.8-1.3 5.2-3.3 8.4-5.4 2.9-3.1 4.2-8.2 8.7-11 1.9-1.2 3.9-2.2 5.8-3.3 2.6 1.8 3.8 3.5 3.2 6.5-.2 1.2.7 2.6 1.2 3.9v2c-1.9 3-4.2 5.7-5.8 8.9-3 6-7.5 10.2-13.3 13.2-2.3 1.2-4.7 2.4-6.2 3.2-2.2 3-4 5.3-5.5 7.4-2.2.2-3.8.3-5.6.4-2.9 4.1-7.4 3.5-10.8 3.9-3 2.5-5.5 4.5-8.1 6.6-.8-.1-1.7-.3-2.5-.4-.8.9-1.6 1.7-2.3 2.4-1.1-.2-2.1-.4-3-.6-.9.9-1.7 1.8-2.4 2.6h-5c-2.8.1-5.5.1-8.1.1z"></path></symbol><symbol id="icon-external-link" viewBox="0 0 12 12"><title>external link </title><path fill="currentColor" d="M6 1h5v5L8.86 3.85 4.7 8 4 7.3l4.15-4.16L6 1ZM2 3h2v1H2v6h6V8h1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"></path></symbol></svg>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import "../styles/base.css";@import "../styles/grid.css";.loading-screen.svelte-xrmasu{position:fixed;background-color:#000000;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:10}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  loading = false;
  $page.url.pathname;
  $$unsubscribe_page();
  return `${loading ? `<div class="loading-screen svelte-xrmasu">${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}</div>` : ``}

${validate_component(Header, "Nav").$$render($$result, Object.assign({}, data.navigation), {}, {})}

<main data-sveltekit-prefetch>${slots.default ? slots.default({}) : ``}</main>

${validate_component(Svg_graphics, "SvgGraphics").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};

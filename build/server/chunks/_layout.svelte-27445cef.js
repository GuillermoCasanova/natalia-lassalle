import { c as create_ssr_component, v as validate_component, b as subscribe, d as add_attribute, e as each, f as escape, g as null_to_empty, i as is_promise, n as noop } from './index-7de6220d.js';
import { p as page } from './stores-46889842.js';
import { M as Modal_trigger } from './modal-trigger-58f6b1df.js';
import { c as client } from './sanity-f213399b.js';
import '@sanity/client';
import '@sanity/image-url';

const css$3 = {
  code: "header.svelte-90j5n6.svelte-90j5n6{border-bottom:1px solid black;padding-top:var(--level3);padding-bottom:var(--level3);z-index:100;position:fixed;width:100%;left:0;right:0;top:0;background-color:var(--tertiary-color);transition:all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1)}header.menu-opening.svelte-90j5n6.svelte-90j5n6{background:#fff}@media screen and (min-width: 975px){header.svelte-90j5n6.svelte-90j5n6{padding-top:var(--level4);padding-bottom:var(--level4)}header.menu-opening.svelte-90j5n6.svelte-90j5n6{background-color:var(--tertiary-color)}}.header__inner.svelte-90j5n6.svelte-90j5n6{padding-left:var(--level4);padding-right:var(--level4);display:grid;grid-template-areas:'logo navigation';grid-template-columns:2fr 1fr;margin-bottom:0}@media screen and (min-width: 975px){.header__inner.svelte-90j5n6.svelte-90j5n6{max-width:90rem;margin-right:auto;margin-left:auto;grid-template-columns:1fr 2fr}}.header__logo.svelte-90j5n6.svelte-90j5n6{position:relative;max-width:12rem;grid-area:logo;justify-self:start;width:100%;display:flex;align-items:center;z-index:1}@media screen and (min-width: 975px){.header__logo.svelte-90j5n6.svelte-90j5n6{max-width:13rem}}.header__logo.svelte-90j5n6 a.svelte-90j5n6{display:block;width:100%;transition:all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1)}.header__logo.svelte-90j5n6 a.svelte-90j5n6:hover,.header__logo.svelte-90j5n6 a.svelte-90j5n6:focus{opacity:0.5}.header__logo__inner.svelte-90j5n6.svelte-90j5n6{position:relative;overflow:hidden;padding-bottom:20%;width:100%;margin-bottom:0}.header__logo__inner.svelte-90j5n6 svg.svelte-90j5n6{position:absolute;top:0;left:0;right:0;bottom:0;object-fit:cover;height:100%;width:100%}.header__menu-drawer.svelte-90j5n6.svelte-90j5n6{grid-area:navigation;justify-self:end}@media only screen and (min-width: 975px){.header__menu-drawer.svelte-90j5n6.svelte-90j5n6{display:none}}@keyframes svelte-90j5n6-headerDrawerOpen{0%{opacity:0}100%{opacity:1}}@keyframes svelte-90j5n6-headerDrawerClose{0%{opacity:1}100%{opacity:0}}.header-menu-drawer-container.menu-opening.svelte-90j5n6 .header-menu-drawer.svelte-90j5n6{animation:svelte-90j5n6-headerDrawerOpen 0.3s cubic-bezier(0.5, 1, 0.89, 1) forwards;pointer-events:all}.header-menu-drawer-container.menu-closing.svelte-90j5n6 .header-menu-drawer.svelte-90j5n6{animation:svelte-90j5n6-headerDrawerClose var(--duration-default) cubic-bezier(0.11, 0, 0.5, 0) forwards;pointer-events:none}.header-menu-drawer-container.menu-closing.svelte-90j5n6 .svelte-90j5n6{transition-delay:0 !important}.header-menu-drawer.svelte-90j5n6.svelte-90j5n6{position:absolute;width:100vw;left:0;right:0;background:white;z-index:0;height:100vh;opacity:0}.menu-drawer__inner.svelte-90j5n6.svelte-90j5n6{padding-left:var(--level5);padding-right:var(--level5);padding-top:var(--level4)}.menu-drawer__item.svelte-90j5n6.svelte-90j5n6{font-size:var(--h4);margin-bottom:var(--level3);flex-basis:0;opacity:0;will-change:opacity;transition:all 0.4s cubic-bezier(0.5, 1, 0.89, 1)}.menu-drawer__items.show-nav-items.svelte-90j5n6 .menu-drawer__item.svelte-90j5n6{opacity:1}.menu-drawer__link{position:relative;padding:var(--level0);padding-right:var(--level3);padding-left:var(--level3);display:inline-block;text-align:center;margin-left:calc(var(--level3) * -1);background-color:transparent;border:none}button.menu-drawer__link{padding-top:var(--level1);padding-bottom:var(--level1)}.menu-drawer__link:hover:before,.menu-drawer__link:focus:before,.menu-drawer__link:active:before{opacity:1}.menu-drawer__link:before{content:' ';border:1px solid black;width:100%;height:100%;top:0;left:0;bottom:0;border-radius:50px;position:absolute;opacity:0;transition:all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1)}.header__icon--menu.svelte-90j5n6.svelte-90j5n6{background:transparent;position:relative;border:none;outline:0;z-index:1;position:relative;display:flex;align-items:center;justify-content:center;width:2.5rem;height:3rem}.header__icon--menu.svelte-90j5n6.svelte-90j5n6:hover{cursor:pointer}.header__icon--menu.svelte-90j5n6 .header__icon__inner.svelte-90j5n6{display:flex;align-items:center;justify-content:center;position:absolute;opacity:1;transform:scale(1);transition:transform 150ms ease, opacity 150ms ease;width:100%}.header__icon--menu.svelte-90j5n6.svelte-90j5n6:after,.header__icon--menu.svelte-90j5n6 .header__icon__inner.svelte-90j5n6:after,.header__icon--menu.svelte-90j5n6 .header__icon__inner.svelte-90j5n6:before{content:' ';width:70%;height:1px;display:block;position:absolute;top:0;bottom:0;right:0;left:0;background-color:black;margin:auto;transition:all var(--duration-default) ease}.header__icon--menu.svelte-90j5n6 .header__icon__inner.svelte-90j5n6:after{top:-17px}.header__icon--menu.svelte-90j5n6 .header__icon__inner.svelte-90j5n6:before{top:9px}.header-menu-drawer-container.menu-opening.svelte-90j5n6 .header__icon--menu.svelte-90j5n6:after{transform:translateX(-2px);opacity:0}.header-menu-drawer-container.menu-opening.svelte-90j5n6 .header__icon__inner.svelte-90j5n6:after{transform:rotate(45deg);top:0}.header-menu-drawer-container.menu-opening.svelte-90j5n6 .header__icon__inner.svelte-90j5n6:before{transform:rotate(-45deg);top:0}.menu-list__items.svelte-90j5n6.svelte-90j5n6{display:flex;align-items:center}.header__menu-list.svelte-90j5n6.svelte-90j5n6{align-items:center;justify-content:space-between;grid-area:navigation;justify-self:end;justify-self:end;min-width:38rem;display:none}@media screen and (min-width: 975px){.header__menu-list.svelte-90j5n6.svelte-90j5n6{display:flex}}.menu-list.svelte-90j5n6.svelte-90j5n6{width:86%;margin-right:0;margin-left:auto}.menu-list__inner.svelte-90j5n6.svelte-90j5n6,.menu-list__items.svelte-90j5n6.svelte-90j5n6{width:100%}.menu-list__items.svelte-90j5n6.svelte-90j5n6{display:flex;justify-content:flex-end}.menu-list__item.svelte-90j5n6.svelte-90j5n6{margin-right:var(--level5)}.menu-list__items.svelte-90j5n6 .menu-list__item.svelte-90j5n6:last-child{margin-right:0}.menu-list__link{padding-left:var(--level2);padding-right:var(--level2);padding-top:var(--level1);padding-bottom:var(--level1);font-size:var(--h5);position:relative;background:transparent;border:none}.menu-list__link:before{content:' ';border:1px solid black;width:100%;height:100%;top:0;left:0;bottom:0;border-radius:50px;position:absolute;opacity:0;transition:all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1)}.menu-list__link:hover:before,.menu-list__link:focus:before{opacity:1}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathName;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { main_nav } = $$props;
  let navLinks = main_nav.items;
  let container;
  let navIsOpen = false;
  let drawerMenuContainer;
  let menuDrawerToggle;
  if ($$props.main_nav === void 0 && $$bindings.main_nav && main_nav !== void 0)
    $$bindings.main_nav(main_nav);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    pathName = $page.url.pathname;
    $$rendered = `<header class="${["svelte-90j5n6", ""].join(" ").trim()}"${add_attribute("this", container, 0)}><div class="${"header__inner svelte-90j5n6"}"><div class="${"header__logo svelte-90j5n6"}">${pathName == "/" ? `<a href="${"/"}" title="${"Maison Matador home"}" rel="${"internal"}" class="${"svelte-90j5n6"}"><h1 class="${"header__logo__inner svelte-90j5n6"}"><span class="${"visually-hidden"}">Maison Matador </span>
						<svg role="${"presentation"}" aria-hidden="${"true"}" class="${"svelte-90j5n6"}"><use xlink:href="${"#maison-logo"}"></use></svg></h1></a>` : `<a class="${"header__logo__inner svelte-90j5n6"}" href="${"/"}" title="${"Maison Matador home"}" rel="${"internal"}"><span class="${"visually-hidden"}">Maison Matador </span>
					<svg role="${"presentation"}" aria-hidden="${"true"}" class="${"svelte-90j5n6"}"><use xlink:href="${"#maison-logo"}"></use></svg></a>`}</div>

		<div class="${"header__menu-drawer svelte-90j5n6"}"><details id="${"menu-drawer-container"}" class="${[
      "header-menu-drawer-container svelte-90j5n6",
      " menu-closing"
    ].join(" ").trim()}"${add_attribute("this", drawerMenuContainer, 0)}><summary class="${"header__icon--menu svelte-90j5n6"}" aria-label="${"Main navigation"}"${add_attribute("aria-expanded", navIsOpen, 0)} data-header-drawer-toggle role="${"button"}"${add_attribute("this", menuDrawerToggle, 0)}><span class="${"header__icon__inner svelte-90j5n6"}"></span>
					<span class="${"header__icon__text visually-hidden svelte-90j5n6"}" data-toggle-text>${`Open Menu`}</span></summary>
				<aside tabindex="${"-1"}" class="${"header-menu-drawer svelte-90j5n6"}"><nav class="${"menu-drawer svelte-90j5n6"}"><div class="${"menu-drawer__inner svelte-90j5n6"}"><ul class="${["menu-drawer__items svelte-90j5n6", ""].join(" ").trim()}">${each(navLinks, (navItem, index) => {
      return `<li class="${"menu-drawer__item svelte-90j5n6"}" style="${"transition-delay: " + escape(0.1 * index + "s", true)}">${navItem.navigationItemUrl.linkType == "external" ? `<a class="${"menu-drawer__link svelte-90j5n6"}"${add_attribute("href", navItem.navigationItemUrl.href, 0)}${add_attribute("target", navItem.navigationItemUrl.blank ? "_blank" : null, 0)} rel="${"external"}" title="${"Go to external link at " + escape(navItem.navigationItemUrl.href, true)}">${escape(navItem.text)}
											</a>` : ``}

										${navItem.navigationItemUrl.linkType == "internal" ? `<a class="${"menu-drawer__link svelte-90j5n6"}"${add_attribute("href", navItem.navigationItemUrl.internalLink.handle.current, 0)} rel="${"internal"}" title="${"Go to " + escape(navItem.text.toLowerCase(), true) + " page"}">${escape(navItem.text)}
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
      )}` : `<a class="${"menu-drawer__link svelte-90j5n6"}"${add_attribute("href", navItem.navigationItemUrl.anchorLink, 0)} rel="${"internal"}" title="${"Go to " + escape(navItem.text.toLowerCase(), true) + " section"}">${escape(navItem.text)}
												</a>`}` : ``}
									</li>`;
    })}</ul></div></nav></aside></details></div>

		<div class="${"header__menu-list svelte-90j5n6"}"><nav class="${"menu-list svelte-90j5n6"}"><div class="${"menu-list__inner svelte-90j5n6"}"><ul class="${["menu-list__items svelte-90j5n6", ""].join(" ").trim()}">${each(navLinks, (navItem, index) => {
      return `<li class="${"menu-list__item svelte-90j5n6"}" style="${"transition-delay: " + escape(0.1 * index + "s", true)}">${navItem.navigationItemUrl.linkType == "external" ? `<a class="${"menu-list__link"}"${add_attribute("href", navItem.navigationItemUrl.href, 0)}${add_attribute("target", navItem.navigationItemUrl.blank ? "_blank" : null, 0)} rel="${"external"}" title="${"Go to external link at " + escape(navItem.navigationItemUrl.href, true)}">${escape(navItem.text)}
									</a>` : ``}

								${navItem.navigationItemUrl.linkType == "internal" ? `<a class="${"menu-list__link"}" href="${"/" + escape(navItem.navigationItemUrl.internalLink.handle.current, true)}" rel="${"internal"}" title="${"Go to " + escape(navItem.text.toLowerCase(), true) + " page"}">${escape(navItem.text)}
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
      )}` : `<a class="${"menu-list__link"}"${add_attribute("href", navItem.navigationItemUrl.anchorLink, 0)} rel="${"internal"}" title="${"Go to " + escape(navItem.text.toLowerCase(), true) + " section"}">${escape(navItem.text)}
										</a>`}` : ``}
							</li>`;
    })}</ul></div></nav></div></div>
</header>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const css$2 = {
  code: "footer.svelte-1k0vchj.svelte-1k0vchj{border-top:1px solid black;padding-top:var(--level8);padding-bottom:var(--level4);background-color:var(--tertiary-color)}@media screen and (min-width: 600px){footer.svelte-1k0vchj.svelte-1k0vchj{padding-top:var(--level7);padding-bottom:var(--level2)}}@media screen and (min-width: 975px){footer.columns-4.svelte-1k0vchj .footer__inner.svelte-1k0vchj{grid-template-columns:repeat(4, minmax(0, 1fr))}footer.columns-3.svelte-1k0vchj .footer__inner.svelte-1k0vchj{grid-template-columns:repeat(3, minmax(0, 1fr))}}.footer__inner.svelte-1k0vchj.svelte-1k0vchj{padding-left:var(--level6);padding-right:var(--level6);max-width:86rem;margin-right:auto;margin-left:auto;display:grid;column-gap:var(--level8)}.footer__block.svelte-1k0vchj.svelte-1k0vchj{margin-bottom:var(--level6)}.footer-block__headline.svelte-1k0vchj.svelte-1k0vchj{font-weight:normal;text-transform:uppercase;font-size:var(--h5);font-family:var(--tertiary-font-family);margin-bottom:var(--level2);letter-spacing:0.5px}.footer-block__link.svelte-1k0vchj.svelte-1k0vchj{font-family:var(--secondary-font-family);font-style:italic;font-size:var(--h5)}.footer-block__link.svelte-1k0vchj.svelte-1k0vchj:hover,.footer-block__link.svelte-1k0vchj.svelte-1k0vchj:focus{text-decoration:underline}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let column_class;
  let { blocks } = $$props;
  let blocksLength = blocks.length;
  let { column_total = "" } = $$props;
  if (blocksLength <= 3) {
    column_total = "columns-3";
  }
  if (blocksLength == 4) {
    column_total = "columns-4";
  }
  if ($$props.blocks === void 0 && $$bindings.blocks && blocks !== void 0)
    $$bindings.blocks(blocks);
  if ($$props.column_total === void 0 && $$bindings.column_total && column_total !== void 0)
    $$bindings.column_total(column_total);
  $$result.css.add(css$2);
  column_class = column_total;
  return `<footer class="${escape(null_to_empty(column_class), true) + " svelte-1k0vchj"}"><div class="${"footer__inner svelte-1k0vchj"}">${each(blocks, (block) => {
    return `<div class="${"footer__block svelte-1k0vchj"}">${block._type == "footer_link" ? `<h1 class="${"footer-block__headline svelte-1k0vchj"}">${escape(block.headline)}</h1>
					${block.linkType == "external" ? `=
						<a class="${"footer-block__link svelte-1k0vchj"}"${add_attribute("href", block.href, 0)}${add_attribute("target", block.blank ? "_blank" : null, 0)} rel="${"external"}">${escape(block.url_text)}</a>` : ``}

					${block.linkType == "internal" ? `<a class="${"footer-block__link svelte-1k0vchj"}" href="${"/" + escape(block.internalLink.handle.current, true)}" rel="${"internal"}">${escape(block.url_text)}</a>` : ``}` : ``}

				${block._type == "footer_email_link" ? `<h1 class="${"footer-block__headline svelte-1k0vchj"}">${escape(block.headline)}</h1>
					<a class="${"footer-block__link svelte-1k0vchj"}" href="${"mailto:" + escape(block.url, true)}">${escape(block.url)}
					</a>` : ``}
			</div>`;
  })}</div>
</footer>`;
});
const Svg_graphics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"visually-hidden hidden"}" aria-hidden="${"true"}"><symbol id="${"maison-logo"}" viewBox="${"0 0 536 45"}"><title>Maison Matador </title><path d="${"M47.24 44c-.896-7.36-3.136-30.528-4.352-43.072H39.24L24.584 37.472c0-.128 0-.96-.064-1.088-2.496-6.016-7.232-17.024-12.672-31.104-.704-1.792-1.664-4.352-1.664-4.352H5.512l.128 3.008-4.8 40L2.632 44l4.48-38.528.256 1.28L22.856 44.96h.512L38.984 5.92l-.064.768S41.288 31.584 42.44 44h4.8Zm42.286 0c-2.623-6.08-10.751-25.28-16.32-39.168-.704-1.728-1.6-4.544-1.6-4.544h-.575L52.982 44h1.857l6.272-15.104h17.152C80.31 34.016 82.55 39.84 84.023 44h5.504ZM61.816 27.04 69.75 7.072v.768s4.352 10.752 7.743 19.2h-15.68ZM101.436 44c0-12.224-.064-30.784-.064-43.072h-4.737c.129 6.656-.063 39.296-.063 43.072h4.864Zm8.311-3.904c3.392 2.88 7.168 4.416 12.48 4.416 6.912 0 13.12-4.544 13.12-12.352 0-14.4-20.48-10.752-20.48-23.04 0-4.736 4.032-6.72 8-6.72 2.688 0 5.888.384 8.32 4.736l1.6-3.52C130.612 1.632 126.516.48 123.06.48c-5.504 0-11.904 3.584-11.904 10.624 0 14.4 20.224 11.136 20.224 23.36 0 4.864-4.032 8.064-9.28 8.064-3.776 0-8-.896-10.944-6.528l-1.408 4.096Zm75.998-17.344C185.746 10.656 176.85.48 163.09.48c-13.824 0-22.912 10.56-22.912 22.656 0 13.952 10.176 21.44 22.976 21.44 12.736 0 22.592-7.936 22.592-21.824Zm-22.72 20.032c-9.856-.064-17.408-8.32-17.408-19.648 0-9.792 5.376-20.672 17.408-20.672 12.096 0 17.28 10.496 17.28 20.288 0 11.328-7.36 20.096-17.28 20.032Zm61.006-7.424S197.856 4.512 195.232.928h-2.752l.384 3.264c.064 9.28 0 36.352 0 39.808h2.048V8.032l-.448-1.408s27.392 33.088 32 38.144c-.32-12.288-.064-31.552-.064-43.84h-2.048c.128 6.656.128 31.744.128 35.52l-.448-1.088ZM297.178 44c-.896-7.36-3.136-30.528-4.352-43.072h-3.648l-14.656 36.544c0-.128 0-.96-.064-1.088-2.496-6.016-7.232-17.024-12.672-31.104-.704-1.792-1.664-4.352-1.664-4.352h-4.672l.128 3.008-4.8 40 1.792.064 4.48-38.528.256 1.28 15.488 38.208h.512l15.616-39.04-.064.768s2.368 24.896 3.52 37.312h4.8Zm42.286 0c-2.624-6.08-10.752-25.28-16.32-39.168-.704-1.728-1.6-4.544-1.6-4.544h-.576L302.92 44h1.856l6.272-15.104H328.2c2.048 5.12 4.288 10.944 5.76 15.104h5.504Zm-27.712-16.96 7.936-19.968v.768s4.352 10.752 7.744 19.2h-15.68ZM356.12 44c0-12.288.064-28.992.064-41.344h15.808V.928h-35.264l-.448 1.728h15.04V44h4.8Zm49.219 0c-2.624-6.08-10.752-25.28-16.32-39.168-.704-1.728-1.6-4.544-1.6-4.544h-.576L368.795 44h1.856l6.272-15.104h17.152c2.048 5.12 4.288 10.944 5.76 15.104h5.504Zm-27.712-16.96 7.936-19.968v.768s4.352 10.752 7.744 19.2h-15.68ZM417.426 44c2.816 0 9.92.128 13.76-.32 4.928-.512 19.136-3.712 19.136-22.08 0-14.144-12.16-19.52-17.92-20.288-2.432-.32-5.824-.384-9.344-.384H412.37c.128 6.656 0 39.296 0 43.072h5.056Zm-.192-41.024c2.624 0 9.984-.128 13.504.704 9.152 2.048 15.04 11.072 14.72 19.904-.448 11.968-7.808 15.552-11.84 17.152-4.352 1.792-15.104 1.216-16.32.768 0-12.288-.064-26.24-.064-38.528Zm82.824 19.776c0-12.096-8.896-22.272-22.656-22.272-13.824 0-22.912 10.56-22.912 22.656 0 13.952 10.176 21.44 22.976 21.44 12.736 0 22.592-7.936 22.592-21.824Zm-22.72 20.032c-9.856-.064-17.408-8.32-17.408-19.648 0-9.792 5.376-20.672 17.408-20.672 12.096 0 17.28 10.496 17.28 20.288 0 11.328-7.36 20.096-17.28 20.032ZM535.465 44c-4.48-6.976-9.6-14.912-12.352-20.096 5.312-1.664 8.256-5.696 8.256-11.584 0-5.696-4.608-11.392-14.528-11.392h-9.408c.128 6.656 0 39.296 0 43.072h4.864V3.168l.32-.384c9.984-.768 14.208 4.672 14.208 9.984 0 6.08-4.672 11.264-12.48 11.264l-.512.512c1.408.256 3.328.064 4.544 0 3.392 5.888 9.6 16.32 11.456 19.456h5.632Z"}" fill="${"#000"}"></path></symbol></svg>`;
});
const css$1 = {
  code: ".contact-modal.svelte-1nbba3l{display:flex;align-items:center;position:fixed;height:100%;width:100%;overflow-y:auto;top:0;left:0;right:0;bottom:0;z-index:100;opacity:0;transition:all var(--duration-long) cubic-bezier(0.5, 1, 0.89, 1);pointer-events:none}.contact-modal.is-visible.svelte-1nbba3l{opacity:1;pointer-events:all}.contact-modal__headline.svelte-1nbba3l{margin-bottom:var(--level1);font-family:var(--tertiary-font-family)}.is-hidden.svelte-1nbba3l{display:none}dialog.svelte-1nbba3l{border-radius:6px;z-index:1;width:90%;padding:var(--level5);max-width:35rem}@media screen and (min-width: 975px){dialog.svelte-1nbba3l{padding:var(--level6)}}dialog.svelte-1nbba3l:not([open]){display:none}.contact-modal__overlay.svelte-1nbba3l{background-color:black;z-index:0;opacity:0.5;width:100%;height:100%;position:absolute}.contact-modal__close-btn-container.svelte-1nbba3l{position:absolute;top:var(--level2);right:var(--level3)}.contact-modal__close-btn.svelte-1nbba3l{height:2.5rem;width:2.5rem;background-color:transparent;border:none;position:relative;transition:all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1)}.contact-modal__close-btn.svelte-1nbba3l:hover,.contact-modal__close-btn.svelte-1nbba3l:focus{cursor:pointer;transform:rotate(90deg);opacity:0.5}.close-btn__icon.svelte-1nbba3l{position:relative;display:block;width:100%;height:100%;display:flex;align-items:center}.close-btn__icon.svelte-1nbba3l:before,.close-btn__icon.svelte-1nbba3l:after{content:' ';background-color:black;height:1px;width:100%;position:absolute;z-index:1}.close-btn__icon.svelte-1nbba3l:before{transform:rotate(45deg)}.close-btn__icon.svelte-1nbba3l:after{transform:rotate(-45deg)}.contact-form__body.svelte-1nbba3l{margin-bottom:var(--level4)}",
  map: null
};
let modalId = "contact-modal";
const Contact_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formPromise = false;
  let modal;
  let modalContainer;
  let modal_copy = { default_state: {}, success_state: {} };
  async function loadData() {
    const formRequest = `*[_type == 'modal' && handle.current == "${modalId}" ][0] {
			...
    	}`;
    const content = await client.fetch(formRequest);
    return { content };
  }
  loadData().then((response) => {
    modal_copy = response.content;
    return true;
  }).catch(() => {
    console.log("There has been an error loading the site. Please refresh.");
  });
  $$result.css.add(css$1);
  return `<div class="${["contact-modal svelte-1nbba3l", ""].join(" ").trim()}"${add_attribute("this", modalContainer, 0)}><dialog id="${"contact-modal"}" aria-label="${"Contact modal"}" class="${"svelte-1nbba3l"}"${add_attribute("this", modal, 0)}><div class="${"contact-modal__inner"}"><h1 class="${[
    "contact-modal__headline svelte-1nbba3l",
    ""
  ].join(" ").trim()}">${escape(modal_copy.default_state.headline)}</h1>

			${modal_copy.default_state.body ? `<p>${escape(modal_copy.default_state.body)}</p>` : ``}

			${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(value) {
      return `
				${value !== false ? `<alert><h1 class="${"contact-modal__headline svelte-1nbba3l"}">${escape(modal_copy.success_state.headline)}</h1>
						${escape(modal_copy.success_state.body || "")}</alert>` : ``}
			`;
    }(__value);
  }(formPromise)}

			${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function() {
      return ``;
    }();
  }(formPromise)}

			<form aria-label="${"Contact Maison Matador for inquiries"}" class="${["contact-modal__form svelte-1nbba3l", ""].join(" ").trim()}"><div class="${"contact-form__body svelte-1nbba3l"}"><div class="${"form-section"}"><label for="${"full_name"}">Full Name <span aria-hidden="${"true"}">*</span></label>
						<input type="${"text"}" id="${"full_name"}" name="${"full_name"}" value="${""}" required></div>

					<div class="${"form-section"}"><label for="${"email"}">Email <span aria-hidden="${"true"}">*</span></label>
						<input type="${"email"}" id="${"email"}" name="${"email"}" value="${""}" required></div>

					<div class="${"form-section"}"><label for="${"message"}">Message <span aria-hidden="${"true"}">*</span></label>
						<textarea type="${"text"}" name="${"message"}" id="${"message"}" cols="${"30"}" rows="${"1"}" required>${"						"}</textarea></div>

					<div class="${"form-section"}"><label for="${"referral"}">Referred By (Optional)</label>
						<input type="${"text"}" name="${"referral"}" id="${"referral"}"></div></div>

				<div class="${"contact-form__footer"}"><button type="${"submit"}" aria-label="${"Submit your inquiry to Maison Matador"}" class="${"button button--primary button--medium"}">${`Submit`}</button></div></form>

			<div class="${"contact-modal__close-btn-container svelte-1nbba3l"}"><button class="${"contact-modal__close-btn svelte-1nbba3l"}" aria-label="${"Close contact modal"}"><span class="${"close-btn__icon svelte-1nbba3l"}"></span>
					<span class="${"visually-hidden"}">Close Modal</span></button></div></div></dialog>
	<div class="${"contact-modal__overlay svelte-1nbba3l"}"></div>
</div>`;
});
const css = {
  code: "@import '../styles/base.css';@import '../styles/grid.css';",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let ready = true;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Nav, "Nav").$$render($$result, Object.assign(data.navigation), {}, {})}

<main>${validate_component(Contact_form, "ContactForm").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render(
      $$result,
      Object.assign(data.footer, { showFooter: ready }),
      {
        showFooter: ($$value) => {
          ready = $$value;
          $$settled = false;
        }
      },
      {}
    )}

${validate_component(Svg_graphics, "SvgGraphics").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-27445cef.js.map

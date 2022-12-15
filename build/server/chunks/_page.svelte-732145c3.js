import { c as create_ssr_component, o as onDestroy, e as each, v as validate_component, f as escape, d as add_attribute } from './index-7de6220d.js';
import { u as urlFor } from './sanity-f213399b.js';
import { P as PortableText, I as IntersectionObserver_1 } from './IntersectionObserver-f5c3f6ca.js';
import '@sanity/client';
import '@sanity/image-url';

const css$4 = {
  code: ".sctn-proj-header.svelte-7lljfx.svelte-7lljfx{width:100%}.sctn-proj-header__inner.svelte-7lljfx.svelte-7lljfx{position:relative;padding-bottom:110%}@media only screen and (min-width: 600px){.sctn-proj-header__inner.svelte-7lljfx.svelte-7lljfx{padding-bottom:80%}}@media only screen and (min-width: 1000px){.sctn-proj-header__inner.svelte-7lljfx.svelte-7lljfx{padding-bottom:46%}}.sctn-proj-header.svelte-7lljfx img.svelte-7lljfx{width:100%;position:absolute;height:100%;top:0;right:0;left:0;bottom:0;object-fit:cover}",
  map: null
};
const Sctn_proj_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  $$result.css.add(css$4);
  return `<section class="${"sctn-proj-header svelte-7lljfx"}"><div class="${"sctn-proj-header__inner svelte-7lljfx"}"><picture><source srcset="${escape(urlFor(section.background.asset).width(1550).height(790).auto("format"), true) + ", \n						" + escape(urlFor(section.background.asset).width(2300).height(1250).auto("format"), true) + " 2x"}" media="${"(min-width: 1800px)"}">
			<source srcset="${escape(urlFor(section.background.asset).width(1550).height(790).auto("format"), true) + ",\n						" + escape(urlFor(section.background.asset).width(2050).height(1050).auto("format"), true) + " 2x"}" media="${"(min-width: 1280px)"}">
			<source srcset="${escape(urlFor(section.background.asset).width(1e3).height(500).auto("format"), true) + ",\n						" + escape(urlFor(section.background.asset).width(1500).height(1e3).auto("format"), true) + " 2x"}" media="${"(min-width: 1000px)"}">
			<source srcset="${escape(urlFor(section.background.asset).width(600).height(400).auto("format"), true) + ",\n						" + escape(urlFor(section.background.asset).width(800).height(600).auto("format"), true) + " 2x"}" media="${"(min-width: 600px)"}">
			<source srcset="${escape(
    urlFor(section.background.asset).width(400).height(380).fit("crop").crop("focalpoint").focalPoint(
      section.background.hotspot ? section.background.hotspot.x : 0.5,
      section.background.hotspot ? section.background.hotspot.y : 0.5
    ).auto("format"),
    true
  ) + ",\n					" + escape(
    urlFor(section.background.asset).width(700).height(638).fit("crop").crop("focalpoint").focalPoint(
      section.background.hotspot ? section.background.hotspot.x : 0.5,
      section.background.hotspot ? section.background.hotspot.y : 0.5
    ).auto("format"),
    true
  ) + " 2x"}" media="${"(min-width: 200px)"}">
			<img${add_attribute("alt", section.background.alt_text, 0)}${add_attribute("src", urlFor(section.background.asset).width(20).height(20).blur(100).auto("format"), 0)} class="${"svelte-7lljfx"}"></picture></div>
</section>`;
});
const css$3 = {
  code: ".sctn-proj-intro__inner.svelte-2eh95y{text-align:center}.sctn-proj-intro__headline.svelte-2eh95y{font-family:var(--tertiary-font-family);font-weight:normal;font-size:var(--h3)}@media only screen and (min-width: 900px){.sctn-proj-intro__headline.svelte-2eh95y{font-size:var(--h2);margin-bottom:var(--level3)}}@media only screen and (min-width: 1000px){.sctn-proj-intro__headline.svelte-2eh95y{font-size:var(--h2);margin-bottom:var(--level3)}}.sctn-proj-intro__date.svelte-2eh95y{margin-bottom:var(--level4);font-family:var(--quaternary-font-family);font-weight:700;text-transform:uppercase;font-size:var(--h5);letter-spacing:var(--letter-spacing-1)}.sctn-proj-intro__body.svelte-2eh95y{max-width:70ch;margin-right:auto;margin-left:auto;font-size:var(--h5);font-family:var(--primary-font-family)}@media only screen and (min-width: 700px){.sctn-proj-intro__body.svelte-2eh95y{font-size:var(--h4)}}",
  map: null
};
const Sctn_proj_intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  $$result.css.add(css$3);
  return `<section class="${"sctn-proj-intro"}"><div class="${"sctn-proj-intro__inner main-container svelte-2eh95y"}"><div class="${"sctn-proj-intro__headline svelte-2eh95y"}"><h1>${escape(section.headline)}</h1></div>

		<div class="${"sctn-proj-intro__date svelte-2eh95y"}">October 2021</div>

		<div class="${"sctn-proj-intro__body svelte-2eh95y"}">${validate_component(PortableText, "PortableText").$$render($$result, { blocks: section.body }, {}, {})}</div></div>
</section>`;
});
const css$2 = {
  code: "figcaption.svelte-1ltaltw.svelte-1ltaltw{text-align:center;display:block;font-family:var(--secondary-font-family);font-size:var(--h5);font-style:italic}figure.svelte-1ltaltw.svelte-1ltaltw{margin:0}.sctn-proj-images.svelte-1ltaltw.svelte-1ltaltw{margin-bottom:var(--level4)}.sctn-proj-images__single-image.svelte-1ltaltw.svelte-1ltaltw{position:relative;width:100%;max-width:72rem;margin-left:auto;margin-right:auto;background-color:var(--secondary-color)}.sctn-proj-images__single-image__inner.svelte-1ltaltw.svelte-1ltaltw{width:100%;padding-bottom:52.6%;position:relative;margin-bottom:var(--level2)}.sctn-proj-images__single-image__inner.svelte-1ltaltw img.svelte-1ltaltw{position:absolute;object-fit:cover;width:100%;height:100%;max-inline-size:100%}.sctn-proj-images__single-image.svelte-1ltaltw figcaption.svelte-1ltaltw{text-align:center;display:block;font-family:var(--secondary-font-family);font-size:var(--h5);font-style:italic}.sctn-proj-images--multiple.svelte-1ltaltw.svelte-1ltaltw{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:var(--level4);grid-row-gap:var(--level4);max-width:72rem;margin-left:auto;margin-right:auto}@media only screen and (min-width: 900px){.sctn-proj-images--multiple.svelte-1ltaltw.svelte-1ltaltw{grid-column-gap:var(--level6);grid-row-gap:var(--level6)}}@media only screen and (min-width: 1000px){}.sctn-proj-images__multiple-image.svelte-1ltaltw.svelte-1ltaltw{width:100%;position:relative}.sctn-proj-images__multiple-image.svelte-1ltaltw figcaption.svelte-1ltaltw{text-align:left}.sctn-proj-images__multiple-image__inner.svelte-1ltaltw.svelte-1ltaltw{width:100%;overflow:hidden;padding-bottom:100%;position:relative;margin-bottom:var(--level2);background-color:rgb(210, 210, 210)}.sctn-proj-images__multiple-image__inner.svelte-1ltaltw img.svelte-1ltaltw{position:absolute;object-fit:cover;width:100%;max-inline-size:100%;height:100%}",
  map: null
};
const Sctn_proj_images = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  $$result.css.add(css$2);
  return `<div class="${"main-container"}"><section class="${"sctn-proj-images " + escape(
    section.images.length >= 2 ? "sctn-proj-images--multiple" : "",
    true
  ) + " svelte-1ltaltw"}">${section.images.length == 1 ? `<div class="${"sctn-proj-images__single-image svelte-1ltaltw"}">${section.images[0].figure ? `<figure class="${"svelte-1ltaltw"}"><div class="${"sctn-proj-images__single-image__inner svelte-1ltaltw"}"><img src="${""}" srcset="${escape(urlFor(section.images[0].image.asset).width(400).auto("format"), true) + " 400w,\n							 		 " + escape(urlFor(section.images[0].image.asset).width(600).auto("format"), true) + " 600w,\n							 		 " + escape(urlFor(section.images[0].image.asset).width(800).auto("format"), true) + " 800w  \n							 		 " + escape(urlFor(section.images[0].image.asset).width(1200).auto("format"), true) + " 1200w,\n							 		 " + escape(urlFor(section.images[0].image.asset).width(1600).auto("format"), true) + " 1600w"}" sizes="${"calc(100vw - 3.5rem)"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("alt", section.images[0].image.alt_text, 0)} class="${"svelte-1ltaltw"}"></div>
						<figcaption class="${"svelte-1ltaltw"}">${escape(section.images[0].figure)}</figcaption></figure>` : `<div class="${"sctn-proj-images__single-image__inner svelte-1ltaltw"}"><img src="${""}" srcset="${escape(urlFor(section.images[0].image.asset).width(400).auto("format"), true) + " 400w,\n								  " + escape(urlFor(section.images[0].image.asset).width(600).auto("format"), true) + " 600w,\n								  " + escape(urlFor(section.images[0].image.asset).width(800).auto("format"), true) + " 800w  \n								  " + escape(urlFor(section.images[0].image.asset).width(1200).auto("format"), true) + " 1200w,\n								  " + escape(urlFor(section.images[0].image.asset).width(1600).auto("format"), true) + " 1600w"}" sizes="${"calc(100vw - 3.5rem)"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("alt", section.images[0].image.alt_text, 0)} class="${"svelte-1ltaltw"}"></div>`}</div>` : ``}
		${section.images.length >= 2 ? `${each(section.images, (imageFile) => {
    return `<div class="${"sctn-proj-images__multiple-image svelte-1ltaltw"}">${imageFile.figure ? `<figure class="${"svelte-1ltaltw"}"><div class="${"sctn-proj-images__multiple-image__inner svelte-1ltaltw"}"><img srcset="${"	\n								" + escape(
      urlFor(imageFile.image.asset).width(200).height(200).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 200w,\n									" + escape(
      urlFor(imageFile.image.asset).width(400).height(400).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 400w, \n											" + escape(
      urlFor(imageFile.image.asset).width(600).height(600).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 600w, \n											" + escape(
      urlFor(imageFile.image.asset).width(800).height(800).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 800w, \n									" + escape(
      urlFor(imageFile.image.asset).width(1200).height(1200).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 1200w,\n									" + escape(
      urlFor(imageFile.image.asset).width(1200).height(1200).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 1600w\n										"}" sizes="${"calc(100vw/2 - 3.5rem)"}"${add_attribute("alt", imageFile.image.alt_text, 0)}${add_attribute("src", urlFor(imageFile.image.asset).width(20).height(20).blur(100).auto("format"), 0)} decoding="${"async"}" loading="${"lazy"}" class="${"svelte-1ltaltw"}"></div>
							<figcaption class="${"svelte-1ltaltw"}">${escape(imageFile.figure)}</figcaption>
						</figure>` : `<div class="${"sctn-proj-images__multiple-image__inner svelte-1ltaltw"}"><img srcset="${"	\n							" + escape(
      urlFor(imageFile.image.asset).width(200).height(200).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 200w,\n								" + escape(
      urlFor(imageFile.image.asset).width(400).height(400).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 400w, \n										" + escape(
      urlFor(imageFile.image.asset).width(600).height(600).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 600w, \n										" + escape(
      urlFor(imageFile.image.asset).width(800).height(800).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 800w, \n								" + escape(
      urlFor(imageFile.image.asset).width(1200).height(1200).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 1200w,\n								" + escape(
      urlFor(imageFile.image.asset).width(1200).height(1200).fit("crop").focalPoint(
        imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
        imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
      ).auto("format"),
      true
    ) + " 1600w\n									"}" sizes="${"calc(100vw/2 - 3.5rem)"}"${add_attribute("alt", imageFile.image.alt_text, 0)}${add_attribute("src", urlFor(imageFile.image.asset).width(20).height(20).blur(100).auto("format"), 0)} decoding="${"async"}" loading="${"lazy"}" class="${"svelte-1ltaltw"}">
						</div>`}
				</div>`;
  })}` : ``}</section>
</div>`;
});
const css$1 = {
  code: ".sctn-proj-copy__inner.svelte-12dens5.svelte-12dens5{text-align:center}.sctn-proj-copy__headline.svelte-12dens5 .svelte-12dens5{font-family:var(--quaternary-font-family);font-weight:700;font-size:var(--h4);letter-spacing:var(--letter-spacing-1);text-transform:uppercase}@media only screen and (min-width: 900px){.sctn-proj-copy__headline.svelte-12dens5.svelte-12dens5{margin-bottom:var(--level3)}}@media only screen and (min-width: 1000px){.sctn-proj-copy__headline.svelte-12dens5.svelte-12dens5{margin-bottom:var(--level3)}}.sctn-proj-copy__body.svelte-12dens5.svelte-12dens5{max-width:70ch;margin-right:auto;margin-left:auto;font-size:var(--h5);font-family:var(--primary-font-family)}.sctn-proj-copy__body.svelte-12dens5 em{font-style:normal;font-weight:700}@media only screen and (min-width: 600px){.sctn-proj-copy__body.svelte-12dens5.svelte-12dens5{font-size:var(--h4)}}@media only screen and (min-width: 900px){.sctn-proj-copy__body.svelte-12dens5.svelte-12dens5{font-size:var(--h4)}}@media only screen and (min-width: 1000px){.sctn-proj-copy__body.svelte-12dens5.svelte-12dens5{font-size:var(--h4)}}",
  map: null
};
const Sctn_proj_copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  $$result.css.add(css$1);
  return `<section class="${"sctn-proj-copy"}"><div class="${"sctn-proj-copy__inner main-container svelte-12dens5"}">${section.headline ? `<div class="${"sctn-proj-copy__headline svelte-12dens5"}"><h2 class="${"svelte-12dens5"}">${escape(section.headline)}</h2></div>` : ``}

		<div class="${"sctn-proj-copy__body svelte-12dens5"}">${validate_component(PortableText, "PortableText").$$render($$result, { blocks: section.body }, {}, {})}</div></div>
</section>`;
});
const css = {
  code: ".sctn-proj-video-break.svelte-77mqg3.svelte-77mqg3{width:100%}.sctn-proj-video-break__inner.svelte-77mqg3.svelte-77mqg3{width:100%;max-width:72rem;margin-left:auto;margin-right:auto;position:relative}.sctn-proj-video-break__video.svelte-77mqg3.svelte-77mqg3{margin-bottom:var(--level2)}.sctn-proj-video-break.svelte-77mqg3 figcaption.svelte-77mqg3{text-align:center;display:block;font-family:var(--secondary-font-family);font-size:var(--h5);font-style:italic}",
  map: null
};
const Sctn_proj_video_break = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  let element;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  $$result.css.add(css);
  return `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, { once: true, element }, {}, {
    default: () => {
      return `<section class="${"sctn-proj-video-break svelte-77mqg3"}"><figure class="${"sctn-proj-video-break__inner svelte-77mqg3"}"><div class="${"sctn-proj-video-break__video responsive-video svelte-77mqg3"}"><video width="${"320"}" height="${"240"}" muted preload="${"none"}" ${section.autoplay || false ? "autoplay" : ""} ${!section.autoplay || false ? "controls" : ""} ${section.autoplay || false ? "playsinline" : ""} ${section.autoplay || false ? "loop" : ""}${add_attribute("poster", section.video_poster.url, 0)}${add_attribute("this", element, 0)}><source${add_attribute("data-src", section.video_file.url, 0)} type="${"video/mp4"}"></video></div>
			<figcaption class="${"svelte-77mqg3"}">${escape(section.figure)}</figcaption></figure></section>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let ready = false;
  onDestroy(() => {
    ready = false;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `

${ready ? `<div><article>${each(data.project.project_layout, (section) => {
    return `${section._type == "project_header" ? `${validate_component(Sctn_proj_header, "SctnProjHeader").$$render($$result, { section }, {}, {})}` : ``}
				${section._type == "project_intro" ? `${validate_component(Sctn_proj_intro, "SctnProjIntro").$$render($$result, { section }, {}, {})}` : ``}
				${section._type == "project_images" ? `${validate_component(Sctn_proj_images, "SctnProjImages").$$render($$result, { section }, {}, {})}` : ``}
				${section._type == "project_copy" ? `${validate_component(Sctn_proj_copy, "SctnProjCopy").$$render($$result, { section }, {}, {})}` : ``}
				${section._type == "project_video_break" ? `${validate_component(Sctn_proj_video_break, "SctnProjVideobreak").$$render($$result, { section }, {}, {})}` : ``}`;
  })}</article></div>` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-732145c3.js.map

import { c as client } from "../../../chunks/sanity.js";
async function load({ params, url }) {
  const language = url.searchParams.get("lang") || "en";
  const page_request = `*[_type == 'page' && handle.current == 'work'][0] {
        ...,
        page_layout[]-> {
            ...,
            _type == "sctn_rich_text" => {
                ...,
                "text": text[] {
                    ...,
                    markDefs[] {
                        ...,
                        _type == "internalLink" => {
                            "page": page-> { 
                                "slug": handle.current,
                                "title": page_title,
                                "_type": _type
                            }
                        },
                        _type == "link" => {
                            ...
                        },
                        _type == "mailtoLink" => {
                            ...
                        }
                    }
                }
            }
        }
    }`;
  const projects_request = `*[_type == 'project' && !(_id in path('drafts.**'))] {
        ...,
        "name": coalesce(name.${language}, name.en),
        "about": coalesce(about.${language}, about.en)[] {
            ...,
            markDefs[] {
                ...,
                _type == "internalLink" => {
                    "page": page-> { 
                        "slug": handle.current,
                        "title": page_title,
                        "_type": _type
                    }
                },
                _type == "link" => {
                    ...
                },
                _type == "mailtoLink" => {
                    ...
                }
            }
        },
        "medium": medium->{
            ...
        },
        "preview_videos": preview_videos[] {
            ...,
            "video_file": video_file.asset->
        },
        "creditsList": creditsList[]-> {
          _type,
            _ref,
            _key,
            "workDone": workDone->name,
            "name": name
        }
    }`;
  return {
    content: await client.fetch(page_request, params),
    projects: await client.fetch(projects_request)
  };
}
export {
  load
};

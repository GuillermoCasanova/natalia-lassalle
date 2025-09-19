import { client } from '$lib/sanity';

export async function fetchLocalizedContent(query, params = {}) {
  // Get language from params or default to 'en'
  const lang = params.lang || 'en';
  
  // Add language to params
  const queryParams = {
    ...params,
    lang: lang
  };
  
  return await client.fetch(query, queryParams);
}

// Helper to get localized field
export function getLocalizedField(fieldName, language = 'en') {
  return `coalesce(${fieldName}.${language}, ${fieldName}.en)`;
}

// Common localized queries
export const getLocalizedPage = `
  *[_type == "page" && handle.current == $slug][0] {
    _id,
    "title": ${getLocalizedField('page_title', '$lang')},
    "content": ${getLocalizedField('content', '$lang')},
    "description": ${getLocalizedField('description', '$lang')},
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
            }
          }
        }
      }
    }
  }
`;

export const getLocalizedProjects = `
  *[_type == 'project' && !(_id in path('drafts.**'))] {
    ...,
    "name": ${getLocalizedField('name', '$lang')},
    "about": ${getLocalizedField('about', '$lang')}[] {
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
          ...,
        },
        _type == "mailtoLink" => {
          ...,
        }
      }
    },
    "medium": medium->{
      ...,
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
  }
`;

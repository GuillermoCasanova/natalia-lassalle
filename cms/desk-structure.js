import S from "@sanity/desk-tool/structure-builder"
import {FiSettings} from 'react-icons/fi'; 
import {FiLayout} from 'react-icons/fi'; 
import {FiHome} from 'react-icons/fi';



export default () => 
    S.list()
        .title('Site Content')
        .showIcons(true)
        .items(
            [
                S.listItem()
                    .title('Settings')
                    .icon(FiSettings)
                    .child(
                        S.document()
                            .schemaType('site-settings')
                            .documentId('site-settings'),
                    ),
                 S.listItem()
                    .title('Site Footer')
                    .icon(FiLayout)
                    .child(
                        S.document()
                            .schemaType('footer-settings')
                            .documentId('footer-settings'),
                    ),
                S.divider(),
                S.listItem()
                .title('Home Page')
                .icon(FiHome)
                .child(
                    S.document()
                        .schemaType('page-home')
                        .documentId('page-home')
                ),
                ...S.documentTypeListItems()
                .filter(item => !['site-settings', 'page-home', 'footer-settings' ,'sctn_hero_header', 'sctn_experience_list', 'sctn_projects_list', 'sctn_rich_text'].includes(item.getId()))
        ]);
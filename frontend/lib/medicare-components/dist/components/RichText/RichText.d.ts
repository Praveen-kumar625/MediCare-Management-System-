import React from 'react';
import 'tinymce/tinymce';
import 'tinymce/themes/silver/theme.min';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/plugins/autolink/plugin.min';
import 'tinymce/plugins/lists/plugin.min';
import 'tinymce/plugins/link/plugin.min';
import 'tinymce/plugins/table/plugin.min';
import 'tinymce/plugins/paste/plugin.min';
import 'tinymce/plugins/charmap/plugin.min';
interface Props {
    id?: string;
    value?: string;
    disabled?: boolean;
    height?: number;
    onChange?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
declare const RichText: (props: Props) => JSX.Element;
export { RichText };

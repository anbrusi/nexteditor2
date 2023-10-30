// isCkeditor.js

import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
// import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Underline, Strikethrough, Code, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { FindAndReplace} from '@ckeditor/ckeditor5-find-and-replace';
import { Font } from '@ckeditor/ckeditor5-font';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from'@ckeditor/ckeditor5-indent';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format'; 
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableToolbar, TableProperties, TableCellProperties } from '@ckeditor/ckeditor5-table';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
import MathType from '@wiris/mathtype-ckeditor5';
import SimpleAudio from '@anbrusi/ckeditor5-simple-audio';
import IsPencil from '@anbrusi/ckeditor5-ispencil';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
    Essentials,
    // Autoformat,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Code,
    Subscript,
    Superscript,
    BlockQuote,
    Heading,
    Link,
    List,
    Paragraph,
    FindAndReplace,
    Font,
    HorizontalLine,
    SimpleUploadAdapter,
    ImageUpload,
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    Indent,
    IndentBlock,
    MediaEmbed,
    PageBreak,
    PasteFromOffice,
    RemoveFormat,
    SourceEditing,
    SpecialCharacters,
    SpecialCharactersEssentials,
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    WordCount,
    MathType,
    SimpleAudio,
    IsPencil
];

ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'code',
            'subscript',
            'superscript',
            '|',
            'link',
            'bulletedList',
            'numberedList',
            'blockQuote',
            'undo',
            'redo',
            '|',
            'findAndReplace',
            '|',
            'fontSize',
            'fontFamily',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'horizontalLine',
            '|',
            'uploadImage',
            '|',
            'outdent',
            'indent',
            '|',
            'mediaEmbed',
            '|',
            'pageBreak',
            '|',
            'removeFormat',
            '|',
            'sourceEditing',
            '|',
            'specialCharacters',
            '|',
            'insertTable',
            '|',
            'MathType',
            'ChemType',
            '|',
            'simpleAudio',
            '|',
            'isPencil'
        ]
    },
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
    simpleUpload: {
		uploadUrl: './isUpload.php'
	},
    isPencil: {
		width: 400,
		height: 400,
		position: 'center',
		hasBorder: false,
		toolbar: [ 'isPencilLeft', 'isPencilCenter', 'isPencilRight' ]
	},
    mediaEmbed: {
        'previewsInData': 'true'
    },
    table: {
        'contentToolbar' : [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ]
    },
    // MathType Parameters
    mathTypeParameters : {
        serviceProviderProperties : {
            URI : 'https://myeclipse/nexteditor2/php-services',
            server : 'php'
        }
    },
    language: 'en'
};

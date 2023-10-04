import { registerBlockType, createBlock } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import icon from './assets/text-box-svgrepo-com.svg';
import v1 from './v1';
import v2 from './v2';

registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
	deprecated: [v2, v1],
	icon: <img src={icon} alt="" />,
	variations: [
		{
			name: 'blocks-u/gradient-text-box',
			title: 'Gradient text box',
			icon: 'wordpress',
			attributes: {
				gradient: 'red-to-blue',
			},
		},
	],
	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['core/paragraph'],
				transform: ({ content, align }) => {
					const textBlock = createBlock('blocks-u/text-box', {
						text: content,
						textAlignment: align,
					});
					return textBlock;
				},
			},
			{
				type: 'enter',
				regExp: /textbox/i,
				transform: () => {
					const textBlock = createBlock('blocks-u/text-box', {
						shadow: true,
						gradient: 'red-to-blue',
					});
					return textBlock;
				},
			},
			{
				type: 'prefix',
				prefix: 'textbox',
				transform: () => {
					const textBlock = createBlock('blocks-u/text-box', {
						shadow: true,
						gradient: 'green-to-yellow',
					});
					return textBlock;
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: ['core/paragraph'],
				isMatch: ({ text }) => {
					return text ? true : false;
				},
				transform: ({ text, textAlignment }) => {
					const newBlock = createBlock('core/paragraph', {
						content: text,
						align: textAlignment,
					});
					return newBlock;
				},
			},
		],
	},
});

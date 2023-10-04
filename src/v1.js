import {
	useBlockProps,
	RichText,
	/* getColorClassName, */
} from '@wordpress/block-editor';
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';
import blockData from './block.json';
// eslint-disable-next-line import/no-extraneous-dependencies
import { omit } from 'lodash';

const v1 = {
	supports: {
		html: false,
		color: {
			text: true,
			background: true,
			gradients: true,
			link: true,
		},
		spacing: {
			padding: true,
			margin: true,
			__experimentalDefaultControls: {
				padding: true,
				margin: true,
			},
		},
	},
	attributes: {
		...omit(blockData.attributes, ['textAlignment']),
		alignment: {
			type: 'string',
			default: 'left',
		},
		text: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
	},
	migrate: (attributes) => {
		return {
			...omit(attributes, ['alignment']),
			textAlignment: attributes.alignment,
		};
	},
	save: ({ attributes }) => {
		const {
			text,
			alignment,
			shadow,
			shadowOpacity,
			/* textColor,
		customBackgroundColor,
		customTextColor, */
		} = attributes;

		/* const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	); */
		//const textClass = getColorClassName('color', textColor);

		const classes = classnames(`text-box-align-${alignment}`, {
			'has-shadow': shadow,
			[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
		});
		/* const classes = classnames(`text-box-align-${alignment}`, {
		[textClass]: textClass,
		[backgroundClass]: backgroundClass,
	}); */

		return (
			<RichText.Content
				{...useBlockProps.save({
					className: classes,
					/* style: {
					backgroundColor: backgroundClass
						? undefined
						: customBackgroundColor,
					color: textColor ? undefined : customTextColor,
				}, */
				})}
				tagName="h4"
				value={text}
			/>
		);
	},
};

export default v1;

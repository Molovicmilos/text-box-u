import {
	useBlockProps,
	RichText,
	/* getColorClassName, */
} from '@wordpress/block-editor';
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';
// eslint-disable-next-line import/no-extraneous-dependencies

export default function save({ attributes }) {
	const {
		text,
		textAlignment,
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

	const classes = classnames(`text-box-align-${textAlignment}`, {
		'has-shadow': shadow,
		[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
	});
	/* const classes = classnames(`text-box-align-${textAlignment}`, {
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
			tagName="p"
			value={text}
		/>
	);
}

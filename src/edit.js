import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<>
			<BlockControls
				controls={[
					{
						title: 'Button 1',
						icon: 'admin-generic',
						isActive: true,
						onClick: () => {},
					},
					{
						title: 'Button 2',
						icon: 'admin-generic',
						onClick: () => {},
					},
				]}
			/>
			<RichText
				{...useBlockProps()}
				onChange={(newValue) => setAttributes({ text: newValue })}
				value={text}
				placeholder={__('Your Text', 'text-box')}
				tagName="h4"
				allowedFormats={['core/bold']}
			/>
		</>
	);
}

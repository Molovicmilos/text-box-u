import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	/* PanelColorSettings,
	ContrastChecker, 
	withColors,*/
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis, no-unused-vars
// { __experimentalBoxControl as BoxControl } from '@wordpress/components';
/* 
	TextControl,
	TextareaControl,
	ToggleControl,
	ColorPicker,
	ColorPalette */

// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';
import './editor.scss';

//const { __Visualizer: BoxControlVisualizer } = BoxControl;

export default function Edit(props) {
	const {
		attributes,
		setAttributes,
		/*backgroundColor,
		textColor,
		 setBackgroundColor,
		setTextColor, */
	} = props;
	const { text, textAlignment, shadow, shadowOpacity } = attributes;
	const onChangeText = (newText) => {
		setAttributes({
			text: newText,
		});
	};
	const onChangeAlignment = (newAlignment) => {
		setAttributes({ textAlignment: newAlignment });
	};
	const toggleShadow = () => {
		setAttributes({ shadow: !shadow });
	};

	const onChangeShadowOpacity = (newShadowOpacity) => {
		setAttributes({ shadowOpacity: newShadowOpacity });
	};

	const classes = classnames(`text-box-align-${textAlignment}`, {
		'has-shadow': shadow,
		[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
	});

	/* const onBackgroundColorChange = (newBgColor) => {
		setAttributes({ backgroundColor: newBgColor });
	};
	const onTextColorChange = (newTextColor) => {
		setAttributes({ textColor: newTextColor });
	}; */

	return (
		<>
			<InspectorControls>
				{shadow && (
					<PanelBody title={__('Shadow Settings', 'text-box')}>
						<RangeControl
							label={__('Shadow Opacity', 'text-box')}
							value={shadowOpacity}
							min={10}
							max={40}
							step={10}
							onChange={onChangeShadowOpacity}
						/>
					</PanelBody>
				)}

				{/* <PanelBody>
					<BoxControl
						values={{
							top: '50px',
							left: '10%',
							right: '10%',
							bottom: '50px',
						}}
						onChange={(nextValues) => console.log(nextValues)}
					/>
				</PanelBody> */}
				{/* <PanelColorSettings
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __('Background Color', 'text-blok'),
						},
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __('Text Color', 'text-blok'),
						},
					]}
				>
					<ContrastChecker
						textColor={textColor.color}
						backgroundColor={backgroundColor.color}
					/>
				</PanelColorSettings> */}
				{/* <TextControl
						label={__('Input label', 'text-box')}
						value={text}
						onChange={onChangeText}
						help="help"
					/>
					<TextareaControl
						label={__('Text area label', 'text-box')}
						value={text}
						onChange={onChangeText}
						help="help"
					/>
					<ToggleControl
						label={__('Toggle label', 'text-box')}
						checked={true}
						onChange={(v) => console.log(v)}
					/>
					<ColorPicker
						color={'f03'}
						onChange={(v) => console.log(v)}
					/> */}
				{/* <ColorPalette
						colors={[
							{ name: 'red', color: '#f00' },
							{ name: 'black', color: '#000' },
						]}
						value={backgroundColor}
						onChange={onBackgroundColorChange}
					/> */}
			</InspectorControls>
			<BlockControls
				controls={[
					{
						icon: 'admin-page',
						title: __('Sahdow', 'tetx-block'),
						onClick: toggleShadow,
					},
				]}
			>
				<AlignmentToolbar
					value={textAlignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
			{/* <BlockControls group="inline">
				<p>inline controls</p>
			</BlockControls>
			<BlockControls group="block">
				<p>block controls</p>
			</BlockControls>
			<BlockControls
				group="other"
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
			>
				{!!text && (
					<ToolbarGroup>
						<ToolbarButton
							title="Align left"
							icon="editor-alignleft"
							onClick={() => {}}
						/>
						<ToolbarButton
							title="Align center"
							icon="editor-aligncenter"
							onClick={() => {}}
						/>
						<ToolbarButton
							title="Align right"
							icon="editor-alignright"
							onClick={() => {}}
						/>
						<DropdownMenu
							icon="arrow-down-alt2"
							label={__('More Alignments', 'text-box')}
							controls={[
								{
									title: __('Wide', 'text-box'),
									icon: 'align-wide',
								},
								{
									title: __('Full', 'text-box'),
									icon: 'align-full-width',
								},
							]}
						/>
					</ToolbarGroup>
				)}
				<ToolbarGroup>
					<p>oiudhc</p>
				</ToolbarGroup>
			</BlockControls> */}

			<RichText
				{...useBlockProps({
					className: classes,
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__('Your Text', 'text-box')}
				tagName="p"
				allowedFormats={[]}
			/>
			{/* <BoxControlVisualizer
					values={style && style.spacing && style.spacing.padding}
					showValues={
						style && style.visualizers && style.visualizers.padding
					}
				/> */}
		</>
	);
}

/* export default withColors({
	backgroundColor: 'backgroundColor',
	textColor: 'color',
})(Edit); */

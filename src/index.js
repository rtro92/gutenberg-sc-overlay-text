import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, BlockControls } from '@wordpress/block-editor';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Toolbar, ToolbarButton } from '@wordpress/components';

import './style.scss';
import './editor.scss';

registerBlockType('sc-text/image-overlay', {
  title: 'Image Overlay Block',
  icon: 'format-image',
  category: 'common',
  attributes: {
    imageUrl: {
      type: 'string',
      default: '',
    },
    overlayText: {
      type: 'string',
      default: '',
    },
  },

  edit: function ImageOverlayEdit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    const onSelectImage = (media) => {
      setAttributes({ imageUrl: media.url });
    };

    return (
      <div {...blockProps}>
        <BlockControls>
          <Toolbar>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={['image']}
                value={attributes.imageUrl}
                render={({ open }) => (
                  <ToolbarButton
                    icon="admin-appearance"
                    label="Select Image"
                    onClick={open}
                  />
                )}
              />
            </MediaUploadCheck>
          </Toolbar>
        </BlockControls>
        <div
          className="image-overlay-container"
          style={{
            backgroundImage: `url(${attributes.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="overlay-text">
          <InnerBlocks
            allowedBlocks={['core/paragraph']}
            template={[['core/paragraph', { placeholder: 'Enter overlay text' }]]}
          />
        </div>
      </div>
    );
  },

  save: function ImageOverlaySave({ attributes }) {
    return (
      <div
        className="image-overlay-container"
        style={{
          backgroundImage: `url(${attributes.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay-text">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  },
});

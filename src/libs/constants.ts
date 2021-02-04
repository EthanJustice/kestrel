import Taita from 'taita';

// constant values

/**
 * organisation wrapper for meta-information used in the background script
 */
export const backgroundMetaInformation: { [key: string]: any } = {
    runtimes: {
        hover: 'document_idle',
        imageControls: 'document_end',
        loader: 'document_start',
        minimap: 'document_idle',
        linksInSameTab: 'document_end',
        noSameSiteLinks: 'document_idle',
    },

    matches: {
        imageControls: [
            'https://*/*/*.png',
            'https://*/*/*.jpeg',
            'https://*/*/*.jpg',
            'http://*/*/*.png',
            'http://*/*/*.jpeg',
            'http://*/*/*.jpg',
            'file://*/*/*.png',
            'file://*/*/*.jpeg',
            'file://*/*/*.jpg',
        ],
    },
};

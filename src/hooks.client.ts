import { version } from '$lib/config';
import Hotjar from '@hotjar/browser';
import { H } from 'highlight.run';
const siteId = 5267272;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
H.init('6gl5pyme', {
    environment: 'production',
    version: version,
    tracingOrigins: true,
	networkRecording: {
		enabled: true,
		recordHeadersAndBody: true,
        urlBlocklist: [],
	},
});


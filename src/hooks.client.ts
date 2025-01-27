import { version } from '$lib/config';
import { H } from 'highlight.run';
const siteId = 5267272;
const hotjarVersion = 6;

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


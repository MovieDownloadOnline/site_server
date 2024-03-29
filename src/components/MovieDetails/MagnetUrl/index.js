import { Button, Wrap } from '@chakra-ui/react';
import { FaMagnet } from 'react-icons/fa';

const trackerUrls = ["udp://open.demonii.com:1337/announce",
                    "udp://tracker.openbittorrent.com:80",
                    "udp://tracker.coppersurfer.tk:6969",
                    "udp://glotorrents.pw:6969/announce",
                    "udp://tracker.opentrackr.org:1337/announce",
                    "udp://torrent.gresille.org:80/announce",
                    "udp://p4p.arenabg.com:1337",
                    "udp://tracker.leechers-paradise.org:6969"]; // Your list of tracker URLs

function generateMagnetLink(torrent, movie) {
  const { hash, quality, type, size } = torrent;
  const displayName = `${movie}.${quality}.${type} (${size})`;
  const trackersParam = trackerUrls.map(trackerUrl => `tr=${encodeURIComponent(trackerUrl)}`).join('&');
  return `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(displayName)}&${trackersParam}`;
}

function MagnetUrl({ torrents , movie}) {
  return (
    <Wrap spacing={3} wrap="wrap" align="start" w="full">
      {torrents.map((torrent, index) => {
        const magnetLink = generateMagnetLink(torrent, movie);
        return (
          <Button
            as="a"
            href={magnetLink}
            colorScheme="green"
            leftIcon={<FaMagnet />}
            key={index}
          >
            {`${torrent.quality}.${torrent.type} (${torrent.size})`}
          </Button>
        );
      })}
    </Wrap>
  );
}
export default MagnetUrl;

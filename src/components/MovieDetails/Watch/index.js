import { AspectRatio, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import WebTorrent from 'webtorrent'; // Import WebTorrent library

const trackerUrls = [
  "udp://open.demonii.com:1337/announce",
  "udp://tracker.openbittorrent.com:80",
  "udp://tracker.coppersurfer.tk:6969",
  "udp://glotorrents.pw:6969/announce",
  "udp://tracker.opentrackr.org:1337/announce",
  "udp://torrent.gresille.org:80/announce",
  "udp://p4p.arenabg.com:1337",
  "udp://tracker.leechers-paradise.org:6969"
]; // Your list of tracker URLs

function generateMagnetLink(torrent) {
  const { hash, quality, type, size } = torrent;
  const displayName = `${quality}.${type} (${size})`;
  const trackersParam = trackerUrls.map(trackerUrl => `tr=${encodeURIComponent(trackerUrl)}`).join('&');
  return `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(displayName)}&${trackersParam}`;
}

const Watch = ({ torrents }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [torrentProgress, setTorrentProgress] = useState(0);

  useEffect(() => {
    const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel';

    const client = new WebTorrent(); // Create WebTorrent client

    client.on('error', err => {
      console.log('[+] Webtorrent error: ' + err.message);
    });

    client.add(torrentId, (torrent) => {
      const interval = setInterval(() => {
        setTorrentProgress(torrent.progress * 100); // Update torrent progress
      }, 5000);
      torrent.on('done', () => {
        console.log('Progress: 100%');
        clearInterval(interval);
      });

      setIsLoading(false); // Set loading state to false once torrent is added
    });

    return () => {
      client.destroy(); // Clean up WebTorrent client on component unmount
    };
  }, [torrents]);

  return (
    <Skeleton w="full" isLoaded={!isLoading}>
      <AspectRatio ratio={16 / 9} maxW="full">
        <video controls src="magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel"></video>
      </AspectRatio>
    </Skeleton>
  );
};

export default Watch;

function recentFiveEpisodes(episodeList) {
  return [...episodeList].reverse().slice(0, 5);
}

export default recentFiveEpisodes;

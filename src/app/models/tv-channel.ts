interface TvChannelGenre {
  id: string;
  name: string;
}

export class TvChannel {
  id: string;
  name: string;
  introduce: string;
  image: {
    backgrounds: string;
    channelBlackWhites: string;
  };
  genres: TvChannelGenre[];

  constructor(data: any) {
    this.id = data.ID;
    this.name = data.name;
    this.introduce = data.introduce;
    this.image = {
      backgrounds: data.picture.backgrounds[0],
      channelBlackWhites: data.picture.channelBlackWhites[0]
    };

    this.genres = data.genres.map(genre => ({ id: genre.genreID, name: genre.genreName }));
  }

  hasGenre(id: string) {
    return this.genres.some(genre => genre.id === id);
  }
}

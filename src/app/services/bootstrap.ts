import { TvChannelsService } from '../shared-module/services/tv-channels.service';

export function bootstrap(tvChannelsService: TvChannelsService) {
  return () => {
    return tvChannelsService.init().toPromise();
  };
}

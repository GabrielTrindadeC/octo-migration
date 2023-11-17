import { IMedia } from '@renderer/components/InputMedia/InputMedia.types';

export interface IMediaGroupProps {
  media: IMedia;

  onImageChange: (newMedias: IMedia[], id: IMedia['id']) => void;
  onRemove: (id: IMedia['id']) => void;
}

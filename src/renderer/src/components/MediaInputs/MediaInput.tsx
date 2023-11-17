import { useState } from 'react';

import { IMedia } from '@renderer/components/InputMedia/InputMedia.types';

import InputMedia from '../InputMedia/InputMedia';
import MediaGroup from './MediaGroup/MediaGroup';

import scss from './MediaInput.module.scss';

function MediaInputs() {
  const [medias, setMedias] = useState<IMedia[]>([]);

  const addMedia = (files: IMedia[]) => {
    setMedias([...medias, ...files]);
  };

  const removeMedia = (id: IMedia['id']) => {
    const list = [...medias];
    const indexToRemove = list.findIndex((item) => item.id === id);

    if (indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
    }

    setMedias(list);
  };

  const updateMedia = (files: IMedia[], id: IMedia['id']) => {
    const list = [...medias];
    const indexToUpdate = list.findIndex((item) => item.id === id);

    if (indexToUpdate !== -1) {
      list.splice(indexToUpdate, 1);
      list.splice(indexToUpdate, 0, ...files);
    }
    setMedias(list);
  };

  return (
    <div className={scss.manyMediaContainer} data-testid="manyMediaInputs">
      {medias.map((media) => (
        <MediaGroup
          key={media.id}
          media={media}
          onImageChange={updateMedia}
          onRemove={removeMedia}
        />
      ))}
      <InputMedia onChange={addMedia} />
    </div>
  );
}

export default MediaInputs;

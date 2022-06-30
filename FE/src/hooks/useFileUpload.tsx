import React from 'react';
import { useMutation } from 'react-query';

import { postImage } from '@apis/image';

const FORM_DATA_KEY = 'files';

export const useFileUpload = (
  allowedFileTypes: string[],
  allowedFileSize = 400 * 1024,
) => {
  const { isLoading, mutateAsync } = useMutation(
    ['fileUpload'],
    (formData: FormData) => postImage(formData),
  );

  const uploadFromInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    if (!target.files) {
      return undefined;
    }

    const filteredFiles = filterByTypeAndSize(
      target.files,
      allowedFileTypes,
      allowedFileSize,
    );

    target.value = '';

    // 업로드
    const formData = toFormData(filteredFiles);
    const imageInfoArr = await mutateAsync(formData);
    return imageInfoArr;
  };

  // 로딩 상태와 uploadFromInput 반환
  return { isLoading, uploadFromInput };
};

const filterByTypeAndSize = (
  fileList: FileList,
  fileTypes: string[],
  fileSize: number,
) => {
  const files: File[] = [];

  Array.prototype.forEach.call(fileList, (file: File) => {
    if (fileTypes.includes(file.type) && file.size <= fileSize) {
      files.push(file);
    }
  });

  return files;
};

const toFormData = (files: File[]) => {
  const formData = new FormData();
  files.forEach(file => {
    formData.append(FORM_DATA_KEY, file);
  });
  return formData;
};

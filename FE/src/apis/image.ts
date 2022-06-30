import { ACCESS_TOKEN } from '@constants/cookie';
import { getCookie } from '@utils/cookie';

interface PostImageResponse {
  filename: string;
  imageUrl: string;
}

// Content-Type 은 FormData 가 알아서 바꾸기 때문에 적지 않음.
export const postImage = async (
  formData: FormData,
): Promise<PostImageResponse[]> => {
  const response = await fetch(`${process.env.TEAM30_FILE_UPLOAD_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getCookie(ACCESS_TOKEN)}`,
    },
    body: formData,
  });
  const imageInfoArr = await response.json();

  // TODO: 에러핸들링

  return imageInfoArr;
};

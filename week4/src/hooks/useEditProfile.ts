import { useState } from 'react';
import { putUserInfo } from '@api/user';
import { UserInfoData } from '@type/user';

const useEditProfile = () => {
  const [newPassword, setNewPassword] = useState<string>('');
  const [newHobby, setNewHobby] = useState<string>('');

  const handleUpdateProfile = async () => {
    if (!newPassword && !newHobby) {
      alert('변경할 정보를 입력해주세요.');
      return;
    }

    const data = {} as UserInfoData;
    if (newPassword) data.password = newPassword;
    if (newHobby) data.hobby = newHobby;

    try {
      await putUserInfo(data);
      alert('정보 수정에 성공했습니다.');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return {
    newPassword,
    setNewPassword,
    newHobby,
    setNewHobby,
    handleUpdateProfile,
  };
};

export default useEditProfile;

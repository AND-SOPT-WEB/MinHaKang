import { useState } from 'react';
import { putUserInfo } from '@api/user';
import { UserInfoData } from '@type/user';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/messages';

const useEditProfile = () => {
  const [newPassword, setNewPassword] = useState('');
  const [newHobby, setNewHobby] = useState('');

  const handleUpdateProfile = async () => {
    if (!newPassword && !newHobby) {
      alert(ERROR_MESSAGE.UPDATE_INFO_REQUIRED);
      return;
    }

    const data = {} as UserInfoData;
    if (newPassword) data.password = newPassword;
    if (newHobby) data.hobby = newHobby;

    try {
      await putUserInfo(data);
      alert(SUCCESS_MESSAGE.UPDATE_PROFILE);
    } catch (error) {
      alert((error as Error).message);
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

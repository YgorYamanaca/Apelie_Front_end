import React, { ChangeEvent, useCallback } from 'react';
import { useQuery } from 'react-query';
import ApelieInputField from '@/components/commons/ApelieInputField';
import ApeliePageTitle from '@/components/commons/ApeliePageTitle';
import ApelieSelectBox from '@/components/commons/ApelieSelectBox';
import ApelieUploadPhoto from '@/components/commons/ApelieUploadPhoto';
import { getStoreCategorys } from '@/services/store';
import { IFirstRegister, IStoreForm } from '@/types/interfaces/interface-store';
import handleChange from '@/utils/formUtils';
import InitialRegisterStyle from './styles';
import ApelieLoadingSpinner from '@/components/commons/ApelieLoadingSpinner';

const InitialRegister: React.VoidFunctionComponent<IStoreForm<IFirstRegister>> = ({
  formTitle = 'Cadastro Inicial da Loja',
  registerStoreRequestValue,
  changeStoreRequestFunction,
}) => {
  const categoryResult = useQuery(
    'getStoreCategorys',
    getStoreCategorys,
    {
      select: (data) => (data?.data as string[])?.map((category) => ({ label: category, value: category }
      )),
    },
  );

  const handleUploadStoreImage = useCallback(
    (logoImage: string) => {
      changeStoreRequestFunction({
        ...registerStoreRequestValue,
        logoImage,
      });
    },
    [registerStoreRequestValue],
  );

  return (
    <InitialRegisterStyle.Container>
      <ApeliePageTitle>
        {formTitle}
      </ApeliePageTitle>
      <div id="content">
        {categoryResult.isSuccess ? (
          <>
            <div id="store-logo-image-content">
              <ApelieUploadPhoto
                selectedPhotoKey="logoImage"
                initialDefaultImage={registerStoreRequestValue.logoImage}
                onImageSelect={handleUploadStoreImage}
                textOfUploadDragArea="Faça o upload do logo da loja"
              />
            </div>
            <div id="store-detail-content">
              <ApelieInputField
                maxLength={35}
                placeholder="Nome da Loja"
                name="name"
                value={registerStoreRequestValue.name}
                onChange={
                      (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction)
                    }
              />
              <ApelieSelectBox
                placeholder="Escolha a categoria da loja..."
                type="MULTI"
                width="100%"
                selectedOption={registerStoreRequestValue.categories.map((category) => ({ label: category, value: category }))}
                isLoading={categoryResult.isLoading}
                isDisabled={categoryResult.isLoading || !categoryResult.isSuccess}
                onChange={(selectedValues) => changeStoreRequestFunction({
                  ...registerStoreRequestValue,
                  categories: [...selectedValues],
                })}
                options={categoryResult.data}
              />

              <ApelieInputField
                type="textarea"
                placeholder="Descrição da Loja"
                name="description"
                value={registerStoreRequestValue.description}
                onChange={
                      (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction)
                    }
                maxLength={275}
              />
            </div>
          </>
        ) : <ApelieLoadingSpinner size="35px" />}
      </div>
    </InitialRegisterStyle.Container>
  );
};

export default InitialRegister;
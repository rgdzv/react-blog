import { useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Avatar, Button } from 'shared/ui'
import styles from './ProfileEditHeader.module.scss'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import { getUserAuthData } from 'entities_/User'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { classNames } from 'shared/lib'
import { profileActions } from '../../model/slice/profileSlice'

export const ProfileEditHeader: FC = () => {
    const readOnly = useAppSelector(getProfileReadOnly)
    const authData = useAppSelector(getUserAuthData)
    const profileData = useAppSelector(getProfileData)
    const dispatch = useAppDispatch()
    const canEdit = profileData?.id === authData?.id
    const { t } = useTranslation(['profile'])
    const cancel = t('Отменить')
    const edit = readOnly === false ? t('Сохранить') : t('Редактировать')

    const onEdit = useCallback(() => {
        dispatch(profileActions.startEdit())
    }, [dispatch])

    const onCalcelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSaveEdit = useCallback(() => {}, [])

    const handleClickEdit = readOnly === false ? onSaveEdit : onEdit

    const canEditBlock = canEdit ? (
        <>
            {readOnly === false ? (
                <Button className='bordered' onClick={onCalcelEdit}>
                    {cancel}
                </Button>
            ) : null}
            <Avatar />
            <Button className='bordered' onClick={handleClickEdit}>
                {edit}
            </Button>
        </>
    ) : (
        <Avatar />
    )

    const classNameFinal = classNames(styles.profileHeader, {
        [styles.notEditable]: !canEdit
    })

    return <header className={classNameFinal}>{canEditBlock}</header>
}

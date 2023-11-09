import { useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Image } from 'shared/ui'
import styles from './ProfileEditHeader.module.scss'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import { classNames } from 'shared/lib'
import { profileActions } from '../../model/slice/profileSlice'

interface ProfileEditHeaderPropsInterface {
    canEdit: boolean
    avatar: string
    isLoading: boolean
}

export const ProfileEditHeader: FC<ProfileEditHeaderPropsInterface> = ({
    canEdit,
    avatar,
    isLoading
}) => {
    const readOnly = useAppSelector(getProfileReadOnly)
    const dispatch = useAppDispatch()
    const { t } = useTranslation(['profile'])

    const onEdit = useCallback(() => {
        dispatch(profileActions.startEdit())
    }, [dispatch])

    const onCalcelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSaveEdit = useCallback(() => {}, [])

    const cancel = t('Отменить')
    const edit = readOnly === false ? t('Сохранить') : t('Редактировать')
    const handleClickEdit = readOnly === false ? onSaveEdit : onEdit
    const editButtonClassName =
        readOnly !== false ? 'bordered' : 'bordered_green'
    const cancelButtonClassName =
        readOnly === false ? 'bordered_red' : 'bordered_red_invisible'
    const classNameFinal = classNames(styles.profileHeader, {
        [styles.notEditable]: !canEdit
    })

    const canEditBlock = canEdit ? (
        <>
            <Button className={cancelButtonClassName} onClick={onCalcelEdit}>
                {cancel}
            </Button>
            <Image
                avatar={avatar}
                className='avatar_profile'
                alt='avatar'
                isLoading={isLoading}
            />
            <Button className={editButtonClassName} onClick={handleClickEdit}>
                {edit}
            </Button>
        </>
    ) : (
        <Image
            avatar={avatar}
            className='avatar_profile'
            alt='avatar'
            isLoading={isLoading}
        />
    )

    return <header className={classNameFinal}>{canEditBlock}</header>
}

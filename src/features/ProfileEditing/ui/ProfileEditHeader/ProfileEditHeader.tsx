import { useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Avatar, Button } from 'shared/ui'
import styles from './ProfileEditHeader.module.scss'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import { classNames } from 'shared/lib'
import { profileActions } from '../../model/slice/profileSlice'

interface ProfileEditHeaderPropsInterface {
    canEdit: boolean
    avatar: string
}

export const ProfileEditHeader: FC<ProfileEditHeaderPropsInterface> = ({
    canEdit,
    avatar
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
    const classNameFinal = classNames(styles.profileHeader, {
        [styles.notEditable]: !canEdit
    })

    const canEditBlock = canEdit ? (
        <>
            {readOnly === false ? (
                <Button className='bordered_red' onClick={onCalcelEdit}>
                    {cancel}
                </Button>
            ) : null}
            <Avatar avatar={avatar} />
            <Button className={editButtonClassName} onClick={handleClickEdit}>
                {edit}
            </Button>
        </>
    ) : (
        <Avatar avatar={avatar} />
    )

    return <header className={classNameFinal}>{canEditBlock}</header>
}

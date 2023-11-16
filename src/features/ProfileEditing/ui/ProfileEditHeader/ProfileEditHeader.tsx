import { useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Image, Skeleton } from 'shared/ui'
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

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSaveEdit = useCallback(() => {}, [])

    const cancel = t('Отменить')
    const edit = !readOnly ? t('Сохранить') : t('Изменить')
    const handleClickEdit = !readOnly ? onSaveEdit : onEdit
    const editButtonClassName = readOnly ? 'bordered' : 'bordered_green'
    const cancelButtonClassName = !readOnly
        ? 'bordered_red'
        : 'bordered_red_invisible'
    const classNameFinal = classNames(styles.profileHeader, {
        [styles.notEditable]: !canEdit
    })

    const canEditBlock = canEdit ? (
        <>
            <div className={styles.left}>
                <Button
                    className={cancelButtonClassName}
                    onClick={onCancelEdit}
                >
                    {cancel}
                </Button>
            </div>
            <Image
                avatar={avatar}
                className='avatar_profile'
                alt='profile_avatar'
                isLoading={isLoading}
            />
            <div className={styles.right}>
                <Button
                    className={editButtonClassName}
                    onClick={handleClickEdit}
                >
                    {edit}
                </Button>
            </div>
        </>
    ) : (
        <Image
            avatar={avatar}
            className='avatar_profile'
            alt='avatar'
            isLoading={isLoading}
        />
    )

    const showContentCondition = isLoading ? <Skeleton /> : canEditBlock

    return <header className={classNameFinal}>{showContentCondition}</header>
}

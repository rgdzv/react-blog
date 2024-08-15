import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Image, Skeleton } from 'shared/ui'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { classNames } from 'shared/lib'
import { noavatar } from 'shared/assets'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import styles from './ProfileEditHeader.module.scss'

interface ProfileEditHeaderPropsInterface {
    canEdit: boolean
    src: string
    isLoading: boolean
    validationErrors: Record<string, string>
}

export const ProfileEditHeader: FC<ProfileEditHeaderPropsInterface> = memo(
    ({ canEdit, src, isLoading, validationErrors }) => {
        const readOnly = useAppSelector(getProfileReadOnly)
        const dispatch = useAppDispatch()
        const { t } = useTranslation('profile')

        const onEdit = useCallback(() => {
            dispatch(profileActions.startEdit())
        }, [dispatch])

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit())
        }, [dispatch])

        const onSaveEdit = useCallback(() => {
            void dispatch(updateProfileData())
        }, [dispatch])

        const cancel = t('Отменить')
        const edit = !readOnly ? t('Сохранить') : t('Изменить')

        const handleClickEdit = !readOnly ? onSaveEdit : onEdit

        const editButtonClassName = readOnly ? 'bordered' : 'bordered_green'
        const cancelButtonClassName = !readOnly
            ? 'bordered_red'
            : 'bordered_red_invisible'
        const classNameFinal = classNames(styles.profileHeader, {
            [styles.notEditable]: !canEdit || isLoading
        })

        const editDisabled = validationErrors !== undefined

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
                    src={src}
                    className='profile_avatar'
                    alt='profile avatar'
                    errorImage={noavatar}
                />
                <div className={styles.right}>
                    <Button
                        className={editButtonClassName}
                        onClick={handleClickEdit}
                        disabled={editDisabled}
                    >
                        {edit}
                    </Button>
                </div>
            </>
        ) : (
            <Image
                src={src}
                className='profile_avatar'
                alt='profile avatar'
                errorImage={noavatar}
            />
        )

        const showContentCondition = isLoading ? (
            <Skeleton type='profileHeader' />
        ) : (
            canEditBlock
        )

        return (
            <header className={classNameFinal}>{showContentCondition}</header>
        )
    }
)

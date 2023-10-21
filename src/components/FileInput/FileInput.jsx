import Button from '../Button/Button';
import Text from '../Text/Text'
import IconPlus from '../icons/IconPlus'

import styles from './style.css'

export default function FileInput({ label, onClick }) {
    return (
      <label className={styles.fileInput} >
        <Text type='label'  text={label} />
        <div>
            <div>
                <Text type='content' text='Загрузите изображение или перетащите файл сюда' />
                <Text type='description' text='Максимальный размер изображения 10 Мб.' />
                <Text type='description' text='Допустимые форматы: .jpeg .png .webp .svg' />
            </div>
            <input type="file" />
            <Button type='add' onClick={onClick} > <IconPlus/> Загрузить</Button>
        </div>
      </label>
    );
}
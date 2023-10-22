import { useReducer } from 'react'

import Text from '../Text/Text'
import IconPlus from '../icons/IconPlus'

import styles from './style.css'

export default function FileInput({ label, required=false }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_DROP_DEPTH':
        return { ...state, dropDepth: action.dropDepth }
      case 'SET_IN_DROP_ZONE':
        return { ...state, inDropZone: action.inDropZone };
      case 'ADD_FILE_TO_LIST':
        return { ...state, fileList: action.files };
      default:
        return state;
    }
  }

  const [data, dispatch] = useReducer(
    reducer, { dropDepth: 0, inDropZone: false, fileList: [] }
  )

  const handleDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
    
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth + 1 })
  }
  const handleDragLeave = e => {
    e.preventDefault()
    e.stopPropagation()
    
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth - 1 })
    if (data.dropDepth > 0) return
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
  }
  const handleDragOver = e => {
    e.preventDefault()
    e.stopPropagation()

    e.dataTransfer.dropEffect = 'copy';
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true })
  }
  const handleDrop = e => {
    e.preventDefault()
    e.stopPropagation()
    
    let files = []
    if (e.type === 'change') {
      files = [...e.target.files]
    } else {
      files = [...e.dataTransfer.files]
    }

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map(f => f.name)
      files = files.filter(f => !existingFiles.includes(f.name))
      console.log(files)

      dispatch({ type: 'ADD_FILE_TO_LIST', files });
      dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
      dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
    }
  }

  return (
    <div className={styles.fileInput} >
      <>
          <Text type='label' >{
              required
              ? <><span className={styles.requred} >* </span> {label} </>
              : <>{label}</>
          }</Text>
      </>
      <div className={`${styles.fileInputDnd} ${data.inDropZone & styles.insideDragArea}`}
        onDrop={e => handleDrop(e)}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
      >
          {
            data.fileList.length !== 0
              ? <Text type='content' style={{textAlign: 'start'}} >{data.fileList[0].name}</Text>
              : <>
                  <div className={styles.description} >
                    <Text type='content' >Загрузите изображение или перетащите файл сюда</Text>
                    <Text type='description' style={{textAlign: 'center'}} >Максимальный размер изображения 10 Мб</Text>
                    <Text type='description' style={{textAlign: 'center'}} >Допустимые форматы: .jpeg .png .webp .svg</Text>
                  </div>
              </>
          }
          <label className={styles.inputLabel} >
            <span><IconPlus/>Загрузить</span>
            <input type="file" className={styles.inputFile} onChange={handleDrop} />
          </label>
      </div>
    </div>
  );
}
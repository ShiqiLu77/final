import React from 'react';
import styles from './createNewGoal.module.scss';
const images = [
    'path/to/image1.png',
    'path/to/image2.png',
    'path/to/image3.png',
    'path/to/image4.png',
    'path/to/image5.png',
    'path/to/image6.png',
    'path/to/image7.png',
    'path/to/image8.png',
    'path/to/image9.png'
  ];
  

const CreateNewGoal: React.FC = () => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    return (
        <div className={styles['page-container']}>
            <div className={styles['create-new-goal']}>
                <div className={styles['top-bar']}>
                    <button className={styles['cancel-button']}>cancel</button>
                    <button className={styles['submit-button']}>submit</button>
                </div>
                <input className={styles['task-name-input']} placeholder="please enter the task name" />
                <div className={styles['target-time-div']}>
                    <div>
                        <span>target time: </span>
                        <input type="number" />
                        <span> hours</span>
                    </div>
                    <div>
                        <span>expected completion date: </span>
                        <input type="date" /> {/* Date picker */}
                    </div>
                </div>
                <div className={styles['select-logo']}>please select a logo</div>
                <div className={styles['image-selection']}>
                    {images.map((image, index) => (
                        <div className={styles['image-container']} key={index} onClick={() => setSelectedImage(image)}>
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className={selectedImage === image ? `${styles.image} ${styles.selected}` : styles.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreateNewGoal;

import styles from './goalCard.module.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Image from 'next/image';
import goalIcon from './goalicon.png';
import GoalDetailModal from '../goalDetail/goalDetail'; 


export default function goalCard() {

    const [isModalOpen, setIsModalOpen] = useState(false); // 添加状态

    const openModal = () => {
        setIsModalOpen(true); // 打开浮窗
    };

    const closeModal = () => {
        setIsModalOpen(false); // 关闭浮窗
    };

    return (
        <div className = {styles.goalCard}>
            <div className = {styles.icon}>
                <Image src={goalIcon} alt ="" width={200} height={180} />
            </div>

            <div className = {styles.goalDetails}>
                <div className = {styles.goalName}>Learning Java</div>
                <div className = {styles.goalProgress}>Progress: 50%</div>
                <div className = {styles.goalTime}>Estimated deadline：2021-12-31</div>
            </div>

            <div className = {styles.completedTime}>
                <div className = {styles.completedTimeText}>0 min</div>
            </div>

            <GoalDetailModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

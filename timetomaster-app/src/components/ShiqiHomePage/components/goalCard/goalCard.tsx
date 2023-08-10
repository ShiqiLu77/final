import styles from './goalCard.module.scss';

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Image from 'next/image';

import goalIcon from './goalicon.png';
import GoalDetailModal from '../editGoalModal/editGoalModal'; 

import Goal from '@/models/goal';

interface Props {
    goal: Goal;
    onGoalClick: (goal: Goal) => void;
  }

export default function goalCard(props: Props ) {

    const [isModalOpen, setIsModalOpen] = useState(false); // 添加状态

    const openModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        props.onGoalClick(props.goal);
        setIsModalOpen(true);
        event.stopPropagation();
    };

    const closeModal = () => {
        setIsModalOpen(false); 
    };

    return (
        <div className = {styles.goalCard} id = {props.goal._id} onClick = {openModal} >
            <div className = {styles.icon}>
                <Image src={goalIcon} alt ="" width={200} height={180} />
            </div>

            <div className = {styles.goalDetails}>
                <div className = {styles.goalName}>{props.goal.title}</div>
                <div className = {styles.goalProgress}>Progress: {props.goal.progress}</div>
                <div className = {styles.goalTime}>Deadline：{props.goal.expectedCompletionDate}</div>
            </div>

            <div className = {styles.completedTime}>
                <div className = {styles.completedTimeText}>0 min</div>
            </div>

            
        </div>
    );
}

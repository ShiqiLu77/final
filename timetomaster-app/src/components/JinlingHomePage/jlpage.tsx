
"use client";
import styles from './jlpage.module.scss';

import React, { useState, useEffect } from 'react';
import { createAchievement, getAllAchievement, searchAchievement, updateAchievement, deleteAchievement } from '../../services/achievement-service';
import { getAllGoal, createGoal, updateGoal, deleteGoal } from '../../services/goal-service';

import AchievementCard from './../JinlingHomePage/components/achievement-card/achievement-card';

import Header from './../ShiqiHomePage/components/header/header';
import Achievement from '@/models/achievement';
import Goal from '@/models/goal';

// const mockGoals: Goal[] = [
//   {
//     _id: 'goal1',
//     userId: '123456',
//     title: 'goal1 one',
//     totalHours: 2,
//     investedHours: 1,
//     progress: 1.0,
//     status: 'finish',
//     completionDate: '',
//     expectedCompletionDate: '',
//     createdAt: '',
//     updatedAt: new Date(), // 注意这里需要使用一个 Date 实例
//   },
// ];





export default function Home() {

  const [selectedTab, setSelectedTab] = useState('Achievement');


  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState<Achievement>();
  const [colorIndex, setColorIndex] = useState(0);
  const [isGray, setIsGray] = useState(false); // 将初始值设置为 false
  const [shouldColorFirstFive, setShouldColorFirstFive] = useState(false); // 新增状态
  //const isColored = 2 > 1;

  //const [goals, setGoals] = useState<Goal[]>(mockGoals); // 使用模拟数据
  const [completedGoalsCount, setCompletedGoalsCount] = useState<number>(0);

  const [goals, setGoals] = useState<Goal[]>([]); // 初始化为空数组

  const fetchAndSetGoals = async () => {
    try {
      const goals = await getAllGoal();
      setGoals(goals);
    } catch (error) {
      console.error('Error fetching goals:', error);
      // 处理错误，例如显示错误消息给用户
    }
  };

  useEffect(() => {
    fetchAndSetGoals();
  }, []); // 通过空数组作为依赖项，确保只在组件挂载时运行一次





  const handleGoalCompletion = async (completedGoalId: string) => {
    let updatedFirstEmptyAchievement = false; // 标志变量，用于检测是否已更新第一个空的 goalId

    const updatedAchievements = achievements.map(achievement => {
      if (!updatedFirstEmptyAchievement && achievement.goalId === '') {
        updatedFirstEmptyAchievement = true;
        return {
          ...achievement,
          goalId: completedGoalId,
        };
      }
      return achievement;
    });

    setAchievements(updatedAchievements);

    // 找到按顺序的第一个空字符的 achievement，然后更新它
    const firstEmptyAchievement = updatedAchievements.find(achievement => achievement.goalId === completedGoalId);
    if (firstEmptyAchievement && !firstEmptyAchievement.achieved) {
      try {
        const timestamp = new Date();
        const timeString = timestamp.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
        const achievedDate = timestamp.toLocaleDateString() + ' ' + timeString;

        await updateAchievement(firstEmptyAchievement._id, {
          goalId: completedGoalId, // 使用已完成目标的id
          description: firstEmptyAchievement.description,
          achieved: true,
          achievementDate: achievedDate,
        });
      } catch (error) {
        console.error('Error updating achievement:', error);
        // 添加处理错误的逻辑
      }
    }
  };









  const handleSave = async (newAchievement: Achievement) => {
    try {
      if (currentAchievement) {
        setAchievements(achievements.map((achievement) => {
          if (achievement._id === newAchievement._id) {
            return newAchievement;
          }
          return achievement;
        }));
        setEditModalOpen(false);

        // 在这里调用 updateAchievement 函数，并传递正确的 achieved 和 achievementDate 值
        await updateAchievement(newAchievement._id, {
          ...newAchievement,
          achieved: true, // 或根据情况设置正确的值
          achievementDate: new Date().toISOString(), // 或根据情况设置正确的日期
        });
      }
    } catch (error) {
      console.error('Error updating achievement:', error);
      // 添加处理错误的逻辑
    }
  };



  // Delete achievement
  const handleDelete = React.useCallback(async () => {
    if (!currentAchievement) {
      return;
    }
    try {
      await deleteAchievement(currentAchievement._id);
      setAchievements(achievements.filter((achievement) => achievement._id !== currentAchievement._id));
      setEditModalOpen(false);
    } catch (error) {
      console.error('Error deleting achievement:', error);
      // add code here to display an error message to the user
    }
  }, [currentAchievement, achievements]);

  // Fetch All achievements
  const colors = ["rgb(238,216,216)", "rgb(216,222,238)", "rgb(238,229,216)", "rgb(228,216,238)", "rgb(223,238,216)", "rgb(216,238,238)"];
  const cards = achievements.map((achievement, index) => {
    const isColored = index < completedGoalsCount; // 前 completedGoalsCount 个提醒设置为彩色，其余的保持灰色

    const cardColor = isColored ? colors[index] : '#dcdcdc';

    return (
      <AchievementCard
        key={achievement._id}
        achievement={achievement}

        color={cardColor}
        isColored={isColored}
        shouldColorFirstFive={shouldColorFirstFive}
        index={index}
        goalId={achievement.goalId} // 将 goalId 传递给 AchievementCard 组件
        handleGoalCompletion={handleGoalCompletion} // 传递 handleGoalCompletion 函数给 AchievementCard

      />
    );
  });









  const [hasUpdatedColorsAndProperties, setHasUpdatedColorsAndProperties] = useState(false);



  // 定义更新提醒卡片颜色和属性的函数


  const updateAchievementColorsAndProperties = async () => {
    const completedGoalIds = goals.filter(goal => goal.progress === 1.0).map(goal => goal._id);
    setCompletedGoalsCount(completedGoalIds.length);

    const updatedAchievements = achievements.map(achievement => {
      const isColored = completedGoalIds.includes(achievement.goalId);
      const cardColor = isColored ? colors[completedGoalIds.indexOf(achievement.goalId)] : '#dcdcdc';
      const timestamp = new Date();
      const timeString = timestamp.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
      const achievedDate = timestamp.toLocaleDateString() + ' ' + timeString;

      if (isColored && !achievement.achieved) {
        const associatedGoal = goals.find(goal => goal._id === achievement.goalId);
        const goalIdToUpdate = associatedGoal ? associatedGoal._id : '';

        return {
          ...achievement,
          isColored,
          cardColor,
          achieved: true,
          achievementDate: achievedDate,
          goalId: goalIdToUpdate,
        };
      }

      return {
        ...achievement,
        isColored,
        cardColor,
      };
    });

    setAchievements(updatedAchievements);


    for (const updatedAchievement of updatedAchievements) {
      if (updatedAchievement.achieved && updatedAchievement.achievementDate) {
        await updateAchievement(updatedAchievement._id, {
          goalId: updatedAchievement.goalId,
          description: updatedAchievement.description,
          achieved: updatedAchievement.achieved,
          achievementDate: updatedAchievement.achievementDate,
        });
      }
    }
  };


  const fetchAndSetAchievements = async () => {
    try {
      const items = await getAllAchievement();
      setAchievements(items);
      setHasUpdatedColorsAndProperties(false); // 重置标记为未更新
    } catch (error) {
      console.error('Error fetching achievements:', error);
      // 处理错误，例如显示错误消息给用户
    }
  };

  useEffect(() => {
    if (!hasUpdatedColorsAndProperties) {
      //fetchAndSetGoals(); // 获取目标数据
      //updateAchievementColorsAndProperties();
      setHasUpdatedColorsAndProperties(true);
    }
    updateAchievementColorsAndProperties();
    fetchAndSetAchievements();
  }, [goals, completedGoalsCount, hasUpdatedColorsAndProperties]);












  return (
    <div className={styles.pageContainer}>
      <Header selectedTab={selectedTab} />

      <main className={styles.mainContent}>
        <div className={styles["grid-container"]}>
          
          <div className={styles["grid-achievements"]}>
            <div className={styles.bar}>
              <h1>Achievements</h1>
            </div>
            <div className={styles["achievement-container"]}>
              {cards}
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className={styles.footContent}>copyright@ 2023 northeastern university</div>
      </footer>

    </div>

  );
}


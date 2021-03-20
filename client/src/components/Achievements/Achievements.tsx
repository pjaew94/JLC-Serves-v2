import { FC } from "react";
import { Paragraph } from "../../globalStyles";
import { AchievementsPageContainer, AchievementsFlexContainer, AchievementsHeading1 } from './Achievements.elements';

interface InterfaceAchievementCard {
  number: string,
  text: string
}
const AchievementCard: FC<InterfaceAchievementCard> = ({number, text}) => {
  return (
    <AchievementsFlexContainer>
      <AchievementsHeading1>{number}</AchievementsHeading1>
      <Paragraph>{text}</Paragraph>
    </AchievementsFlexContainer>
  )
}

const Achievements: FC = () => {

  const achievements = [
    {
      number: "3600+",
      text: "Meals and Beverages"
    },
    {
      number: "500+",
      text: "Shoes and Boots"
    },
    {
      number: "100+",
      text: "Sleeping Bags"
    },
    {
      number: "300+",
      text: "Toiletries"
    }
  ]
  return <AchievementsPageContainer>
    {achievements.map((item, i) => {
      return <AchievementCard number={item.number} text={item.text} key={i} />
    })}
  </AchievementsPageContainer>
};

export default Achievements;
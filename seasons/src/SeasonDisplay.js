import './SeasonDisplay.css';
import React from 'react';
import Clock from './Clock';

// 組件
const SeasonDisplay = (props) => {
  console.log('1', props);
  const season = getSeason(props.lat, new Date().getMonth());
  console.log('3', season);
  const { text, iconName } = seasonConfig[season];
  // const text = season === 'Winter' ? 'Burr, it is chilly' : 'Let hit the beach';
  // const icon = season === 'Winter' ? 'snowflake' : 'sun';
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
      <Clock />
    </div>
  );
};

// 夏天和冬天要顯示的文字和圖案
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake'
  }
};

// 3 ~ 8 月，北半球是夏天，南半球是冬天
const getSeason = (lat, month) => {
  console.log('2', lat, month);
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

export default SeasonDisplay;

// utils/filterRobots.js
export const filterRobots = (robots, searchField='') => {
    return robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };
  
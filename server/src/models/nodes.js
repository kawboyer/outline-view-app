module.exports = (sequelize, DataTypes) =>
sequelize.define('Nodes', {
  node_range_start: DataTypes.INT,
  node_range_end: DataTypes.INT
});
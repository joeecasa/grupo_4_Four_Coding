module.exports = (sequelize, dataTypes) => {
    const alias = "Line",//// el alias es el nombre del modelo y se crea en singular y mayuscula
        cols = {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            created_at: {
                field:"created_at",// tiraba error entonces le pusimos el campo field
                type: dataTypes.DATE,
                allowNull: true
            },
            updated_at: {
                field:"updated_at",
                type: dataTypes.DATE,
                allowNull: true,
            },
            name: {
                type: dataTypes.STRING(45),
                allowNull: false,
                unique: true
            }
        }
        let config = {
            timestamps : true,
            underscored : true, // tiraba error entonces pusimos estas dos cosas en config
            tableName : "lines"
                
        }

const Line = sequelize.define(alias,cols,config)

Line.associate = function(models){
    Line.hasMany(models.Product,
        {
            as : "productos",
            foreignKey : "line_id"
        })
}

    return Line;
}
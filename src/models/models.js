const sequelize = require('../db')
const {DataTypes,Model, Op} = require('sequelize')


class User extends Model {}
class Basket extends Model {}
class BasketDevice extends Model {}
class Brand extends Model {}
class Device extends Model {}
class DeviceInfo extends Model {}
class Rating extends Model {}
class Type extends Model {}
class TypeBrand extends Model {}

User.init('user',{
    id:{type : DataTypes.INTEGER , primaryKey:true ,autoIncrement:true},
    email:{type:DataTypes.STRING , unique: true},
    password:{type:DataTypes.STRING },
    role:{type:DataTypes.STRING , defaultValue: 'USER'}
})
Basket.init('basket',{
    id:{type : DataTypes.INTEGER , primaryKey:true ,autoIncrement:true}
})
BasketDevice.init('basket_device',{
    id:{type : DataTypes.INTEGER , primaryKey:true ,autoIncrement:true}
})
Device.init('device',{
    id:{type : DataTypes.INTEGER , primaryKey:true ,autoIncrement:true},
    name:{type : DataTypes.STRING , unique:true ,allowNull:false},
    price:{type : DataTypes.INTEGER , allowNull:false},
    rating:{type : DataTypes.INTEGER , defaultValue:0},
    img:{type : DataTypes.INTEGER , allowNull:false}
})
Type.init('type',{
    id:{type : DataTypes.INTEGER , primaryKey:true ,autoIncrement:true},
    name:{type : DataTypes.STRING , unique:true ,allowNull:false},
})
Brand.init('brand',{
    id:{type : DataTypes.INTEGER , primaryKey:true ,autoIncrement:true},
    name:{type : DataTypes.STRING , unique:true ,allowNull:false},
})
Rating.init('rating',{
    id:{type : DataTypes.INTEGER , primaryKey:true ,autoIncrement:true},
    name:{type : DataTypes.STRING  ,allowNull:false},
})
DeviceInfo.init('device_info',{
    id:{type : DataTypes.INTEGER , primaryKey:true ,autoIncrement:true},
    title:{type : DataTypes.STRING ,allowNull:false},
    description:{type : DataTypes.STRING ,allowNull:false},
})
TypeBrand.init('type_brand',{
    id:{type : DataTypes.INTEGER , primaryKey:true ,autoIncrement:true},
})



User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, { through: TypeBrand})
Brand.belongsToMany(Type, { through: TypeBrand})

!(async function () {
    await sequelize.sync();
})();

module.exports = {
    User,
    Basket,
    Brand,
    BasketDevice,
    Device,
    DeviceInfo,
    Rating,
    Type,
    TypeBrand,
    sequelize,
    Op   
}




















